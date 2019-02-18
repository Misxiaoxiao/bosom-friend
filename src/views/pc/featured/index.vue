<template>
  <div class="featured">
    <featured-banner />
    <hot-recommend />
    <new-music />
    <album-starter />
    <hot-article />
  </div>
</template>

<script>
import FeaturedBanner from './banner.vue';
import HotRecommend from './hotRecommend.vue';
import NewMusic from './newMusic.vue';
import AlbumStarter from './albumStarter.vue';
import HotArticle from './hotArticle.vue';

export default {
  components: {
    FeaturedBanner,
    HotRecommend,
    NewMusic,
    AlbumStarter,
    HotArticle,
  },
};
</script>

<style lang="less" scoped>
.featured {
  width: 100%;
  overflow: scroll;
}
</style>
