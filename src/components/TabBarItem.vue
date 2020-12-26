<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-if="!isActive"><slot name="icon"></slot></div>
    <div class="item-icon-active" v-else><slot name="icon-active"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1 
    },
    activeStyle(){
      return this.isActive ? {color: 'red'} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  
</style>