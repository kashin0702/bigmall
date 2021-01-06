<template>
  <div class="category">
    <NavBar class="nav-bar">
      <span slot="center">商品分类</span>
    </NavBar>

    <div class="content">
      <div class="titles">
        <div class="title-item" v-for="(item,index) in titles" :key="index" 
        @click="titleClick(index)"
        :class="{active: currentIndex === index}">
          {{item.title}}
        </div>
      </div>
      <div class="content-item">

      </div>
    </div>
  </div>
</template>

<script>
import { getCategory } from 'network/categoryRequest'
import NavBar from 'components/NavBar'

export default {
  name: 'Category',
  components: {
    NavBar    
  },
  data(){
    return {
      titles: [],
      currentIndex: 0
    }
  },
  created(){
    getCategory().then(res => {
      console.log(res);
      const data = res.data.data
      this.titles = data.category.list
      console.log(this.titles);
    })
  },
  methods: {
    titleClick(index){
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
  .nav-bar {
    background: hotpink;
    color: #fff;
    font-weight: bold;
  }
  .content {
    position: relative;
    top: 40px;
    display: flex;
  }
  .titles {
    display: flex;
    flex-direction: column;
    width: 25%;
    background: rgb(216, 223, 230);
    
  }
  .title-item {
    padding: 10px 20px;
    font-size: 14px;
    text-align: center;
  }
  .content-item {
    flex: 2;
    background: rgb(241, 238, 238);
  }
  .active {
    color: pink;
    border-left: 2px solid pink;
    background: rgb(241, 238, 238);
  }
</style>