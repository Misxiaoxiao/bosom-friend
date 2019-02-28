<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'bosom friend',
  mounted() {
    // this.openWin();
  },
  methods: {
    openWin() {
      const iWidth = 1200; // 弹出窗口的宽度;
      const iHeight = 800; // 弹出窗口的高度;
      // 获得窗口的垂直位置
      const iTop = (window.screen.availHeight - 30 - iHeight) / 2;
      // 获得窗口的水平位置
      const iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
      const strWindowFeatures =
        `width=${iWidth},height=${iHeight}` +
        `,top=${iTop},left=${iLeft}` +
        `menubar=no,location=no,resizable=no,scrollbars=no,status=false`;
      const { href } = this.$router.resolve({
        name: 'featured',
      });
      const path = this.$route.path;
      window.open(href, 'bosom friend', strWindowFeatures);
    },
  },
};
</script>

<style lang="less">
@import url('./styles/index.less');

body {
  padding: 0;
  margin: 0;
  -webkit-user-select: none;
  height: 800px;
  overflow: hidden;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
