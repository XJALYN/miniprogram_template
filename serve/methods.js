var Api = require("api")
var Upload = require("request").upload
const Post = require("request").post

module.exports = {

  // 上传图片的路径
  uploadPath: wx.$db.serverUrl + Api.upload,

  // 获取开发的token
  getDevelopToken(params){
    return Post(wx.$db.serverUrl + Api.getDevelopToken,params)
  },

  // 上传接口接口 
  upload(filePath,params) {
    return Upload(wx.$db.serverUrl + Api.upload, filePath, params)
  },

  // 获取城市列表
  getCities(params){
    return Post(wx.$db.serverUrl + Api.getCities, params)
  },
  
  // 获取用户信息
  getUserProfile(params){
    return Post(wx.$db.serverUrl + Api.getUserProfile, params)
  },

  userProfileUpdate(params){
    return Post(wx.$db.serverUrl + Api.userProfileUpdate, params)
  },
  // 
  securityStatus(params){
    return Post(wx.$db.serverUrl + Api.securityStatus, params)
  },

  securityStatusUpdate(params){
    return Post(wx.$db.serverUrl + Api.securityStatusUpdate, params)
  },

  favoriteTeachers(params){
    return Post(wx.$db.serverUrl + Api.favoriteTeachers, params)
  },
  favoriteTeacherDelete(params){
    return Post(wx.$db.serverUrl + Api.favoriteTeacherDelete, params)
  },
  favoriteTeacherAdd(params){
    return Post(wx.$db.serverUrl + Api.favoriteTeacherAdd, params)
  },

  //-------3.课程列表-------------/
  courseList(params){
    return Post(wx.$db.serverUrl + Api.courseList, params)
  },

  courseMessagesSnapshot(params){
    return Post(wx.$db.serverUrl + Api.courseMessagesSnapshot,params)
  },
  courseMessages(params){
    return Post(wx.$db.serverUrl + Api.courseMessages, params)
  },

  courseDetail(params){
    return Post(wx.$db.serverUrl + Api.courseDetail, params)
  },
  
  
  courseLessons(params){
    return Post(wx.$db.serverUrl + Api.courseLessons, params)
  },

  courseFeedback(params){
    return Post(wx.$db.serverUrl + Api.courseFeedback, params)
  },
  courseException(params){
    return Post(wx.$db.serverUrl + Api.ccourseException, params)
  },


  // -------4.订单相关 ------------/
  orderCheckout(params){
    return Post(wx.$db.serverUrl + Api.orderCheckout, params)
  },
  
  orderAddressList(params){
    return Post(wx.$db.serverUrl + Api.orderAddressList, params)
  },

  orderCreate(params){
    return Post(wx.$db.serverUrl + Api.orderCreate, params)
  },

  orderList(params){
    return Post(wx.$db.serverUrl + Api.orderList, params)
  },

  orderDetail(params){
    return Post(wx.$db.serverUrl + Api.orderDetail, params)
  },

  orderPayment(params){
    return Post(wx.$db.serverUrl + Api.orderPayment, params)
  },
  orderCancle(params){
    return Post(wx.$db.serverUrl + Api.orderCancle, params)
  },
  orderRatings(params){
    return Post(wx.$db.serverUrl + Api.orderRatings, params)
  },

  // -------- 6.老师相关----------- /
  teachers(params){
    return Post(wx.$db.serverUrl + Api.teachers, params)
  },
  teacherDetail(params){
    return Post(wx.$db.serverUrl + Api.teacherDetail, params)
  },
  teacherRatingScores(params){
    return Post(wx.$db.serverUrl + Api.teacherRatingScores, params)
  },
  teacherRatings(params){
    return Post(wx.$db.serverUrl + Api.teacherRatings, params)
  },
  teacherSubjects(params){
    return Post(wx.$db.serverUrl + Api.teacherSubjects, params)
  },
  teacherDates(params){
    return Post(wx.$db.serverUrl + Api.teacherDates, params)
  },
  teacherTimes(params){
    return Post(wx.$db.serverUrl + Api.teacherTimes, params)
  },
  teacherTimeSave(params){
    return Post(wx.$db.serverUrl + Api.teacherTimeSave, params)
  },
  teacherTimeDelete(params){
    return Post(wx.$db.serverUrl + Api.teacherTimeDelete, params)
  },
  
  teacherPremium(params){
    return Post(wx.$db.serverUrl + Api.teacherPremium, params)
  },
  // --------6.老师相关-----------/



  // ------- 8.宣传--------------/
  banners(params){
    return Post(wx.$db.serverUrl + Api.banners, params)
  },
  
  // ---------10.统计------------/
  statisticCitys(params){
    return Post(wx.$db.serverUrl + Api.statisticCitys, params)
  },


  //---------13.公共接口 ----------/
  subjects(params){
    return Post(wx.$db.serverUrl + Api.subjects, params)
  },

  getCaptchas(params){
    return Post(wx.$db.serverUrl + Api.getCaptchas, params)
  },


 //---------14.支付 ----------/
  payWx(params){
    return Post(wx.$db.serverUrl + Api.payWx, params)
  },
  payWallet(params){
    return Post(wx.$db.serverUrl + Api.payWallet, params)
  },
  withdraw(params){
    return Post(wx.$db.serverUrl + Api.withdraw, params)
  },


// --------地址接口 ----------/
  getAddressList(params){
    return Post(wx.$db.serverUrl + Api.getAddressList, params)
  },
  addressAdd(params){
    return Post(wx.$db.serverUrl + Api.addressAdd, params)
  },
  addressUpdate(params){
    return Post(wx.$db.serverUrl + Api.addressUpdate, params)
  },
  addressDelete(params){
    return Post(wx.$db.serverUrl + Api.addressDelete, params)
  },
  addressDefault(params){
    return Post(wx.$db.serverUrl + Api.addressDefault, params)
  },
  // --------地址接口 ----------/



  //---------账户信息-----------/
  accounts(params){
    return Post(wx.$db.serverUrl + Api.accounts, params)
  },
  recharge(params){
    return Post(wx.$db.serverUrl + Api.recharge, params)
  },
  bills(params){
    return Post(wx.$db.serverUrl + Api.bills, params)
  },

  //---------认证-----------/
  certificationPhone(params){
    return Post(wx.$db.serverUrl + Api.certificationPhone, params)
  },

  certificationRealName(params){
    return Post(wx.$db.serverUrl + Api.certificationRealName, params)
  },
  certificationRealNameUpdate(params){
    return Post(wx.$db.serverUrl + Api.certificationRealNameUpdate, params)
  },
  
  certificationStatus(params){
    return Post(wx.$db.serverUrl + Api.certificationStatus, params)
  }

  

}