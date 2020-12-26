<template>
  <div class="cart-item">
    <div class="cart-check">
      <!-- 把该商品的选中状态传给checkButtom -->
      <CheckButtom @checkClick="buttomClick" :checked="itemInfo.checked" />
    </div>
    <div class="cart-img">
      <img :src="itemInfo.img" alt="" />
    </div>
    <div class="cart-right">
      <p class="title">{{ itemInfo.title }}</p>
      <p class="desc">{{ itemInfo.desc }}</p>
      <div class="price">
        <span>¥{{ itemInfo.price }}</span>
        <span id="count">X{{ itemInfo.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButtom from "components/CheckButtom";

export default {
  name: "CartListItem",
  props: {
    itemInfo: {
      type: Object,
    },
  },
  components: {
    CheckButtom,
  },
  methods: {
    buttomClick() {
      this.itemInfo.checked = !this.itemInfo.checked; //选中状态取反 进行切换
    },
  },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  margin: 10px;
}
.cart-check {
  align-self: center;
}

.cart-img {
  width: 25%;
}
.cart-img img {
  width: 100%;
  border-radius: 5%;
}
.cart-right {
  width: 65%;
}
.title,
.desc {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 10px;
}
.title {
  font-size: 15px;
}
.desc {
  font-size: 12px;
  color: lightgray;
}
.price {
  position: relative;
  top: 30px;
  left: 15px;
}
#count {
  position: absolute;
  right: 10px;
}
</style>