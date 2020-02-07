<template>
  <div class="slider" ref="slider">
    <div class="slider_group">
      <van-swipe
        class="my-swipe"
        :autoplay="interval"
        indicator-color="white"
        :height="height"
        :width="width"
        :duration="600"
        :stop-propagation="false"
        @change="changeindex"
        :initial-swipe="initial"
      >
        <van-swipe-item v-for="item in recommend" :key="item.id">
          <a :href="item.linkUrl">
            <img :src="item.picUrl" />
          </a>
        </van-swipe-item>
        <ul slot="indicator" class="custom_indicator">
          <li v-for="(item,i) in recommend" :key="item.id" :class="{active:currentpageindex===i}"></li>
        </ul>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import * as api from "../../api/recommend";
import * as config from "../../api/config";
const {
  console: { log }
} = window;
export default {
  data() {
    return {
      recommend: null,
      interval: 4000,
      Proportion: 2.5,
      height: null,
      width: null,
      initial: 0, //初始页
      currentpageindex: 0 //初始dot
    };
  },
  created() {
    log("初始化slider组件");
    this._changeResize(); //初始化组件大小
    this._getrecommend(); //初始化后台请求数据
    this._getinitial();
    window.addEventListener("resize", () => {
      this._changeResize();
      log("已适配");
    });
  },
  mounted() {
    log("slider组件加载完成");
  },
  methods: {
    _getinitial() {
      if (sessionStorage.getItem("slider") === null) {
        return;
      } else {
        this.initial = sessionStorage.getItem("slider");
        this.currentpageindex = Number(this.initial);
      }
    },
    changeindex(index) {
      this.currentpageindex = index;
      sessionStorage.setItem("slider", index);
    },
    _changeResize() {
      this.width = document.documentElement.clientWidth;
      this.height = this.width / this.Proportion;
    },
    _getrecommend() {
      api.getRecommend().then(value => {
        if (value.code === config.SUC) {
          this.recommend = value.data.slider;
        }
      });
    }
  }
};
</script>

<style lang='less'>
@import "../../common/less/font";
.slider {
  min-height: 1px;
  .slider_group {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    .van-swipe-item {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .custom_indicator {
      position: absolute;
      display: flex;
      left: 0;
      bottom: 12px;
      width: 100%;
      align-items: center;
      justify-content: center;
      li {
        margin: 0px 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: @color-text-l;
        &.active {
          width: 20px;
          border-radius: 5px;
          background: @color-text-ll;
        }
      }
    }
  }
}
</style>