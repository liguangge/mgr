<template>
	<div>
		<ul>
			<li v-for="item in funclist">{{item.funcName}},{{item.funcId}},{{item.creatorId}}</li>
		<ul>
	</div>
</template>
<script>
import { getFuncList }  from '../../vuex/getters'
export default {
	vuex:{
    getters:{
      funclist: getFuncList
    }
  }
}
</script>