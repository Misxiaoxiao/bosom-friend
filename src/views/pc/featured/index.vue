<template>
  <div class="featured">
    <featured-banner />
    <hot-recommend />
    <new-music />
    <album-starter />
    <popular-singer />
  </div>
</template>

<script>
import FeaturedBanner from './banner.vue';
import HotRecommend from './hotRecommend.vue';
import NewMusic from './newMusic.vue';
import AlbumStarter from './albumStarter.vue';
import PopularSinger from './popularSinger.vue';

export default {
  components: {
    FeaturedBanner,
    HotRecommend,
    NewMusic,
    AlbumStarter,
    PopularSinger,
  },
};
</script>

<style lang="less" scoped>
.featured {
  width: 100%;
  overflow: scroll;
}
</style>
