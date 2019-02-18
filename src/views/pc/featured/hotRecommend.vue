<template>
  <div class="hot_rec">
    <h4 class="fea_title">热门推荐</h4>
    <div class="content">
      <featured-item-one
        v-for="(item, index) in list" :key="index"
        v-if="index < 5"
        :imgSrc="item.picUrl"
        :name="item.name" />
    </div>
  </div>
</template>

<script>
import FeaturedTemplate from '@/components/pc/Featured/template.vue';
import FeaturedItemOne from '@/components/pc/Featured/itemOne.vue';
import Utils from '@/utils/index';

export default {
  components: {
    FeaturedTemplate,
    FeaturedItemOne,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getPersonalized();
  },
  methods: {
    // 获取推荐歌单
    getPersonalized() {
      Utils.Api.personalized()
        .then((res) => {
          this.list = res.result;
        });
    },
  },
};
</script>

<style lang="less" scoped>
@import '../../../styles/var.less';

.hot_rec {
  padding: 0 30px;
  > .content {
    width: 100%;
    display: flex;
    overflow: hidden;
    > div {
      width: 20%;
      flex: 1;
    }
  }
}
</style>
