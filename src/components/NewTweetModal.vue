<template>
  <div
    class="modal fade"
    id="new-tweet-modal"
    tabindex="-1"
    aria-labelledby="newTweetModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex">
          <div class="">
            <img class="avatar" :src="currentUser.avatar" alt="" />
          </div>
          <textarea
            class="input-new-tweet mt-2"
            rows="2"
            cols="35"
            placeholder="有什麼新鮮事？"
            v-model="description"
          ></textarea>
        </div>
        <div class="modal-footer">
          <span class="text-danger" v-if="isError">{{ errorMsg }}</span>
          <button
            type="submit"
            class="btn-active"
            @click.prevent="handleSubmit"
            :disabled="isProcessing"
          >
            推文
          </button>
        </div>
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
    name: 'NewTweetModal',
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
      hideModal() {
        const bootstrap = require('bootstrap')
        const tweetModal = document.querySelector('#new-tweet-modal')
        const modal = bootstrap.Modal.getInstance(tweetModal)
        setTimeout(() => {
          modal.hide()
        }, 1000)
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
          this.$emit('after-new-tweet',data)
          this.alertMsg = '推文成功'
          this.alertStatus = 'success'
          this.alertShow()
          this.isProcessing = false
          this.description = ''
          this.hideModal()
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
  .modal.show .modal-dialog {
    margin-top: 54px;
  }
  .modal-header .btn-close {
    margin: 0.5rem auto 0.5rem 0.5rem;
    color: #ff6600;
  }
  .modal-header {
    border-bottom: 1px solid #e6ecf0;
    padding: 0;
  }
  .btn-close {
    background: url('./../assets/btn-close.svg') center 0.5em no-repeat;
  }
  .btn-close:hover {
    opacity: 1;
  }
  .btn-active {
    margin-left: 20px;
  }
  .modal-content {
    height: 300px;
    border: 0;
    border-radius: 14px;
  }
  .modal-footer {
    border-top: 0;
  }
  .input-new-tweet {
    border: none;
    width: 100%;
    resize: none;
    outline: none;
  }
  @media screen and (min-width: 576px) {
    .modal-dialog {
      max-width: 600px;
      height: 300px;
    }
  }
</style>
