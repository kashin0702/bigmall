<template>
  <div class="home">
    <NavBar class="nav-bar">
      <span slot="center">商城</span>
    </NavBar>
    <div class="content">
    <!-- 轮播图插件vue-awesome-swiper -->
    <Swiper ref="mySwiper" :options="swiperOptions" class="swiper-container">
      <swiper-slide class="swiper-item" v-for="item in list">
        <a :href="item.link"><img :src="item.image" alt=""></a>
      </swiper-slide>
      <!-- 分页按钮 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>

    <!-- 推荐栏 -->
    <Recommend :recommend="recommend"/>

    <!-- 三个频道分栏 -->
    <TabControl class="tab-control" @itemClick="tabClick"/>

    <!-- 首页商品数据 -->
    <HomeGoods :goods="showGoods" />
   </div>
  </div>
</template>

<script>
import NavBar from 'components/NavBar'          //导入顶部栏
import Recommend from './HomeCompo/Recommend'   //导入推荐位
import TabControl from './HomeCompo/TabControl' //导入频道分栏
import HomeGoods from './HomeCompo/HomeGoods'   //导入商品数据

import {getHomeMultiData,getHomeGoods} from 'network/homeRequest'  //请求首页recommend数据和所有推荐数据


import 'swiper/css/swiper.min.css'                    //导入swiper轮播插件样式
import {Swiper,SwiperSlide} from 'vue-awesome-swiper' //导入轮播图插件

export default {
  name: 'Home',
  components: {
    NavBar,
    Swiper,
    SwiperSlide,
    Recommend,
    TabControl,
    HomeGoods
  },
  data(){
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // },
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false   //防止手动滑动后，自动滑动失效的问题
        },
        speed: 1000
      },
      //请求数据
      list: [],
      recommend: [],
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []}
      },
      currentType: 'pop'
    }
  },
  mounted(){
    // console.log("Current swiper instance object",this.swiper)
    //  this.swiper.slideTo(2,1000,false)
  },
  computed: {
    swiper(){
      return this.$refs.mySwiper.$swiper
    },
    showGoods(){
      // console.log(this.goods[this.currentType].list)
      return this.goods[this.currentType].list
    }
  },
  created(){
    getHomeMultiData().then(res => {
      const data = res.data.data
      this.list = data.banner.list   //首页轮播图数据
      this.recommend = data.recommend.list
      // console.log(this.recommend)
     
    })

    this.getTotalHomeGoods('pop')
    this.getTotalHomeGoods('sell')
    this.getTotalHomeGoods('new')

  },
  methods: {
    //对getHomeGoods进行一层封装,这样只要传一个频道参数就可以了
    getTotalHomeGoods(type){  
      const page = this.goods[type].page + 1 //每次page请求 页码+1

      //通过page,type 2个参数获取到接口数据
      getHomeGoods(type,page).then(res => {
        // console.log(res.data)
        const list = res.data.data.list
        this.goods[type].list.push(...list)
        // this.goods[type].page += 1
        // console.log(list)
      })
    },

    tabClick(index){  //接收子组件传过来的index
      switch(index){
        case 0:
          this.currentType = 'pop'
          break;
        
        case 1: 
          this.currentType = 'sell'
          break;
        
        case 2:
          this.currentType = 'new'
          break;

      }
    }
  }
}
</script>

<style scoped>
  /* 导航颜色放到这里单独配置 */
  .nav-bar {
    background: hotpink;  
    color: #fff;
    font-weight: bold;
  }

  .swiper-item img {
    width: 100%;
  }
  .tab-control {
    margin-top: 15px ;
  }
  
  .content {
    position: relative;
    top: 40px;
    
  }
</style>