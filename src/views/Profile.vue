<template>
  <div class="profile">
    个人中心

  <Toast/>
  </div>
</template>

<script>
import BottomBar from './DetailCompo/BottomBar'
import Toast from 'components/Toast'

export default {
  name: 'Profile',
  components: {
    BottomBar,
    Toast
  }
}
</script>
