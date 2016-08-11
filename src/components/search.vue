<template>
	<div>
		<input type="search" v-on:keyup.enter="funcList11" v-model="keys"/>
		<a v-link="{path:'/addfunc'}">+</a>
	</div>
</template>
<script>
	import { funcList11 }  from '../../vuex/actions'
	export default {
	  data () {
	    return {
	    	keys:""
	    }
	  },
	  methods:{
	  	funcList11(){
	  		this.searchFuncList(this.keys);

	  	}
	  },
	  vuex:{
	    actions: {
	      searchFuncList: ({ dispatch }, keys) => {
          	dispatch('FUNCLIST', keys)
          },
	    }
  	  }
	}
</script>
<style lang="css">
 input {
 	border:1px solid #000
 }
</style>