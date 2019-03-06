<template>
  <div class="item_one">
    <div class="img">
      <img :src="imgSrc" alt="">
    </div>
    <p class="name">{{name}}</p>
    <p class="artist">
      <span
        v-for="(artist, index) in artists" :key="index"
        >{{artist.name}}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    artists: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
@import '../../../styles/var.less';

.item_one {
  padding: 3px;
  box-sizing: border-box;
  cursor: pointer;
  .img {
    width: 100%;
    height: 15vw;
    position: relative;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    font-size: @font-text;
    color: @font-color;
    width: 100%;
  }
}
</style>
