<template>
  <div class="new_muisc">
    <h4 class="fea_title">
      新歌速递
      <div class="types">
        <span
        v-for="(item, index) in types" :key="index"
        :class="item.val === type ? 'active' : ''"
        @click="changeType(item.val)"
        >{{item.name}}</span>
      </div>
    </h4>
    <div class="con">
      <el-row class="header">
        <el-col :span="20" class="left middle">
          <i class="iconfont icon-icon-1"></i>播放全部
        </el-col>
        <el-col :span="4" class="right middle">
          <el-button type="text" :disabled="prev" @click="handlePrev">
            <i class="iconfont icon-shangyiye"></i>
          </el-button>
          <el-button type="text" :disabled="next" @click="handleNext">
            <i class="iconfont icon-xiayiye"></i>
          </el-button>
        </el-col>
      </el-row>
      <div class="container">
        <my-slider ref="newMusicList" :myClass="sliderClass" :options="sliderOption" :data="list">
          <div
          :slot="index"
          v-for="(slide, index) in list" :key="index"
          class="page"
          >
            <featured-item-two
              v-for="(item, index) in slide" :key="index"
              :imgSrc="item.album.picUrl"
              :name="item.name"
              :artists="item.artists"
              :isSQ="true"
              :hasMV="item.mvid !== 0"/>
          </div>
        </my-slider>
      </div>
    </div>
  </div>
</template>

<script>
import MySlider from '@/components/pc/Slider/index.vue';
import FeaturedItemTwo from '@/components/pc/Featured/itemTwo.vue';
import Utils from '@/utils/index';
import { dealArray } from '@/utils/common/index';
import { topSongTypes } from '@/model/index';

export default {
  components: {
    MySlider,
    FeaturedItemTwo,
  },
  data() {
    return {
      types: topSongTypes,
      type: topSongTypes[0].val,
      list: [],
      // pagination
      currentPage: 1,
      totalPage: 5,
      prev: false,
      next: false,
      // slide
      sliderClass: 'newMusic-slider',
      sliderOption: {
        effect: 'slide',
        loop: false,
        allowTouchMove: false,
      },
    };
  },
  created() {
    this.getListData();
  },
  methods: {
    // 获取列表数据
    getListData() {
      const params = {
        type: this.type,
      };
      Utils.Api.topSong(params)
        .then(res => {
          this.list = dealArray(res.data, 9);
          setTimeout(() => {
            this.$refs.newMusicList.init();
          }, 100);
          this.dealPagination();
        });
    },
    handlePrev() {
      this.currentPage -= 1;
      this.$refs.newMusicList.slidePrev();
      this.dealPagination();
    },
    handleNext() {
      this.currentPage += 1;
      this.$refs.newMusicList.slideNext();
      this.dealPagination();
    },
    dealPagination() {
      // prev
      if (this.currentPage === 1) {
        this.prev = true;
      } else {
        this.prev = false;
      }
      // next
      if (this.currentPage === this.totalPage) {
        this.next = true;
      } else {
        this.next = false;
      }
    },
    changeType(val) {
      this.type = val;
      this.getListData();
    },
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
      &.active {
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
      border-bottom: 1px solid #ebebeb;
      .left {
        height: 100%;
        > i {
          margin: 3px;
        }
      }
      .right {
        justify-content: flex-end;
        i {
          font-size: 20px;
        }
      }
    }
  }
  .container {
    width: 100%;
    height: auto;
    overflow: hidden;
    .page {
      display: flex;
      flex-wrap: wrap;
      padding: 12px 15px;
      justify-content: space-around;
      > div {
        width: 30%;
      }
    }
  }
}
</style>
