<template>
  <div class="tab">
    <router-link tag="div" class="tab_item" :to="item.to" v-for="item in tab" :key="item.id">
      <span class="tab_link">{{item.name}}</span>
    </router-link>
  </div>
</template>

<script>
import tabjson from "../../json/tab";
export default {
  data() {
    return {
      tab: tabjson.tab
    };
  }
};
</script>

<style lang="less">
@import "../../common/less/font";
.tab {
  display: flex;
  align-items: center;
  height: 44px;
  .tab_item {
    text-align: center;
    flex: 1;
    font-size: @font-size-medium;
    .tab_link {
      padding-bottom: 5px;
      color: @color-text-l;
    }
    &.router-link-active {
      .tab_link {
        color: @color-theme;
        border-bottom: 2px solid @color-theme;
      }
    }
  }
}
</style>