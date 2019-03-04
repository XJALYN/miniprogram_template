

var api = require("./api.js")
var SignHeader = require("./signHeader.js")
module.exports = {
  getUserInfo(successCallback,callback){
          wx.getUserInfo({
            success: res => {
              successCallback(res)
            },fail(){
              
          }
      })
  },

  login(callback){
    var that = this;
    wx.login({
      success: e => {
        that.getUserInfo(res => {
          var userInfo = res.userInfo
          if (userInfo != null) {
            var params = {
              'js_code': e.code,//e.code
              'iv': res.iv,
              'encrypted_data': res.encryptedData
            }
            // 调用登录接口
            that.requestLogin(params, callback)
          }
        }, callback)
      }
    })
  },

  // 请求登录
  requestLogin(params, callback){
    var url = wx.$db.serverUrl + api.login
    let header = SignHeader(params)
 
    // 请求用户登录数据
    wx.request({
      url: url,
      data: params,
      method: 'POST',
      dataType: 'JSON',
      header: header,
      success:  (res) => {
        console.log(res)
        if (res.statusCode != 200) {
           wx.$showToast(res.errMsg)
          return
        }
        var result = JSON.parse(res.data)
        if (result.code == 0) {
           callback(result)
        }else{
          wx.$showToast(result.message)
        }
      }, fail:(res)=> {
        console.log(res)
      }
    })
  }
  
}