const router = require('koa-router')()

router.prefix('/mapping')

router.get('/', async (ctx, next) => {
  await ctx.render('mapping')
})

module.exports = router
