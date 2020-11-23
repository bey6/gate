const router = require('koa-router')()
const fs = require('fs')
const showdown = require('showdown')
const converter = new showdown.Converter()

router.prefix('/log')

router.get('/', async (ctx, next) => {
  let data = fs.readFileSync('articles/log.md')
  let html = converter.makeHtml(data.toString())
  await ctx.render('log', {
    title: 'log',
    article: html,
  })
})

module.exports = router
