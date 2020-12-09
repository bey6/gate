# Jam

[see jam](172.30.199.153:6600)

![jam](http://172.30.199.153:6600/jam.svg)

A nodejs website development framework base on Koa, it give you a batter development experience about Hot-Reload, Mustache template engine, ESlint and Prettier.

# Dependencies

- [koa](https://github.com/koajs/koa)
- [mustache](https://github.com/janl/mustache.js/)
- [nodemon](https://github.com/remy/nodemon)
- [pm2](https://github.com/Unitech/pm2)

# Development

The jam use `mustache` template engine, but you can just write html as usual you do. Use `__slot xx` you can make **partial page**, the slot let the html insert at target position just as its name.

let's see an example here:

## view

```html
// about.html layout views/__layout.html __slot assets __slot content
<article>
  <img src="/jam.svg" width="256" height="256" alt="" />
  <section>I am a developer that use javascript to write code.</section>
  <ul>
    {{ #list }}
    <li>{{ id }}. {{ name }}</li>
    {{ /list }}
  </ul>
  <section>Mail to me if you like me.</section>
</article>
```

- layout: what layout to use this page
- **slot: partial code, the html code below `**slot`above the next`\_\_slot`will insert into the`layout.html` page where the same slot name at.

this is the layout.html code below:

```html
// layout.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{title}}</title>
    <link rel="stylesheet" href="/css/layout.css" />
    __slot assets
  </head>

  <body>
    <header>
      <a href="/">首页</a>
      <a href="/about">关于</a>
    </header>
    __slot content
  </body>
</html>
```

## route

it's easy to write a jam route like this:

```js
const jam = require('../jam')

jam.get('/about', async (ctx, next) => {
  ctx.body = jam.render('views/about.html', {
    title: 'About',
    list: [
      { key: '0', name: 'koa' },
      { key: '1', name: 'nodemon' },
      { key: '2', name: 'mustache' },
    ],
    id: function () {
      return this.key - 0 + 1
    },
  })
})
```
