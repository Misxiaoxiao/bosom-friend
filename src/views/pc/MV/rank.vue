<template>
  <div class="rank">
    <h4 class="fea_title">
      MV巅峰榜·总榜
      <div class="btn_box">
        <el-button type="text">
          更多
        </el-button>
      </div>
    </h4>
    <div class="con">
      <div class="page">
        <mv-item-one
        v-for="(item, index) in list" :key="index"
        :imgSrc="item.cover"
        :name="item.name"
        :artists="item.artists"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MySlider from '@/components/pc/Slider/index.vue';
import MvItemOne from '@/components/pc/MV/itemOne.vue';
import Utils from '@/utils/index';
import { dealArray } from '@/utils/common/index';

export default {
  components: {
    MySlider,
    MvItemOne,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.initMvList();
  },
  methods: {
    initMvList() {
      const params = {
        limit: 3,
      };
      Utils.Api.mvTop(params)
        .then(res => {
          this.list = res.data;
        });
    },
  },
};
</script>

<style lang="less" scoped>
.rank {
  padding: 0 30px;
  background: linear-gradient(#f6f6f6, #ffff);
  > h4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .con {
    width: 100%;
    height: auto;
    overflow: hidden;
    .page {
      display: flex;
      justify-content: space-between;
      > div {
        width: 33%;
      }
    }
  }
}
</style>
