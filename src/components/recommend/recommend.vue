<template>
  <div class="recommend">
    <div class="recommend_connect">
      <!-- 轮播图组件 -->
      <div class="slider_wapper">
        <slider />
      </div>
      <!-- 热门歌单推荐 -->
      <div class="recommend_list">
        <h1 class="list_title">热门歌单推荐</h1>
        <ul></ul>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../../base/slider/slider";
import { getdisclist } from "../../api/recommend.js";
export default {
  components: {
    Slider
  },
  created() {
    this._getdisclist();
  },
  methods: {
    _getdisclist() {
      getdisclist().then(value => {
        window.console.log(value);
      });
    }
  }
};
</script>

<style lang='less'>
@import "../../common/less/font";
.recommend {
  display: fixed;
  width: 100%;
  top: 88px;
  bottom: 0px;
  .recommend_connect {
    height: 100%;
    overflow: hidden;
    .slider_wapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
    .recommend_list {
      .list_title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: @font-size-medium;
        color: @color-theme;
      }
    }
  }
}
</style>