<template>
  <div class="new_muisc">
    <h4 class="fea_title">
      新歌速递
      <div class="types">
        <span v-for="(item, index) in types" :key="index">{{item.name}}</span>
      </div>
    </h4>
    <div class="con">
      <el-row class="header">
        <el-col :span="20" class="left middle">
          <i class="iconfont icon-icon-1"></i>播放全部
        </el-col>
        <el-col :span="4" class="right middle">
          <!-- <div class="btn">上一页<i class="iconfont icon-icon-1"></i></div> -->
          <div class="btn">下一页</div>
        </el-col>
      </el-row>
      <div class="container">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { topSongTypes } from '@/model/index';

export default {
  data() {
    return {
      types: topSongTypes,
    };
  },
};
</script>

<style lang="less" scoped>
@import '../../../styles/var.less';

.new_muisc {
  padding: 0 30px;
  > h4 {
    display: flex;
  }
  .types {
    > span {
      font-size: @font-text;
      letter-spacing: 2px;
      margin: 10px;
      cursor: pointer;
      &:hover {
        color: @--color-primary;
      }
    }
  }
  .con {
    background-color: #f5f5f5;
    .middle {
      display: flex;
      align-items: center;
      line-height: 40px;
    }
    .header {
      height: 40px;
      display: flex;
      font-size: @font-text;
      padding: 0 15px;
      box-sizing: border-box;
      .left {
        height: 100%;
        > i {
          margin: 3px;
        }
      }
      .right {
        justify-content: flex-end;
        .btn {
          margin: 0 10px;
        }
      }
    }
  }
}
</style>
