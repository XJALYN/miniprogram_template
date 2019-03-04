
const author = require("./author.js")
const SignHeader = require("./signHeader.js")
console.log(SignHeader)


// 1.检查网络状态
const checkNetStatus= function(res){
  if (res.statusCode == 200) {
    return true
  } else {
    wx.$showToast(res.errMsg)
    return false
  }
}

// 2.处理登录异常
const handleLoginError=function(res){
  //console.log(res)
  if (res.code == 1000) {
    author.login(e => {
      if (e.code == 0) {
        wx.$db.token = e.data.access_token
      }
    })
    return true
  } else {
    return false
  }
}

// 请求数据
const request = function(method, url, params = {}){
  var token = wx.$db.token
  var data = params
  if (data == null) {
    data = {}
  }
  let header = SignHeader(params, token)


  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      header: header,
      method: method,
      data: data,
      dataType: "json",
      success: (data) => {
        if (checkNetStatus(data)) {
          let res = data.data
          if (!handleLoginError(res)) {
            if (res.code == 0) {
              resolve(res)
            } else {
              wx.$showToast(res.message)
              reject(data)
            }
          }else{
            reject(data)
          }
        }else{
          reject(data)
        }
      },
      fail: function (err) {
    
        wx.$showToast(err.errMsg)
        reject(err)
      }
    })
  })
}

// 4.拼接路径
const generateMatchApi = function(api, querys) {
  // 第一步查找路径中的参数名
  var matchs = api.match(/\{[^\}]+\}/g);
  if (matchs == null) {
    return api
  }
  var params = matchs.map(res => {
    return res.replace(/\{/g, '').replace(/\}/g, '')
  })

  var result = api
  // 替换掉路径中参数名
  for (var i in matchs) {
    var key = params[i]
    if (querys == null) {
      console.log("querys为空")
      return api
    }
    var value = querys[key]
    if (value == null) {
      console.log("api:" + api + "参数:" + key + "缺失")
    }
    result = result.replace(new RegExp(matchs[i], "g"), value)
  }
  return result
}


module.exports = {


  // 检查网路状态
  // get 请求
  get(api,params,querys){
    var path = generateMatchApi(api,querys)
    return request("GET",path,params)
  },


  // post 请求
  post(api, params, querys){
    var path = generateMatchApi(api, querys)
    return request("POST", path, params)
  },
  // PUT 请求
  put(api, params, querys){
    var path = generateMatchApi(api, querys)
    return request("PUT", path, params)
  },

  // 删除操作
  delete(api, params, querys){
    var path = generateMatchApi(api, querys)
    return request("DELETE", path, params)
  },

  // 上传文件
  upload(url,filePath,params={}){
    var token = wx.$db.token
    let header = SignHeader({}, token)
    header['Content-type'] = 'multipart/form-data'

    if(filePath==null||filePath==''){
       wx.showToast({
         title: 'filePath is Null',
         icon:"none",
         duration:1500
       })
       return
    }
    if(url==null||url==''){
      wx.showToast({
        title: 'url is Null or empty',
        icon: "none",
        duration: 1500
      })
      return
    }

    return new Promise(function (resolve, reject){
      wx.uploadFile({
        url: url, 
        filePath: filePath,
        name: 'file',
        header: header,
        formData: params,
        success: function (data) {
          console.log(data)
          if (checkNetStatus(data)) {
            let res = JSON.parse(data.data) 
            if (!handleLoginError(res)) {
              if (res.code == 0) {
                console.log("----")
               
                resolve(res)
              } else {
                wx.$showToast(res.message)
                reject(data)
              }
            }else{
              reject(data)
            }
          }else{
            reject(data)
          }
       
        },fail:function(err){
           reject(err)
        }
      })
    })
  }
}