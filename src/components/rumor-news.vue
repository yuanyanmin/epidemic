<template>
  <div class="rumor-news">
    <Carousel>
      <CarouselItem v-for="item in rumorInfo" :key="item.id">
        <Card class="rumor-card">
          <div>
            <img :src="item.imgsrc" class="rumor-img">
            <div class="rumor-content">
              <p class="rumor-title">{{item.title}}</p>
              <p>{{item.desc}}</p>
            </div>
          </div>
          <img class="rumor-flag-img" src="https://assets.dxycdn.com/gitrepo/ncov-mobile/dist/static/badge-big@2x.5395c013.png" alt="谣言" v-if="item.explain === '谣言' || item.explain === '伪科学' || item.explain === '有失实'">
          <img class="rumor-flag-img" v-if="item.explain === '尚无定论'" src="https://assets.dxycdn.com/gitrepo/ncov-mobile/dist/static/badge-y-big@2x.c0fd84da.png" alt="尚无定论">
        </Card>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
  props: {
    rumorNewsData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      rumorInfo: []
    }
  },
  watch: {
    rumorNewsData(val) {
      this.rumorInfo = val;
    }
  },
}
</script>

<style lang="less">
.rumor-news {
  .rumor-card {
    height: 8rem;
    position: relative;
    .rumor-img {
      height: 4rem;
      width: 100%;
      opacity: 0.8;
    }
    .rumor-content {
      padding: 0.3rem;
    }
    .rumor-flag-img {
      position: absolute;
      top: 0;
      right: 0;
      width: 3rem;
      height: 3rem;
    }
  }
}
</style>