/**
 * Created by xujie on 2018/2/16.
 */
module.exports = {
  testPhone(value) {
    return /^1[3|4|5|7|8][0-9]\d{4,8}$/.test(value)
  },
  testUsername(value) {
    return /^[a-zA-Z0-9_-]{4,16}$/.test(value)
  },

  testPassword(value) {
    return /([a-zA-Z0-9!@#$%^&*()_?<>{}]){6,15}/.test(value)
  },

  testEmail(value) {
    return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)
  },
  testMoney(value){
    return /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(value)
  },
  testEmptyByToast(value, msg) {
    if (value == '') {
      wx.showToast({
        title: msg,
      })
      return false
    }
    return true
  }
}