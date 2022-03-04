<template>
  <div class="tweet-list">
    <!-- <router-link to="{ name: 'single-tweet' , params: {tweetId: tweet.id}}"
    </router-link> -->
    <Spinner v-if="isLoading" />
    <div class="tweet-card d-flex" v-for="tweet in userTweets" :key="tweet.id">
      <router-link :to="{ name: 'user-profile' ,params:{userId: tweet.User.id}}">
      <img :src="tweet.User.avatar" class="avatar" alt="" />
      </router-link>
      <div class="tweet-info d-flex flex-column">
        <div class="first-line">
          <span class="text-name">{{ tweet.User.name }}</span>
          <span class="text-account"
            >@{{ tweet.User.account }}．{{ tweet.createdAt | fromNow }}</span
          >
        </div>
        <router-link
          :to="{
            name: 'single-tweet',
            params: { tweetId: tweet.id, tweet },
          }"
        >
          <div class="tweet-content">
            {{ tweet.description }}
          </div></router-link
        >
        <div class="action my-1">
          <span class="icon-wrap">
            <button
              class="btn-reply"
              data-bs-toggle="modal"
              data-bs-target="#new-reply-modal"
              @click="handleReplyModal(tweet)"
            >
              <img src="./../assets/icon_reply.png" alt="" class="reply" />
            </button>
            <span class="text-like-reply">{{ tweet.replyCount }}</span>
          </span>
          <span class="icon-wrap ms-4">
            <img
              src="../assets/icon_like.png"
              class="like"
              alt=""
              v-if="!tweet.isLike"
              @click.stop.prevent="addLike(tweet.id)"
            />
            <img
              src="../assets/icon_like_fill.png"
              class="like"
              alt=""
              v-else
              @click.stop.prevent="deleteLike(tweet.id)"
            />
            <span class="text-like-reply">{{ tweet.likeCount }}</span>
          </span>
        </div>
      </div>
    </div>
    <NewReplyModal
      :tweet="tweetActive"
      @after-reply-submit="afterReplySubmit"
    />
  </div>
</template>

<script>
import NewReplyModal from "./../components/NewReplyModal.vue";
import userAPI from "./../apis/user";
import tweetsAPI from "../apis/tweets";
import Spinner from "./../components/Spinner.vue";
import { fromNowFilter } from "../utils/mixins";
import { Toast } from "../utils/helpers";

export default {
  name: "userTweetList",
  components: {
    NewReplyModal,
    Spinner,
  },
  mixins: [fromNowFilter],
  props: {
    userId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      userTweets: [],
      isLoading: true,
      tweetActive: [],
    };
  },

  created() {
    const userId = this.userId;
    this.fetchTweets(userId);
  },
  watch: {
    userId(newValue) {
      this.fetchTweets(newValue);
    },
  },
  methods: {
    async fetchTweets(userId) {
      try {
        const { data } = await userAPI.getUserTweets({ userId });
        // if (!data) {
        //   throw new Error("尚無任何推文！");
        // }
        this.userTweets = data;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log(error.message);
        // Toast.fire({
        //   icon: "error",
        //   title: '無法取得推文，請稍再試',
        // });
      }
    },
    async addLike(id) {
      try {
        const response = await tweetsAPI.addLike({ id });
        // const { data } = response
        if (response.data.status === "error") {
          throw new Error();
        }
        this.userTweets = this.userTweets.map((tweet) => {
          if (tweet.id === id) {
            return {
              ...tweet,
              isLike: true,
              likeCount: tweet.likeCount + 1,
            };
          }
          console.log(tweet);
          return tweet;
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    async deleteLike(id) {
      try {
        const response = await tweetsAPI.deleteLike({ id });
        if (response.data.status === "error") {
          throw new Error();
        }

        this.userTweets = this.userTweets.map((tweet) => {
          if (+tweet.id === +id) {
            return {
              ...tweet,
              isLike: false,
              likeCount: tweet.likeCount - 1,
            };
          }
          return tweet;
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    afterReplySubmit(payload) {
      const { tweetId, replyCount } = payload;
      this.allTweets = this.allTweets.map((tweet) => {
        if (tweet.id !== tweetId) {
          return tweet;
        }
        return {
          ...tweet,
          replyCount,
        };
      });
    },
    handleReplyModal(tweet) {
      this.tweetActive = { ...tweet };
    },
  },
};
</script>

<style scoped>
.avatar {
  width: 50px;
  height: 50px;
}
.tweet-card {
  padding: 10px 15px;
  /* height: 145px; */
  border-bottom: 1px solid #e6ecf0;
}
.tweet-card:hover {
  /* cursor: pointer; */
  box-shadow: 0 0 1px 0 var(--orange);
}
.tweet-content {
  margin-top: 6px;
  max-width: 510px;
  font-size: 15px;
  text-overflow: ellipsis;
}
.reply,
.like {
  width: 15px;
  height: 15px;
}
.like:hover {
  cursor: pointer;
}
</style>