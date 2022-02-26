<template>
  <div class="admin-tweets d-flex">
    <div class="w-25">
      <AdminMenu />
    </div>
    
    <div class="tweet-list w-75">
      <div class="page-title">推文清單</div>
      <ul>
        <li class="d-flex position-relative" v-for="tweet in tweets" :key="tweet.id">
          <img class="avatar" :src="tweet.user.avatar" alt="" />
          <div class="content">
            <span class="name">{{tweet.user.name}}</span>
            <span class="account-time">@{{tweet.user.account}}．{{tweet.createdAt}}</span>
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

const dummyData = {
  tweets: [
    {
      id: 1,
      UserId: 1,
      description:
        "Ipsa quaerat modi alias vel eos odit qui ut et. Vel dolor doloribus iure deleniti veritatis ut. Aut quam odio reprehenderit. Et reprehenderit temporibus",
      createdAt: "2022-02-24T16:45:10.000Z",
      updatedAt: "2022-02-24T16:45:10.000Z",
      user: {
        avatar: "https://i.imgur.com/q6bwDGO.png",
        name: "root",
        account: "root",
      },
    },
    {
      id: 2,
      UserId: 1,
      description: "officiis et cum",
      createdAt: "2021-02-24T16:45:10.000Z",
      updatedAt: "2021-02-24T16:45:10.000Z",
      user: {
        avatar: "https://i.imgur.com/q6bwDGO.png",
        name: "root",
        account: "root",
      },
    },
  ],
};
export default {
  components: {
    AdminMenu,
  },
  data() {
    return {
      tweets:[]
    }
  },
  created() {
    this.fetchTweets()
  },
  methods: {
    fetchTweets () {
      this.tweets = dummyData.tweets
    },
    deleteTweet (tweetId) {
      this.tweets = this.tweets.filter(tweet => {
        if(tweet.id !== tweetId) {
          return tweet
        }
      })
    }
  },

};
</script>
