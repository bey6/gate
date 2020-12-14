const router = require('koa-router')()
const db = require('../service/nedb')
const axios = require('axios')

router.prefix('/github')

const client = {
  clientId: 'fca02f8cd2a743e009fa',
  clientSecret: '57912b61580293f5fd580c3271b1acb8e9f5d678',
  accessTokenUri: 'https://github.com/login/oauth/access_token',
  authorizationUri: 'https://github.com/login/oauth/authorize',
  redirectUri: 'http://localhost:3000/github/callback',
  scopes: ['notifications', 'gist']
}

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
    const res = await axios.post(client.accessTokenUri, {
      client_id: client.clientId,
      client_secret: client.clientSecret,
      code: code,
      redirect_uri: client.redirectUri
    })
    ctx.body = res
  } catch (error) {
    ctx.body = error
  }
})

module.exports = router
