const router = require('koa-router')()
const fs = require('fs')
const showdown = require('showdown')
const converter = new showdown.Converter()

router.prefix('/editor')

router.get('/', async (ctx, next) => {
  let wdData = fs.readFileSync('articles/document.md'),
    wdHtml = converter.makeHtml(wdData.toString()),
    logData = fs.readFileSync('articles/log.md'),
    logHtml = converter.makeHtml(logData.toString())
  await ctx.render('editor', {
    title: '在线编辑',
    active: 'editor',
    mds: [{
      key: 0,
      title: 'Torii 文档指南',
      filename: 'articles/document.md',
      content: wdData.toString(),
      html: wdHtml
    }, {
      key: 1,
      title: 'Torii update log',
      filename: 'articles/log.md',
      content: logData.toString(),
      html: logHtml
    }]
  })
})

router.post('/article', async (ctx, next) => {
  fs.writeFileSync(ctx.request.body.name, ctx.request.body.content)
  ctx.body = {
    code: 200,
    msg: '保存成功'
  }
})

module.exports = router
