const router = require('koa-router')()
const db = require('../service/nedb')
const moment = require('moment')

router.prefix('/issue')

router.get('/', async (ctx, next) => {
  try {
    let res = await db.queryAll({ _type: 'issues' })
    await ctx.render('issue/index.pug', {
      title: '计划',
      active: 'issue',
      issues: res.sort((x, y) => x.date.localeCompare(y.date))
    })
  } catch (error) {
    ctx.body = error
  }
})

router.post('/', async (ctx, next) => {
  try {
    if (!ctx.request.body.alias) ctx.body = 'Alias cannot be empty'
    else if (!ctx.request.body.comment) ctx.body = 'Origin cannot be empty'

    let res = await db.insert({
      _type: 'issues',
      alias: ctx.request.body.alias,
      desc: ctx.request.body.comment,
      level: 1,
      class: 'list-group-item-danger',
      done: false,
      date: moment(new Date()).format('YYYY-MM-DD hh:mm:ss'),
    })
    ctx.redirect('/issue')
  } catch (error) {
    ctx.body = error
  }
})

module.exports = router
