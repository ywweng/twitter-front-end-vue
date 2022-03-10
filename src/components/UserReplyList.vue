<template>
  <div class="reply-list">
    <Spinner v-if="isLoading" />
    <div v-if="!userLikes.length" class="ms-4">尚無任何推文與回覆</div>
    <div v-else class="reply-card d-flex" v-for="reply in userReplies" :key="reply.id">
      <router-link :to="{ name: 'user-profile' ,params:{userId: userId}}">
      <img :src="userAvatar" class="avatar" alt="" />
      </router-link>
      <div class="reply-info d-flex flex-column">
        <div class="first-line">
          <span class="text-name">{{userName}}</span>
          <span class="text-account">@{{userAccount}}．{{reply.createdAt | fromNow}}</span>
        </div>
        <div class="second-line">
          <span class="text-account ms-0">回覆</span>
          <router-link :to="{ name: 'user-profile' ,params:{userId: reply.Tweet.User.id}}">
          <span class="original-tweet ms-1">@{{reply.Tweet.User.account}}</span>
          </router-link>
        </div>
        <div class="tweet-content">
          <router-link :to="{ name: 'single-tweet', params: { tweetId: reply.tweetId }}">
         {{reply.comment}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from "../apis/user"
import Spinner from "./../components/Spinner.vue";
import { Toast } from "../utils/helpers";
import { fromNowFilter } from "../utils/mixins";
export default {
  name: 'userReplyList',
  components: {
    Spinner
  },
  props: {
    userId: {
      type: Number,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    userAccount: {
      type: String,
      required: true
    },
    userAvatar: {
      type: String,
      required: true,
    }
  },
  mixins: [fromNowFilter],
  data() {
    return {
      userReplies: [],
      isLoading: true,
    }
  },
  created() {
    const userId = this.userId;
    this.fetchUserReplies(userId);
  },
  watch: {
    userId(newValue) {
      this.fetchUserReplies(newValue)
    }
  },
  methods: {
    async fetchUserReplies(userId) {
      try {
        const {data} = await userAPI.getUserReplies({userId})
        if(!data.length) {
          throw new Error('尚無任何回覆！')
        }
        this.userReplies = data
        this.isLoading = false; 
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: '無法取得推文與回覆，請稍再試',
        });
      }
    }
  }
}
</script>

<style scoped>
.avatar {
  width: 50px;
  height: 50px;
}
.reply-card {
  padding: 10px 15px;
  /* height: 121px; */
  border-bottom: 1px solid #e6ecf0;
}
.reply-card:hover {
  /* cursor: pointer; */
  box-shadow: 0 0 1px 0 var(--orange);
}
.original-tweet {
  font-size: 15px;
  font-weight: 500;
  color: var(--orange);
}
.tweet-content {
  margin-top: 6px;
  max-width: 510px;
  font-size: 15px;
}
</style>