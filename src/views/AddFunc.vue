<template>

    <div>
      <mt-cell title="功能ID">
      	<input type="text" v-model="funcid"/>
      </mt-cell>
       <mt-cell title="功能名称">
      	<input type="text" v-model="funcname"/>
      </mt-cell>
      <mt-cell title="备注">
      	<input type="text" v-model="remark"/>
      </mt-cell>
      <mt-button type="default" v-on:click="submit">提交</mt-button>
    </div>
    
</template>

<script>
export default {
	data () {
	    return {
	    	funcid:"",
	    	funcname:"",
	    	remark:""
	    }
	  },
	methods:{
		submit(){
			var func = {};
			func.funcid = this.funcid;
			func.funcname = this.funcname;
			func.remark = this.remark;
			this.addFunc(func);
		}
	},
	vuex:{
	    actions: {
	      addFunc: ({ dispatch }, func) => {
          	dispatch('ADDFUNC', func)
          },
	    }
  	  }
};
</script>
<style lang="css">
 input {
 	border:1px solid #000
 }
</style>