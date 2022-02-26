<template>
  <div id="new-tweet" class="d-flex">
    <div class="avatar"><img src="" alt="" /></div>
      <textarea
        class="input-new-tweet"
        rows="1"
        cols="50"
        placeholder="有什麼新鮮事？"
        maxlength="140"
        v-model="content"
      ></textarea>
      <div class="mt-auto ms-auto">
        <span class="text-danger" v-if="content > 140"
          >字數不可超過 140 字</span
        >
        <button type="submit" class="btn-active post">推文</button>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'NewTweet',
    data() {
      return {
        content: '',
      }
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
