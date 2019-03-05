<template>
  <div class="mv">
    <div class="tag">
      <div>
        <i></i>榜单
      </div>
      <div>
        <i></i>现场
      </div>
      <div>
        <i></i>频道
      </div>
    </div>
    <mv-new />
    <mv-personalized />
    <mv-rank />
  </div>
</template>

<script>
import MvNew from './new.vue';
import MvPersonalized from './personalized.vue';
import MvRank from './rank.vue';

export default {
  components: {
    MvNew,
    MvPersonalized,
    MvRank,
  },
};
</script>

<style lang="less" scoped>
@import '../../../styles/var.less';

.mv {
  width: 100%;
  overflow: scroll;
  .tag {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 10px 15px;
    box-sizing: border-box;
    > div {
      text-align: center;
      width: 31%;
      height: 65px;
      line-height: 65px;
      background-color: #f5f5f5;
      font-size: @font-title;
    }
  }
}
</style>
