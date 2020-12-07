module.exports = (router) => {
  router.get('/', async function (ctx, next) {
    await ctx.render('index.hbs', {
      title: '欢迎使用 Torii!',
    })
  })
}