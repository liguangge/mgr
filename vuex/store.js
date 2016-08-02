import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'


Vue.use(Vuex)

const state = {
  funcList: [
  {
    "funcId": "000001",
    "funcName": "用户管理",
    "remark": "包括用户的新增删除修改查询等功能",
    "creatorId": "lishi",
    "createTime": "2016-07-28 15:16:57.0",
    "lastModifyId": null,
    "lastModifyTime": null
  },
  {
    "funcId": "000002",
    "funcName": "角色管理",
    "remark": "包括角色的新增删除修改查询等功能",
    "creatorId": "lishi",
    "createTime": "2016-07-28 15:16:57.0",
    "lastModifyId": null,
    "lastModifyTime": null
  },
  {
    "funcId": "000003",
    "funcName": "功能管理",
    "remark": "包括功能的新增删除修改查询等功能",
    "creatorId": "lishi",
    "createTime": "2016-07-28 15:15:53.0",
    "lastModifyId": null,
    "lastModifyTime": null
  }
]
}



const mutations = {
  FUNCLIST (state, result) {
     Vue.http.get('/api/func').then((response) => {
          // success callback
          state.funcList = response.json();
      }, (response) => {
          // error callback
          alert('error');
      });
  }
}

export default new Vuex.Store({
  state,
  mutations
})