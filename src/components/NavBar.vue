<template>
  <div class="nav-bar">
    <div class="nav-bar-item left"><slot name="left"></slot></div>
    <div class="nav-bar-item center"><slot name="center"></slot></div>
    <div class="nav-bar-item right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  .nav-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background: #fff;
    display: flex;
    align-items: center;
    line-height: 40px;
    z-index: 99;
  }
  .left,.right{
    width: 60px;
  }
  .center {
    flex: 3;
    text-align: center;
  }
</style>