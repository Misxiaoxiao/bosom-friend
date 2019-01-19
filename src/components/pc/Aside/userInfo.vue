<template>
  <div class="user-info">
    <div class="avatar no-drag">
      <img v-if="login" >
      <img v-else src="@/assets/max.png" >
    </div>
    <div class="mt-5">
      <el-button style="color: #555;" type="text" class="no-drag" size="mini">
        {{btn}}
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: false,
      btn: '立即登录',
    }
  },
};
</script>

<style lang="less" scoped>
.user-info {
  -webkit-app-region: drag;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .avatar {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .type-icon {
    display: flex;
    justify-content: center;
    i {
      font-size: 22px;
      color: #999;
      margin-left: 8px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>
