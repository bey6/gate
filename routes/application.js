const router = require('koa-router')()
const db = require('../service/nedb')

router.prefix('/application')

router.post('/', async (ctx, next) => {
    try {
        if (!ctx.request.body.name) ctx.body = '名称是必填项'
        else if (!ctx.request.body.url) ctx.body = '网址是必填项'
        else {
            let res = await db.insert({
                _type: 'application',
                name: ctx.request.body.name,
                url: ctx.request.body.url
            })
            ctx.redirect('/')
        }
    } catch (error) {
        ctx.body = error
    }
})

module.exports = router
