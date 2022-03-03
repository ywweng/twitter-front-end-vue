<template>
  <div id="new-tweet" class="d-flex">
    <div><img class="avatar" :src="currentUser.avatar" alt="" /></div>
    <div class="d-flex flex-column">
      <textarea
        class="input-new-tweet mt-2"
        rows="1"
        cols="65"
        placeholder="有什麼新鮮事？"
        v-model="description"
      ></textarea>
      <div class="mt-auto ms-auto">
        <span class="text-danger" v-if="isError">{{ errorMsg }}</span>
        <button
          type="submit"
          class="btn-active post"
          @click.prevent="handleSubmit"
          :disabled="isProcessing"
        >
          推文
        </button>
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
  import { mapState } from 'vuex'
  import tweetsAPI from './../apis/tweets'

  export default {
    name: 'NewTweet',
    data() {
      return {
        description: '',
        isError: false,
        errorMsg: '',
        isProcessing: false,
        alertMsg: '',
        alertStatus: false,
      }
    },
    computed: {
      ...mapState(['currentUser', 'newTweets']),
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
      async handleSubmit() {
        try {
          if (!this.description) {
            this.isError = true
            this.errorMsg = '內容不可空白'
            return
          } else if (this.description.length > 140) {
            this.isError = true
            this.errorMsg = '字數不可超過 140 字'
            return
          } else {
            this.isError = false
          }

          this.isProcessing = true
          const { data } = await tweetsAPI.postTweet({
            description: this.description,
          })
          console.log(data)
          // 優化
          const newTweet = {
            UserId: this.currentUser.id,
            description: this.description,
            replyCount: 0,
            likeCount: 0,
            createdAt: new Date().toISOString(),
            User: {
              avatar: this.currentUser.avatar,
              name: this.currentUser.name,
              account: this.currentUser.account,
            },
          }
          this.$store.commit('setNewTweet', newTweet)
          this.alertMsg = '推文成功'
          this.alertStatus = 'success'
          this.alertShow()

          this.isProcessing = false
          this.description = ''
        } catch (error) {
          this.alertMsg = error.response.data.message
          this.alertStatus = 'error'
          this.alertShow()
        }
      },
    },
  }
</script>

<style scoped>
  #new-tweet {
    padding: 10px 15px;
    min-height: 120px;
  }
  .input-new-tweet {
    border: none;
    max-width: 510px;
    resize: none;
    outline: none;
  }
  .post {
    height: 38px;
    width: 66px;
  }
  .text-danger {
    margin-right: 20px;
  }
</style>
