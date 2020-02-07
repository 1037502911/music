<template>
  <div class="search">
    <van-swipe
      class="my-swipe"
      :autoplay="interval"
      indicator-color="white"
      :height="150"
      :duration="700"
      :stop-propagation="false"
    >
      <van-swipe-item v-for="item in recommend" :key="item.id">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" />
        </a>
      </van-swipe-item>
    </van-swipe>
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
      recommend: [],
      interval: 4000
    };
  },
  created() {
    log("search");
    this._getrecommend();
  },
  methods: {
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
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>