<template>
  <div class="banner">
    <p class="big-title">新型冠状病毒肺炎疫情</p>
    <p class="small-title">实时动态</p>
    <p class="small-title">{{title}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: window.g.title
    }
  }
}
</script>
<style lang="less">
  .banner {
    text-align: center;
    background: url('https://cdn.xieyezi.com/nvov.jpg') no-repeat;
    background-size: cover;
    height: 3rem;
    background-color: #999;
    .big-title {
      font-size: 0.48rem;
      color: #fff;
      padding: 0.8rem 0 0.5rem 0;
    }
    .small-title {
      font-size: 0.32rem;
      color: #fff;
    }
  }
</style>