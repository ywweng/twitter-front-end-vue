<template>
  <div id="single-tweet">
    <div class="title menu-text">
      <button type="button" class="d-flex">
        <img
          :src="require('./../assets/back.svg')"
          width="17px"
          height="14px"
          class="my-auto"
        />
        <router-link to="#" class="ms-4 my-auto menu-text">推文</router-link>
      </button>
    </div>
    <div class="tweet-section d-flex flex-column">
      <div class="user-info d-flex">
        <div class="avatar"><img src="" alt="" /></div>
        <div class="d-flex flex-column">
          <span class="text-name">Apple</span>
          <span class="text-account">@apple</span>
        </div>
      </div>
      <div class="tweet d-flex flex-column w-100">
        <div class="tweet-content">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum.
        </div>
        <div class="tweet-time w-100">上午．年月日</div>
        <div class="like-reply">
          <span class="text-reply"><strong>34</strong> 回覆</span>
          <span class="text-like"><strong>808</strong> 喜歡次數</span>
        </div>
        <div class="action">
          <button class="btn-reply">
            <img :src="require('./../assets/Reply.svg')" />
          </button>
          <button
            class="btn-like"
            @click.stop.prevent="deleteLike"
            v-if="isLike"
          >
            <img :src="require('./../assets/LikeActive.svg')" />
          </button>
          <button class="btn-like" @click.stop.prevent="addLike" v-else>
            <img :src="require('./../assets/Like.svg')" />
          </button>
        </div>
      </div>
    </div>
    <div class="replies" id="reply-list" >
      <div class="reply-card d-flex" v-for="index in 10" :key="index">
        <div class="avatar"><img src="" alt="" /></div>
        <div class="tweet-info d-flex flex-column justify-content-evenly w-100">
          <div class="">
            <span class="text-name me-2">Apple</span>
            <span class="text-account">@apple．3小時</span>
          </div>
          <div>
            <span class="text-account">回覆</span>
            <span class="text-tag ms-2">@apple</span>
          </div>
          <div>Great~Great~Great~Great~Great~Great~</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SingleTweet',
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
  }
  .tweet-info {
    height: 105px;
  }
  #reply-list {
    border-top: 1px solid #e6ecf0;
    height: 100vh;
  }
  #tweet-list::-webkit-scrollbar {
    display: none;
  }
  .text-tag {
    color: #ff6600;
  }
</style>
