<template>

  <swiper>
    <swiper-item v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>

</template>

<script>
  //引入轮播图模块
  import { Swiper, SwiperItem } from 'components/common/swiper/index.js'

  export default {
    name: "",
    props:['banners'],
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
