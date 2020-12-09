const router = require('koa-router')()
const fs = require('fs')
const showdown = require('showdown')
const converter = new showdown.Converter()

router.prefix('/jam')

router.get('/', async (ctx, next) => {
    let data = fs.readFileSync('articles/jam.md')
    let html = converter.makeHtml(data.toString())
    await ctx.render('jam', {
        title: 'jam',
        active: 'jam',
        article: html,
    })
})

module.exports = router
