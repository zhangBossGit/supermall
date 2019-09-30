<template>
  <div id="app">
    <router-view></router-view>

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
