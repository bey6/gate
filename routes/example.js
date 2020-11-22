const router = require('koa-router')()

router.prefix('/examples')

router.get('/baidu', async (ctx, next) => {
  await ctx.render('examples/baidu.pug', {
    title: '百度图片',
  })
})

module.exports = router
