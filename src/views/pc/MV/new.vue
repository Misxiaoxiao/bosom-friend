<template>
  <div class="new">
    <h4 class="fea_title">
      首播
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
      <my-slider ref="newMvList" :myClass="sliderClass" :options="sliderOption" :data="list">
        <div
        :slot="index"
        v-for="(slide, index) in list" :key="index"
        class="page"
        >
          <mv-item-one
          v-for="(item, index) in slide" :key="index"
          :imgSrc="item.cover"
          :name="item.name"
          :artists="item.artists"
          />
        </div>
      </my-slider>
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
      // pagination
      currentPage: 1,
      totalPage: 3,
      prev: false,
      next: false,
      // slide
      sliderClass: 'newMV-slider',
      sliderOption: {
        effect: 'slide',
        loop: false,
        allowTouchMove: false,
      },
    };
  },
  created() {
    this.initMvList();
  },
  methods: {
    initMvList() {
      const params = {
        limit: 12,
      };
      Utils.Api.mvFirst(params)
        .then(res => {
          this.list = dealArray(res.data, 3);
          setTimeout(() => {
            this.$refs.newMvList.init();
          }, 100);
          this.dealPagination();
        });
    },
    handlePrev() {
      this.currentPage -= 1;
      this.$refs.newMvList.slidePrev();
      this.dealPagination();
    },
    handleNext() {
      this.currentPage += 1;
      this.$refs.newMvList.slideNext();
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
.new {
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
      justify-content: space-between;
      > div {
        width: 33%;
      }
    }
  }
}
</style>
