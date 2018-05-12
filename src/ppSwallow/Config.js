import util from './util.js'

function Config() {
}

Config.prototype.baseUrl = "https://yqyy.vpclub.cn/";
// const baseUrl = "http://218.17.39.178:16009/";
// const baseUrl = "http://172.16.0.158:16009/";

Config.prototype.defaultHeader = {
  'content-type': 'application/json',// 默认值
};

Config.prototype.defaultRequest = {
  method: 'GET',
  url: null,
  data: null,
  header: {},
};

Config.prototype.getHeader = function () {
  let header = this.defaultHeader;
  header['Authorization'] = wx.getStorageSync('token')
  this.defaultRequest.header = header;
  return this.defaultRequest;
};

Config.prototype.response = function response(res,resolve,reject) {

  if (res.statusCode === 200) {
    // if (res.data.status === 200){
      resolve(res.data.operationResult)
    // }
   // let data = {status:res.data.status,message:res.data.message}
   // console.log(data);
   // return reject(data)
  } else {
    util.toast(res.statusCode);
    return reject(res.statusCode)
  }

  // if (res.statusCode === 200) {
  //   if (res.data.operationResult === 'success') {
  //     return res.data.responseList
  //   }
  // } else {
  //   util.toast(res.statusCode);
  // }
  // return res

};

module.exports = Config;
