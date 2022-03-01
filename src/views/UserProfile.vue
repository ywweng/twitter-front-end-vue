<template>
  <div class="row">
    <div class="menu col-3">
      <Menu />
    </div>
    <!-- User-profile -->
    <div class="user-profile col-6">
      <div class="page-title position-relative">
        <img
          src="../assets/arrow.png"
          alt=""
          class="back-arrow position-absolute"
          @click="$router.back()"
        />
        <div class="title-item main-text">{{ user.name }}</div>
        <div class="title-item sub-text">{{ user.total_tweets }}推文</div>
      </div>
      <div class="profile-wrap position-relative">
        <div class="profile-cover">
          <img :src="user.cover" class="w-100" alt="" />
        </div>
        <img
          :src="user.avatar"
          class="profile-avatar rounded-circle position-absolute"
          alt=""
        />
        <!-- currentUser btn-edit-->
        <div class="btn-area d-flex justify-content-end" v-if="isCurrentUser">
          <button
          type="button"
          class="btn btn-edit"
          data-bs-toggle="modal"
          data-bs-target="#profileEditModal"
        >
          編輯個人資料
        </button>
        </div>
        <!-- 其他user btn-follow-->
        <div class="btn-area d-flex justify-content-end" v-else>
          <button class="btn-message "><img src="../assets/btn_messege.png" alt="" width="35px"></button>
          <button class="btn-notify " v-if="isNotified"><img src="../assets/btn_notified.png" alt="" width="35px" @click.stop.prevent="deleteNotify"></button>
          <button class="btn-notify " v-else @click.stop.prevent="addNotify"><img src="../assets/btn_noti.png" alt="" width="35px"></button>   

          <button
          type="button"
          class="btn btn-follow ms-2"
          v-if="!user.isFollowing"
          @click.stop.prevent="addFollow"
        >
          跟隨
        </button>
        <button
          type="button"
          class="btn btn-following ms-2"
          v-else
          @click.stop.prevent="deleteFollow"
        >
          正在跟隨
        </button>
        </div>
        
        <!-- button end -->
        <div class="profile-data">
          <div class="name main-text">{{ user.name }}</div>
          <div class="account sub-text">@{{ user.account }}</div>
          <div class="description my-2">
            {{ user.introduction }}
          </div>
          <div class="followship">
            <span class="following fw-bold">
              <router-link :to="`/user-profile/${user.id}/followings`">
                {{ user.total_followings }}個<span class="sub-text"
                  >跟隨中</span
                ></router-link
              >
            </span>
            <span class="follower ms-4 fw-bold">
              <router-link :to="`/user-profile/${user.id}/followers`">
                {{ user.total_followers }}位<span class="sub-text">跟隨者</span>
              </router-link>
            </span>
          </div>
        </div>
      </div>
      <ProfileEditModal :current-user="user" />
      <NavTabs :user-id="user.id" />
      <!-- router-view -->
      <router-view></router-view>
    </div>
    <!-- Popular User -->
    <div class="col-3 popular-user mh-100">
      <PopularUser />
    </div>
  </div>
</template>


<style scoped>
a {
  text-decoration: none;
  color: black;
}
.user-profile {
  border-left: 1px solid var(--border-line-color);
  border-right: 1px solid var(--border-line-color);
}
.page-title {
  padding: 5px 0 5px 26px;
  border-bottom: 1px solid var(--border-line-color);
}

.title-item {
  margin-left: 64px;
}
.profile-data {
  /* margin-top: 60px; */
  padding: 10px 15px;
  font-size: 14px;
}

.profile-cover img {
  height: 200px;
}
.profile-avatar {
  width: 140px;
  height: 140px;
  top: 124px;
  left: 14px;
  border: 4px solid white;
}
.btn-edit {
  width: 120px;
  height: 35px;
  top: 210px;
  right: 15px;
  border: 1px solid var(--orange);
  border-radius: 100px;
  font-size: 15px;
  font-weight: 700;
  color: var(--orange);
}
.btn-edit:hover,
.btn-edit:active {
  background-color: var(--orange);
  color: white;
}
.account,
.following,
.follower {
  font-weight: 500;
}
.btn-area {
  padding: 10px 15px;
}
.btn-follow,
.btn-following {
  padding: 5px 15px;
  border-color: var(--orange);
  border-radius: 100px;
  color: var(--orange);
  font-size: 15px;
  font-weight: 700;
}
.btn-following {
  background-color: var(--orange);
  color: white;
}
</style>

<script>
import ProfileEditModal from "../components/ProfileEditModal.vue";
import NavTabs from "../components/NavTabs.vue";
import Menu from "../components/Menu.vue"
import PopularUser from "../components/PopularUser.vue"

const dummyUser = {
  id: 1,
  account: "user1",
  name: "使用者1",
  email: "user1@example.com",
  introduction: "hello",
  avatar: "https://i.pravatar.cc/150?img=10",
  cover: "https://fakeimg.pl/500x200",
  role: "user",
  created_at: "2022-01-18T07:23:18.000Z",
  updated_at: "2022-01-18T07:23:18.000Z",
  total_tweets: 10,
  total_followings: 123,
  total_followers: 55,
  totoal_likes: 10,
  isFollowing: true  //TODO:這個項目API沒有給
};

export default {
  components: {
    ProfileEditModal,
    NavTabs,
    Menu,
    PopularUser,
  },
  data() {
    return {
      user: {
        id: 0,
        account: "",
        name: "",
        email: "",
        introduction: "",
        avatar: "",
        cover: "",
        role: "",
        total_tweets: 0,
        total_followings: 0,
        total_followers: 0,
        totoal_likes: 0,
        isFollowing: false, 
      },
      currentUser: {
        id: 1,
        name: "使用者1",
      },
      isCurrentUser: false,
      isNotified: false,  //這個沒有設定，重新整理就會還原
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.user = dummyUser;
      if (this.user.id === this.currentUser.id) {
        this.isCurrentUser = true; 
      }
    },
    addFollow() {
      this.user.isFollowing = true
    },
    deleteFollow() {
      this.user.isFollowing = false
    },
    addNotify() {
      this.isNotified = true
    },
    deleteNotify() {
      this.isNotified = false
    }
  },
};
</script>