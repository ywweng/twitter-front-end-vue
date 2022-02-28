<template>
  <div class="ms-0" id="popular-user">
    <div class="title menu-text w-100">Popular</div>
    <div
      class="user d-flex align-items-center"
      v-for="index in 10"
      :key="index"
    >
      <div class="avatar"><img src="" alt="" /></div>
      <div class="account d-flex flex-column me-auto">
        <span class="text-name">Pizza Hut</span>
        <span class="text-account">@Pizzhut</span>
      </div>
      <div class="follow">
        <!-- <button class="btn-following">正在跟隨</button> -->
        <button class="btn-follow">跟隨</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #popular-user {
    margin-top: 15px;
    background: #f5f8fa;
    border-radius: 14px;
    max-width: 350px;
  }
  .title {
    padding-left: 15px;

    height: 45px;
    line-height: 45px;
  }
  .user {
    border-top: 1px solid #e6ecf0;
    padding: 10px 15px;
  }

  .text-account {
    font-size: 15px;
    font-weight: 700;
    color: #657786;
  }
</style>
