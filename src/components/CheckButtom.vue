<template>
  <!-- 从父组件获取checked状态 给class绑定相应状态 -->
  <div class="check-buttom" @click="checkClick" :class="{ isChecked: checked }">
    <img src="~assets/check.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButtom",
  methods: {
    checkClick() {
      this.$emit("checkClick");
    },
  },  
  props: {
    checked: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.check-buttom {
  width: 20px;
  height: 20px;
  /* background: red; */
  border-radius: 50%;
}
.check-buttom img {
  width: 100%;
  border-radius: 50%;
}
.isChecked {
  border: 2px solid rgb(199, 11, 11);
}
</style>