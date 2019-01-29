<template>
  <div class="template">
    <header class="header">
      <div class="left">{{title}}</div>
      <div class="right" v-if="hasBtn">
        <i class="" @click="prev">上一页</i>
        <i class="" @click="next">下一页</i>
      </div>
    </header>
    <div class="container">
      <!-- 滑动内容的位置（滑动插件自己选择） -->
      <my-slider :options="options" :data="sliderArr">
        <slot name="list"></slot>
      </my-slider>
    </div>
  </div>
</template>

<script>
import MySlider from '@/components/pc/Slider/index.vue';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    hasBtn: {
      type: Boolean,
      default: false,
    },
    dataObj: {
      type: Array,
      default: () => [],
    },
    limitNum: {
      type: Number,
      default: 0,
    },
  },
  components: {
    MySlider,
  },
  data() {
    return {
      options: {},
      sliderArr: [],
    }
  },
  methods: {
    // 上一页
    prev() {},
    // 下一页
    next() {},
    init() {

    },
  },
};
</script>

<style lang="less" scoped>
</style>
