<template>
  <div :style="{color: color}" class="type-show">
    <p>{{title}}</p>
    <p>{{count}}例</p>
    <p><span class="tip">新</span>+{{addCount}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    addCount: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: '#ffffff'
    }
  }
}
</script>

<style lang="less">
.type-show {
  text-align: center;
  font-size: 0.28rem;
  p {
    font-weight: 800;
  }
  .tip {
    color: gray;
  }
}
  
</style>