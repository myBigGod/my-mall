<template>
     <tab-bar>
      <tab-bar-item path="/home">
        <img slot="img" src="~assets/img/shouye1.svg"/>
        <img slot="img-active" src="~assets/img/shouye.svg"/>
        <p slot="text">首页</p>
      </tab-bar-item>

       <tab-bar-item path="/category">
        <img slot="img" src="~assets/img/fenlei1.svg"/>
        <img slot="img-active" src="~assets/img/fenlei.svg"/>
        <p slot="text">分类</p>
      </tab-bar-item>

      <tab-bar-item path="/cart">
        <img slot="img" src="~assets/img/gouwuche1.svg"/>
        <img slot="img-active" src="~assets/img/gouwuche.svg"/>
        <p slot="text">购物车</p>
      </tab-bar-item>
      
      <tab-bar-item path="/profile">
        <img slot="img" src="~assets/img/shezhi1.svg"/>
        <img slot="img-active" src="~assets/img/shezhi.svg"/>
        <p slot="text">设置</p>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '../common/tabbar/TabBar'
import TabBarItem from '../common/tabbar/TabBarItem'
export default {
  name:'myTabbar',
  components:{
    TabBar,
    TabBarItem
  },
  methods:{
    add(){
      const ob = {name:'one',age:18,isOK:true}
      //提交到mutations
      this.$store.commit("addOb",ob);
    },
    kkk(){
      this.$store.commit("show");
    },
    dispatch(){
      this.$store.dispatch("addCount")
    }
  }
}
</script>