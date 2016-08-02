<template>
   <div class="page-search">
       <mt-search :value.sync="">
        <mt-cell
            v-for="item in funclist"
            :title="item.funcName"
            :value="item.funcId">
        </mt-cell>
      </mt-search>

   </div>
</template>
<script>
import { getFuncList }  from '../../vuex/getters'
import { funcList }  from '../../vuex/actions'
import 'mint-ui/lib/style.css'
import { Search } from 'mint-ui'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      visible: true
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
<style lang="css">
.page-search {
    height: 100%;
  }
</style>