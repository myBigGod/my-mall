<template>
  <div id="app">
    
    <my-tabbar/>
    
    <keep-alive>
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
import  myTabbar  from "./components/content/myTabbar";
export default {
  name:'app',
  components:{
    myTabbar
  }
}
</script>

<style>
@import url("./assets/css/base.css");
</style>

