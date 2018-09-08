<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  // import Player from './views/Player'
  export default {
      name: 'app',
      data () {
          return {}
      },
      components:{
          // Player,
      },
      mounted(){

      }

  }
</script>