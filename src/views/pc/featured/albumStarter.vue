<template>
  <div class="album_starter">
    <h4 class="fea_title">
      热门专辑
      <div class="btn_box">
        <el-button type="text" :disabled="prev" @click="handlePrev">
          <i class="iconfont icon-shangyiye"></i>
        </el-button>
        <el-button type="text" :disabled="next" @click="handleNext">
          <i class="iconfont icon-xiayiye"></i>
        </el-button>
      </div>
    </h4>
    <div class="con">
      <my-slider ref="albumList" :myClass="sliderClass" :options="sliderOption" :data="list">
        <div
        :slot="index"
        v-for="(slide, index) in list" :key="index"
        class="page"
        >
          <featured-item-one
            v-for="(item, index) in slide" :key="index"
            :imgSrc="item.picUrl"
            :name="item.name"
            :author="item.artist.name"/>
        </div>
      </my-slider>
    </div>
  </div>
</template>

<script>
import MySlider from '@/components/pc/Slider/index.vue';
import FeaturedItemOne from '@/components/pc/Featured/itemOne.vue';
import Utils from '@/utils/index';
import { dealArray } from '@/utils/common/index';

export default {
  components: {
    MySlider,
    FeaturedItemOne,
  },
  data() {
    return {
      list: [],
      // pagination
      currentPage: 1,
      totalPage: 5,
      prev: false,
      next: false,
      // slide
      sliderClass: 'album-slider',
      sliderOption: {
        effect: 'slide',
        loop: false,
        allowTouchMove: false,
      },
    };
  },
  created() {
    setTimeout(() => {
      this.initList();
    }, 100);
  },
  methods: {
    initList() {
      const params = {
        offset: 0,
        limit: this.totalPage * 5,
      };
      Utils.Api.topAlbum(params)
        .then((res) => {
          this.list = dealArray(res.albums, 5);
          setTimeout(() => {
            this.$refs.albumList.init();
          }, 100);
          this.dealPagination();
        });
    },
    handlePrev() {
      this.currentPage -= 1;
      this.$refs.albumList.slidePrev();
      this.dealPagination();
    },
    handleNext() {
      this.currentPage += 1;
      this.$refs.albumList.slideNext();
      this.dealPagination();
    },
    dealPagination() {
      // prev
      if (this.currentPage === 1) {
        this.prev = true;
      } else {
        this.prev = false;
      }
      // next
      if (this.currentPage === this.totalPage) {
        this.next = true;
      } else {
        this.next = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import '../../../styles/var.less';

.album_starter {
  padding: 0 30px;
  > h4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn_box {
    height: 100%;
    padding: 0 15px;
    display: flex;
    > button i {
      font-size: 20px;
    }
  }
  .con {
    width: 100%;
    height: auto;
    overflow: hidden;
    .page {
      display: flex;
      > div {
        width: 20%;
      }
    }
  }
}
</style>
