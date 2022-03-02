<template>
  <div class="admin-users d-flex">
    <div class="w-25">
      <AdminMenu />
    </div>
    <div class="user-list w-75">
      <div class="page-title">使用者列表</div>
      <!-- user card -->
      <div class="card-wrap">
        <Spinner v-if="isLoading" />
        <div class="row">
          <div class="col-3" v-for="user in users" :key="user.id">
            <div class="card h-100">
              <img
                :src="user.cover"
                class="card-img-top user-cover"
                alt="user-cover"
              />
              <img
                :src="user.avatar"
                class="avatar"
                alt="user-avatar"
              />
              <div class="card-body d-flex flex-column align-items-center">
                <span class="user-name">{{user.name}}</span>
                <span class="user-account color-light">@{{user.account}}</span>
                <div class="icon pt-2 pb-2">
                  <span class="total-tweet mx-2"
                    ><img src="../assets/icon_reply.png" alt="" />{{user.tweetCount}}</span
                  >
                  <span class="total-like mx-2"
                    ><img src="../assets/icon_like.png" alt="" />{{user.likeCount}}</span
                  >
                </div>
                <div class="followship">
                  <span class="following">{{user.followingCount}}個</span>
                  <span class="color-light">跟隨中</span>
                  <span class="follower ms-2">{{user.followerCount}}位</span>
                  <span class="color-light">跟隨者</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.user-list {
  width: 100%;
  height: 100vh;
  border-left: 1px solid var(--border-line-color);
}
.page-title {
  padding: 15px 0 15px 26px;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid var(--border-line-color);
}
.card-wrap {
  width: 100%;
  padding: 15px;
}
.card {
  width: 100%;
  position: relative;
  border-radius: 10px;
}
.user-cover {
  width: 100%;
  height: 140px;
  background-color: #c4c4c4;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ffffff;
  background-color: #c4c4c4;
  position: absolute;
  top: 68px;
  left: calc(50% - 50px);
}
.card-body {
  padding-top: 33px;
  font-size: 15px;
}
.user-name {
  font-weight: 900;
}

.icon img {
  width: 24px;
  height: 24px;
}
.color-light {
  color: var(--light-gray-text);
}
</style>

<script>
import AdminMenu from "../components/AdminMenu.vue";
import adminAPI from "../apis/admin"
import Spinner from "../components/Spinner.vue"

export default {
  name: 'AdminUserlist',
  components: {
    AdminMenu,
    Spinner
  },
  data() {
    return {
      users: [],
      isLoading: true
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers () {
      try {
        const { data } = await adminAPI.users.get()
        console.log(data)
        //這邊success沒有帶status
        if(!data) {
          throw new Error()
        }
        this.users = data
        // TODO:要按推文數排序check一下
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log(error.response.data.message)

      }   
    }
  }
};
</script>
