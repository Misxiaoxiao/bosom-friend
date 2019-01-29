<template>
  <div class="featured">
    <featured-banner />
    <for-you />
    <new-music />
    <album-starter />
    <hot-article />
  </div>
</template>

<script>
import FeaturedBanner from './banner.vue';
import ForYou from './forYou.vue';
import NewMusic from './newMusic.vue';
import AlbumStarter from './albumStarter.vue';
import HotArticle from './hotArticle.vue';

export default {
  components: {
    FeaturedBanner,
    ForYou,
    NewMusic,
    AlbumStarter,
    HotArticle,
  },
};
</script>

<style lang="less" scoped>
.featured {
  width: 100%;
}
</style>
