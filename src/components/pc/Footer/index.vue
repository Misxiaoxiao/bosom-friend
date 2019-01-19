<template>
  <div class="footer-view">
    <player />
  </div>
</template>

<script>
import Player from '@/components/pc/Player/index';
export default {
  components: {
    Player,
  },
  props: {
    height: String,
  }
}
</script>

<style lang="less" scoped>
.footer-view {
  position: relative;
  z-index: 200;
}
</style>
