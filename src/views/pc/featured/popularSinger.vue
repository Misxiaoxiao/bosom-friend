<template>
  <div class="hot_article">
    <h4 class="fea_title">
      热门歌手
      <el-button type="text">
        更多 <i class="iconfont icon-xiangyou"></i>
      </el-button>
    </h4>
    <div class="con">
      <featured-item-three
        v-for="(artist, index) in showArtists" :key="index"
        :imgSrc="artist.picUrl"
        :name="artist.name"/>
    </div>
  </div>
</template>

<script>
import FeaturedItemThree from '@/components/pc/Featured/itemThree.vue';
import Utils from '@/utils/index';

export default {
  components: {
    FeaturedItemThree,
  },
  data() {
    return {
      artists: [],
    };
  },
  computed: {
    showArtists() {
      return this.artists.filter((item, index) => {
        if (index < 5) {
          return item;
        }
      });
    },
  },
  created() {
    this.getTopArtists();
  },
  methods: {
    // 获取热门歌手列表
    getTopArtists() {
      const params = {
        offset: 0,
        limit: 5,
      };
      Utils.Api.topArtists(params)
        .then((res) => {
          this.artists = res.artists;
        });
    },
  },
};
</script>

<style lang="less" scoped>
.hot_article {
  padding: 0 30px;
  > h4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .con {
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    > div {
      width: 20%;
    }
  }
}
</style>
