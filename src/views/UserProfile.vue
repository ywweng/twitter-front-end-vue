<template>
  <div class="user-profile">
    <div class="page-title position-relative">
      <img
        src="../assets/arrow.png"
        alt=""
        class="back-arrow position-absolute"
      />
      <div class="title-item main-text">{{currentUser.name}}</div>
      <div class="title-item sub-text">{{currentUser.total_tweets}}推文</div>
    </div>
    <div class="profile-wrap position-relative">
      <div class="profile-cover">
        <img :src="currentUser.cover" class="w-100" alt="" />
      </div>
      <img
        :src="currentUser.avatar"
        class="profile-avatar rounded-circle position-absolute"
        alt=""
      />
      <button
        type="button"
        class="btn btn-edit position-absolute"
        data-bs-toggle="modal"
        data-bs-target="#profileEditModal"
      >
        編輯個人資料
      </button>
      <div class="profile-data">
        <div class="name main-text">{{currentUser.name}}</div>
        <div class="account sub-text">@{{currentUser.account}}</div>
        <div class="description my-2">
          {{currentUser.introduction}}
        </div>
        <div class="followship">
          <span class="following">{{currentUser.total_followings}}個</span
          ><span class="sub-text">跟隨中</span>
          <span class="follower ms-4">{{currentUser.total_followers}}位</span
          ><span class="sub-text">跟隨者</span>
        </div>
      </div>
    </div>
    <ProfileEditModal :current-user="currentUser" />
    <NavTabs :user-id="currentUser.id"/>
    <!-- 這邊放router-view -->
  </div>
</template>


<style scoped>
.user-profile {
  width: 100%;
  border-left: 1px solid var(--border-line-color);
  border-right: 1px solid var(--border-line-color);
}
.page-title {
  padding: 15px 0 15px 26px;
  border-bottom: 1px solid var(--border-line-color);
}
.back-arrow {
  top: 20px;
  left: 19px;
  width: 17px;
  height: 14px;
}
.title-item {
  margin-left: 64px;
}
.main-text {
  font-size: 19px;
  font-weight: 900;
  color: var(--main-text);
}
.sub-text {
  font-size: 14px;
  font-weight: 400;
  color: var(--light-gray-text);
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
.profile-data {
  margin-top: 60px;
  padding: 10px 15px;
  font-size: 14px;
}
.account,
.following,
.follower {
  font-weight: 500;
}
</style>

<script>
import ProfileEditModal from "../components/ProfileEditModal.vue";
import NavTabs from "../components/NavTabs.vue";

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
};

export default {
  components: {
    ProfileEditModal,
    NavTabs,
  },
  data() {
    return {
      currentUser: {},
      // user: {}
    }
  },
  created() {
    this.fetchUser()
  },
  methods: {
    //TODO:這邊是否應該分為setUser(currentUser)和fetchUser?
    fetchUser() {
      //TODO:這邊要api向後端請求使用者資料
      this.currentUser = dummyUser
    }
  }
};
</script>