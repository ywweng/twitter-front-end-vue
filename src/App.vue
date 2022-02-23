<template>
  <div id="app">
    <Main />
    <!-- <router-view/> -->
  </div>
</template>

<script>
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './views/Main.vue'
export default {
  name: 'App',
  components: {
    Main
  }
}
</script>
