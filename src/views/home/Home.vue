<template>
  <div id="home">
    <nav-bar class="home-nav"> <!--对应NavBar.vue中nav-bar类-->
      <!--引用对应的插槽-->
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- BScroll插件滚动区域
            设置ref属性值(方便调用) 向子组件(scroll.vue)传递滚动值 3  让子组件调用的方法,并接收传递过来的参数  -->
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true"
            @scroll="contentScroll" @pullingUp="loadMore">
        <!--轮播图 HomeSwiper.vue -->
        <home-swiper :banners="banners"></home-swiper>

        <!--推荐信息 HomeRecommend.vue -->
        <home-recommend :recommends="recommends"></home-recommend>

        <!--本周流行图片链接 HomeFeature.vue -->
        <home-feature></home-feature>

        <!--商品导航栏 tabControl.vue 接收子组件(tabControl)传递过来的事件tabClick -->
        <tab-control class="tab-control" @tabClick="tabclick"
                     :titles="['流行', '新款', '精选']"></tab-control>

        <!-- 商品信息组件 GoodsList.vue -->
        <!-- 将要展示的商品数据列表(数组30条对象数据)传递给子组件 -->
        <!-- 将要展示的商品类型变量传入 -->
        <good-list :goods="goods[goodsType].list"></good-list>
    </scroll>

    <!--默认是不能监听组件的，添加.native修饰符即可监听组件事件 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>
  import navBar from 'components/common/navbar/NavBar.vue'
  //通过network里的引入home.js获取的多个数据
  import {getHomeMultidata, getHomeGoods} from "network/home.js";
  // import Swiper from 'components/common/swiper/Swiper.vue'
  // import SwiperItem from 'components/common/swiper/SwiperItem.vue'

  //引入BScroll滚动封装子组件
  import Scroll  from 'components/common/scroll/Scroll.vue'
  //引入轮播图子组件
  import HomeSwiper from './childComps/HomeSwiper.vue'
  //引入推荐信息子组件
  import HomeRecommend from './childComps/HomeRecommend.vue'
  //引入本周流行图片子组件
  import HomeFeature from './childComps/HomeFeature.vue'
  //引入商品导航栏
  import TabControl from 'components/content/tabControl/TabControl.vue'
  //引入商品组件
  import GoodList from 'components/content/goods/GoodsList.vue'
  //引入返回顶部图标
  import BackTop from 'components/content/backTop/BackTop.vue'

  export default {
    name: "Home",
    components:{
      navBar,
      // Swiper,
      // SwiperItem,
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
    data(){
      return {
        //用多个变量存储数据
        banners: [],
        recommends: [],
        goods:{ //商品数据
          'pop':{page:0, list: []},
          'new':{page:0, list: []},
          'sell':{page:0, list: []},
        },
        goodsType: 'pop',
        isShowBackTop: false
      }
    },
    created(){
      // 1.请求多个数据
      // 直接调用getHomeMultidata()  返回一个Promise
      this.getHomeMultidata();

      // 2.请求(所有)商品数据 (传入哪种类型的参数)
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods:{
      /*
      *  网络请求相关
      * */
      getHomeMultidata(){
        // 1.请求多个数据
        // 直接调用getHomeMultidata()  返回一个Promise
        getHomeMultidata().then(res => {
          console.log(res.data.data);
          //res获取的是所有数据  (分别获取数组数据)
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;

        });
      },
      //获取商品数据 (通过传递的类型获取相对应的数据)
      getHomeGoods(type){ //'pop'
        //定义一个页数变量，记录要请求下一页的页数  所以 它 = 当前页数 + 1
        const page = this.goods[type].page +1;
        getHomeGoods(type, page).then(res => { //通过(类型,页数)请求数据
          //res => pop前30 page:1
          console.log(res);
          //通过.push(...数组)将请求到的第一页数组数据插入选中(类型)的对象list数组末尾
          this.goods[type].list.push(...res.data.data.list);
          //当一页数据插入保存到pop的list数组中后，它的页数默认是0，所以要 +1
          this.goods[type].page += 1;

          //调用scroll子组件中的finishPullUp()方法  能多次下拉加载更多数据
          this.$refs.scroll.finishPullUp();
        })
      },
      /*
      *  事件监听相关
      * */
      tabclick(index){
        // console.log(index);
        switch (index) {
          case 0:
            this.goodsType = 'pop';
            break;
          case 1:
            this.goodsType = 'new';
            break;
          case 2:
            this.goodsType = 'sell';
            break
        }
      },
      backClick(){ //向上跳转图片的点击
        console.log('监听成功');
        //通过this.refs.scroll获取BScroll子组件对象 .scroll获取scroll数据
        //使用scrollTo函数跳转到顶部(x, y, 跳转时间)
        this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      },
      contentScroll(position){ //向上跳转图片的隐藏和显示
        // console.log(position.y);
        this.isShowBackTop = position.y <= -1000? true:false
      },
      loadMore(){ //加载更多
        console.log('上来加载更多');
        //调用获取商品数据方法 传入data中选中的商品类型(goodsType)
        this.getHomeGoods(this.goodsType)

        //加载更多 加载完后,要对scroll计算的滚动高度进行刷新,就不会出现向上拉不动的bug
        this.$refs.scroll.scroll.refresh();
      }
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);/* 引用assets中base.css自定义变量颜色 */
    font-weight: bold;
    color: whitesmoke;

    position: fixed; /*导航条固定*/
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }

  #home{
    padding: 44px 0 49px 0; /* 顶部通栏44 底部导航条49 */

    height: 100vh;  /* 当前视口高度 */
    position: relative;
  }
  
  .tab-control{
    /*position: sticky; !* 根据top设置的值 自动变换position属性值 *!*/
    /*top: 44px;        !* 在达到top值的时候position值会变成flex *!*/

    /*z-index: 5;*/
  }


  .content{
    /*height: 100%;*/
    /*margin-bottom: 49px;*/
    /*overflow: hidden;*/

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  /*.content{*/
    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px;*/
  /*}*/
</style>
