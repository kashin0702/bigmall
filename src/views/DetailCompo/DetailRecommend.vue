<template>
  <div class="recommend" v-if="Object.keys(recommend).length !== 0" >
    <div class="item" v-for="(item,index) in recommend" >
      <div class="item-image">
        <img :src="item.image" alt="">
      </div>
      <div class="item-title">
        {{item.title}}
      </div>
      <div class="item-price">
        <span id="price">{{item.discountPrice}}</span>
        <span id="cfav">{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailRecommend',
  props: {
    recommend: {
      type: Array
    }
  },
}
</script>

<style scoped>
  .recommend {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .item {
    width: 40%;
  }
  .item img {
    width: 100%;
    border-radius: 5%;
  }
  .item-title {
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  #cfav {
    margin-left: 10px;
  }
  #cfav::before {
    content: '☆';
  }

  #price {
    color: pink
  }
</style>