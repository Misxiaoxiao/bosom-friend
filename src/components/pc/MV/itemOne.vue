<template>
  <div class="item_one">
    <div class="img">
      <img :src="imgSrc" alt="">
      <div class="play_count" v-if="playCount !== 0">
        <i class="iconfont icon-video"></i>{{playCount | changeCount}}
      </div>
      <div class="hover_box"></div>
    </div>
    <p class="name text-ellipsis">{{name}}</p>
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
    playCount: {
      type: Number,
      default: 0,
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
    > .hover_box {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .3);
      transition: .3s;
    }
    > .play_count {
      position: absolute;
      left: 5px;
      bottom: 5px;
      color: #fff;
      font-weight: lighter;
      display: flex;
      align-items: center;
      font-size: @font-text;
      > i {
        font-size: 20px;
        font-weight: bold;
        margin: 0 5px;
      }
    }
  }
  p {
    font-size: @font-text;
    color: @font-color;
    width: 100%;
  }
  &:hover {
    .hover_box {
      opacity: 1;
    }
  }
}
</style>
