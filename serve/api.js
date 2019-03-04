module.exports = {
  getDevelopToken:"/users/get_develop_token",

  // 2用户
  login:"/users/wx_mini_login", // 2.1.1 微信登录
  favoriteTeachers: "/users/favorite_teachers",// 2.2 收藏老师列表
  favoriteTeacherDelete:"/users/favorite_teachers/delete",// 2.3 取消老师收藏
  favoriteTeacherAdd:"/users/favorite_teachers/add", // 2.4 添加老师收藏
  getUserProfile: "/users/profile",// 2.6 获取
  userProfileUpdate: "/users/profile/update",// 2.7 用户信息修改
  upload:"/files/upload",
  securityStatus:"/users/security/status", // 2.8 安全状态
  securityStatusUpdate:"/users/security",  // 2.9 安全状态更新
  

  // 3.课程
  courseList:"/courses",// 3.1获取课程列表
  courseMessagesSnapshot:"/courses/messages/snapshot", //3.2 课程消息快照
  courseMessages:"/courses/messages", //3.3 课程消息
  courseFeedback: "/courses/lessons/feedback",  //3.4课程反馈
  courseDetail:"/courses/detail",// 查看课程详情
  courseLessons:"/courses/lessons",// 查看课时详情
  courseException:"/courses/lessons/exception",// 课程异常
  

  // 4.订单结算
  orderCheckout:"/orders/checkout",  // 4.1 订单结算
  orderAddressList:"/orders/checkout/addresses", // 4.2 订单选择地址列表
  orderCreate:"/orders/create",  // 4.3 创建订单
  orderPayment: "/orders/payment", // 4.4 订单支付
  orderList:"/orders",  // 4.5 订单列表
  orderRefund:"/orders/request_refund",// 4.6 退款
  orderDetail:"/orders/detail",  // 4.7 订单详情
  orderCancle:"/orders/cancel", // 4.8 订单取消
  orderRatings:"/orders/ratings",// 4.9 订单评价

  // 6. 老师相关
  teachers:"/teachers",  // 6.1 老师列表
  teacherDetail:"/teachers/detail",  // 6.2 获取老师详情
  teacherRatingScores:"/teachers/ratings/scores",  //6.3 获取老师评分数量
  teacherRatings:"/teachers/ratings", // 6.4 获取老师评价列表
  teacherSubjects:"/teachers/subjects", // 6.5 获取老师授课科目
  teacherDates:"/teachers/dates", // 6.6 获取老师授课日期
  teacherTimes:"/teachers/times", // 6.7 获取老师授课时间
  teacherTimeSave:"/teachers/times/save", // 6.8 保存老师授课日期
  teacherTimeDelete:"/teachers/times/delete", // 6.9 老师时间删除
  teacherPremium:"/teachers/premium", // 6.10 精品老师

  // 7. 宣传
  banners:"/advertising/banners", // 广告类型

  // 10.统计
  statisticCitys:"/statistics/cities",

  // 13 公共接口
  subjects: "/common/subjects",   // 13.1 获取科目列表
  getCities:"/common/cities",     // 13.4  获取城市列表
  getCaptchas:"/common/captchas", // 13.5 获取验证码

  // 14 支付
  payWx:"/payment/wx_mini_program",
  payWallet:"/payment/wallet",
  withdraw:"/accounts/withdraw",

  // 15.账户
  accounts:"/accounts", // 15.1 获取账户信息
  recharge:"/accounts/recharge",// 15.2 充值
  bills:"/accounts/bills",// 15.3 获取账单列表

  // 16 地址管理
  getAddressList: "/addresses",// 16.1 获取地址列表
  addressAdd: "/addresses/add", // 16.2 新增地址
  addressUpdate:"/addresses/update",// 16.3 地址更新
  addressDelete:"/addresses/delete",// 16.4 地址删除
  addressDefault:"/addresses/default",// 16.5 设置默认地址

  // 18 验证手机
  certificationPhone:"/certification/phone",// 验证手机
  certificationRealName:"/certification/real_name", // 获取
  certificationRealNameUpdate:"/certification/real_name/update",// 获取实名认证状态
  certificationStatus:"/certification/status",// 获取实名认证状态

}