const router = require('koa-router')()
const db = require('../db/nedb')

router.prefix('/mapping')

router.post('/target', async (ctx, next) => {
  try {
    if (!ctx.request.body.origin) ctx.body = 'Origin 不可为空！'
    else if (!ctx.request.body.action) ctx.body = 'Action 不可为空！'
    else if (!ctx.request.body.version) ctx.body = 'Version 不可为空！'
    else {
      let res = await db.insert({
        targetOrigin: ctx.request.body.origin,
        targetAction: ctx.request.body.action,
        targetVersion: ctx.request.body.version,
      })
      ctx.redirect('/mapping')
    }
  } catch (error) {
    ctx.body = error
  }
})

router.get('/', async (ctx, next) => {
  try {
    let res = await db.query()
    await ctx.render('mapping', {
      title: 'mapping',
      list: res.map((r, idx) => ({ ...r, key: idx + 1 })),
    })
  } catch (error) {
    ctx.body = error
  }
})

module.exports = router
