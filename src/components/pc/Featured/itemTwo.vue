<template>
  <div class="item_two">
    <div class="img">
      <img :src="imgSrc" alt="">
    </div>
    <div class="con">
      <div class="name">
        <span>{{name}}</span>
      </div>
      <div class="artist">
        <div>
          <span
          v-for="(artist, index) in artists" :key="index"
          >{{artist.name}}</span>
        </div>
        <div class="btns">
          <i class="iconfont icon-z"></i>
          <i class="iconfont icon-xihuan"></i>
          <i class="iconfont icon-web__xiazai"></i>
          <i class="iconfont icon-gengduo"></i>
        </div>
      </div>
    </div>
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
};
</script>

<style lang="less" scoped>
@import '../../../styles/var.less';

.item_two {
  width: 30%;
  height: 45px;
  margin: 7px 0;
  display: flex;
  > .img {
    width: 45px;
    height: 45px;
    // float: left;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .con {
    flex: 1;
    float: left;
    margin-left: 10px;
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: @font-text;
    color: @font-color;
    .name {
      span {
        cursor: pointer;
        &:hover {
          color: @--color-primary;
        }
      }
    }
    .artist {
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      span {
        margin-right: 5px;
        cursor: pointer;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          color: @--color-primary;
        }
      }
      .btns {
        opacity: 0;
        i {
          cursor: pointer;
          margin: 0 2px;
          &:hover {
            color: @--color-primary;
          }
        }
      }
    }
    &:hover {
      .btns {
        opacity: 1;  
      }
    }
  }
}
</style>
