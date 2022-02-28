<template>
  <div class="menu position-relative">
    <img src="./../assets/Logo.png" alt="" class="logo">
    <ul class="menu-list">
      <li><router-link to="/admin/tweets" >
        <div class="d-flex align-items-center">
        <img src="../assets/icon_tweet-orange.png" class="menu-icon me-2" alt="" v-if="inTweetList">
        <img src="../assets/icon_tweet-black.png" class="menu-icon me-2" alt="" v-else>
        <span>推文清單</span> </div>
        </router-link> </li>
      <li><router-link to="/admin/users">
      <div class="d-flex align-items-center">
        <img src="../assets/icon_user-orange.png" class="menu-icon me-2" alt="" v-if="inUserList">
        <img src="../assets/icon_user-black.png" class="menu-icon me-2" alt="" v-else>
        <span>使用者列表</span>  </div>
        </router-link> </li>
    </ul>
    <div class="logout position-absolute">
        <router-link to="/admin/login">
        <div class="d-flex align-items-center">
          <img class="menu-icon me-2" src="../assets/VectorLogout.png" />
          <span>登出</span>
        </div> 
        </router-link>
    </div>
  </div>
</template>

<style scoped>
.menu {
  padding-left: 20%;
  height: 100vh;
}
.logo {
  width: 40px;
  height: 40px;
  margin: 10px 0 34px 10px;
}
li {
  /* width: 235px; */
  height: 56px;
  line-height: 56px;
}
.menu-icon {
  width: 24px;
  height: 24px;
  margin-left: 10px;
}
a span {
  text-decoration: none;
  color: var(--main-text);
  font-size: 18px;
  font-weight: 700;
}
.active span {
  color: var(--orange);
}
.logout{
  left: 20%;
  bottom: 44px;
}
</style>

<script>
export default {
  data() {
    return {
      inTweetList: this.$route.name === "admin-tweets",
      inUserList: this.$route.name === "admin-users"
    }
  }
}
</script>