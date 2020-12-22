const router = require('koa-router')()
const db = require('../service/nedb')
const axios = require('axios')

router.get('/', async (ctx, next) => {
    try {
        let apps = []
        const remoteApps = await axios.post('http://localhost:3000/conf/api/values/GetTableSystemList', {
            name: '',
            environmentId: 'DEV',
            isEnable: 1
        })
        if (remoteApps.status === 200) {
            apps = remoteApps.data.data.map(app => ({
                name: app.SystemName,
                url: app.Url
            }))
        }

        let res = await db.queryAll({ _type: 'application' })
        apps = [...apps, ...res].map(app => ({
            ...app,
            logo: app.url.slice(app.url.length - 1) === '/' ? app.url + 'favicon.ico' : app.url + '/favicon.ico'
        }))

        await ctx.render('index', {
            title: 'Torii',
            bannerTitle: 'Welcome To Torii!',
            apps: apps
        })
    } catch (error) {
        ctx.body = error
    }
})

module.exports = router
