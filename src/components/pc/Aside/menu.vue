<template>
  <el-scrollbar class="menu-view scroll-page">
    <div class="menu-group">
      <div class="menu-title">在线音乐</div>
      <div :class="'menu-item' + (currentRoute === 'featured' ? ' active' : '')" @click="linkFeatured">
        <div class="left">
          <i class="iconfont icon-icon-"></i>音乐馆
        </div>
      </div>
      <div :class="'menu-item' + (currentRoute === 'MV' ? ' active' : '')" @click="linkMV">
        <div class="left">
          <i class="iconfont icon-shipin"></i>MV
        </div>
      </div>
      <div :class="'menu-item' + (currentRoute === 'radio' ? ' active' : '')" @click="linkRadio">
        <div class="left">
          <i class="iconfont icon-dianbo01"></i>个性电台
        </div>
      </div>
    </div>
    <div class="menu-group">
      <div class="menu-title">我的音乐</div>
       <div class="menu-item">
        <div class="left">
          <i class="iconfont icon-xihuan"></i>我喜欢
        </div>
      </div>
      <div class="menu-item">
        <div class="left">
          <i class="iconfont icon-computer4diannao"></i>本地歌曲
        </div>
      </div>
      <div class="menu-item">
        <div class="left">
          <i class="iconfont icon-xihuan"></i>下载歌曲
        </div>
      </div>
      <div class="menu-item">
        <div class="left">
          <i class="iconfont icon-2lishidingzhishuju"></i>播放历史
        </div>
      </div>
      <div class="menu-item">
        <div class="left">
          <i></i>试听列表
        </div>
      </div>
    </div>
    <div class="menu-group">
      <div class="menu-title">我创建的歌单</div>
       <div class="menu-item">
        <div class="left">
          <i></i>wake me up
        </div>
      </div>
    </div>
    <div class="menu-group">
      <div class="menu-title">
        <div class="left">我收藏的歌单</div>
        <div class="right">
          <i>新建</i>
        </div>
      </div>
       <div class="menu-item">
        <div class="left">
          <i></i>Convoy
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: 'featured',
    };
  },
  watch: {
    $route(r) {
      this.currentRoute = r.name;
    },
  },
  created() {
    this.currentRoute = this.$route.name;
  },
  methods: {
    linkFeatured() {
      this.$router.push({
        name: 'featured',
      });
    },
    linkMV() {
      this.$router.push({
        name: 'MV',
      });
    },
    linkRadio() {
      this.$router.push({
        name: 'radio',
      });
    },
  },
};
</script>

<style lang="less" scoped>
.scroll-page {
  overflow: hidden;
  /deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
.menu-view {
  flex: 1;
  overflow: hidden;
  .menu-group {
    margin-bottom: 25px;
    padding: 0 20px;
    .menu-title {
      margin-bottom: 10px;
      font-size: 12px;
      padding-left: 10px;
      display: flex;
      align-items: center;
      color: #666;
      .left {
        flex: 1;
      }
      .right {
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .iconfont {
          font-size: 14px;
          color: #888;
          margin-left: 10px;
        }
      }
    }
    .menu-item {
      padding: 5px 10px;
      font-size: 13px;
      border-radius: 2px;
      margin-bottom: 5px;
      cursor: pointer;
      .left {
        .iconfont {
          margin-right: 10px;
        }
        .iconfont.hot {
          color: #ff4400;
        }
      }
      &:hover {
        background: #e6e7e7;
      }
      &.active {
        background: #92B6F6;
        color: #fff;
      }
    }
  }
}
</style>
