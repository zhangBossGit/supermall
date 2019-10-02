<template>

  <swiper>
    <swiper-item v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>

</template>

<script>
  //引入轮播图模块
  import { Swiper, SwiperItem } from 'components/common/swiper/index.js'

  export default {
    name: "",
    data(){
      return {
        isLoad: false
      }
    },
    props:['banners'],
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      imageLoad(){
        if(!this.isLoad){ //第一次取反为true  后面三次全为false
          this.$emit('swiperImageLoad');
          this.isLoad = true
        }

      }
    }
  }
</script>

<style scoped>

</style>
