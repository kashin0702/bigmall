<template>
  <div class="goods-item"  @click="goodsClick">
      <div class="goods-image">
          <img :src="goodsItem.show.img" alt="">
      </div>
      <div class="goods-title">
        <span>{{goodsItem.title}}</span>
        </div>
      <div class="goods-info">
        <span class="goods-price">￥{{goodsItem.price}}</span>
        <span class="goods-fav">☆{{goodsItem.cfav}}</span>
        </div>  
    </div>
</template>

<script>
export default {
  name: 'HomeGoodsItem',
  props: {
    goodsItem: {
      type: Object
    }
  },
  methods: {
    goodsClick(){
      this.$router.push({
        path: '/detail',
        query: {
          iid: this.goodsItem.iid   //根据iid,跳转到对应的详情页
        }
      })
    }
  }
}
</script>

<style scoped>
.goods-item {
    /* 不能设置flex：1 会让项目均分到一样大小，此时项目原本大小失效*/
    width: 40%;
    margin-bottom: 15px;
  }
 
  .goods-image img {
    width: 100%;
    border-radius: 5%;
  }
  .goods-title {
    overflow: hidden;
    font-size: 12px;
    /* 不换行 */
    white-space: nowrap;
    /* 文本超出的省略号... */
    text-overflow: ellipsis; 
  }
 
  .goods-price {
    color: red;
  }
  .goods-info {
    font-size: 12px;
    text-align: center;
  }
  .goods-fav {
    padding-left: 10px;
  }
</style>