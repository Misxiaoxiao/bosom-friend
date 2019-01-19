<template>
  <div class="header-view" :style="{height: height}">
    <div class="left flex-c-l">
      <el-button class="no-drag" aria-setsize="mini" type="text">
        <i class="btn iconfont icon-xiangzuo"></i>
      </el-button>
      <el-button class="no-drag" aria-setsize="mini" type="text">
        <i class="btn iconfont icon-xiangyou"></i>
      </el-button>
      <el-button class="no-drag" aria-setsize="mini" type="text">
        <i class="btn iconfont icon-shuaxin"></i>
      </el-button>
      <div class="search no-drag">
        <el-input size="mini" prefix-icon="el-icon-search" placeholder="搜索音乐、MV、歌单、用户" />
      </div>
    </div>
    <div class="right">
      <el-button class="no-drag" size="mini" type="text">
        <i class="btn">私信</i>
      </el-button>
      <el-button class="no-drag" size="mini" type="text">
        <i class="btn">换肤</i>
      </el-button>
      <el-button class="no-drag" size="mini" type="text">
        <i class="btn">设置</i>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.header-view {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /deep/ .left {
    .btn {
      font-size: 17px;
      color: #999;
      &:hover {
        color: #92B6F6;
      }
    }
    .el-icon-refresh {
      color: #333;
    }
    .search {
      margin-left: 15px;
      width: 200px;
      .el-input__inner {
        border: none;
        border-radius: 30px;
        background: #e9e9e9;
        color: #8c8c8c;
      }
    }
  }
  .right {
    .btn {
      font-size: 17px;
      color: #333;
      &:hover {
        color: #92B6F6;
      }
    }
  }
}
</style>
