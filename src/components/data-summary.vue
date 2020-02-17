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
    <div class="map-box">
      <div ref="chartMain"></div>
    </div>
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
import 'echarts/lib/chart/map'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/tooltip'

import 'echarts/lib/chart/line';


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
      // 获取不到高度，始终为0的解决方法
      this.$refs.chartMain.style.height = '8rem';

      this.echart = Echarts.init(this.$refs.chartMain)
      let chinaMapData = await getChinaJson();
      console.log('chineaDa', chinaMapData)
      let chinaMapJson = chinaMapData.data
      Echarts.registerMap('china', chinaMapJson)
      
      let option = {
        tooltip: {
          show: true,
          formatter: function(params) {
            
          }
        },
        visualMap: {
          show: 'true',
          type: 'piecewise',
          min: 0,
          max: 2000,
          aligin: 'right',
          top: '2%',
          right: 0,
          left: 'center',
          inRange: {
            color: ['#ffc0b1', '#ff8c71', '#ef1717', '#9c0505']
          },
          pieces: [
            { min: 1000 },
            { min: 500, max: 999 },
            { min: 100, max: 499 },
            { min: 10, max: 99 },
            { min: 1, max: 9 }
          ],
          orient: 'horizontal',
          showLabel: true,
          padding: 5,
          text: ['高', '低'],
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            fontSize: 10
          }
        },
        series: [
          {
            let: 'center',
            name: '确诊人数',
            type: 'map',
            map: 'china',
            data: [],
          }
        ],
      }

      this.echart.setOption(option, true)

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
    .map-box {
      height: 8rem;
    }
  }
</style>