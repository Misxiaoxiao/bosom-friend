<template>
  <div class="featured">
    <featured-banner />
  </div>
</template>

<script>
import FeaturedBanner from './banner.vue';

export default {
  components: {
    FeaturedBanner,
  },
};
</script>

<style lang="less" scoped>
.featured {
  width: 100%;
}
</style>
