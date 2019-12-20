<template>
    <div id="tabbar-item" @click="itemClick">
        <div v-if="!Activet"><slot name="img"></slot></div>
        <div v-else><slot name="img-active"></slot></div>
        <div :class="{activet:Activet}"><slot name="text"></slot></div>
    </div>
</template>

<script>
export default {
    name:'tabbaritem',
    props:{
        path:String
    },
    methods:{
        itemClick(){
            this.$router.push(this.path).catch(err=>{})
        }
    },
    computed:{
        Activet(){
            return this.$route.path.indexOf(this.path) !== -1
        }
    }
}
</script>

<style scoped>

#tabbar-item{
    flex:1;
    height: 49px;
    padding-top: 2px;
}
#tabbar-item img{
    width: 28px;
    vertical-align: middle;
}
p{
    font-size: 12px;
}

.activet{
    color: red;
}
</style>