
/**
 * 复制对象
 * 从resource->target
 */
let copyObject = function copyObject(target, resource) {
  if ("undefined" === resource || null === resource) {
    return target
  }
  for (let key in resource) {
    if (null === resource[key] || "undefined" === resource[key])
      continue;
    target[key] = resource[key]
  }
  return target;
};

/**
 * 获取对象的key,value
 * 返回数组 arr[0]==key arr[1]==value
 */
let getObjProperty = function getObjProperty(obj) {
  if ("undefined" === obj || null === obj || typeof (obj) !== 'object') {
    return
  }
  let arr=[];
  for (let key in obj) {
    arr[0] =key;
    arr[1] = (null === obj[key]) ? "":obj[key]
  }
  if (typeof (arr[1]) !== 'string'){
    toast("文件路径不是String类型")
  }
  return arr
};

// 显示fail提示
let toast = text => wx.showToast({
  title: text,
  icon: 'none'
});

module.exports = { copyObject, getObjProperty,toast }
