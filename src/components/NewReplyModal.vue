<template>
  <div
    class="modal fade"
    id="new-reply-modal"
    tabindex="-1"
    aria-labelledby="newReplyModalLabel"
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
        <div class="modal-body d-flex flex-column">
          <div class="tweet-card d-flex">
            <div class="h-100 d-flex flex-column">
              <img
                class="avatar"
                :src="tweet.User.avatar"
                alt=""
                width="50px"
                height="50px"
              />
              <div class="border ms-4"></div>
            </div>
            <div class="tweet-info d-flex flex-column">
              <div class="h-100">
                <span class="text-name me-2">{{ tweet.User.name }}</span>
                <span class="text-account"
                  >@{{ tweet.User.account }}．{{
                    tweet.createdAt | fromNow
                  }}</span
                >
              </div>
              <div class="tweet-content">
                {{ tweet.description }}
              </div>
              <div>
                <span class="text-account">回覆給</span>
                <span class="text-tag ms-2">@{{ tweet.User.name }}</span>
              </div>
            </div>
          </div>
          <div class="reply-content d-flex">
            <div>
              <img
                class="avatar"
                width="50px"
                :src="currentUser.avatar"
                alt=""
              />
            </div>
            <textarea
              class="input-new-tweet mt-2"
              rows="5"
              cols="50"
              placeholder="推你的回覆"
              v-model="comment"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <span class="text-danger" v-if="isError">{{ errorMsg }}</span>
          <button type="submit" class="btn-active" @click="handleSubmit">
            回覆
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
  import moment from 'moment'
  import { mapState } from 'vuex'
  import tweetsAPI from './../apis/tweets'

  export default {
    name: 'NewReplyModal',
    props: {
      tweet: {
        type: [Array, Object],
        // required: true,
      },
    },
    data() {
      return {
        comment: '',
        alertMsg: '',
        alertStatus: false,
        isError: false,
        errorMsg: '',
      }
    },
    computed: {
      ...mapState(['currentUser']),
    },
    filters: {
      fromNow(datetime) {
        if (!datetime) {
          return '-'
        }
        return moment(datetime).fromNow()
      },
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
        const replyModal = document.querySelector('#new-reply-modal')
        const modal = bootstrap.Modal.getInstance(replyModal)
        setTimeout(() => {
          modal.hide()
        }, 1000)
      },
      async handleSubmit() {
        try {
          if (!this.comment) {
            this.isError = true
            this.errorMsg = '內容不可空白'
            return
          }

          const { data } = await tweetsAPI.postTweetReply({
            id: this.tweet.id,
            comment: this.comment,
          })
          if (data.status === 'error') {
            throw new Error(data.message)
          }
          // tweet list
          this.$emit('after-reply-submit', {
            tweetId: this.tweet.id,
            replyCount: this.tweet.replyCount + 1,
          })
          // single tweet
          this.$emit('after-single-reply', {
            User: this.currentUser,
            comment: this.comment,
            created_at: new Date().toISOString(),
          })
          this.alertMsg = '留言成功'
          this.alertStatus = 'success'
          this.alertShow()
          this.comment = ''
          this.hideModal()
        } catch (error) {
          this.comment = ''
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
  background: url("./../assets/btn-close.svg") center 0.5em no-repeat;
}
.btn-close:hover {
  opacity: 1;
}
.btn-active {
  margin-left: 20px;
}
.modal-content {
  height: 100%;
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
.tweet-content {
  margin: 5px 0 5px 0;
}
.text-account {
  font-size: 13px;
}
.text-tag {
  color: #ff6600;
  font-size: 13px;
}
.border {
  margin-top: 5px;
  width: 2px;
  height: 60%;
  background: #ccd6dd;
}
.reply-content {
  margin-top: 10px;
}
@media screen and (min-width: 576px) {
  .modal-dialog {
    max-width: 600px;
    height: 450px;
  }
}
</style>
