<template>
  <div class="tweet-list">
    <!-- <router-link to="{ name: 'single-tweet' , params: {tweetId: tweet.id}}">

    </router-link> -->
    <div class="tweet-card d-flex" v-for="tweet in userTweets" :key="tweet.id">
      <img src="https://i.pravatar.cc/150?img=10" class="avatar" alt="" />
      <div class="tweet-info d-flex flex-column">
        <div class="first-line">
          <span class="text-name">Apple</span>
          <span class="text-account">@apple．3小時</span>
        </div>
        <div class="tweet-content">
          {{ tweet.description }}
        </div>
        <div class="action my-1">
          <span class="icon-wrap">
            <button
              class="btn-reply"
              data-bs-toggle="modal"
              data-bs-target="#new-reply-modal"
            >
            <img src="../assets/icon_reply.png" alt="" class="reply"
            />
            </button>
            <!-- 之後改router-link :to="{ name: 'single-tweet' }" -->
            <span class="text-like-reply">{{ tweet.totalReplies }}</span>
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
            <span class="text-like-reply">{{ tweet.totalLikes }}</span>
          </span>
        </div>
      </div>
    </div>
    <NewReplyModal />
  </div>
</template>

<script>
import NewReplyModal from './../components/NewReplyModal.vue'

const dummyData = [
  {
    id: 3,
    UserId: 1,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque nisi odio ipsa quaerat ipsam repellendus repellat consectetur culpa voluptatem nemo mollitia,",
    created_at: "2022-01-18T07:23:18.000Z",
    totalReplies: 13,
    totalLikes: 76,
    isLike: true, //確認API是否能提供
  },
  {
    id: 10,
    UserId: 1,
    description:
      " reprehenderit nobis minus quis atque adipisci et est maiores.",
    created_at: "2022-01-18T07:23:18.000Z",
    totalReplies: 0,
    totalLikes: 0,
    isLike: false, //確認API是否能提供
  },
];

export default {
  name: "user-TweetList",
  components: {
    NewReplyModal
  },
  data() {
    return {
      // currentUser,
      userTweets: [],
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    fetchTweets() {
      this.userTweets = dummyData;
    },
    addLike(id) {
      // TODO:串API
      this.userTweets = this.userTweets.map((tweet) => {
        if (tweet.id === id) {
          return {
            ...tweet,
            isLike: true,
          };
        }
        return tweet
      });
    },
    deleteLike(id) {
      // TODO:串API
      this.userTweets = this.userTweets.map((tweet) => {
        if (tweet.id === id) {
          return {
            ...tweet,
            isLike: false,
          };
        }
        return tweet
      });
    },
  },

};
</script>

<style scoped>
.tweet-card {
  padding: 10px 15px;
  /* height: 145px; */
  border-bottom: 1px solid #e6ecf0;
}
.tweet-card:hover {
  cursor: pointer;
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