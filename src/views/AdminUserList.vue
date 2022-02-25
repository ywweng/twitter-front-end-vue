<template>
  <div class="admin-users d-flex">
    <div class="w-25">
      <AdminMenu />
    </div>
    <div class="user-list w-75">
      <div class="page-title">使用者列表</div>
      <!-- user card -->
      <div class="card-wrap">
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
                    ><img src="../assets/icon_reply.png" alt="" />{{user.total_tweet}}</span
                  >
                  <span class="total-like mx-2"
                    ><img src="../assets/icon_like.png" alt="" />{{user.total_like}}</span
                  >
                </div>
                <div class="followship">
                  <span class="following">{{user.total_following}}個</span>
                  <span class="color-light">跟隨中</span>
                  <span class="follower ms-2">{{user.total_follower}}位</span>
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
  border-left: 1px solid #e6ecf0;
}
.page-title {
  padding: 15px 0 15px 26px;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid #e6ecf0;
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
  color: #657786;
}
</style>

<script>
import AdminMenu from "../components/AdminMenu.vue";

const dummyData = {
  users: [
    {
      id: 1,
      account: "apple",
      name: "Apple",
      email: "apple@example.com",
      introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra iaculis ornare.", 
      role: "string",
      avatar: "https://i.pravatar.cc/150?img=10",
      cover: "https://fakeimg.pl/250x100/",
      total_tweet: 2,
      total_follower: 10,
      total_following: 3,
      total_like: 5,
      created_at: "2022-01-18T07:23:18.000Z",
      updated_at: "2022-01-18T07:23:18.000Z",
    },
    {
      id: 2,
      account: "banana",
      name: "Ba Nana",
      email: "banana@example.com",
      introduction: "Nam eget nibh justo. Morbi vel varius dui. Proin vehicula interdum mauris, vitae ullamcorper nisi luctus interdum. ",
      role: "string",
      avatar: "https://i.pravatar.cc/150?img=12",
      cover: "https://fakeimg.pl/250x100/",
      total_tweet: 1,
      total_follower: 2,
      total_following: 3,
      total_like: 4,
      created_at: "2022-01-18T07:23:18.000Z",
      updated_at: "2022-01-18T07:23:18.000Z",
    },
  ],
};
export default {
  components: {
    AdminMenu,
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers () {
      this.users = dummyData.users
      // 要按推文數排序
    }
  }
};
</script>
