<template>
  <div class="like-list">
    <Spinner v-if="isLoading" />
    <div class="tweet-card d-flex" v-for="tweet in userLikes" :key="tweet.id">
      <img :src="tweet.Tweet.User.avatar" class="avatar" alt="" />
      <div class="tweet-info d-flex flex-column">
        <div class="first-line">
          <span class="text-name">{{ tweet.Tweet.User.name }}</span>
          <span class="text-account"
            >@{{ tweet.Tweet.User.account }}．{{
              tweet.createdAt | fromNow
            }}</span
          >
        </div>
        <router-link
          :to="{
            name: 'single-tweet',
            params: { tweetId: tweet.id, tweet },
          }"
        >
          <div class="tweet-content">
            {{ tweet.Tweet.description }}
          </div>
        </router-link>

        <div class="action my-1">
          <span class="icon-wrap">
            <button
              class="btn-reply"
              data-bs-toggle="modal"
              data-bs-target="#new-reply-modal"
            >
              <a href="#"
                ><img src="../assets/icon_reply.png" alt="" class="reply"
              /></a>
            </button>
            <!-- 之後改router-link :to="{ name: 'single-tweet' }" -->
            <span class="text-like-reply">{{ tweet.Tweet.replyCount }}</span>
          </span>
          <span class="icon-wrap ms-4">
            <img
              src="../assets/icon_like.png"
              class="like"
              alt=""
              v-if="!isLike"
              @click.stop.prevent="addLike(tweet.TweetId)"
            />
            <img
              src="../assets/icon_like_fill.png"
              class="like"
              alt=""
              v-else
              @click.stop.prevent="deleteLike(tweet.TweetId)"
            />
            <span class="text-like-reply">{{ tweet.Tweet.likeCount }}</span>
          </span>
        </div>
      </div>
    </div>
    <NewReplyModal />
  </div>
</template>

<script>
  import NewReplyModal from './../components/NewReplyModal.vue'
  import userAPI from './../apis/user'
  import tweetsAPI from './../apis/tweets'
  import { Toast } from '../utils/helpers'
  import { fromNowFilter } from '../utils/mixins'
  import Spinner from './../components/Spinner.vue'

  export default {
    name: 'userLikeList',
    components: {
      NewReplyModal,
      Spinner,
    },
    props: {
      userId: {
        type: Number,
        required: true,
      },
    },
    mixins: [fromNowFilter],
    data() {
      return {
        userLikes: [],
        isLoading: true,
        isLiked: true,
      }
    },
    created() {
      const userId = this.userId
      this.fetchLikes(userId)
    },
    watch: {
      userId(newValue) {
        this.fetchLikes(newValue)
      },
    },
    methods: {
      async fetchLikes(userId) {
        try {
          const { data } = await userAPI.getUserLikes({ userId })
          // if (!data.length) {
          //   Toast.fire({
          //   icon: "info",
          //   title: "尚無喜歡的推文!",
          // });
          // }
          this.userLikes = data
          this.isLoading = false
        } catch (error) {
          this.isLoading = false
          Toast.fire({
            icon: 'info',
            title: error.response.data.message,
          })
        }
      },
      // async addLike(tweetId) {
      //   try {
      //     const response = await tweetsAPI.addLike({ tweetId });
      //     // const { data } = response
      //     if (response.data.status === "error") {
      //       throw new Error();
      //     }
      //     this.userLikes = this.userLikes.map((tweet) => {
      //       if (+tweet.id === +tweetId) {
      //         return {
      //           ...tweet,
      //           isLiked: true,
      //           likeCount: tweet.likeCount + 1,
      //         };
      //       }
      //       return tweet;
      //     });
      //   } catch (error) {
      //     Toast.fire({
      //       icon: "error",
      //       title: error.response.data.message,
      //     });
      //   }
      // },
      async deleteLike(tweetId) {
        try {
          const response = await tweetsAPI.deleteLike({ tweetId })

          if (response.data.status !== 'success') {
            throw new Error()
          }

          this.userTweets = this.userTweets.filter((tweet) => {
            return tweet.TweetId !== tweetId
          })
        } catch (error) {
          Toast.fire({
            icon: 'error',
            title: '無法刪除喜歡的推文，請稍後再試',
          })
        }
      },
    },
  }
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
  .like {
    cursor: pointer;
  }
</style>
