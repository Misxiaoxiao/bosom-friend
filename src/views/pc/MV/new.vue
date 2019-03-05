<template>
  <div class="new">
    <h4 class="fea_title">首播</h4>
    <div class="con">
      <my-slider ref="newMvList" :myClass="sliderClass" :options="sliderOption" :data="list">
        <div
        :slot="index"
        v-for="(slide, index) in list" :key="index"
        class="page"
        >
          
        </div>
      </my-slider>
    </div>
  </div>
</template>

<script>
import MySlider from '@/components/pc/Slider/index.vue';
import MvItemOne from '@/components/pc/MV/itemOne.vue';

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
};
</script>

<style lang="less" scoped>
.new {
  padding: 0 30px;
}
</style>
