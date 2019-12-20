<template>
  <div class="block">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in imgUrl" :key="item.index">
        <img :src="item.images.large" alt="jj" referrer="no-referrer|origin|unsafe-url" no-repeat />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>


<script>
import img from "assets/img/lqpic.jpg"
export default {
    name:'imgScroll',
    data(){
      return{
          moveItems :[]
      }
    },
    props:["imgUrl"],

    mounted(){
    }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel{
    text-align: center;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
 
</style>