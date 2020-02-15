<template>
  <div class="data-summary">
    <div class="time-title">
      <span class="allCounty">全国</span>
      <span>截至 {{curDate}} (北京时间)</span>
    </div>
    <div class="type-show-box">
      <TypeShow
        :title="'确诊'"
        :count="virusInfo.confirmedCount"
        :addCount="virusInfo.confirmedIncr"
        :color="'#e57471'"></TypeShow>
      <TypeShow
        :title="'疑似'"
        :count="virusInfo.suspectedCount"
        :addCount="virusInfo.suspectedIncr"
        :color="'#dda451'"></TypeShow>
      <TypeShow
        :title="'重症'"
        :count="virusInfo.seriousCount"
        :addCount="virusInfo.seriousIncr"
        :color="'#5d4037'"></TypeShow>
      <TypeShow
        :title="'死亡'"
        :count="virusInfo.deadCount"
        :addCount="virusInfo.deadIncr"
        :color="'#919399'"></TypeShow>
      <TypeShow
        :title="'治愈'"
        :count="virusInfo.curedCount"
        :addCount="virusInfo.curedIncr"
        :color="'#7ebe50'"></TypeShow>
    </div>
    <div class="map-box" ref="map"></div>
    <div class="table-box">
      <Table
        :columns="column"
        :data="tableInfo"></Table>
    </div>
    
  </div>
</template>

<script>
import dayjs from 'dayjs'
import TypeShow from './type-show.vue'
import Echarts from 'echarts/lib/echarts'
import { getChinaJson, getProvinceJson } from '../api/getData'

export default {
  props: {
    dataSummary: {
      type: Object,
      default: {},
    },
    tableData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      curDate: '',
      virusInfo: {},
      tableInfo: [],
      column: [
        {
          title: '地区',
          key: 'name'
        },
        {
          title: '确诊',
          key: 'confirmedCount'
        },
        {
          title: '死亡',
          key: 'deadCount'
        },
        {
          title: '治愈',
          key: 'curedCount'
        }
      ],
      echart: '',
    }
  },
  watch: {
    dataSummary(val) {
      this.curDate = dayjs(val.modifyTime).format('YYYY年MM月DD日 HH:mm');
      this.virusInfo = val;
    },
    tableData(val) {
      this.tableInfo = val;
    }
  },
  methods: {
    // 地图待完善
    async initMap() {
      // this.echart = Echarts.init(this.$refs.map)
      // let chinaMapData = await getChinaJson();
      // let chinaMapJson = chinaMapData.data.split('=')[1]
      // console.log('chinamMapjson', chinaMapJson)

      // Echarts.registerMap('china', chinaMapJson)

      // let option = {

      // }

      // this.echart.setOption(option, true)

    }
  },
  mounted() {
    this.initMap()
  },
  components: {
    TypeShow,
  }
}
</script>

<style lang="less">
  .data-summary {
    .time-title {
      text-align: center;
    }
    .allCounty {
      background-color: #6c63ff;
      padding: 0.05rem;
      font-size: 0.24rem;
      color: #ffffff;
    }
    .type-show-box {
      display: flex;
      justify-content: space-around;
      margin-top: 0.2rem;
    }
    .table-box {
      margin-top: 0.4rem;
    }
  }
</style>