<template>
  <div class="detail">
    <NavBar class="nav-bar">
      <span slot="left" @click="back"> 《 </span>
      <div slot="center">
        <span v-for="(item,index) in titles" :class="{active: currentIndex === index}">
          {{item}}
        </span>
      </div>
    </NavBar>
    <div class="content">
    <Swiper ref="mySwiper" :options="swiperOptions" class="swiper-container">
      <swiper-slide v-for="item in list" class="swiper-item">
        <img :src="item">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>

    <!-- 基本信息 -->
    <BaseInfo :baseGoods="baseGoodsInfo"/>
    
    <!-- 商家信息 -->
    <ShopInfo :shopInfo="shop"/>
    <!-- 详细图片 -->
    <DetailInfo :detailInfo="detailInfo" ref="detailInfo"/>
    <!-- 参数信息 -->
    <ParamInfo :params="itemParams"  ref="paramInfo"/>

    <!-- 用户评价 -->
    <RateInfo :rate="rateInfo" ref="rate"/>

    <!-- 推荐数据 -->
    <DetailRecommend :recommend="recommend" class="detail-recommend" ref="recommend"/>
    <!-- 返回顶部 -->
    <BackTop v-if="contentScroll"/>
    </div>

    <!-- 底部购物车栏 放在content容器外-->
    <!-- 接收传过来的购物车事件 -->
    <BottomBar @addToCart="addToCart"/>
  </div>
</template>

<script>
import NavBar from 'components/NavBar'

import 'swiper/css/swiper.min.css'   
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'

import {getDetailGoods,Goods,Shop,Detail,getRecommend} from 'network/detailRequest' //引入请求方法，两个整合类

import BaseInfo from './DetailCompo/BaseInfo'
import ShopInfo from './DetailCompo/ShopInfo'
import DetailInfo from  './DetailCompo/DetailInfo'
import ParamInfo from './DetailCompo/ParamInfo'
import BackTop from 'components/BackTop'
import RateInfo from  './DetailCompo/RateInfo'
import DetailRecommend from './DetailCompo/DetailRecommend'
import BottomBar from './DetailCompo/BottomBar'

export default {
  name: 'Detail',
  components: {
    NavBar,
    Swiper,
    SwiperSlide,
    BaseInfo,
    ShopInfo,
    DetailInfo,
    ParamInfo,
    RateInfo,
    DetailRecommend,
    BackTop,
    BottomBar
  },
  data(){
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      },
      id: null,   //商品id
      list: [],   //轮播图
      baseGoodsInfo: {},   //商品基本信息
      shop: {},           //商家信息
      detailInfo: {},    //商品详细信息
      itemParams: {},     //商品参数信息
      pageYposition: null,
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0,    //用来保存titles的索引值
      rateInfo: [],  //评论数据
      recommend: []  //推荐数据
    }
  },
  created(){
    this.id = this.$route.query.iid //***关键赋值  通过$route属性 获取当前页面的query值

    getDetailGoods(this.id).then(res => { //通过保存的id 获取详情页数据
      console.log(res.data)
      const data = res.data.result
      this.list = data.itemInfo.topImages   //获取详情页轮播图
      this.baseGoodsInfo = new Goods(data.itemInfo,data.columns,data.shopInfo)  //创建商品基础信息实例
      this.shop = new Shop(data.shopInfo)   //创建商店信息实例 整合 
      this.detailInfo = new Detail(data.detailInfo);   //获取商品详情 并创建实例进行整合
      // console.log(this.detailInfo)
      this.itemParams = data.itemParams
      // console.log(this.itemParams)
      this.rateInfo = data.rate.list
      // console.log(this.rateInfo)
    })

    getRecommend().then(res => {  //推荐数据是另一个接口，新建一个请求方法
      const data = res.data.data;
      this.recommend = data.list;
      // console.log(this.recommend)
    })
  },
  computed: {
    contentScroll(){
      // 当Y轴滚动位置大于1000PX时，返回true, 出现backTop图标
      return this.pageYposition > 1000 
    }
  },
  mounted(){
    // 原生scroll事件只能对window对象使用，当发生滚动时，触发pageScroll方法
    window.addEventListener('scroll',this.pageScroll)
    
    // console.log(this.$route);
    // console.log(this.$router);
  },
  methods: {
    back(){
      this.$router.go(-1);
    },
    pageScroll(){
      // 1.保存滚动的位置
      this.pageYposition = window.pageYOffset  //该属性是滚动条在Y轴的位置
      // console.log(this.pageYposition)
      // console.log(this.$refs.paramInfo.$el.offsetTop)
      // console.log(this.$refs.rate.$el.offsetTop)
      // console.log(this.$refs.recommend.$el.offsetTop);
      // console.log(this.currentIndex);
      // 2.滚动到特定的offsetTop时，激活navBar的样式
      switch(true){
        // 条件判断的关键点：*****保证每个case互斥*****
        case this.pageYposition < this.$refs.paramInfo.$el.offsetTop:
          this.currentIndex = 0
          break;
        case this.pageYposition >= this.$refs.paramInfo.$el.offsetTop && this.pageYposition <= this.$refs.rate.$el.offsetTop: 
          this.currentIndex = 1
        break;
        case this.pageYposition >= this.$refs.rate.$el.offsetTop && this.pageYposition <= this.$refs.recommend.$el.offsetTop:
          this.currentIndex = 2
          break;
        case this.pageYposition >= this.$refs.recommend.$el.offsetTop:
          this.currentIndex = 3
          break;
      }
    },
    addToCart(){
      const product = {} //创建一个购物车对象
      product.img = this.list[0]   //商品的第一张轮播图
      product.title = this.baseGoodsInfo.title //商品标题 
      product.desc = this.detailInfo.desc   //商品的描述
      product.price = this.baseGoodsInfo.price //商品的价格
      product.id = this.id   //商品id
      product.count = 0  //商品数量
      product.checked = false  //商品选中状态
      console.log(product);  //测试数据是否正确
      
      //调用store-action异步模块内的的getAddGoods方法, 并传入这个对象给$store
      this.$store.dispatch('getAddGoods',product).then(res => { //getAddGoods方法包装了一层promise,这里就可以回调then
        
      })
    }
  }
}
</script>

<style scoped>
  .nav-bar span {
    padding-left: 5px;
    font-size: 15px;
  }
  .swiper-item img {
    height: 300px;
    width: 100%;
    /* overflow: hidden; */
  }

  .content {
    position: relative;
    top: 40px;
    background: #fff;
    z-index: 98;
    /* height: 100vh; */
    
  }
  .active {
    color: red;
  }

  .detail-recommend {
    margin-top: 30px;
  }
</style>