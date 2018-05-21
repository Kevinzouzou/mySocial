import Config from './Config.js'
import util from './util.js'
import Swallow from './Swallow.js'

function createInStance() {
  return new Swallow(new Config());
}

let ppSallow = createInStance();



//module.exports = ppSwallow;

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, option) {
    return ppSallow.baseHttp(url, params, option,'GET');
  },
  post: function (url, params, option) {
    return ppSallow.baseHttp(url, params, option,'POST');
  },
  put: function (url, params, option) {
    return ppSallow.baseHttp(url, params, option,'PUT');
  },
  delete: function (url, params, option) {
    return ppSallow.baseHttp(url, params, option,'DELETE');
  },

  other: function (url, params, method, option) {
    return ppSallow.baseHttp(url, params, option,method);
  },

  uploadFile: function (url, params, option) {
    let defaultRequest =ppSallow.config.getRequest();
    let request = util.copyObject(defaultRequest,option) ;
    request.url = url;
    let arr = util.getObjProperty(params);
    request.name = arr[0];
    request.filePath = arr[1];
    return ppSallow._wxUploadFile(request);
  },
}
