<template>
  <div class="rate-info" v-if="Object.keys(rate).length !== 0">
    <div class="title">
      <span>用户评价</span>
    </div>
    <div class="user-rate" v-for="(item,index) in rate">
      <div class="user">
        <img :src="item.user.avatar" alt="">
        <span>{{item.user.uname}}</span>
      </div>
      <div class="rate-content">
        {{item.content}}
      </div>
      <div class="rate-time">
        <span>{{item.created | changeTime}}</span>
        <span id="style">{{item.style}}</span>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'RateInfo',
  props: {
    rate: {
      type: Array
    }
  },
  filters: {
    changeTime(time){
      let year = new Date(time).getFullYear()
      let month = new Date(time).getMonth() + 1
      let date = new Date(time).getDate() 
      return year + '-' + month + '-' + date 
    }
  }
}
</script>
<style scoped>
  .title {
    margin: 20px 0;
    border-bottom: 2px solid slategrey;
  }
  .user img {
    border-radius: 50%;
    width: 15%;
  }
  .user {
    /* 子元素垂直居中 */
    display: flex;
    align-items: center;
  }
  .rate-content {
    font-size: 14px;
    color: thistle;
    margin: 10px 0;
  }
  .rate-time {
    font-size: 14px;
    color: lightgray;
  }
  #style {
    margin-left: 10px;
  }
</style>