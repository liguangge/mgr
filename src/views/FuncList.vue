<template>
   <div class="page-search">
       <search></search>
       <result></result>

   </div>
</template>
<script>
import { getFuncList }  from '../../vuex/getters'
import { funcList }  from '../../vuex/actions'
import search from '../components/search.vue'
import result from '../components/result.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    search: search,
    result: result
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