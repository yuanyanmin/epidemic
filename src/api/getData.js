import axios from 'axios'
const APIKEY = 'test123'

import {newsInfo} from '../const/news'
import {cityInfo} from '../const/city'
import { rumorInfo } from '../const/rumor'


// 获取疫情实时新闻
export function getOnTimeData() {
  // return axios({
  //   method: 'get',
  //   url: `http://api.tianapi.com/txapi/ncov/index?key=${APIKEY}`
  // })
  return newsInfo
  
}

// 获取肺炎疫情城市数据
export function getDataStatic() {
  // return axios({
  //   method: 'get',
  //   url: `http://api.tianapi.com/txapi/ncovcity/index?key=${APIKEY}`
  // })
  return cityInfo
}

// 获取谣言接口
export function getRumor() {
  // return axios({
  //   method: 'get',
  //   url: `http://api.tianapi.com/txapi/rumour/index?key=${APIKEY}`
  // })
  return rumorInfo
}

// 获取地图json文件
export function getChinaJson() {
  return axios({
    method: 'get',
    // url: `https://raw.githubusercontent.com/huanent/vue-echarts-map-demo/master/map/china.json`
    url: `https://data.jianshukeji.com/geochina/china.js`
  })
}

// 获取地图json文件
export function getProvinceJson(pinyinName) {
  return axios({
    method: 'get',
    // url: `https://raw.githubusercontent.com/huanent/vue-echarts-map-demo/master/map/province/${pinyinName}.json`
    url: `https://data.jianshukeji.com/geochina/${pinyinName}.js`
  })
}