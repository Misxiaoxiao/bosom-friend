<template>
  <div class="item_one">
    <div class="img">
      <img src="" alt="">
    </div>
    <p class="name"></p>
    <p class="artist">
      <span></span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    artists: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
</style>
