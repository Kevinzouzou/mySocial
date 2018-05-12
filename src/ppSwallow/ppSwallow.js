import Config from './Config.js'
import util from './util.js'
import Swallow from './Swallow.js'

function createInStance() {
  return new Swallow(new Config());
}

let ppSallow = createInStance();



//module.exports = ppSallow;

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, option) {
    let defaultRequest =ppSallow.config.getHeader();
    let request = util.copyObject(defaultRequest,option) ;
    request.url = url;
    request.data = params;
    request.method = 'GET';
    return ppSallow.baseHttp(url, params, request);
  },
  post: function (url, params, option) {
    let defaultRequest =ppSallow.config.getHeader();
    let request = util.copyObject(defaultRequest,option) ;
    request.url = url;
    request.data = params;
    request.method = 'POST';
    return ppSallow.baseHttp(url, params, request);
  },
  put: function (url, params, option) {
    let defaultRequest =ppSallow.config.getHeader();
    let request = util.copyObject(defaultRequest,option) ;
    request.url = url;
    request.data = params;
    request.method = 'PUT';
    return ppSallow.baseHttp(url, params, request);
  },

  other: function (url, params, method, option) {
    let request = Object.assign({}, ppSallow.config.defaultRequest, option);
    request.url = url;
    request.data = params;
    request.method = method;
    return ppSallow._wxHttp(request);
  },

  uploadFile: function (url, params, request) {
    request.url = url;
    let arr = util.getObjProperty(params);
    request.name = arr[0];
    request.filePath = arr[1];
    return ppSallow._wxUploadFile(request);
  },
}
