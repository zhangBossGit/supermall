<template>
  <div id="app">
    <!--进行一次 keep-alive 包装,里面的组件就不会销毁-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <main-tab-bar></main-tab-bar>

  </div>
</template>

<script>
  import mainTabBar from './components/content/mainTabbar/MainTabBar.vue'

  export default {
    name: 'App',
    components: {
      mainTabBar
    }
  }
</script>

<style>
  /* 引用公共样式 */
  @import 'assets/css/base.css';


</style>
