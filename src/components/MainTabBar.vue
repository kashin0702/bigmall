<template>
  <TabBar class="tab-bar">
    <TabBarItem path="/home" class="tab-bar-item">
      <img src="~assets/home.png" alt="" slot="icon" />
      <img src="~assets/home-active.png" alt="" slot="icon-active" />
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" class="tab-bar-item">
      <img src="~assets/category.png" alt="" slot="icon" />
      <img src="~assets/category-active.png" alt="" slot="icon-active" />
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cartshop" class="tab-bar-item">
      <img src="~assets/shopcart.png" alt="" slot="icon" />
      <img src="~assets/shopcart-active.png" alt="" slot="icon-active" />
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" class="tab-bar-item">
      <img src="~assets/profile.png" alt="" slot="icon" />
      <img src="~assets/profile-active.png" alt="" slot="icon-active" />
      <div slot="item-text">个人中心</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
img {
  width: 50%;
}
.tab-bar {
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
}
.tab-bar-item {
  flex: 1;
  color: black;
  font-size: 14px;
  text-align: center;
}
</style>