<template>
  <div class="container-fluid vh-100">
    <div class="row h-100">
      <div class="col-3 menu">
        <Menu />
      </div>
      <div class="col me-2" id="main">
        <div class="title menu-text">首頁</div>
      </div>
      <div class="col">
        <PopularUser />
      </div>
    </div>
  </div>
</template>

<script>
  import Menu from './../components/Menu.vue'
  import PopularUser from './../components/PopularUser.vue'
  export default {
    name: 'Main',
    components: {
      Menu,
      PopularUser,
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
</style>
