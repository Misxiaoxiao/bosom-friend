<template>
  <div class="item_one">
    <div class="imgs">
      <img :src="imgSrc" alt="">
    </div>
    <p>{{name}}</p>
    <p v-if="author !== ''">{{author}}</p>
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
  .imgs {
    width: 100%;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  > p {
    font-size: @font-text;
    color: @font-color;
  }
}
</style>
