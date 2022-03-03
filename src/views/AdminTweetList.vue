<template>
  <div class="admin-tweets d-flex">
    <div class="w-25">
      <AdminMenu />
    </div>
    
    <div class="tweet-list w-75">
      <div class="page-title">推文清單</div>
      <ul>
        <Spinner v-if="isLoading" />
        <li class="d-flex position-relative" v-for="tweet in tweets" :key="tweet.id">
          <img class="avatar" :src="tweet.User.avatar" alt="" />
          <div class="content">
            <span class="name">{{tweet.User.name}}</span>
            <span class="account-time">@{{tweet.User.account}}．{{tweet.createdAt | fromNow}}</span>
            <div class="description ellipsis">
              {{tweet.description}}
            </div>
          </div>
          <div class="delete-btn position-absolute" @click.stop.prevent="deleteTweet(tweet.id)">&#10005;</div>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<style scoped>
.tweet-list {
  width: 100%;
  height: 100vh;
  border-left: 1px solid var(--border-line-color);
}
.page-title {
  padding: 15px 0 15px 26px;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid var(--border-line-color);
}
li {
  height: 65px;
  margin: 10px 0;
  border-bottom: 1px solid var(--border-line-color);
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 3px 15px;
  background-color: #C4C4C4;
}
.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 400px;
}
.content span,
.description {
  font-size: 15px;
  margin: 0 5px;
}
.account-time {
  color:var(--light-gray-text);
}
.delete-btn {
  font-size: 15px;
  right: 20px;
}
.delete-btn:hover {
  cursor: pointer;
  color: var(-main-text);
  font-weight: bold;
}
</style>

<script>
import AdminMenu from "../components/AdminMenu.vue";
import adminAPI from "../apis/admin"
import { fromNowFilter } from "../utils/mixins"
import Spinner from "../components/Spinner.vue"

export default {
  name: 'AdminTweetList',
  mixins: [fromNowFilter],
  components: {
    AdminMenu,
    Spinner
  },
  data() {
    return {
      tweets:[],
      isLoading: true
    }
  },
  created() {
    this.fetchTweets()
  },
  methods: {
    async fetchTweets () {
      try {
        const { data } = await adminAPI.tweets.get()
        if (data.status !== 'success') {
          throw new Error(data.message) 
        }
        this.tweets = data.tweets
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log(error.message)
      }
     
    },
    async deleteTweet (tweetId) {
      try {
        const { data } = await adminAPI.tweets.delete({tweetId})
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        this.tweets = this.tweets.filter(tweet => {
          if(tweet.id !== tweetId) {
            return tweet
          }
        })
      } catch (error) {
        console.log(error.response.data.message)
        console.log('無法取得推文資料')
      }
      
    }
  },

};
</script>
