<template>
  <!-- 加这个v-if判断可以防止浏览器报cannot read property xxx of undefined错误 -->
  <!-- 因为接口数据未返回前会报错 -->
  <div class="base-info" v-if="Object.keys(baseGoods).length !== 0">
    <div class="goods-title">
      {{baseGoods.title}}
    </div>
    <div class="price">
      <span id="new-price">￥{{baseGoods.price}}</span>
      <span id="old-price">￥{{baseGoods.oldPrice}}</span>
      <!-- 绑定传过来的背景颜色 -->
      <span id="discount" :style="{background: baseGoods.discountBgColor}"
            v-if="baseGoods.discountDesc">
      {{baseGoods.discountDesc}}
      </span>
    </div>
    <div class="goods-sell">
      <span>{{baseGoods.columns[0]}}</span>
      <span>{{baseGoods.columns[1]}}</span>
      <span>{{baseGoods.services[baseGoods.services.length-1].name}}</span>
    </div>
    <div class="goods-services">
      <div class="goods-item">
        <img :src="baseGoods.services[1].icon" alt="">
        <span>{{baseGoods.services[1].name}}</span>
      </div>
      <div class="goods-item">
        <img :src="baseGoods.services[2].icon" alt="">
        <span>{{baseGoods.services[2].name}}</span>
      </div>
      <div class="goods-item">
        <img :src="baseGoods.services[3].icon" alt="">
        <span>{{baseGoods.services[3].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseInfo',
  props: {
    baseGoods: {
      type: Object
    }
  }
}
</script>

<style scoped>
  .goods-title {
    font-weight: bold;
  }
  #new-price {
    font-size: 20px;
    color: crimson;
  }
  #old-price {
    color:darkgray;
    font-size: 12px;
    padding-left: 10px;
    /* 删除线 */
    text-decoration: line-through;  
  }
  #discount {
    font-weight: bold;
    font-size: 16px;
    /* padding: 5px; */
    color: #fff;
    border-radius: 20%;
  }
  .goods-sell {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .goods-sell span {
    font-size: 12px;
    color: darkgray;
  } 


  .goods-services {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .goods-item {
    font-size: 14px;
  }
  .goods-item img{
    width: 15px;
    height: 15px;
  }
</style>