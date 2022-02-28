<template>
  <div class="container-fluid vh-100">
    <div class="row h-100">
      <div class="col-3 menu mh-100">
        <Menu />
      </div>
      <div class="col me-3 d-flex" id="main">
          <router-view />
      </div>
      <div class="col-3 popular-user mh-100">
        <PopularUser />
      </div>
    </div>
  </div>
</template>

<script>
  import Menu from './../components/Menu.vue'
  import PopularUser from './../components/PopularUser.vue'
  // import NewTweet from './../components/NewTweet.vue'
  // import TweetList from './../components/TweetList.vue'
  export default {
    name: 'Main',
    components: {
      Menu,
      PopularUser,
      // NewTweet,
      // TweetList,
    },
  }
</script>

<style scoped>
  #main {
    padding-left: 0;
    padding-right: 0;
    border-left: 1px solid #e6ecf0;
    border-right: 1px solid #e6ecf0;
    max-width: 600px;
    overflow: auto;
  }
</style>
