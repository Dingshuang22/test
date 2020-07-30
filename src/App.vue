<template>
  <div id="app">
    <router-view class="main"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>

<style lang="scss" scoped>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100%;
  .main{
    width:100%;
    height:100%;
  }
}
</style>
