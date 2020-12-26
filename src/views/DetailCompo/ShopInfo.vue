<template>
  <div class="shop-info">
    <div class="head">
      <img :src="shopInfo.logo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-data">
      
      <table class="sells">
        <tr>
          <td>{{shopInfo.sells | filterSells}}</td><td>{{shopInfo.goods}}</td>
        </tr>
        <tr>
          <td>总销量</td><td>全部宝贝</td>
        </tr>
      </table>

      <table class="score">
        <tr v-for="(item,index) in shopInfo.score">
          <td>{{item.name}}</td>
          <!-- 根据得分动态切换样式 -->
          <td :class="[item.isBetter ? activeCls : errCls]">{{item.score}}</td>
          <td :class="[item.isBetter ? activeCls : errCls]">{{item.isBetter ? '高' : '低'}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: {
    shopInfo: {
      type: Object
    }
  },
  data(){
    return {
      activeCls: 'active',
      errCls: 'err'
    }
  },
  filters: {
    // 转换总销量数字
    filterSells(sells){
      if(sells < 10000){
        return sells;
      }else{
        return (sells/10000).toFixed(1) + '万'
      }
    }
  }
}
</script>

<style scoped>
  .head img{
    width: 20%;
  }
  .shop-data {
    font-size: 14px;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
  }

  .sells{
    border-right: 2px solid rgb(95, 95, 95);
  }
  .sells, .score{
    flex: 1;
    padding: 5px;
  }
  .sells td{
    padding-top: 5px;
  }
  .score td{
    padding-left: 10px;
  }

  .isBetter{
    background: crimson;
    color: #fff;
  }
  td.active{
    color:red;
  }
  td.err{
    color: green;
  }
</style>