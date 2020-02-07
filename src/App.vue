<template>
  <div id="app">
    <Myheader />
    <tab />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Myheader from "./components/header/header";
import Tab from "./components/tab/tab";
export default {
  name: "app",
  components: {
    Myheader,
    Tab
  }
};
</script>

<style lang="less">
@import "./common/less/index.less";
</style>
