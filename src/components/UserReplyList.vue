<template>
  <div class="reply-list">
    <div class="reply-card d-flex">
      <img src="https://i.pravatar.cc/150?img=10" class="avatar" alt="" />
      <div class="reply-info d-flex flex-column">
        <div class="first-line">
          <span class="text-name">Apple</span>
          <span class="text-account">@apple．3小時</span>
        </div>
        <div class="second-line">
          <span class="text-account ms-0">回覆</span>
          <span class="original-tweet ms-1">@Daniel</span>
          <!-- 這邊要不要加連結? -->
        </div>
        <div class="tweet-content">
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque nisi odio ipsa quaerat ipsam repellendus repellat consectetur culpa voluptatem nemo mollitia,"
        </div>
      </div>
    </div>
    <div class="reply-card d-flex">
      <img src="https://i.pravatar.cc/150?img=10" class="avatar" alt="" />
      <div class="reply-info d-flex flex-column">
        <div class="first-line">
          <span class="text-name">Apple</span>
          <span class="text-account">@apple．3小時</span>
        </div>
        <div class="second-line">
          <span class="text-account ms-0">回覆</span>
          <span class="original-tweet ms-1">@Daniel</span>
          <!-- 這邊要不要加連結? -->
        </div>
        <div class="tweet-content">
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque nisi odio ipsa quaerat ipsam repellendus repellat consectetur culpa voluptatem nemo mollitia,"
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reply-card {
  padding: 10px 15px;
  /* height: 121px; */
  border-bottom: 1px solid #e6ecf0;
}
.original-tweet {
  font-size: 15px;
  font-weight: 500;
  color: var(--orange);
}
.tweet-content {
  margin-top: 6px;
  max-width: 510px;
  font-size: 15px;
}
</style>