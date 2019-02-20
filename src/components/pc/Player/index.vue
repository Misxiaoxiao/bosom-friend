<template>
  <div class="player">
    <div class="control">
      <el-button type="text">
        <i class="iconfont icon-icon-3"></i>
      </el-button>
      <el-button class="play-btn" type="text">
        <i class="iconfont icon-icon-1"></i>
      </el-button>
      <el-button type="text">
        <i class="iconfont icon-icon-2"></i>
      </el-button>
    </div>
    <div class="cover">
      <img class="cover-image" />
      <audio v-show="false" ref="audio" />
    </div>
    <div class="tone">
      <el-dropdown placement="top">
        <span class="tone-dropdown">标准<i class="el-icon-arrow-up el-icon--right"></i></span>
        <el-dropdown-menu slot="dropdown" style="width: 220px">
          <el-dropdown-item>
            <div class="flex-c-l">
              <div class="check" style="width: 30px;">
                <i class="el-cion-check" style="color: #92B6F6;"></i>
              </div>
              <span>标准品质</span>
            </div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div class="flex-c-l">
              <div class="check" style="width: 30px"></div>
              <span>HQ高品质</span>
            </div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div class="flex-c-l">
              <div class="check" style="width: 30px"></div>
              <span>SQ无损品质</span>
              <img src="../../../assets/svip.png" style="margin-left: 5px; width: 22px" />
              <img src="../../../assets/sui.png" style="margin-left: 5px; width: 22px" />
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="mt-10" placement="top" size="medium">
        <span class="tone-dropdown">音效<i class="el-icon-arrow-up el-icon--right"></i></span>
        <el-dropdown-menu slot="dropdown" style="width: 200px">
          <el-dropdown-item>关闭</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="info">
      <div class="top">
        <div class="names">
          <div>
            <span class="name">{{name}}</span>
            <span class="ar_name" v-if="ar_name"> - {{ar_name}}</span>
          </div>
        </div>
        <div class="time">{{play_time * 1000 | formatDuring}} / {{song.dt | formatDuring}}</div>
      </div>
      <div class="progress">
        <el-slider :show-tooltip="true" v-model="play_time" input-size="mini" :min="0" :max="song.dt/1000"></el-slider>
      </div>
    </div>
    <div class="actions">
      <el-button type="text">
        <i class="iconfont icon-xihuan"></i>
      </el-button>
      <el-button type="text">
        <i class="iconfont icon-xunhuanbofang01"></i>
      </el-button>
      <el-button type="text">
        <i class="iconfont icon-icon-5"></i>
      </el-button>
      <el-popover
        placement="top-start"
        width="300"
        popper-class="ls"
      >
        <!-- <playlist /> -->
        <el-button type="text" slot="reference">
          <i class="iconfont icon-liebiao1"></i>
        </el-button>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      audio: null,
      play_time: 0,
      max_time: 0,
      interval: null,
      play_type: 1, // 播放次序 0单曲循环 1列表循环 2随机播放
    };
  },
  // 钩子
  // mounted() {},
  watch: {},
  computed: {
    play_list() {
      return [];
    },
    song() {
      return {};
    },
    music_urls() {
      return '';
    },
    cover() {
      try {
        return '';
      } catch (e) {
        return '';
      }
    },
    name() {
      try {
        return '知音';
      } catch (e) {
        return '知音';
      }
    },
    ar_name() {
      try {
        return '';
      } catch (e) {
        return false;
      }
    },
  },
  methods: {},
};
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
      width: 45px;
      border: 1px solid #999;
      font-size: 10px;
      color: #333;
      padding: 1px 5px;
      border-radius: 2px;
      cursor: pointer;
      > span {
        display: flex;
        align-items: center;
      }
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
      .el-slider__bar {
        height: 2px;
      }
      .el-slider__button-wrapper {
        width: 6px;
        height: 6px;
        top: -10px;
      }
      .el-slider__button {
        width: 2px;
        height: 2px;
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
