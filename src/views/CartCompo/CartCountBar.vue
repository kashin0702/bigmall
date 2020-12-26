<template>
  <div class="count-bar">
    <div class="select-all">
      <CheckButtom @click.native="selectAll" class="checked"/>
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
  },
  methods: {
    selectAll() {
      for(let item of this.$store.state.cartList){

      }
    },
  },
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
.checked {
  border: 2px solid red;
}
</style>