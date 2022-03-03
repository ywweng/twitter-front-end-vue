<template>
  <div id="single-tweet" class="w-100">
    <Spinner v-if="isLoading" />
    <div class="title menu-text">
      <button type="button" class="d-flex" @click="$router.go(-1)">
        <img
          :src="require('./../assets/back.svg')"
          width="17px"
          height="14px"
          class="my-auto"
        />
        <span class="ms-4 my-auto menu-text">推文</span>
      </button>
    </div>
    <div class="tweet-section d-flex flex-column">
      <div class="user-info d-flex">
        <div><img class="avatar" :src="tweet.User.avatar" alt="" /></div>
        <div class="d-flex flex-column">
          <span class="text-name">{{ tweet.User.name }}</span>
          <span class="text-account">@{{ tweet.User.account }}</span>
        </div>
      </div>
      <div class="tweet d-flex flex-column w-100">
        <div class="tweet-content">
          {{ tweet.description }}
        </div>
        <div class="tweet-time w-100">{{ tweet.createdAt | format }}</div>
        <div class="like-reply">
          <span class="text-reply"
            ><strong>{{ tweet.repliesCount }}</strong> 回覆</span
          >
          <span class="text-like"
            ><strong>{{ tweet.likesCount }}</strong> 喜歡次數</span
          >
        </div>
        <div class="action">
          <button
            class="btn-reply"
            data-bs-toggle="modal"
            data-bs-target="#new-reply-modal"
          >
            <img :src="require('./../assets/Reply.svg')" />
          </button>
          <button
            class="btn-like"
            @click.stop.prevent="deleteLike(tweet.id)"
            v-if="tweet.isLiked"
          >
            <img :src="require('./../assets/LikeActive.svg')" width="24px" />
          </button>
          <button
            class="btn-like"
            @click.stop.prevent="addLike(tweet.id)"
            v-else
          >
            <img :src="require('./../assets/Like.svg')" />
          </button>
        </div>
      </div>
    </div>
    <div class="replies" id="reply-list">
      <div class="reply-card d-flex" v-for="reply in replies" :key="reply.id">
        <div><img class="avatar" :src="reply.User.avatar" alt="" /></div>
        <div
          class="tweet-info d-flex flex-column justify-content-evenly w-100 h-100"
        >
          <div class="">
            <span class="text-name me-2">{{ reply.User.name }}</span>
            <span class="text-account"
              >@{{ reply.User.account }}．{{ reply.createdAt | fromNow }}</span
            >
          </div>
          <div>
            <span class="text-account">回覆</span>
            <span class="text-tag ms-2">@{{ tweet.User.account }}</span>
          </div>
          <div>{{ reply.comment }}</div>
        </div>
      </div>
    </div>
    <NewReplyModal :tweet="tweet" @after-single-reply="afterSingleReply" />
  </div>
</template>

<script>
  import tweetsAPI from './../apis/tweets'
  import NewReplyModal from './../components/NewReplyModal.vue'
  import Spinner from './../components/Spinner.vue'
  import { mapState } from 'vuex'
  import moment from 'moment'

  export default {
    name: 'SingleTweet',
    components: {
      NewReplyModal,
      Spinner,
    },
    data() {
      return {
        tweet: [],
        replies: [],
        alertMsg: '',
        alertStatus: false,
        isProcessing: false,
        isLoading: true,
      }
    },
    computed: {
      ...mapState(['currentUser']),
    },
    filters: {
      format(datetime) {
        if (!datetime) {
          return '-'
        }
        moment.locale('zh-tw')
        return moment(datetime).format('A hh:mm．LL')
      },
      fromNow(datetime) {
        if (!datetime) {
          return '-'
        }
        return moment(datetime).fromNow()
      },
    },
    created() {
      this.fetchTweet()
      this.fetchReplies()
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
      async fetchTweet() {
        try {
          const { data } = await tweetsAPI.getOneTweet({
            tweetId: this.$route.params.tweetId,
          })
          this.tweet = data
          this.isLoading = false
        } catch (error) {
          this.alertMsg = '載入推文失敗，請稍後再試'
          this.alertStatus = 'error'
          this.alertShow()
        }
      },
      async fetchReplies() {
        try {
          const { data } = await tweetsAPI.getTweetReplies({
            tweetId: this.tweet.id || this.$route.params.tweetId,
          })
          if (data.status === 'error') {
            throw new Error(data.message)
          }
          this.replies = data
        } catch (error) {
          this.alertMsg = '載入留言失敗，請稍後再試'
          this.alertStatus = 'error'
          this.alertShow()
        }
      },
      async addLike(tweetId) {
        try {
          const { data } = await tweetsAPI.addLike({
            tweetId,
          })
          this.isProcessing = true
          if (data.status === 'error') {
            throw new Error(data.message)
          }

          this.tweet.likesCount = this.tweet.likesCount + 1
          this.tweet.isLiked = true

          this.isProcessing = false
        } catch (error) {
          this.alertMsg = '按讚失敗，請稍後再試'
          this.alertStatus = 'error'
          this.alertShow()
        }
      },
      async deleteLike(tweetId) {
        try {
          const { data } = await tweetsAPI.deleteLike({
            tweetId,
          })
          this.isProcessing = true
          if (data.status === 'error') {
            throw new Error(data.message)
          }

          this.tweet.likesCount = this.tweet.likesCount - 1
          this.tweet.isLiked = false

          this.isProcessing = false
        } catch (error) {
          this.alertMsg = '按讚失敗，請稍後再試'
          this.alertStatus = 'error'
          this.alertShow()
        }
      },
      afterSingleReply(payload) {
        this.replies.unshift({ ...payload })
        this.tweet.repliesCount = this.tweet.repliesCount + 1
      },
    },
  }
</script>

<style scoped>
  #single-tweet {
    min-width: 510px;
    max-height: 100vh;
  }
  .title {
    padding-left: 20px;
    height: 55px;
    line-height: 55px;
    border-bottom: 1px solid #e6ecf0;
  }
  .tweet-section {
    margin: 15px 15px 0 15px;
  }
  .tweet-content {
    justify-content: center;
    margin-top: 18px;
    font-size: 1.5rem;
  }
  .tweet-time {
    padding: 15px 0;
    border-bottom: 1px solid #e6ecf0;
    font-size: 15px;
    color: #657786;
  }
  .action {
    padding: 20px 0 15px 0;
  }
  .like-reply {
    padding: 20px 0 20px 0;
    font-size: 19px;
    border-bottom: 1px solid #e6ecf0;
  }
  .text-reply,
  .text-like {
    color: #657786;
  }
  .text-reply {
    margin-right: 20px;
  }
  .text-like-reply {
    color: #657786;
  }
  .btn-reply {
    margin-right: 155px;
  }
  .reply-card {
    padding: 15px;
    border-bottom: 1px solid #e6ecf0;
    max-height: 105px;
  }
  .tweet-info {
    height: 105px;
  }
  #reply-list {
    border-top: 1px solid #e6ecf0;
    /* height: 100vh; */
  }
  #tweet-list::-webkit-scrollbar {
    display: none;
  }
  .text-tag {
    color: #ff6600;
  }
</style>
