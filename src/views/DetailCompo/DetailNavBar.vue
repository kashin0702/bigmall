<template>
  <NavBar>
    <div slot="center">
      <div v-for="(item,index) in titles" :class="{active: currentIndex === index}">
        {{item}}
      </div>
    </div>
  </NavBar>
</template>

<script>
import NavBar from 'components/NavBar'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data(){
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  }
}
</script>

<style scoped>
  .active {
    color: palevioletred
  }
</style>