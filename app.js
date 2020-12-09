const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')
const mapping = require('./routes/mapping')
const document = require('./routes/document')
const jam = require('./routes/jam')
const log = require('./routes/log')
const example = require('./routes/example')
const issue = require('./routes/issue')
const editor = require('./routes/editor')
const assets = require('./routes/assets')




const proxy = require('./routes/proxy')

// error handler
onerror(app)

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
)
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(
  views(__dirname + '/views', {
    extension: 'pug',
  })
)

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 本地路由
app.use(index.routes())
app.use(assets.routes())
app.use(users.routes())
app.use(mapping.routes())
app.use(document.routes())
app.use(jam.routes())
app.use(log.routes())
app.use(example.routes())
app.use(issue.routes())
app.use(editor.routes())

// 代理请求
app.use(proxy)

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
