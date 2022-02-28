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
              <img class="avatar" src="" alt="" width="50px" height="50px" />
              <div class="border ms-4"></div>
            </div>
            <div class="tweet-info d-flex flex-column">
              <div class="h-100">
                <span class="text-name me-2">Apple</span>
                <span class="text-account">@apple．3小時</span>
              </div>
              <div class="tweet-content">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor. Voluptate exercitation incididunt aliquip
                deserunt reprehenderit elit laborum.
              </div>
              <div>
                <span class="text-account">回覆給</span>
                <span class="text-tag ms-2">@apple</span>
              </div>
            </div>
          </div>
          <div class="reply-content d-flex">
            <div class="avatar"><img src="" alt="" /></div>
            <textarea
              class="input-new-tweet mt-2"
              rows="5"
              cols="50"
              placeholder="推你的回覆"
              v-model="content"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <span class="text-danger" v-if="content.length < 1"
            >內容不可空白</span
          >
          <button type="submit" class="btn-active">回覆</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewReplyModal',
    data() {
      return {
        content: '',
      }
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
