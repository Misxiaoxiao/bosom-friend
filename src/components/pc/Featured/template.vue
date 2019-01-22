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
      <slot name="list"></slot>
    </div>
  </div>
</template>

<script>
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
  },
  methods: {
    // 上一页
    prev() {},
    // 下一页
    next() {},
  }
}
</script>

<style lang="less" scoped>
</style>
