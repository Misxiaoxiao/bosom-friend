<template>
  <div class="slider">
    <my-slider ref="banner" :options="options" :data="sliderArr" :button="false" :pagination="true">
      <div
      :slot="index"
      v-for="(slide, index) in sliderArr" :key="index"
      class="slide-one">
        <img :src="slide.picUrl" alt="">
      </div>
    </my-slider>
  </div>
</template>

<script>
import MySlider from '@/components/pc/Slider/index.vue';
import Utils from '@/utils/index';

export default {
  components: {
    MySlider,
  },
  data() {
    return {
      options: {
        effect: 'coverflow',
        initialSlide: 0,
        loop: true,
        slidesPerView: 1.5,
        resistanceRatio: 0,
        grabCursor: true,
        loopAdditionalSlides: 3,
        centeredSlides: true,
        observer: true,
        observeParents: true,
        paginationType: 'bullets',
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
        autoplay: {
          delay: 5000,
        },
        coverflowEffect: {
          rotate: 0,
          stretch: 10,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        },
      },
      sliderArr: [],
    };
  },
  created() {
    this.initBanner();
  },
  methods: {
    // 获取banner数据 初始化banner
    initBanner() {
      Utils.Api.banner()
        .then((res) => {
          this.sliderArr = res.banners;
          setTimeout(() => {
            this.$refs.banner.init();
          }, 100);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.slider {
  box-sizing: border-box;
  width: 100%;
  padding: 0 30px;
  height: 20vw;
  margin-top: 15px;
  background: #fff;
  .slide-one {
    width: 50vw;
    height: 20vw;
    background-color: #eee;
    > img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
