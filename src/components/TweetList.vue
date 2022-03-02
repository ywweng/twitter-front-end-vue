<template>
  <div class="d-flex flex-column vh-100">
    <div class="title menu-text">首頁</div>
    <NewTweet />
    <div class="border"></div>
    <div id="tweet-list">
      <Spinner v-if="isLoading" />
      <div
        class="tweet-card d-flex"
        v-for="(tweet, index) in allTweets"
        :key="index"
      >
        <div>
          <img class="avatar" width="50px" :src="tweet.user.avatar" alt="" />
        </div>
        <div class="tweet-info d-flex flex-column">
          <div class="">
            <span class="text-name me-2">{{ tweet.user.name }}</span>
            <span class="text-account"
              >@{{ tweet.user.account }}．{{ tweet.createdAt | fromNow }}</span
            >
          </div>
          <div class="tweet-content">
            <!-- TODO:修改tweetID -->
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
            >
              <img :src="require('./../assets/Reply.svg')" width="12px" />
              <span class="text-like-reply"> {{ tweet.replyCount }} </span>
            </button>
            <button
              class="btn-like"
              @click.stop.prevent="deleteLike(tweet.id)"
              v-if="tweet.isLike"
            >
              <img :src="require('./../assets/LikeActive.svg')" width="12px" />
              <span class="text-like-reply">{{ tweet.likeCount }}</span>
            </button>
            <button
              class="btn-like"
              @click.stop.prevent="addLike(tweet.id)"
              v-else
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
  </div>
</template>

<script>
  import NewTweet from './../components/NewTweet.vue'
  import Spinner from './../components/Spinner.vue'
  import NewReplyModal from './../components/NewReplyModal.vue'
  import { mapState } from 'vuex'
  import moment from 'moment'
  // import tweetsAPI from './../apis/tweets'

  const dummyData = [
    {
      id: 1,
      description: '推文',
      UserId: 1,
      createdAt: '2022-01-26T16:45:10.000Z',
      updatedAt: '2022-01-26T16:45:10.000Z',
      replyCount: 3,
      likeCount: 1,
      user: {
        avatar:
          'https://p3-tt-ipv6.byteimg.com/origin/pgc-image/2ab5266b1e27469d879288d6e1d225a7.png',
        name: 'root',
        account: 'root',
      },
    },
  ]

  export default {
    name: 'TweetList',
    components: {
      NewTweet,
      NewReplyModal,
      Spinner,
    },
    data() {
      return {
        allTweets: [],
        isLoading: true,
        alertMsg: '',
        alertStatus: false,
      }
    },
    computed: {
      ...mapState(['newTweets', 'currentUser']),
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
      // 模擬
      setTimeout(() => {
        this.isLoading = false
      }, 3000)
    },
    mounted() {
      this.fetchTweets()
    },
    updated() {
      this.$store.commit('resetNewTweet')
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
      fetchTweets() {
        // TODO:串接API
        this.isLoading = true
        // const response = await tweetsAPI.getTweets(userId)
        // const { data } = response
        this.allTweets = dummyData.map((tweet) => {
          return {
            ...tweet,
            isLike: false,
          }
        })

        // catch error msg
        this.isLoading = false
        // this.alertMsg = '取得推文失敗，請稍後再試'
        // this.alertStatus = 'error'
        // this.alertShow()
      },
      setNewTweets() {
        this.allTweets.unshift({ ...this.newTweets[0] })
      },
      addLike(tweetId) {
        // TODO:串接API
        // const {data} = await tweetsAPI.addLike({tweetId})
        // if (data.status === 'error') {
        //   throw new Error(data.message)
        // }
        this.allTweets = this.allTweets.map((tweet) => {
          if (tweet.id !== tweetId) {
            return tweet
          }
          return {
            ...tweet,
            likeCount: tweet.likeCount + 1,
            isLike: true,
          }
        })
        // catch error msg
        // this.alertMsg = '按讚失敗，請稍後再試'
        // this.alertStatus = 'error'
        // this.alertShow()
      },
      deleteLike(tweetId) {
        // TODO:串接API
        // const {data} = await tweetsAPI.deleteLike({tweetId})
        // if (data.status === 'error') {
        //   throw new Error(data.message)
        // }
        this.allTweets = this.allTweets.map((tweet) => {
          if (tweet.id !== tweetId) {
            return tweet
          }
          return {
            ...tweet,
            likeCount: tweet.likeCount - 1,
            isLike: false,
          }
        })
        // catch error msg
        // this.alertMsg = '按讚失敗，請稍後再試'
        // this.alertStatus = 'error'
        // this.alertShow()
      },
      afterReplySubmit(payload) {
        const { tweetId, replyCount } = payload
        console.log(payload)
        this.allTweets = this.allTweets.map((tweet) => {
          if (tweet.id !== tweetId) {
            return tweet
          }
          console.log(replyCount)
          return {
            ...tweet,
            replyCount,
          }
        })
      },
    },
    watch: {
      newTweets() {
        if (this.newTweets.length > 0) {
          this.setNewTweets()
        }
      },
    },
  }
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
    max-height: 145px;
    border-bottom: 1px solid #e6ecf0;
  }
  .tweet-card:hover {
    cursor: pointer;
    background: rgb(250, 250, 250);
    max-width: 598px;
    max-height: 145px;
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
