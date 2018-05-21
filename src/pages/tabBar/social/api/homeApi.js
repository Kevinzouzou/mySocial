import api from '../../../../ppSwallow/ppSwallow';


export default {

  /**
   * params
   * 查询线上话题列表
   */
  getTopicInfo: function(params) {
    return api.post('line/listLineSubject', params);
  },
  /**
   * params
   * 话题点赞，收藏关联
   */
  praiseTopic: function(params) {
    return api.post('line/addLineSubjectUser', params);
  },
  /**
   * params
   * 取消话题点赞，收藏关联
   */
  cancelPraiseTopic: function(params) {
    return api.post('line/cancleLineSubject', params);
  },
  /**
   * params
   * 线上话题评论
   */
  addSubComment: function(params) {
    return api.post('line/addLineSubjectComment', params);
  },
  /**
   * params
   * 线上话题 回复
   */
  addSubReply: function(params) {
    return api.post('line/addLineSubjectCommentReply', params);
  },
  /**
   * params
   * 线上话题 回复遍历
   */
  commentReplys: function(params) {
    return api.post('line/listLineCommentReplyByCommentId', params);
  },
  /**
   * params
   * 线上话题 回复遍历
   */
  addSubject: function(params) {
    return api.post('line/addLineSubject', params);
  },
  /**
   * params
   * 上传图片
   */
  uploaImg: function (params) {
    return api.uploadFile('http://39.107.252.186:10003/images/imgUpload', params);
  },

  /**
   * params
   * 线上圈子遍历
   */
  getCircleInfo: function(params) {
    return api.post('line/listLineCircle', params);
  },
  /**
   * params
   * 线上圈子遍历
   */
  getActivityInfo: function(params) {
    return api.post('line/listLineActivity', params);
  },
  /**
   * params
   * 线上圈子添加用户
   */
  addCircleUser: function(params) {
    return api.post('line/addLineCircleUser', params);
  },
  /**
   * params
   * 线上圈子添加用户
   */
  addActivityUser: function(params) {
    return api.post('line/addLineActivityUser', params);
  },
  /**
   * params
   * 我的社交 我的留言
   */
  getMyComments: function(params) {
    return api.post('line/listLineSubjectComment', params);
  },
  /**
   * params
   * 线上话题举报
   */
  addTipOff: function(params) {
    return api.post('line/addLineTipOff', params);
  },


};
