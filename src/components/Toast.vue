<template>
  <div class="toast" >
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    message: {
      type: String
    }
  }
}
</script>

<style scoped>
  .toast {
    width: 200px;
    height: 50px;
    background: black;
    color: #fff;
    line-height: 50px;
    text-align: center;
    border-radius: 10%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    opacity: 0.75;
    z-index: 100;
    /* display: none; */
  }
</style>