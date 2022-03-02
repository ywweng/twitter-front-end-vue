<template>
  <div id="menu" class="d-flex flex-column h-100 py-3 ms-auto">
    <div class="logo ms-3">
      <img :src="require('./../assets/Logo.png')" width="30px" />
    </div>
    <div class="mb-auto">
      <div class="ms-3 mb-4 lh-1">
        <ul>
          <li class="menu-icon mb-4">
            <!-- TODO:router-link -->
            <router-link to="/main" class="menu-text">
              <img class="me-3" :src="mainUrl" />
              首頁
            </router-link>
          </li>
          <li class="menu-icon mb-4">
            <!-- TODO:router-link 設params-->
            <router-link :to="{ name: 'user-profile' }" class="menu-text">
              <img class="profile-icon" :src="userProfileUrl" />
              個人資料
            </router-link>
          </li>
          <li class="menu-icon mb-4">
            <router-link :to="{ name: 'setting' }" class="menu-text">
              <img class="me-3" :src="settingUrl" />
              設定
            </router-link>
          </li>
        </ul>
      </div>
      <button
        type="button"
        class="btn-active btn-tweet w-100"
        data-bs-toggle="modal"
        data-bs-target="#new-tweet-modal"
      >
        推文
      </button>
    </div>
    <div>
      <button class="ms-3 d-flex align-items-center" @click="logout">
        <div class="me-2">
          <img
            class="d-block"
            width="20px"
            src="./../assets/VectorLogout.png"
          />
        </div>
        <!-- TODO:router-link -->
        <a class="menu-text ms-2 logout">登出</a>
      </button>
    </div>
    <NewTweetModal />
    <!-- alert -->
    <div
      class="alert d-flex fixed-top"
      id="alert"
      role="alert"
      v-if="alertStatus !== false"
    >
      <div class="ms-2 mx-auto my-auto text-alert">{{ alertMsg }}</div>
      <div class="ms-auto">
        <img
          :src="require('./../assets/error-alert.svg')"
          v-if="alertStatus === 'error'"
        />
        <img
          :src="require('./../assets/success-alert.svg')"
          v-else-if="alertStatus === 'success'"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import NewTweetModal from './../components/NewTweetModal.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'Menu',
    components: {
      NewTweetModal,
    },
    data() {
      return {
        mainUrl: require('./../assets/Menu.svg'),
        mainActiveUrl: require('./../assets/MenuActive.svg'),
        userProfileUrl: require('./../assets/UserProfile.svg'),
        userProfileActiveUrl: require('./../assets/UserProfileActive.svg'),
        settingUrl: require('./../assets/Setting.svg'),
        settingActiveUrl: require('./../assets/SettingActive.svg'),
        alertMsg: '',
        alertStatus: false,
      }
    },
    computed: {
      ...mapState(['currentUser', 'isAuthoenticated']),
    },
    methods: {
      alertShow() {
        const bootstrap = require('bootstrap')
        let alertNode = document.querySelector('#alert')
        bootstrap.Alert.getInstance(alertNode)
        setTimeout(() => {
          this.alertStatus = false
        }, 2000)
      },
      logout() {
        this.$store.commit('revokeAuthentication')
        this.$router.push('/login')
      },
    },
    mounted() {
      if (!localStorage.getItem('token')) {
        this.alertMsg = '您尚未登入'
        this.alertStatus = 'error'
        this.alertShow()
        setTimeout(() => {
          this.$router.push('/login')
        }, 5000);
      }
    },
    created() {
      if (this.$route.path === '/main') {
        this.mainUrl = this.mainActiveUrl
      }
      if (this.$route.path === '/user-profile') {
        this.userProfileUrl = this.userProfileActiveUrl
      }
      if (this.$route.path === '/setting') {
        this.settingUrl = this.settingActiveUrl
      }
    },
  }
</script>

<style>
  #menu {
    width: 230px;
    /* margin-left: 103px; */
  }
  .btn-tweet {
    max-width: 210px;
  }
  .logo {
    margin-bottom: 47px;
  }
  .profile-icon {
    margin-left: 3px;
    margin-right: 20px;
  }
  .router-link-active {
    color: #ff6600;
  }
  .logout {
    cursor: pointer;
  }
</style>
