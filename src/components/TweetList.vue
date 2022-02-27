<template>
  <div class="d-flex flex-column vh-100">
    <div class="title menu-text">首頁</div>
    <NewTweet />
    <div class="border"></div>
    <div id="tweet-list">
      <div class="tweet-card d-flex" v-for="index in 10" :key="index">
        <div class="avatar"><img src="" alt="" /></div>
        <div class="tweet-info d-flex flex-column">
          <div class="">
            <span class="text-name me-2">Apple</span>
            <span class="text-account">@apple．3小時</span>
          </div>
          <div class="tweet-content">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </div>
          <div class="action my-1">
            <button class="btn-reply" data-bs-toggle="modal" data-bs-target="#new-reply-modal">
              <img :src="require('./../assets/Reply.svg')" width="12px" />
              <!-- TODO:修改id -->
              <span class="text-like-reply"> 13 </span>
            </button>
            <button
              class="btn-like"
              @click.stop.prevent="deleteLike"
              v-if="isLike"
            >
              <img :src="require('./../assets/LikeActive.svg')" width="12px" />
              <span class="text-like-reply">76</span>
            </button>
            <button class="btn-like" @click.stop.prevent="addLike" v-else>
              <img :src="require('./../assets/Like.svg')" width="12px" />
              <span class="text-like-reply">76</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <NewReplyModal />
  </div>
</template>

<script>
  import NewTweet from './../components/NewTweet.vue'
  import NewReplyModal from './../components/NewReplyModal.vue'
  export default {
    name: 'TweetList',
    components: {
      NewTweet,
      NewReplyModal,
    },
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
    height: 145px;
    border-bottom: 1px solid #e6ecf0;
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
</style>
