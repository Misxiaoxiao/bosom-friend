<template>
  <div class="slider">
    <my-slider ref="banner" :options="options" :data="sliderArr" :button="false" :pagination="false">
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
        slidesPerView: 1.7,
        resistanceRatio: 0,
        grabCursor: true,
        loopAdditionalSlides: 8,
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
          stretch: 40,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        },
      },
      sliderArr: [],
    };
  },
  created() {
    Utils.Api.banner()
      .then((res) => {
        this.sliderArr = res.banners;
        setTimeout(() => {
          this.$refs.banner.init();
        }, 100);
      });
  }
};
</script>

<style lang="less" scoped>
.slider {
  width: 100%;
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
