<template>
  <div class="reply-list">
    <Spinner v-if="isLoading" />
    <div class="reply-card d-flex" v-for="reply in userReplies" :key="reply.id">
      <img :src="userAvatar" class="avatar" alt="" />
      <div class="reply-info d-flex flex-column">
        <div class="first-line">
          <span class="text-name">{{userName}}</span>
          <span class="text-account">@{{userAccount}}．{{reply.createdAt}}</span>
        </div>
        <div class="second-line">
          <span class="text-account ms-0">回覆</span>
          <span class="original-tweet ms-1">@{{reply.Tweet.User.account}}</span>
          <!-- 這邊要不要加連結? -->
        </div>
        <div class="tweet-content">
         {{reply.comment}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from "../apis/user"
import Spinner from "./../components/Spinner.vue";
import { Toast } from "../utils/helpers";
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
.reply-card {
  padding: 10px 15px;
  /* height: 121px; */
  border-bottom: 1px solid #e6ecf0;
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