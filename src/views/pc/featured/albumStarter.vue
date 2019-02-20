<template>
  <div class="album_starter">
    <h4 class="fea_title">
      推荐电台
      <div class="btn_box">
        <el-button type="text" :disabled="true">
          <i class="iconfont icon-shangyiye"></i>
        </el-button>
        <el-button type="text">
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
            :author="item.program.dj.nickname"/>
        </div>
      </my-slider>
    </div>
  </div>
</template>

<script>
import MySlider from '@/components/pc/Slider/index.vue';
import FeaturedItemOne from '@/components/pc/Featured/itemOne.vue';
import Utils from '@/utils/index';

export default {
  components: {
    MySlider,
    FeaturedItemOne,
  },
  data() {
    return {
      list: [],
      currentPage: 1,
      sliderClass: 'album-slider',
      sliderOption: {
        effect: 'slide',
        loop: false,
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
      Utils.Api.personalizedDJ()
        .then((res) => {
          this.list = this.dealArray(res.result, 5);
          setTimeout(() => {
            this.$refs.albumList.init();
          }, 100);
        });
    },
    dealArray(arr, num) {
      const newArr = [];
      for (let i = 0; i < arr.length; i++) {
        const index = parseInt(i / num, 10);
        if (newArr[index]) {
          newArr[index].push(arr[i]);
        } else {
          newArr[index] = [];
          newArr[index].push(arr[i]);
        }
      }
      return newArr;
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
      border: 1px solid #fff;
      display: flex;
      > div {
        width: 20%;
      }
    }
  }
}
</style>
