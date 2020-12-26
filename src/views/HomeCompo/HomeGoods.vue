<template>
  <div class="home-goods">
    <HomeGoodsItem v-for="item in goods" :goodsItem="item"/>
  </div>
</template>

<script>
import HomeGoodsItem from './HomeGoodsItem'

export default {
  name: 'HomeGoods',
  components: {
    HomeGoodsItem
  },
  props: {
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .home-goods {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>