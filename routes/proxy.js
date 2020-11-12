const axios = require('axios')

const json = {
  trace: {
    v1: 'http://xhdev.docimaxvip.com:6627/api/values/',
    v2:
      'http://xhdev.docimaxvip.com:6627/api/values/GetStorageManageList?type=2',
  },
  quality: {
    v1: 'http://xhdev.docimaxvip.com:8090/api/Quality/',
    v2:
      'http://xhdev.docimaxvip.com:8090/api/Quality/GetQualityPatientList?userid=&QualityStatus=0,1&Mrid=&PatientName=&MRType=1&DepartCode=&pageIndex=1&pageSize=20',
  },
}

module.exports = async (ctx, next) => {
  let path_part = ctx.path.slice(1).split('/')
  const url =
    json[path_part[0]][path_part[1]] + path_part[2] + '?' + ctx.querystring
  const res = await axios.get(url)
  if (res.status === 200) {
    ctx.body = res.data
  } else {
    ctx.body = {
      code: res.status,
      msg: res.message,
    }
  }
}
