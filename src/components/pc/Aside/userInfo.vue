<template>
  <div class="user-info" @click="login">
    <div class="avatar no-drag">
      <img v-if="isLogin" :src="profile.avatarUrl">
      <img v-else src="@/assets/max.png" >
    </div>
    <div class="mt-5">
      <el-button style="color: #555;" type="text" class="no-drag" size="mini">
        {{isLogin ? profile.nickname : name}}
      </el-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      // login: false,
      name: '立即登录',
    };
  },
  computed: {
    ...mapState({
      isLogin: state => state.UserModule.isLogin,
      profile: state => state.UserModule.profile,
    }),
  },
  methods: {
    login() {
      if (this.isLogin) {

      } else {
        this.$bus.$emit('login');
      }
    },
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
