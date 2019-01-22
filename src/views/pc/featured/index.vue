<template>
  <div class="featured">
    <featured-slider />
  </div>
</template>

<script>
import FeaturedSlider from './slider.vue';

export default {
  components: {
    FeaturedSlider,
  },
};
</script>

<style lang="less" scoped>
.featured {
  width: 100%;
}
</style>
