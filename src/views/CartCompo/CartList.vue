<template>
  <div class="cart-list">
    <CartListItem v-for="item in cartList" :itemInfo="item"/>
  </div>
</template>

<script>
import CartListItem from './CartListItem'
export default {
  name: 'CartList',
  props: {
    cartList: {
      type: Array
    }
  },
  components: {
    CartListItem
  }
}
</script>

<style scoped>

</style>