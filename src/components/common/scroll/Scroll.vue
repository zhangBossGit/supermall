<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <!--这个插槽会替换Home.vue里scroll标签里面所有的内容-->
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'

    export default {
      name: "",
      props: {
        probeType: { //接收父组件传递过来的滚动监听值  默认0
          type: Number,
          default: 0
        },
        pullUpLoad: { //接收父组件传递过来的boolean  默认不上拉加载更多
          type: Boolean,
          default: false
        }
      },
      data(){
        return {
          scroll: null,
        }
      },
      mounted(){
        //1.创建BScroll对象
        //通过this.refs拿到准确的滚动区域容器
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: this.probeType,  //这个值不能写死 写传递过来的滚动监听值
          pullUpLoad: this.pullUpLoad  //哪个父组件需要上拉加载更多,就传值true
        });

        //2.添加监听scroll滚动事件
        this.scroll.on('scroll', (position) => {
          // console.log(position);
          //通过this.$emit() 调用父组件scroll方法,将position为参数传递给父组件(Home.vue)
          this.$emit('scroll', position)
        });

        //3.添加下拉加载更多事件
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      },
      methods:{
        finishPullUp(){ //能多次下拉加载更多数据
          this.scroll && this.scroll.finishPullUp();
        },
        refresh(){
          this.scroll && this.scroll.refresh();
        }
      }
    }
</script>

<style scoped>

</style>
