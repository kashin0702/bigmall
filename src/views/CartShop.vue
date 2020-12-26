<template>
  <div class="cart">
    <NavBar class="nav-bar">
      <span slot="center">购物车({{$store.state.cartList.length}})</span>
    </NavBar>
    <div class="content">
      <CartList :cartList="$store.state.cartList" />
    </div>

    <CartCountBar/>
  </div>
</template>

<script>
import NavBar from 'components/NavBar'
import CartList from './CartCompo/CartList'
import CartListItem from './CartCompo/CartListItem'
import CartCountBar from './CartCompo/CartCountBar'

export default {
  name: 'CartShop',
  components: {
    NavBar,
    CartListItem,
    CartList,
    CartCountBar
  },
  methods: {
    buttomClick(){
      this.item.checked = !this.item.checked
    }
  }
}
</script>

<style scoped>
  .nav-bar {
    font-weight: bold;
    color: #fff;
    background: hotpink;
    text-align: center;
  }
  .content {
    position: relative;
    top: 40px;
    /* bottom: 100px; */
  }
  
</style>
