const router = require('koa-router')()
const fs = require('fs')
const path = require('path')

router.prefix('/assets')

const extMapping = {
    '.html': 'img/HTML.png',
    '.css': 'img/CSS.png',
    '.js': 'img/JS.png',
    '.json': 'img/JSON.png',
}

function isImg(ext) {
    return ['.ico', '.png', '.jpg', '.jpeg'].includes(ext)
}

router.get('/', async (ctx, next) => {
    let assets = [],
        payload = ctx.query.path,
        pref = payload ? payload[0] === '/' ? payload : '/' + payload : ''
    try {
        const files = fs.readdirSync('public' + pref)
        files.forEach(file => {
            const fileState = fs.statSync('public' + pref + '/' + file)
            let ext = path.extname(file)
            let name = file, img = '', type = 'file'
            if (fileState.isDirectory()) {
                img = 'img/folder.png'
                type = 'folder'
            } else if (isImg(ext)) img = pref + '/' + file
            else img = extMapping[ext] ? extMapping[ext] : 'img/file.png'

            assets.push({
                name,
                img,
                type,
                prefix: pref
            })
        })
        console.log(pref)
        let arrPath = pref.split('/')
        console.log(arrPath)
        arrPath = arrPath.map((p, idx) => {
            if (idx === 0) {
                return {
                    path: '/assets',
                    text: 'assets'
                }
            } else {
                return {
                    path: '/assets?path=' + arrPath.slice(0, idx + 1).join('/'),
                    text: p
                }
            }
        })
        console.log(arrPath)
        await ctx.render('assets/index.pug', {
            title: 'assets',
            active: 'assets',
            files: assets,
            path: arrPath
        })
    } catch (error) {
        ctx.body = error
    }
})

module.exports = router
