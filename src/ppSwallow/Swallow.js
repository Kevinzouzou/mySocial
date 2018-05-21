import util from './util.js'
class Swallow {
  constructor(config) {
    this.config = config;
  }


  //普通请求公共方法
  baseHttp(url, params, options,method) {
    let defaultRequest =this.config.getRequest();
    let request = util.copyObject(defaultRequest,options) ;
    request.url = this.config.baseUrl + url;
    request.data = params;
    request.method = method;
    request.config = this.config;
    return this._wxHttp(request)
  }

  /**
   * 普通http请求
   */

  _wxHttp(options) {
    return new Promise((resolve, reject) => {
      let params = {
        method: null,
        url: null,
        data: null,
        header: {},
        success(res) {
          options.config.response(res,resolve,reject)
       },
        fail(res) {
         options.config.response(res,resolve,reject);
        }
      };
      if (options) params = Object.assign(params, options);
      wx.request(params);
    });

  }

  /**
   * 上传文件
   */

  _wxUploadFile(options) {
    return new Promise((resolve, reject) => {
      let params = {
        url: '',
        filePath: '',
        name: '',
        formData: {},
        header: {'content-type': 'multipart/form-data'},
        success: function (res) {
          resolve(res)
        },
        fail: function (res) {
          reject(res);
        },
      };
      if (options) params = Object.assign(params, options);
      const uploadTask = wx.uploadFile(params);
    });
  }



}


module.exports = Swallow;
