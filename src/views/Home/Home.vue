<template>
    <div>
        <nav-bar class="home">
            <p slot="center">首页</p>
        </nav-bar>
        <img-scroll :imgUrl="imgUrls"></img-scroll>
    </div>
</template>
<script>
import navBar from "components/common/navbar/navBar.vue";
import imgScroll from "components/common/imgscroll/imgScroll";

import https from 'network/http.js'

export default {
    name:'Home',
    components:{
        navBar,
        imgScroll
    },
    data(){
        return{
            //电影请求参数
            moveParams:{
                count:4
            },

            //电影列表
            imgUrls:[]
        }
    },
    created(){
        this.$axios.get("https://douban.uieee.com/v2/movie/in_theaters",{params:this.moveParams}).then(res=>{
            //console.log(res.data.subjects)
            this.imgUrls = res.data.subjects
            console.log(this.subjects)
        })
    },
    destroyed(){
        console.log("被销毁")
    }
}
</script>

<style scoped>
.home{
    background-color:darksalmon;
}
</style>