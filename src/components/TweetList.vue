<template>
  <div id="tweet-list">
    <div class="tweet-card d-flex" v-for="index in 10" :key="index">
      <div class="avatar"><img src="" alt="" /></div>
      <div class="tweet-info d-flex flex-column">
        <div class="">
          <span class="text-name">Apple</span>
          <span class="text-account">@apple．3小時</span>
        </div>
        <div class="tweet-content">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum.
        </div>
        <div class="action my-1">
          <button class="reply">
            <img :src="require('./../assets/Reply.svg')" width="12px" />
            <router-link :to="{ name: 'single-tweet' }" class="text-like-reply"
              >13</router-link
            >
          </button>
          <button class="like" @click.stop.prevent="deleteLike" v-if="isLike">
            <img :src="require('./../assets/LikeActive.svg')" width="12px" />
            <span class="text-like-reply">76</span>
          </button>
          <button class="like" @click.stop.prevent="addLike" v-else>
            <img :src="require('./../assets/Like.svg')" width="12px" />
            <span class="text-like-reply">76</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TweetList',
    data() {
      return {
        isLike: false,
      }
    },
    methods: {
      addLike() {
        this.isLike = true
      },
      deleteLike() {
        this.isLike = false
      },
    },
  }
</script>

<style scoped>
  #tweet-list {
    overflow-y: auto;
    max-height: 1020px;
  }
  #tweet-list::-webkit-scrollbar {
    display: none;
  }
  .tweet-card {
    padding: 10px 15px;
    height: 145px;
    border-bottom: 1px solid #e6ecf0;
  }
  .tweet-content {
    margin-top: 6px;
    max-width: 510px;
    font-size: 15px;
    text-overflow: ellipsis;
  }
  .reply {
    padding: 0;
    margin-right: 50px;
  }
</style>
