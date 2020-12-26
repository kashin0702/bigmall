<template>
  <div class="bottom-bar">
    <div class="bottom-item">
      <div class="item-left">
      <img src="~assets/kefu1.png" alt="">
      <p>客服</p>
      </div>    
      <div class="item-left">
      <img src="~assets/dianpu.png" alt="">
      <p>店铺</p>
      </div>
      <div class="item-left">
      <img src="~assets/fav.png" alt="">
      <p>收藏</p>
      </div>
    </div>
    
    
    <div class="bottom-item">
      <div class="item-right" id="add-cart" @click="addToCart">加入购物车</div>
      <div class="item-right" id="buy">购买</div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'BottomBar',
  methods: {
    addToCart(){
      // console.log('添加到购物车');
      this.$emit('addToCart')   //把添加购物车事件发送给父组件Detail
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    display: flex;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99;
    height: 75px;
  }

  .bottom-item {
    flex: 1;
    display: flex;
  }
  .item-left,.item-right {
    flex: 1;
  }
  .item-left {
    background: #fff;
  }
  .item-left p {
    text-align: center;
    margin-top: 10px;
  }
  .item-right {
    line-height: 75px;
    text-align: center;
  }
  #add-cart {
    background: yellow;
    color: black;
  }
  #buy {
    background: pink;
    color: #fff;
  }
  .item-left img {
    display: block;
    width: 30px;
    height: 30px;
    margin: 10px auto ;
  }

</style>