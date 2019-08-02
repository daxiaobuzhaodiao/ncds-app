const HOST = 'http://ncds.local.test/weapi/'
export const Request = function(options = {}) {
  const { url, method, data } = options;
  // 加载动画
  wx.showLoading({
    title: "加载中..."
  });
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      data,
      success: function(res) {
        wx.hideLoading();
        // 成功
        resolve(res)
      },
      fail: function(err) {
        // 失败
        wx.hideLoading();
        reject(err);
      },
    });
  });
};

export const Login = function(params = {}) {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        params.code = res.code;
        Request({
          url: HOST + 'welogin',
          method: 'post',
          data: params
        }).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        });
      }
    });
  });
};

export const AuthRequest = function() {

}

