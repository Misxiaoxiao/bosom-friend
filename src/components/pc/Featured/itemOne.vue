<template>
  <div class="item_one">
    <div class="imgs">
      <img :src="imgSrc" alt="">
      <div class="hover_box">
        <i class="iconfont icon-icon-1"></i>
      </div>
    </div>
    <p :class="author !== '' ? 'nowrap' : ''">{{name}}</p>
    <p v-if="author !== ''" class="author">{{author}}</p>
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
    author: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="less" scoped>
@import '../../../styles/var.less';

.item_one {
  padding: 3px;
  box-sizing: border-box;
  cursor: pointer;
  .imgs {
    width: 100%;
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
      > i {
        position: absolute;
        right: 10px;
        bottom: 10px;
        font-size: 30px;
        color: #fff;
        &:hover {
          color: @--color-primary;
        }
      }
    }
  }
  > p {
    font-size: @font-text;
    color: @font-color;
    width: 100%;
    &.nowrap {
      overflow:hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    &.author {
      font-size: 12px;
    }
  }
  &:hover {
    .hover_box {
      opacity: 1;
    }
  }
}
</style>
