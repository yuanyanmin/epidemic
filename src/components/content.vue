<template>
  <div class="content">
    <Tabs size="small" :animated="false">
      <TabPane label="疫情地图" name="map">
        <DataSummary 
          :dataSummary="dataSummary"
          :tableData="tableData"></DataSummary>
      </Tabpane>
      <TabPane label="最新消息" name="news">
        <LatestNews :newsData="newsData"></LatestNews>
      </TabPane>
      <TabPane label="辟谣消息" name="rumor">
        <RumorNews :rumorNewsData="rumorNewsData"></RumorNews>
      </TabPane>
      <TabPane label="疫情趋势" name="trend">标签三的内容</TabPane>
    </Tabs>
  </div>
</template>

<script>
import DataSummary from './data-summary.vue'
import LatestNews from './latest-news.vue'
import RumorNews from './rumor-news.vue'
export default {
  props: {
    virusDesc: {
      type: Object,
      default: {}
    },
    virusTable: {
      type: Array,
      default: []
    },
    newsList: {
      type: Array,
      default: []
    },
    rumorNewsList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      dataSummary: {},
      tableData: [],
      newsData: [],
      rumorNewsData: [],
    }
  },
  watch: {
    virusDesc(val) {
      this.dataSummary = val;
    },
    virusTable(val) {
      this.tableData = val
    },
    newsList(val) {
      this.newsData = val;
    },
    rumorNewsList(val) {
      this.rumorNewsData = val;
    }
  },
  components: {
    DataSummary,
    LatestNews,
    RumorNews,
  }
}
</script>

<style lang="less">
.content {
  width: 100%;
}
</style>