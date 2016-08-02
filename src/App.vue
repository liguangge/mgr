<template>
  
    <div>

      <mt-tabbar :selected.sync="selected">
      <mt-tab-item id="用户管理">
      <img slot="icon" src="assets/logo.png" v-link="{ path:'/funclist', replace: true}">
            用户管理
      </mt-tab-item>
      <mt-tab-item id="角色管理">
        <img slot="icon" src="assets/logo.png" v-link="{ path:'/funclist', replace: true}">
          角色管理
      </mt-tab-item>
      <mt-tab-item id="功能管理" v-link="{ path:'/funclist', replace: true}">
        <img slot="icon" src="assets/logo.png" >
          功能管理
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="assets/logo.png">
          我的
      </mt-tab-item>
      </mt-tabbar>
    
     
      <router-view></router-view>
    </div>
 
</template>

<script>
import store from '../vuex/store'
import { Header } from 'mint-ui'
import { Button } from 'mint-ui'
import { Tabbar, TabItem } from 'mint-ui';

export default {
  data() {
    return {
      isIndex:true,
      selected:'功能管理'
    }
  },
  store:store
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

ul,li{
  list-style:none;
}
</style>
