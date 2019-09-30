<template>

  <div class="recommend">
    <div v-for="item in recommends" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>

</template>

<script>
  export default {
    name: "",
    props:['recommends']

  }
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    padding: 15px 0 20px 0;
    text-align: center;
    border-bottom: 8px solid #eeeeee;
  }
  .recommend a{
    display: block;
    flex: 1;
  }
  .recommend a img{
    display: block;
    width: 80%;
    margin: 0 auto;
  }
  .recommend a p{
    font-size: 14px;
    padding: 10px 0;
  }
</style>
