const router = require('koa-router')()
const fs = require('fs')

router.prefix('/editor')

router.get('/', async (ctx, next) => {
  await ctx.render('editor', {
    title: '在线编辑',
    active: 'editor',
  })
})

module.exports = router
