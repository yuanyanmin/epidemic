import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/rem.js'
import './asserts/css/reset.less'
// import iviewUi from 'view-design'
import 'view-design/dist/styles/iview.css';

// Vue.use(iviewUi)

import {
  Tabs,
  TabPane,
  Table,
  Timeline,
  TimelineItem,
  Card,
  Carousel,
  CarouselItem
} from 'view-design'

Vue.component('Tabs', Tabs)
Vue.component('TabPane', TabPane)
Vue.component('Table', Table)
Vue.component('Timeline', Timeline)
Vue.component('TimelineItem', TimelineItem)
Vue.component('Card', Card)
Vue.component('Carousel',Carousel)
Vue.component('CarouselItem', CarouselItem)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})