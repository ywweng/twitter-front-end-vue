<template>
  <div class="row">
    <!-- Menu -->
    <div class="menu col-3">
      <Menu />
    </div>
    <!-- Followship list -->
    <div class="follow-ship col-6">
      <div class="page-title position-relative">
        <router-link :to="`/user-profile/${user.id}`">
        <img
          src="../assets/arrow.png"
          alt=""
          class="back-arrow position-absolute"
        /> </router-link>
        <div class="title-item main-text">John Doe</div>
        <div class="title-item sub-text">36 推文</div>
      </div>
      <!-- NavTabs -->
      <div>
        <ul class="nav nav-tab mt-4">
          <li class="nav-item">
            <router-link :to="`/user-profile/${user.id}/followers`" class="nav-link">
              跟隨者
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="`/user-profile/${user.id}/followings`" class="nav-link">
              正在跟隨
            </router-link>
          </li>
        </ul>
      </div>
      <router-view> </router-view>
    </div>
    <!-- Popular User -->
    <div class="col-3 popular-user mh-100">
      <PopularUser />
    </div>
  </div>
</template>

<style scoped>
.follow-ship {
  border-left: 1px solid var(--border-line-color);
  border-right: 1px solid var(--border-line-color);
}
.page-title {
  padding: 5px 0 5px 26px;
}
.title-item {
  margin-left: 64px;
}
.nav-tab {
  border-bottom: 1px solid var(--border-line-color);
}
.nav-link {
  width: 130px;
  height: 48px;
  text-align: center;
  color: var(--light-gray-text);
  font-size: 15px;
  font-weight: 700;
}
.nav-link:hover {
  color: var(--orange);
  border-bottom: 2px solid var(--orange);
}
.active {
  color: var(--orange);
  border-bottom: 2px solid var(--orange);
}
</style>

<script>
import Menu from "../components/Menu.vue";
import PopularUser from "../components/PopularUser.vue";

export default {
  components: {
    Menu,
    PopularUser,
  },
  data() {
    return {
      user: {
        id: 1,
      },
    }
  },
  // methods: {
  //   setUser(userId) {
  //     串getUser API
  //   }
  // }
}
</script>