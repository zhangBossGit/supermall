<template>
    <div class="tab-control">
      <div v-for="(item, index) in titles" class="tab-control-item"
           :class="{ active: index === currentIndex }" @click="itemClick(index)">
        <span>{{ item }}</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "",
      props:['titles'],
      data(){
        return {
          currentIndex: 0
        }
      },
      methods:{
        itemClick(index){
          //console.log(index)
          this.currentIndex = index;

          //通过this.$emit() 向父组件(home.vue)传递一个事件 传递一个参数
          this.$emit('tabClick', index)
        }
      }
    }
</script>

<style scoped>
  .tab-control{
    display: flex;
    background-color: #fff;
  }
  .tab-control-item{
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
  }
  .tab-control-item span{
    padding: 4px;
  }
  .active span{
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
  }
</style>
