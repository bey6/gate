const DataStore = require('nedb')
const path = require('path')

const db = new DataStore({
  filename: path.join(__dirname, '../db/nedb.db'), // 建议写绝对路径，相对路径有时候会出现找不到文件存在哪的问题
  autoload: true,
})

module.exports = {
  query: (condition) => {
    return new Promise((res, rej) => {
      db.findOne(condition).exec((err, ret) => {
        if (err) rej(err)
        else res(ret)
      })
    })
  },
  queryAll: (condition) => {
    return new Promise((res, rej) => {
      db.find(condition).exec((err, ret) => {
        if (err) rej(err)
        else res(ret)
      })
    })
  },
  insert: (obj) => {
    return new Promise((res, rej) => {
      db.insert(obj, (err, ret) => {
        if (err) rej(err)
        else res(ret)
      })
    })
  },
}
