const router = require('koa-router')()

router.prefix('/issue')

router.get('/', async (ctx, next) => {
  await ctx.render('issue/index.pug', {
    title: '计划',
    active: 'issue',
    issues: [
      {
        key: 0,
        desc: '支持从配置服务读取默认的映射信息',
        level: 1,
        class: 'list-group-item-danger',
        done: false,
      },
      {
        key: 1,
        desc: '映射页面支持下载客户端配置文件功能',
        level: 2,
        class: 'list-group-item-warning',
        done: false,
      },
      {
        key: 2,
        desc: '支持在线编辑文档、日志功能',
        level: 3,
        class: 'list-group-item-info',
        done: false,
      },
      {
        key: 3,
        desc: '一般优先级',
        level: 4,
        class: '',
        done: false,
      },
      {
        key: 4,
        desc: '完成的项目',
        level: 4,
        class: 'list-group-item-dark',
        done: true,
      },
    ],
  })
})

module.exports = router
