<template>
  <div id="app">
    <!-- <Main /> -->
    <router-view />
  </div>
</template>

<script>
  import 'bootstrap'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import { mapState } from 'vuex'
  export default {
    name: 'App',
    computed: {
      ...mapState(['currentUser']),
    },
  }
</script>
