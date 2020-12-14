const router = require('koa-router')()
const db = require('../service/nedb')

router.prefix('/mapping')

router.post('/target', async (ctx, next) => {
  try {
    if (!ctx.request.body.alias) ctx.body = 'Origin cannot be alias'
    else if (!ctx.request.body.origin) ctx.body = 'Origin cannot be empty'
    else if (!ctx.request.body.version) ctx.body = 'Version cannot be empty'
    else {
      let res = await db.insert({
        _type: 'mapping',
        alias: ctx.request.body.alias,
        origin: ctx.request.body.origin,
        version: ctx.request.body.version,
      })
      ctx.redirect('/mapping')
    }
  } catch (error) {
    ctx.body = error
  }
})

router.get('/', async (ctx, next) => {
  try {
    let res = await db.queryAll({ _type: 'mapping' })
    await ctx.render('mapping', {
      title: 'mapping',
      active: 'mapping',
      list: res.map((r, idx) => ({ ...r, key: idx + 1 })),
    })
  } catch (error) {
    ctx.body = error
  }
})

module.exports = router
