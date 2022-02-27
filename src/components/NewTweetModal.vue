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
          <div class="avatar"><img src="" alt="" /></div>
          <textarea
            class="input-new-tweet mt-2"
            rows="2"
            cols="35"
            placeholder="有什麼新鮮事？"
            v-model="content"
          ></textarea>
        </div>
        <div class="modal-footer">
          <span class="text-danger" v-if="content.length > 140"
            >字數不可超過 140 字</span
          >
          <button type="button" class="btn-active">推文</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewTweetModal',
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
