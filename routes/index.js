const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: '欢迎使用 Torii!',
  })
})

router.get('/string', async (ctx, next) => {
  await ctx.render('index', {
    title: 'String',
  })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
  }
})

module.exports = router
