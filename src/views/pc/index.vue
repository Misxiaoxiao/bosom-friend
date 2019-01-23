<template>
  <div>
    <el-container class="container" id="main">
      <el-container style="position: relative">
        <el-aside width="270px" class="aside">
          <pc-aside />
        </el-aside>
        <el-container>
          <el-header class="header" height="50px" style="-webkit-app-region: drag">
            <pc-header />
          </el-header>
          <el-main class="main">
            <keep-alive>
              <router-view />
            </keep-alive>
          </el-main>
        </el-container>
      </el-container>
      <el-footer class="footer" height="70px">
        <pc-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import PcAside from '@/components/pc/Aside/index';
import PcHeader from '@/components/pc/Header/index';
import PcFooter from '@/components/pc/Footer/index';

export default {
  components: {
    PcAside,
    PcHeader,
    PcFooter,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.aside {
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #efefef, #efefef);
}
.container {
  height: 100vh;
}
.header {
  background: #fafafa;
}
.main {
  padding: 0;
  margin: 0;
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-shrink: 0;
}
.footer {
  background: #f7f7f7;
  padding: 0;
}
</style>
