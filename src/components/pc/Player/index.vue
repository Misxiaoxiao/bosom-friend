<template>
  <div class="player">
    <div class="control">
      <el-button type="text">
        <i>快退</i>
      </el-button>
      <el-button class="play-btn" type="text">
        <i>播放</i>
      </el-button>
      <el-button type="text">
        <i>快进</i>
      </el-button>
    </div>
    <div class="cover">
      <img class="cover-image" :src="cover" />
      <audio v-show="false" ref="audio" />
    </div>
    <div class="tone">
      <el-dropdown placement="top">
        <span class="tone-dropdown">标准<i class="el-icon-arrow-up el-icon--right"></i></span>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
@height: 70px;
.player {
  display: flex;
  align-items: center;
  /deep/ .control {
    width: 230px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    button {
      margin: 0 15px;
      color: #92B6F6;
      i {
        font-size: 32px;
      }
      &:hover {
        color: #6699f1;
      }
    }
    .play-btn {
      i {
        font-size: 38px;
      }
    }
  }
  .cover {
    width: @height;
    height: @height;
    display: flex;
    align-items: center;
    justify-content: center;
    .cover-image {
      width: @height - 20px;
      height: @height - 20px;
      border-radius: 2px;
    }
  }
  /deep/ .tone {
    width: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    .el-dropdown {
      width: 35px;
      border: 1px solid #999;
      font-size: 10px;
      color: #333;
      padding: 1px 5px;
      border-radius: 2px;
      cursor: pointer;
      i {
        font-size: 10px;
      }
      &:hover {
        color: #92B6F6;
        border: 1px solid #92B6F6;
      }
    }
  }
  .info {
    flex: 1;
    height: @height;
    display: flex;
    flex-direction: column;
    padding: 0px;
    justify-content: center;
    .top {
      font-size: 13px;
      color: #666;
      display: flex;
      justify-content: space-between;
      .name {
        font-size: 13px;
        color: #444;
      }
      .time {
        font-size: 12px;
        color: #999;
      }
    }
  }
  .progress {
    margin-top: 10px;
    /deep/ .el-progress {
      .el-progress-bar__outer {
        border-radius: 0;
      }
      .el-progress-bar__inner {
        border-radius: 0;
      }
    }
    /deep/ .el-slider {
      .el-slider__runway {
        height: 2px;
        margin: 2px 0;
      }
    }
  }
  .actions {
    width: 200px;
    padding: 0 20px;
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    button {
      color: #333;
      flex: 1;
      flex-shrink: 0;
      &:hover {
        color: #92B6F6;
      }
    }
  }
}
</style>
