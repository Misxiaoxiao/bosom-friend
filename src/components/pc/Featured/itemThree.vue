<template>
  <div class="item_three">
    <div class="img" :style="'height:' + height + 'px; background: url(' + imgSrc + ') no-repeat center; background-size: cover;'"></div>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: 0,
    };
  },
  props: {
    imgSrc: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
  mounted() {
    this.setSize();
  },
  methods: {
    setSize() {
      const w = this.$vnode.elm.clientWidth - 6;
      this.height = w;
    },
  },
};
</script>

<style lang="less" scoped>
@import '../../../styles/var.less';

.item_three {
  padding: 3px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  .img {
    width: 100%;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  > p {
    cursor: pointer;
    font-size: @font-text;
    color: @font-color;
    text-align: center;
    &:hover {
      color: @--color-primary;
    }
  }
}
</style>
