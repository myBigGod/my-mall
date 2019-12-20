<template>
    <div id="tabbar">
       <slot></slot>
    </div>
</template>

<script>
export default {
    name:'TabBar'
}
</script>

<style scoped>
#tabbar{
    display: flex;
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: -2px 0px 5px #ddd;
}
</style>