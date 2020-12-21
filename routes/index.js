const router = require('koa-router')()
const db = require('../service/nedb')

router.get('/', async (ctx, next) => {
    let res = await db.queryAll({ _type: 'application' })
    console.log(res)
    let apps = res.map(app => ({
        ...app,
        logo: app.url.slice(app.url.length - 1) === '/' ? app.url + 'favicon.ico' : app.url + '/favicon.ico'
    }))

    await ctx.render('index', {
        title: 'Torii',
        bannerTitle: 'Welcome To Torii!',
        apps: apps
    })
})

module.exports = router
