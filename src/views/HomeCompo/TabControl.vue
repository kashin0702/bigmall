<template>
  <div class="tab-control">
    <div class="tab-item" v-for="(item,index) in tabList" @click="itemClick(index)" >
      <span :class="{active: currentIndex === index}">{{item}}</span> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data(){
    return {
      tabList: ['流行','新款','精选'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index 

      this.$emit('itemClick',index)
    }
  },
  
  
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    justify-content: space-evenly;
  }
  .tab-item {
    flex: 1;
    text-align: center;
  }
  .active {
    border-bottom: 2px solid;
    color: red
  }
</style>