<template>
  <div class="slider">
    <my-slider :options="options" :data="sliderArr">
      <div :slot="index" v-for="(slide, index) in sliderArr" :key="index">{{index}}</div>
    </my-slider>
  </div>
</template>

<script>
import MySlider from '@/components/pc/Slider/index.vue';

export default {
  components: {
    MySlider,
  },
  data() {
    return {
      options: {
        loop: true,
      },
      sliderArr: [{}, {}, {}],
    }
  },
};
</script>

<style lang="less" scoped>
.slider {
  width: 100%;
  height: 30vw;
  margin-top: 30px;
  background: #ccc;
}
</style>
