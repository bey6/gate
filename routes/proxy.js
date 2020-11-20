const axios = require('axios')
const db = require('../db/nedb')

function responseFormatter(response) {
  const codes = ['code', 'Code'],
    msgs = ['msg', 'Msg'],
    datas = ['data', 'ResponseContent', 'responseContent']
  res = { code: '', msg: '', data: '' }
  for (const c of codes) {
    if (response[c]) {
      res.code = response[c]
      break
    }
  }
  for (const m of msgs) {
    if (response[m]) {
      res.msg = response[m]
      break
    }
  }
  for (const d of datas) {
    if (response[d]) {
      res.data = response[d]
      break
    }
  }
  if (!res.code && !res.msg && !res.data) {
    res.code = '200'
    res.data = response
  }
  return res
}

module.exports = async (ctx, next) => {
  let path_part = ctx.path.slice(1).split('/')
  let targetProxy = await db.query({ alias: path_part[0] })
  path_part[0] = targetProxy.origin
  let url = path_part.join('/')
  const res = await axios.get(url)
  if (res.status === 200) {
    ctx.body = responseFormatter(res.data)
  } else {
    ctx.body = {
      code: res.status,
      msg: res.message,
    }
  }
}
