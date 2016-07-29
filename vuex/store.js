import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'


Vue.use(Vuex)

const state = {
  funcList: []
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