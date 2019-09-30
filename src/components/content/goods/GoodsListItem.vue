<template>
    <div class="goods-item">
      <!-- 展示数据,然后会在父组件(GoodsList)全部遍历展示 -->
      <img :src="goodsItem.show.img" alt="">

      <div class="goods-info">
        <p>{{ goodsItem.title }}</p>
        <span class="price">{{ goodsItem.price }}</span>
        <!-- 收藏次数 -->
        <span class="collect">{{ goodsItem.cfav }}</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "",
      props:{
        goodsItem: { //接收父组件(GoodsList)传递过来的每条商品信息对象
          type: Object,
          default(){
            return {}
          }
        }
      }
    }
</script>

<style scoped>
  .goods-item{
    width: 48%;
    padding-top: 6px;
  }
  .goods-item img{
    display: block;
    width: 100%;
    border-radius: 6px;
  }
  .goods-info{
    font-size: 13px;
    text-align: center;
    padding: 6px 0;
  }
  .goods-info p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    margin-bottom: 3px;
  }
  .goods-info .price{
    color: var(--color-high-text);
    margin-right: 26px;
  }
  .goods-info .collect{
    position: relative;
    z-index: 1;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    top: 1px;
    left: -15px;
    height: 14px;
    width: 14px;
    background: url("~assets/img/common/collect.svg") 0 0;
    -webkit-background-size: 14px 14px;
    background-size: 14px 14px;
  }
</style>
