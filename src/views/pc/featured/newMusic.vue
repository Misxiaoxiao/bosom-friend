<template>
  <div class="new_muisc">
    <h4 class="fea_title">
      新歌速递
      <div class="types">
        <span v-for="(item, index) in types" :key="index">{{item.name}}</span>
      </div>
    </h4>
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
.new_muisc {
  padding: 0 30px;
  > h4 {
    display: flex;
  }
  .types {
    > span {
      font-size: 12px;
    }
  }
}
</style>
