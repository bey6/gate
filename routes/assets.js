const router = require('koa-router')()
const fs = require('fs')

router.prefix('/assets')

router.get('/', async (ctx, next) => {
    let assets = []
    try {
        const files = fs.readdirSync('public')
        files.forEach(file => {
            // const fileState = fs.statSync('public'+file)
            // fileState.isDirectory()
            console.log(file)
            assets.push(file)
        })
        await ctx.render('assets/index.pug', {
            title: 'assets',
            active: 'assets',
            files: assets
        })
    } catch (error) {
        ctx.body = error
    }
})

module.exports = router
