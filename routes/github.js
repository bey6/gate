const router = require('koa-router')()
const db = require('../service/nedb')
const axios = require('axios')
const querystring = require('querystring')

router.prefix('/github')

const client = {
    client_id: 'fca02f8cd2a743e009fa',
    client_secret: '57912b61580293f5fd580c3271b1acb8e9f5d678',
    access_token_uri: 'https://github.com/login/oauth/access_token',
    authorization_uri: 'https://github.com/login/oauth/authorize',
    user_uri: 'https://api.github.com/user',
    redirect_uri: 'http://localhost:3000/github/callback',
    scopes: ['notifications', 'gist']
}

router.get('/login', async ctx => {
    let path = `${client.authorization_uri}?client_id=${client.client_id}`
    // 转发到授权服务器
    ctx.redirect(path)
})

router.post('/target', async (ctx, next) => {
    try {
        if (!ctx.request.body.alias) ctx.body = 'Origin cannot be alias'
        else if (!ctx.request.body.origin) ctx.body = 'Origin cannot be empty'
        else if (!ctx.request.body.version) ctx.body = 'Version cannot be empty'
        else {
            let res = await db.insert({
                alias: ctx.request.body.alias,
                origin: ctx.request.body.origin,
                // action: ctx.request.body.action,
                version: ctx.request.body.version,
            })
            ctx.redirect('/mapping')
        }
    } catch (error) {
        ctx.body = error
    }
})

router.get('/callback', async (ctx, next) => {
    try {
        const code = ctx.query.code
        const token_res = await axios.post(client.access_token_uri, {
            client_id: client.client_id,
            client_secret: client.client_secret,
            code: code,
        })
        // token
        const access_token = querystring.parse(token_res.data).access_token
        // userinfo
        const use_res = await axios.get(`${client.user_uri}?access_token=${access_token}`)
        ctx.redirect('/')
    } catch (error) {
        ctx.body = error
    }
})

module.exports = router
