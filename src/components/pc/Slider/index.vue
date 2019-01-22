<template>
  <div :class="myClass">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide, index) in data" :key="index">
        <slot :name="index"></slot>
      </div>
    </div>

    <div class="swiper-pagination" v-if="pagination"></div>

    <div class="swiper-button-prev" v-if="button"></div>
    <div class="swiper-button-next" v-if="button"></div>

    <div class="swiper-scrollbar" v-if="scrollBar"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

export default {
  props: {
    myClass: {
      type: String,
      default: 'swiper-container',
    },
    options: {
      type: Object,
      default: {},
    },
    data: {
      type: Array,
      default: () => [],
    },
    pagination: {
      type: Boolean,
      defualt: true,
    },
    button: {
      type: Boolean,
      defualt: true,
    },
    scrollBar: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      mySwiper: null,
    }
  },
  mounted() {
    this.init();
    this.resize();
  },
  methods: {
    init() {
      const swiperOptions = {
        ...this.options,
        pagination: this.pagination ? '.swiper-pagination' : '',
        nextButton: this.button ? '.swiper-button-next' : '',
        prevButton: this.button ? '.swiper-button-prev' : '',
        scrollBar: this.scrollBar ? '.swiper-scrollbar' : '',
      }
      this.setSize();
      this.mySwiper = new Swiper('.' + this.myClass, this.options);
      console.log(this.mySwiper)
    },
    setSize() {
      const sliderDom = document.querySelector('.' + this.myClass);
      const width = this.options.width ? this.options.width + 'px' : sliderDom.parentNode.offsetWidth + 'px';
      const height = this.options.height ? this.options.height + 'px' : sliderDom.parentNode.offsetHeight + 'px';
      sliderDom.style.width = width;
      sliderDom.style.height = height;
    },
    resize() {
      window.addEventListener('resize', () => {
        this.init();
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
