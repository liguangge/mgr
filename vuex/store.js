import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import { Toast } from 'mint-ui'
import Router from 'vue-router' // 引入vue-router
import routerMap from '../src/router' // 引入路由表

Vue.use(Router) // 声明使用vue-router
Vue.use(Vuex)

const router = new Router() // 创建路由
routerMap(router) // 路由表引入

const state = {
  funcList: []
}



const mutations = {
  FUNCLIST (state, name) {
    var url = '/api/func/key?key='+name;
     Vue.http.get(url).then((response) => {
          // success callback
          state.funcList = response.json();
      }, (response) => {
          // error callback
          alert('error');
      });
  },
  ADDFUNC(state,func){
    console.log('ADDFUNC'+func.funcid);
    Toast({
      message: '添加成功',
      position: 'middle',
      duration: 5000
    });
    router.go({name:'funclist'});
  }
}

export default new Vuex.Store({
  state,
  mutations
})