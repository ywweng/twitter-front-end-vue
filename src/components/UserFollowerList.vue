<template>
  <div class="row">
    <Spinner v-if="isLoading" />
    <!-- v-else -->
    <div class="follow-list" >
      <div class="user-card d-flex position-relative" v-for="follower in followerList" :key="follower.followerId">
        <img :src="follower.avatar" class="avatar" alt="" />
        <div class="user-info d-flex flex-column">
          <div class="text-name">{{follower.name}}</div>
          <div class="text-account ms-0">@{{follower.account}}</div>
          <div class="text-content">
            {{follower.introduction}}
          </div>
        </div>
        <button
          type="button"
          class="btn btn-follow position-absolute"
          v-if="!follower.isFollowed"
          @click.stop.prevent="addFollow(follower.followerId)"
        >
          跟隨
        </button>
        <button
          type="button"
          class="btn btn-following position-absolute"
          v-else
          @click.stop.prevent="deleteFollow(follower.followerId)"
        >
          正在跟隨
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import { Toast } from "../utils/helpers";
import userAPI from "../apis/user"
import { mapState } from 'vuex'

export default {
  name: "FollowerList",
  components: {
    Spinner,
  },
  props: {
    userId: {
      type: Number,
      default: 14,
    },
  },
  data() {
    return {
      followerList: [],
      isLoading: true,
    };
  },
  created() {
    // const { id } = this.$route.params
    const id = this.userId
    this.fetchFollower(id);
  },
  watch: {
    userId(newValue) {
      this.fetchFollower(newValue)
    },
    
  },
   computed: {
      ...mapState(['currentUser']),
    },
  methods: {

     async fetchFollower(userId) {
      try {
        const { data } = await userAPI.getUserFollowers({ userId });
        // if (!data) {
        //   throw new Error();
        // }
        this.followerList = data;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    async addFollow(id) {
      try {
        const {data} = await userAPI.addFollow({ id })
        Toast.fire({
          icon: 'success',
          title: data.message
        })
        // this.user.isFollowing = true;
        this.followerList = this.followerList.map(follower => {
          if(follower.followingId === id) {
            return {
              ...follower,
              isFollowed: true
            }
          }
          return follower
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: error.response.data.message
        })
      }
 
    },
    async deleteFollow(followingId) {
      try {
        const {data} = await userAPI.deleteFollow({followingId})
        Toast.fire({
          icon: 'success',
          title: data.message
        })
        this.followerList = this.followerList.map(follower => {
          if(follower.followingId === followingId) {
            return {
              ...follower,
              isFollowed: false
            }
          }
          return follower
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: error.response.message
        })
      }
    },
  },
};
</script>


<style scoped>
.user-card {
  padding: 10px 15px;
  /* height: 95px; */
  border-bottom: 1px solid #e6ecf0;
}
.text-content {
  margin-top: 6px;
  max-width: 510px;
  font-size: 15px;
  text-overflow: ellipsis;
}
.btn-follow,
.btn-following {
  right: 15px;
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