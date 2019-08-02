const domain = 'http://ncds.local.test/weapi/';
const interfaces = {
  // 携带手机号请求验证码
  getCode: domain + 'verificationPhone',
  // 微信登录
  welogin: domain + 'welogin',
  
  
};

module.exports = interfaces;
