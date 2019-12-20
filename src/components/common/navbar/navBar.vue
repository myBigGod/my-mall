<template>
    <div class="navbar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name:'navBar'
}
</script>

<style scoped>
.navbar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: aliceblue;
}

.left .right{
    width: 60px;
    background-color: aqua;
}
.center{
    flex: 1;
}
</style>