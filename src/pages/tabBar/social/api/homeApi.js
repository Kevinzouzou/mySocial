let contactInfo = 'queryContacts'; //查询通讯录信息
import api from '../../../../ppSwallow/ppSwallow';


export default {

  /**
   * params
   * 查询所有园区
   */
  getAllGarden: function(params) {
    return api.get('park/queryPark', params);
  },

};
