<template>
  <div class="container-fluid vh-100">
    <div class="row h-100">
      <div class="col-3 menu mh-100">
        <Menu />
      </div>
      <div class="col me-3 d-flex flex-column mh-100" id="main">
        <div class="title menu-text">首頁</div>
        <NewTweet />
        <div class="border"></div>
        <TweetList class="flex-grow-1"/>
      </div>
      <div class="col popular-user mh-100">
        <PopularUser />
      </div>
    </div>
  </div>
</template>

<script>
  import Menu from './../components/Menu.vue'
  import PopularUser from './../components/PopularUser.vue'
  import NewTweet from './../components/NewTweet.vue'
  import TweetList from './../components/TweetList.vue'
  export default {
    name: 'Main',
    components: {
      Menu,
      PopularUser,
      NewTweet,
      TweetList,
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
  }

  .title {
    padding-left: 20px;
    height: 55px;
    line-height: 55px;
    border-bottom: 1px solid #e6ecf0;
  }

  .border {
    height: 10px;
    background: #e6ecf0;
  }
</style>
