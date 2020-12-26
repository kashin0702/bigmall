<template>
  <div class="back-top" @click="backTop">
    <img src="~assets/back.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  methods: {
    backTop(){
      window.scrollTo(0,0)
    }
  }
}
</script>

<style scoped>
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 75px;
  }
  .back-top img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
</style>