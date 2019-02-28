<template>
  <el-dialog
    width="340px"
    :visible.sync="dialogVisible"
    :append-to-body="true"
    :close-on-click-modal="false"
    :modal="false"
    custom-class="login-dialog"
    >
    <div class="login-body">
      <i class="icon el-icon-service"></i>
      <div class="form">
        <div class="input-items">
          <div class="input-box">
            <div class="l-icon flex-c-c">
              <i></i>
            </div>
            <el-input
              :autofocus="true"
              v-model="phone"
              placeholder="请输入手机号"
              clearable/>
          </div>
          <div class="input-box border-t">
            <div class="l-icon flex-c-c">
              <i></i>
            </div>
            <el-input
              v-model="password"
              type="password"
              placeholder="请输入密码"
              clearable/>
          </div>
        </div>
        <div class="btns">
          <el-button
            :disabled="!disabled"
            :loading="loading"
            @click="loginClick"
            type="danger">立即登录</el-button>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      phone: '',
      password: '',
      loading: false,
    };
  },
  computed: {
    disabled() {
      return this.phone.length === 11 && this.password.length > 1;
    },
  },
  mounted() {
    this.$bus.$on('login', res => {
      this.dialogVisible = true;
    });
  },
  methods: {
    loginClick() {

    },
  },
};
</script>

<style lang="less" scoped>
@import '../../../styles/var.less';

.login-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    color: @--color-primary;
    font-size: 80px;
  }
  /deep/ .form {
    width: 260px;
    margin-top: 50px;
    .input-items {
      background: white;
      border: 1px solid #f0f0f0;
      border-radius: 2px;
      overflow: hidden;
    }
    .input-box {
      display: flex;
      align-items: center;
      .l-icon {
        width: 40px;
        height: 40px;
        i {
          font-size: 20px;
          color: #999;
        }
      }
      .el-input__inner {
        border: none;
        padding: 0;
      }
    }
    .border-t {
      border-top: 1px solid #f0f0f0;
    }
    .btns {
      margin-top: 30px;
      margin-bottom: 100px;
      button {
        width: 100%;
      }
    }
  }
}
</style>
