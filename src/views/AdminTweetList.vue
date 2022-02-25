<template>
  <div class="admin-tweets d-flex">
    <div class="col-3">
      <AdminMenu />
    </div>
    
    <div class="tweet-list col-9">
      <div class="page-title">推文清單</div>
      <ul>
        <li class="d-flex position-relative" v-for="tweet in tweets" :key="tweet.tweet_id">
          <img class="avatar" :src="tweet.avatar" alt="" />
          <div class="content">
            <span class="name">{{tweet.user_name}}</span>
            <span class="account-time">@{{tweet.account}}．{{tweet.createdAt}}</span>
            <div class="description ellipsis">
              {{tweet.description}}
            </div>
          </div>
          <div class="delete-btn position-absolute">&#10005;</div>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<style scoped>
.tweet-list {
  width: 100%;
  height: 100vh;
  border-left: 1px solid #E6ECF0;
}
.page-title {
  padding: 15px 0 15px 26px;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid #E6ECF0;
}
li {
  height: 65px;
  margin: 10px 0;
  border-bottom: 1px solid #E6ECF0;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 3px 15px;
  background-color: #C4C4C4;
}
.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 400px;
}
.content span,
.description {
  font-size: 15px;
  margin: 0 5px;
}
.account-time {
  color:#657786;
}
.delete-btn {
  font-size: 15px;
  right: 20px;
}
.delete-btn:hover {
  cursor: pointer;
  color: black;
  font-weight: bold;
}
</style>

<script>
import AdminMenu from "../components/AdminMenu.vue";

export default {
  components: {
    AdminMenu,
  },
  data () {
    return {
      tweets: [    //dummy data
        {
          user_avatar: "",
          user_name: "Apple",
          user_account: "apple",
          tweet_id: "1",
          createdAt: "3小時",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia dolorem illum exercitationem iusto maiores.",

        },
        {
          user_avatar: "",
          user_name: "Banana",
          user_account: "banana",
          tweet_id: "2",
          createdAt: "5小時",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia dolorem illum exercitationem iusto maiores.",

        },
      ]
    }
  }
};
</script>
