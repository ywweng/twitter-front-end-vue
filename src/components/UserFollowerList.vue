<template>
  <div class="row">
    <Spinner v-if="isLoading" />
    <!-- v-else -->
    <div class="follow-list" >
      <div class="user-card d-flex position-relative" v-for="follower in followerList" :key="follower.id">
        <img :src="follower.avatar" class="avatar" alt="" />
        <div class="user-info d-flex flex-column">
          <div class="text-name">Bpple</div>
          <div class="text-account ms-0">@apple</div>
          <div class="text-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque nisi
            odio ipsa quaerat ipsam repellendus repellat
          </div>
        </div>
        <button
          type="button"
          class="btn btn-follow position-absolute"
          v-if="!isFollow"
          @click.stop.prevent="addFollow(user.id)"
        >
          跟隨
        </button>
        <button
          type="button"
          class="btn btn-following position-absolute"
          v-else
          @click.stop.prevent="deleteFollow(user.id)"
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
    }
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
        console.log(data.message)
        this.user.isFollowing = true;
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
        console.log(data.message)
        this.user.isFollowing = false
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