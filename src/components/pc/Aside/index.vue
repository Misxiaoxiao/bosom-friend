<template>
  <div class="wrap">
    <user-info />
    <menus />
  </div>
</template>

<script>
import UserInfo from './userInfo';
import Menus from './menu';

export default {
  components: {
    UserInfo,
    Menus,
  },
};
</script>

<style lang="less" scoped>
.wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
