<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="desc-info">
    <div class="start-line"></div>
    <div class="detail-desc">
      {{detailInfo.desc}}
    </div>
    <div class="end-line"></div>
    </div>

   <div class="detail-image">
     <div class="key">{{detailInfo.key}}</div>
     <div class="image" v-for="item in detailInfo.list">
       <img :src="item" alt="">
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  props: {
    detailInfo: {
      type: Object
    }
  }  
}
</script>

<style scoped>
  .start-line {
    width: 90px;
    height: 2px;
    background: burlywood;
  }
  .end-line {
    width: 90px;
    height: 2px;
    background: burlywood;
    float: right;
  }
  .start-line::before, .end-line::after {
    content: '';
    /* 伪元素不加content要可见,必须添加display或者position属性,让他变成一个容器 */
    position: absolute;
    width: 5px;
    height: 5px;
    background: black;
  }

  /* 把小点放到右边 */
  .end-line::after {
    right: 0;
  }
  .detail-desc {
    margin: 10px;
  }

  .desc-info {
    font-size: 14px;
    margin-top: 20px;
  }

  .detail-image img {
    width: 100%;
  }
  .key {
    /* 清除上面的float */
    clear: both;
    text-align: center;
    margin-top: 33px;
  }
</style>