const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  let apps = [
    {
      name: '首页',
      url: 'http://xhdev.docimaxvip.com:6611/'
    },
    {
      name: '科研',
      url: 'http://localhost:3000/'
    },
    {
      name: '示踪',
      url: 'http://localhost:3000/'
    },
    {
      name: '统计',
      url: 'http://localhost:3000/'
    },
    {
      name: '查询',
      url: 'http://localhost:3000/'
    },
    {
      name: '质控',
      url: 'http://xhdev.docimaxvip.com:6684/'
    },
    {
      name: '配置',
      url: 'http://localhost:3000/'
    },
    {
      name: '权限',
      url: 'http://localhost:3000/'
    },
    {
      name: '病案',
      url: 'http://xhdev.docimaxvip.com:6640'
    },
    {
      name: 'gitlab',
      url: 'http://git.docimaxvip.com/'
    }
  ].map(app => ({
    ...app,
    logo: app.url.slice(app.url.length - 1) === '/' ? app.url + 'favicon.ico' : app.url + '/favicon.ico'
  }))

  await ctx.render('index', {
    title: 'Torii',
    bannerTitle: 'Welcome To Torii!',
    apps: apps
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
