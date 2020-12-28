<template>
  <div class="count-bar">
    <div class="select-all">
      <!-- 给组件的checked传一个selectAll计算属性,用来判断是否全选 -->
      <!-- 注意点：相同子组件在不同地方复用时，可以传不同的checked值，要灵活运用 -->
      <CheckButtom class="check-buttom" :checked="selectAll" @checkClick="buttomClick"/>
      <span id="select">全选</span>
      <span id="total">合计: ¥{{ totalCount }}</span>
    </div>
    <div class="go-pay">
      <span>去计算( {{ totalGoods }} )</span>
    </div>
  </div>
</template>

<script>
import CheckButtom from "components/CheckButtom";
export default {
  name: "CartCountBar",
  components: {
    CheckButtom: CheckButtom,
  },
  data(){
    return {
      
    }
  },
  computed: {
    //计算选中的商品总价
    totalCount() {
      return this.$store.state.cartList
        .filter((item) => {
          //先用filter过滤出选中的商品
          return item.checked;
        })
        .reduce((prev, cur) => {
          return prev + cur.price * cur.count; //再用reduce递归计算商品总价
        }, 0)     //reduce中的0表示递归初始值,不设置就是数组第一项
        .toFixed(2); 
    },

    //计算总商品数量
    totalGoods() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((prev, cur) => {
          return prev + cur.count;
        }, 0);
    },
    selectAll(){
      let arr = this.$store.state.cartList
      return arr.every(item => {   //对数组进行every判断，若item.checked全选返回true,若有一个未选中，则返回false
        return item.checked
      })
    }
  },
  methods: {
    buttomClick(){
      if(this.selectAll){   //利用computed获取checkButtom的checked值
        this.$store.state.cartList.forEach(item => {
          item.checked = false   //item.check会直接影响selectAll的值 所以不用对这个值取反
        })
      }else{
        this.$store.state.cartList.forEach(item => {
          item.checked = true
        })
      }
    }
  }
  
};
</script>

<style scoped>
.count-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 70px;
  display: flex;
}
img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.select-all {
  /* 方法1.子元素垂直居中 设置flex */
  display: flex;
  align-items: center;
  flex: 2;
  background: lightgray;
  height: 40px;
}
.go-pay {
  /*方法2. 子元素垂直+水平居中 设置line-height = height */
  line-height: 40px;
  text-align: center;

  flex: 1;
  background: lightsalmon;
  color: #fff;
  height: 40px;
}
#total {
  margin-left: 20px;
}
span {
  font-size: 14px;
}

</style>