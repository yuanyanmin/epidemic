<template>
  <div class="latest-news">
    <Timeline>
      <TimelineItem v-for="item in newsInfo" :key="item.id">
        <div class="news-item">
          <p>{{item.pubDate}}({{item.pubDateStr}})</p>
          <Card>
            <p slot="title">{{item.title}}</p>
            <p class="news-content">{{item.summary}}</p>
            <div class="news-footer">
              <p>地区：<span class="area">{{item.provinceName}}</span></p>
              <p>来源：<span class="origin">{{item.infoSource}}</span></p>
            </div>
          </Card>
        </div>
      </TimelineItem>
    </Timeline>
  </div>
</template>

<script>
export default {
  props: {
    newsData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      newsInfo: []
    }
  },
  watch: {
    newsData(val) {
      this.newsInfo = val;
    }
  },
}
</script>

<style lang="less">
.latest-news {
  .news-item {
    padding-top: 0.4rem;
  }
  .news-footer {
    font-size: 0.24rem;
    display: flex;
    justify-content: space-between;
    margin-top: 0.2rem;
    .area{
      padding-left: 0.05rem;
    }
    .origin{
      color: #6C63FF;
      padding-left: 0.05rem;
    }
  }
}
</style>