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
