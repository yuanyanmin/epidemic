<template>
  <div>
    <Banner></Banner>
    <Content
      :virusDesc="virusDesc"
      :virusTable="mapList"
      :newsList="newsList"
      :rumorNewsList="rumorNewsList"></Content>
  </div>
</template>

<script>
import Banner from "../components/banner.vue";
import Content from "../components/content.vue";
import { getOnTimeData, getDataStatic, getRumor } from '../api/getData'
import { getMapData } from '../utils/getMapData'
import dayjs from 'dayjs';

export default {
  data() {
    return {
      virusDesc: {},
      newsList: [],
      mapList: [],
      rumorNewsList: [],
    }
  },
  components: {
    Banner,
    Content
  },
  methods: {
    async initData() {
      // 获取实时新闻数据和统计数据
      const onTimeRes = await getOnTimeData()
      let {news, desc} = onTimeRes.data.newslist[0];
      this.virusDesc = desc;
      news.forEach(item => {
        item.pubDate = dayjs(item.pubDate).format('YYYY年MM月DD日 HH:mm')
      })
      this.newsList = news;

      // 获取地图数据
      const mapRes = await getDataStatic();
      const { newslist } = mapRes.data;
      this.mapList = getMapData(newslist);

      // 获取谣言
      const rumorRes = await getRumor();
      this.rumorNewsList = rumorRes.data.newslist;

    }
  },
  mounted() {
    this.initData()
  }
};
</script>
