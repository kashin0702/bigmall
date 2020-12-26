<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div class="recommend-title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommend: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    justify-content: space-between;
    background: #fff;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 75%;
    margin-left: 10px;
  }
  .recommend-title {
    padding-left: 14px;
    font-size: 1em
  }
</style>