const DataStore = require('nedb')

const db = new DataStore({
  filename: 'data/nedb.db',
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
