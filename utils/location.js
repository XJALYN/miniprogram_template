var QQMapWX = require('../plugs/qqmap-wx-jssdk/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({
  key: 'OLRBZ-ZTBHJ-24TF4-KTVYL-BSGMS-CQFZC'
});

module.exports = {
    /**
     * 将坐标转换为地理描述信息
     * 
     * @param {Object} options 参数和返回值包含在一起
     */
  reverseGeocoder(options){
    qqmapsdk.reverseGeocoder(options)
  }

}