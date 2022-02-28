<template>
  <div class="like-list">
    <div class="tweet-card d-flex" v-for="tweet in userLikes" :key="tweet.id">
      <img :src="tweet.User.avatar" class="avatar" alt="" />
      <div class="tweet-info d-flex flex-column">
        <div class="first-line">
          <span class="text-name">{{tweet.User.name}}</span>
          <span class="text-account">@{{tweet.User.account}}．3小時</span>
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
            <a href="#"
              ><img src="../assets/icon_reply.png" alt="" class="reply"
            /></a>
            </button>
            <!-- 之後改router-link :to="{ name: 'single-tweet' }" -->
            <span class="text-like-reply">{{ tweet.replyCount }}</span>
          </span>
          <span class="icon-wrap ms-4">
            <img
              src="../assets/icon_like.png"
              class="like"
              alt=""
              v-if="!tweet.isLiked"
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
    <NewReplyModal />
  </div>
</template>

<script>
import NewReplyModal from './../components/NewReplyModal.vue'

const dummyData = [
  {
    id: 104,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque nisi odio ipsa quaerat ipsam repellendus repellat consectetur culpa voluptatem nemo mollitia,",
    createdAt: "2021-04-25T14:07:36.000Z",
    isLiked: true,
    User: {
      id: 24,
      name: "user24",
      account: "user24",
      avatar: "https://i.imgur.com/q6bwDGO.png",
    },
    replyCount: 33,
    likeCount: 12,
  },
  {
    id: 102,
    description:
      " reprehenderit nobis minus quis atque adipisci et est maiores.",
    ccreatedAt: "2022-01-18T07:23:18.000Z",
    isLiked: true,
    User: {
      id: 26,
      name: "user26",
      account: "user26",
      avatar: "https://i.imgur.com/q6bwDGO.png",
    },
    replyCount: 33,
    likeCount: 12,
  },
];

export default {
  name: "user-ReplyList",
  components: {
    NewReplyModal,
  },
  data() {
    return {
      userLikes: [],
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    fetchTweets() {
      this.userLikes = dummyData;
    },
    addLike(id) {
      // TODO:串API
      this.userLikes = this.userLikes.map((tweet) => {
        if (tweet.id === id) {
          return {
            ...tweet,
            isLiked: true,
          };
        }
        return tweet;
      });
    },
    deleteLike(id) {
      // TODO:串API，刪除之後要不要在畫面移除
      this.userLikes = this.userLikes.map((tweet) => {
        if (tweet.id === id) {
          return {
            ...tweet,
            isLiked: false,
          };
        }
        return tweet;
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