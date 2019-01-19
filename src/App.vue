<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'bosom friend',
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
