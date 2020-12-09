const router = require('koa-router')()
const fs = require('fs')
const showdown = require('showdown')
const converter = new showdown.Converter()

router.prefix('/document')

router.get('/', async (ctx, next) => {
  let data = fs.readFileSync('articles/document.md')
  let html = converter.makeHtml(data.toString())
  await ctx.render('document', {
    title: 'document',
    active: 'document',
    article: html,
  })
})

module.exports = router
