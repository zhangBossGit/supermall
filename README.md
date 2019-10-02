# supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 远程关联
git remote add origin https://github.com/zhangBossGit/supermall.git

### git add .

### git commit -m "提交信息"

### git push -u origin master

### 强制提交
git push -u origin master -f



一、Promise
1.1 Promise的基本使用
 ## 如何将异步操作放入到promise中
 ## (resolve,reject) => then/catch
 
1.2 Promise的链式调用

1.3 Promise的all方法


二、Vuex
2.1 什么是状态管理

2.2 Vuex的基本使用
 ## 通过mutations函数修改state中的数据
 ## mutations -> devtools

2.3 核心概念
 ## state     -> 单一状态数 
 ## getters   -> 计算属性
 ## mutations -> 定义修改state数据的函数
 ## actions   -> 异步操作(Promise)
 ## module    -> 模块

2.4 目录组织方式
 ## 把目录进行抽离 分成几个js模块文件 方便管理
 

三、 网络请求封装
3.1 网络请求方式的选择
 
3.2 axios的基本使用

3.3 axios的相关配置

3.4 axios的创建实例

3.5 axios的封装


四、项目开发
# 项目：
  1.划分目录结构
  2.引用了两个css文件
  3.vue.config.js和.editorconfig
  4.项目的模块划分：tabbar -> 路由映射关系
  5.首页开发
    -- navbar的封装
    -- 网络数据的请求
    -- 轮播图
    -- 推荐信息
  
  
## 项目结构
  assets              样式文件
  normalize.css       重置样式   css文件
  base.css            公共样式
  
  common              公共(变量、utils工具、mixin...)js文件
  components          组件
  components --common     公共[可抽离]组件     
  components --content    跟当前项目有[业务关系]的组件  
  
  network             有关网络请求连接
  store               Vuex
  views               视图层(home、vip、...)文件夹
  
  vue.config.js          
  .editorconfig   



## 商品展示
 goods:(流行/新款/精选)
 
 goods:{
    'pop':{page:5, list:[150] },
    'news':{page:2, list:[50] },
    'sell':{page:1, list:[30] },

 }


# ref如果是绑定在组件中的,那么通过（this.$refs.ref名称）获取到的是一个组件对象
# ref如果是绑定在普通的元素中,那么通过（this.$refs.ref名称）获取到的是一个元素对象

# vh -> viewport height     当前视口高度

# 修饰.native修饰什么时候使用？
   在我们需要监听一个组件的原生事件时,必须给对应的事件加上.native修饰符,才能进行监听
   
   
# 一.FeatureView
  --独立组件封装FeatureView (本周流行)
   -- div > a > img
   
# 二.TabControl
  --独立组件的封装
    --props -> titles
    --div > 根据titles v-for遍历 div -> span{{ title }}
    --css相关
    --选中哪一个tab，哪一个tab的文字颜色变色，下面border-bottom
      --currentIndex
      
# 三.首页商品数据的请求      
  3.1 设计数据结构,勇于保存数据
    goods:{
      pop: page/list
      new: page/list
      sell: page/list
    }
  
  3.2 发送数据请求
    -在home.js中封装getHomeGoods(type, page)
    -在home.vue中，又在methods中getHomeGoods(type)
    --调用getHomeGoods('pop')/getHomeGoods('new')/getHomeGoods('sell')
      -page:动态的获取对应的page
    --获取到数据
      -this.goods[type].list.push(...res.data.list)
      -this.goods[type].page += 1 
    goods:{
        pop: page 1/list[30]
        new: page 1/list[30]
        sell: page 1/list[30]
    }
    
# 四.对商品数据进行展示
  4.1 封装GoodsList.vue组件
    --props:goods -> list[30]
    --v-for goods -> GoodsListItem[30]
    --GoodsListItem(组件) -> GoodsItem(数据)
  
  4.2 封装GoodsListItem.vue组件
    --props:goodsItem 
    --goodsItem 取出数据,并且使用正确的div/span/img基本标签进行展示
    
# 五.对滚动进行重构:Better-Scroll
  5.1 在index.html中使用Better-Scroll
    --const bscroll = new BScroll(el, {})
    --注意:wrapper -> content -> 很多内容
    --1.监听滚动
      -probeType: 0/1/2(手指滚动)/3(只要是滚动)
      -bscroll.on('scroll', (position) => { })
    --2.上拉加载
      -pullUpLoad: true
      -bscroll.on('pullingUp', () => {})
    --3.click: false
      -button可以监听点击
      -div不可以
      
  5.2 在Vue项目中使用Better-Scroll
    --在Profile.vue中简单的演示
    --对Better-Scroll进行封装：Scroll.vue
    --Home.vue和Scroll.vue之间进行通讯
      -Home.vue将probeType设置为3
      -Scroll.vue需要通过this.$emit实时将事件发送到Home.vue
    
# 六.回到顶部BackTop
  6.1 对BackTop.vue组件的封装
  6.2 如何监听组件的点击
    --不可以直接监听back-top的点击，必须添加修饰符.native
    --回到顶部
      -scroll对象，scroll.scrollTo(x, y, time)
      -this.$refs.scroll.scrollTo(0, 0, 500)
  6.3 BackTop组件的显示和隐藏
    --isShowBackTop: false
    --监听滚动，拿到滚动的位置:
      - (v) > 1000 -> isShowBackTop:true
      - isShowBackTop = -position.y > 1000

# 七.解决首页中Better-Scroll可滚动区域的问题
  --Better-Scroll在决定有多少区域可以滚动时，是根据scrollerHeight属性决定的
    -scrollerHeight属性是根据放Better-Scroll的子组件content内容的高度
    -在首页中,刚开始计算scrollerHeight属性时,是没有将图片计算在内
    -所以,计算出来的高度是错误的
    -后来图片加载进来之后有了新的高度,但是scrollerHeight属性并没有更新
    -所以滚动出现了问题
    
  --如何解决这个问题？
    -监听每一张图片是否加载完成,只要有一张图片加载完成,就执行一次refresh()
    -如何监听图片加载完成了？
      -原生的js监听图片：img.load = function(){}
      -Vue中监听：@load="方法"
    -调用scroll的refresh()

#如何将GoodsListItem.vue中的事件传入到Home.vue中
  --因为涉及到非父子组件的通信,所以选择了'事件总线'
  --bus -> 总线
  --Vue.prototype.$bus = new Vue();
  --this.$bus.$emit('事件名称', 参数)       [向事件总线发射一个方法(事件)]
  --this.$bus.$on('事件名称', 回调函数(参数)) [接收事件总线的某一个方法(事件)]
  ##在main.js中给$bus赋一个Vue实例 等于事件总线
    Vue.prototype.$bus = new Vue();
  ##GoodsListItem.vue监听每次图片加载完成时向事件总线发射一个方法(事件)
    this.$bus.$emit('itemImageLoad')
  ##Home.vue在created()中接收goodsListItem.vue中图片加载完成时[发送过来的方法(事件)]
    this.$bus.$on('itemImageLoad', () => {})
    
  ##对于refresh()非常频繁的问题，进行防抖操作
    --防抖debounce/节流throttle
    --防抖函数起作用的过程：
      -如果我们直接执行refresh，那么refresh函数会执行30次
      -可以将refresh函数传入到debounce函数中,生成一个新的函数
      -之后在调用非常频繁的时候,就使用新生成的函数
      -而新生成的函数,并不会非常频繁的调用,如果下一次执行来的非常快,那么就会将上一次取消掉
      
# 八.上拉加载更多的功能
  --监听滚到底部
  --当滚到底部时,调用 this.getHomeGoods(this.goodsType) 加载更多(+1页)数据
  --加载完后,要对scroll计算的滚动高度进行刷新,就不会出现向上拉不动的bug
    -this.$refs.scroll.scroll.refresh()
    
# 九.tabControl的吸顶效果
  9.1 获取到tabControl的offsetTop
    --必须知道滚动到多少时,开始有吸顶效果,就需要获取tabControl的offsetTop
    --如果直接在mounted()中获取tabControl的offsetTop值,它是不正确的
    --如何获取正确的值？
      -监听HomeSwiper中img的加载完成
      -加载完成后,发出事件,在Home.vue中,获取正确的值
      -所有的组件都有一个属性$el：用于获取组件中的元素
      -@load=''  加载事件
      
      注意：为了不让HomeSwiper多次发出$emit()事件,
            可以使用isLoad变量进行状态的记录
            
  9.2 监听滚动,动态的改变tabControl的样式        
    --问题：动态的改变tabControl样式时,会出现两个问题
      -问题一:下面的商品内容会突然上移
      -问题二:tabControl虽然设置了fixed,但是也随着better-scroll一起滚出去了
    --其他方案来解决停留问题
      -在最上面,多复制一份tabControl组件对象,利用它来实现停留效果
      -当用户滚动到一定位置时,tabControl[copy]显示出来
      -当用户滚动没有达到一定位置时,tabControl[copy]隐藏

# 十.让Home保持原来的状态
  10.1 让Home不要随意销毁
    --keep-alive    在<router-view>外进行一次<keep-alive>包装,就不会销毁了
  10.2 让Home中的内容保持原来的位置
    --离开时,保存一个位置信息saveY          [离开函数:deactivated()]
    --进入时,将位置信息设为原来保存的位置saveY [进入函数:activated()]
    注意：回来时,最好进行一次refresh()刷新
