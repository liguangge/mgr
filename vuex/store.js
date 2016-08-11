import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import { Toast } from 'mint-ui'

Vue.use(Vuex)

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
  }
}

export default new Vuex.Store({
  state,
  mutations
})