const random = require("../utils/util.js").random
const MD5 = require("../utils/md5.js")
const app_key = "brgmcdko4zy0z053955xnyb7cktrm388"
const app_secret = "sxka6bomi564j8l6zou4z33el53dj9rt2dfjpu5ye7kg4jtvt8lfwgxrs9mzbtrx"

/**
 * desc  序列化编码
 * 规则: 1.key按照降序排列   
 *      2.拼接key和value key1value1key2value2
 *      3.全部转换为小写
 */ 
const serializeParams = (t = {}) => {
  const keys = Object.keys(t)
  const sortKeys = keys.sort(($1, $2) => { return $1 > $2 })
  let result = ''
  sortKeys.map(key => {
    let value = t[key]
    if (value instanceof Array) {
      value = value.join(',')
    }
    result += `${key}${value}`
  })
  return result.toLocaleLowerCase()
}

/**
 * 生成签名 
 */
const generateSign = (params, timestamp, nonce) => {
  const paramsSerializeString = serializeParams(params)
  return MD5(app_key + app_secret + timestamp + nonce + paramsSerializeString)
}

/**
 * desc 创建签名头
 * */ 
const createHeader = (params, token = '') => {
  const timestamp = parseInt((new Date()).valueOf() / 1000)
  const nonce = random(32)
  const sign = generateSign(params, timestamp, nonce)
  const header = {
    client_type: "4",
    signature: sign,
    timestamp: timestamp,//10位
    "Content-type": "application/json",
    Authorization: "Bearer " + token,
    app_key: app_key,
    nonce: nonce
  }
  return header
}

module.exports = createHeader