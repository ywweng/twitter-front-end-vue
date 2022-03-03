<template>
  <div class="d-flex flex-column vh-100">
    <div class="title menu-text">首頁</div>
    <NewTweet @after-new-tweet="afterNewTweet" />
    <div class="border"></div>
    <div id="tweet-list">
      <Spinner v-if="isLoading" />
      <div class="tweet-card d-flex" v-for="tweet in allTweets" :key="tweet.id">
        <div>
          <img class="avatar" width="50px" :src="tweet.User.avatar" alt="" />
        </div>
        <div class="tweet-info d-flex flex-column">
          <div class="">
            <span class="text-name me-2">{{ tweet.User.name }}</span>
            <span class="text-account"
              >@{{ tweet.User.account }}．{{ tweet.createdAt | fromNow }}</span
            >
          </div>
          <div class="tweet-content">
            <router-link
              :to="{
                name: 'single-tweet',
                params: { tweetId: tweet.id, tweet },
              }"
            >
              {{ tweet.description }}
            </router-link>
          </div>
          <div class="action mt-auto my-1">
            <button
              class="btn-reply"
              data-bs-toggle="modal"
              data-bs-target="#new-reply-modal"
              @click="handleReplyModal(tweet)"
            >
              <img :src="require('./../assets/Reply.svg')" width="12px" />
              <span class="text-like-reply"> {{ tweet.replyCount }} </span>
            </button>
            <button
              class="btn-like"
              @click="deleteLike(tweet.id)"
              v-if="tweet.isLiked"
              :disabled="isProcessing"
            >
              <img :src="require('./../assets/LikeActive.svg')" width="12px" />
              <span class="text-like-reply">{{ tweet.likeCount }}</span>
            </button>
            <button
              class="btn-like"
              @click="addLike(tweet.id)"
              v-else
              :disabled="isProcessing"
            >
              <img :src="require('./../assets/Like.svg')" width="12px" />
              <span class="text-like-reply">{{ tweet.likeCount }}</span>
            </button>
          </div>
        </div>
        <NewReplyModal :tweet="tweet" @after-reply-submit="afterReplySubmit" />
      </div>
    </div>
    <!-- alert -->
    <div
      class="alert d-flex fixed-top"
      id="alert"
      role="alert"
      v-if="alertStatus !== false"
    >
      <div class="ms-2 mx-auto my-auto text-alert">{{ alertMsg }}</div>
      <div class="ms-auto">
        <img
          :src="require('./../assets/error-alert.svg')"
          v-if="alertStatus === 'error'"
        />
        <img
          :src="require('./../assets/success-alert.svg')"
          v-else-if="alertStatus === 'success'"
        />
      </div>
    </div>
    <NewReplyModal
      :tweet="tweetActive"
      @after-reply-submit="afterReplySubmit"
    />
    <!-- alert -->
    <div
      class="alert d-flex fixed-top"
      id="alert"
      role="alert"
      v-if="alertStatus !== false"
    >
      <div class="ms-2 mx-auto my-auto text-alert">{{ alertMsg }}</div>
      <div class="ms-auto">
        <img
          :src="require('./../assets/error-alert.svg')"
          v-if="alertStatus === 'error'"
        />
        <img
          :src="require('./../assets/success-alert.svg')"
          v-else-if="alertStatus === 'success'"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import NewTweet from './../components/NewTweet.vue'
  import Spinner from './../components/Spinner.vue'
  import NewReplyModal from './../components/NewReplyModal.vue'
  import { mapState } from 'vuex'
  import moment from 'moment'
  import tweetsAPI from './../apis/tweets'

export default {
  name: "TweetList",
  components: {
    NewTweet,
    NewReplyModal,
    Spinner,
  },
  data() {
    return {
      allTweets: [],
      isLoading: true,
      alertMsg: "",
      alertStatus: false,
    };
  },
  computed: {
    ...mapState(["newTweets", "currentUser"]),
  },
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      return moment(datetime).fromNow();
    },
    data() {
      return {
        allTweets: [],
        isLoading: true,
        alertMsg: '',
        alertStatus: false,
        tweetActive: [],
        isProcessing: false,
      }
    },
    computed: {
      ...mapState(['newTweets']),
    },
    filters: {
      fromNow(datetime) {
        if (!datetime) {
          return '-'
        }
        return moment(datetime).fromNow()
      },
    },
    created() {
      this.fetchTweets()
    },
    methods: {
      alertShow() {
        const bootstrap = require('bootstrap')
        let alertNode = document.querySelector('#alert')
        bootstrap.Alert.getInstance(alertNode)
        setTimeout(() => {
          this.alertStatus = false
        }, 2000)
      },
      setNewTweets() {
        this.allTweets.unshift({ ...this.newTweets[0] })
      },
      handleReplyModal(tweet) {
        this.tweetActive = { ...tweet }
      },
      async fetchTweets() {
        try {
          const response = await tweetsAPI.getTweets()
          const { data } = response
          this.allTweets = data.map((tweet) => {
            return {
              ...tweet,
            }
          })
          this.isLoading = false
        } catch (error) {
          this.isLoading = false
          this.alertMsg = '取得推文失敗，請稍後再試'
          this.alertStatus = 'error'
          this.alertShow()
        }
      },
      async addLike(tweetId) {
        try {
          const { data } = await tweetsAPI.addLike({
            id: tweetId,
          })
          this.isProcessing = true
          if (data.status === 'error') {
            throw new Error(data.message)
          }

          this.allTweets = this.allTweets.map((tweet) => {
            if (tweet.id !== tweetId) {
              return tweet
            } else {
              return {
                ...tweet,
                likeCount: tweet.likeCount + 1,
                isLiked: true,
              }
            }
          })

          this.isProcessing = false
        } catch (error) {
          this.alertMsg = '按讚失敗，請稍後再試'
          this.alertStatus = 'error'
          this.alertShow()
        }
      },
      async deleteLike(tweetId) {
        try {
          const { data } = await tweetsAPI.deleteLike({ id: tweetId })
          if (data.status === 'error') {
            throw new Error(data.message)
          }
          this.isProcessing = true
          this.allTweets = this.allTweets.map((tweet) => {
            if (tweet.id !== tweetId) {
              return tweet
            } else {
              return {
                ...tweet,
                likeCount: tweet.likeCount - 1,
                isLiked: false,
              }
            }
          })
          this.isProcessing = false
        } catch (error) {
          this.isProcessing = false
          this.alertMsg = '取消讚失敗，請稍後再試'
          this.alertStatus = 'error'
          this.alertShow()
        }
      },
      afterNewTweet() {
        this.fetchTweets()
      },
      afterReplySubmit(payload) {
        const { tweetId, replyCount } = payload
        this.allTweets = this.allTweets.map((tweet) => {
          if (tweet.id !== tweetId) {
            return tweet
          }
          return {
            ...tweet,
            replyCount,
          }
        })
      },
    },
    
  },
  watch: {
    newTweets() {
      if (this.newTweets.length > 0) {
        this.setNewTweets();
      }
    },
  },
};
</script>

<style scoped>
  #tweet-list {
    overflow-y: auto;
    max-height: 100vh;
  }
  #tweet-list::-webkit-scrollbar {
    display: none;
  }
  .title {
    padding-left: 20px;
    height: 55px;
    line-height: 55px;
    border-bottom: 1px solid #e6ecf0;
  }
  .border {
    height: 10px;
    background: #e6ecf0;
  }
  .tweet-card {
    padding: 10px 15px;
    /* max-height: 145px; */
    border-bottom: 1px solid #e6ecf0;
  }
  .tweet-card:hover {
    cursor: pointer;
    background: rgb(250, 250, 250);
    max-width: 598px;
    /* max-height: 145px; */
  }
  .tweet-content {
    margin-top: 6px;
    max-width: 510px;
    font-size: 15px;
    text-overflow: ellipsis;
  }
  .btn-reply {
    padding: 0;
    margin-right: 50px;
  }
  .text-like-reply {
    color: #657786;
  }
  .router-link-active {
    color: inherit;
  }
</style>
