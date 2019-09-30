<template>
    <div class="goods">
      <!-- 遍历goods数组里的对象数据   将遍历出来的每条商品对象传递给子组件展示  -->
      <goods-list-item v-for="item in goods" :goods-item="item"></goods-list-item>
    </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'
    export default {
      name: "",
      props: {
        //接收父组件传递过来的30条数据数组(goods)
        goods: { type: Array, default(){ return [] } }
      },
      components:{
        GoodsListItem
      }
    }
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
