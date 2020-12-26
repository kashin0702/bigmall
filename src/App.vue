<template>
  <div id="app">
    <router-view class="view" />

    <MainTabBar/>
  </div>
</template>

<script>
import MainTabBar from 'components/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>
<style  scoped>
  @import url('assets/css/base.css');
  /* 防止底部被tabbar遮挡 */
  .view {
    margin-bottom: 120px;
  }
</style>
