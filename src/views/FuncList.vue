<template>
   <a  v-link="{ path: '/home', replace: true}">home{{funclist }}</a>
   <button @click='funcList'>getFunclist</button>
   <ul>
     <li v-for="item in funclist">
     {{item.funcName}}
     </li>
   </ul>
</template>
<script>
import { getFuncList }  from '../../vuex/getters'
import { funcList }  from '../../vuex/actions'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  vuex:{
    getters:{
      funclist: getFuncList
    },
    actions: {
      funcList: funcList
    }
  }
}
</script>