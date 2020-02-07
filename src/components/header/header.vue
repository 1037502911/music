<template>
  <div class="myheader">
    <div class="icon"></div>
    <div class="title">Vue Music</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "../../common/less/font";
.myheader {
  color: @color-theme;
  height: 44px;
  font-size: 0px;
  display: flex;
  justify-content: center;
  .title {
    font-size: @font-size-large;
    line-height: 44px;
  }
  .icon {
    .bgimage();
    width: 30px;
    height: 32px;
    background-size: 30px 32px;
    margin-right: 9px;
    margin-top: 6px;
  }
}
</style>