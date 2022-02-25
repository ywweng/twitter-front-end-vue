<template>
  <div class="menu">
    <img src="../assets/Logo.png" alt="" class="logo">
    <ul class="menu-list">
      <li><router-link to="/admin/tweets" >
        <img src="../assets/icon_tweet-orange.png" class="menu-icon" alt="" v-if="inTweetList">
        <img src="../assets/icon_tweet-black.png" class="menu-icon" alt="" v-else>
        推文清單
        </router-link> </li>
      <li><router-link to="/admin/users">
        <img src="../assets/icon_user-orange.png" class="menu-icon" alt="" v-if="inUserList">
        <img src="../assets/icon_user-black.png" class="menu-icon" alt="" v-else>
        使用者列表
        </router-link> </li>
    </ul>
  </div>
</template>

<style scoped>
.menu {
  padding-left: 30%;
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
a {
  text-decoration: none;
  color: #1C1C1C;
  font-size: 18px;
  font-weight: 700;
}
.active {
  color: #FF6600;
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