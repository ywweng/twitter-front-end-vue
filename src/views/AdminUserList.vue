<template>
  <div class="admin-users d-flex">
    <div class="w-25">
      <AdminMenu />
    </div>
    <div class="user-list w-75">
      <div class="page-title">使用者列表</div>
      <!-- render user card -->
      <div class="card-wrap">
        <div class="row">
          <!--v-for從這行-->
          <div class="col-3">
            <div class="card h-100">
              <img
                src="https://thumbs.dreamstime.com/b/incredibly-beautiful-sunset-sun-lake-sunrise-landscape-panorama-nature-sky-amazing-colorful-clouds-fantasy-design-115177001.jpg"
                class="card-img-top user-cover"
                alt=""
              />
              <img
                src="https://i.pravatar.cc/150?img=10"
                class="avatar"
                alt=""
              />
              <div class="card-body d-flex flex-column align-items-center">
                <span class="user-name">John Doe</span>      
                <span class="user-account color-light">@heyjohn</span>
                <div class="icon pt-2 pb-2">
                  <span class="total-reply mx-1"><img src="../assets/icon_reply.png" alt="">1.5k</span>
                  <span class="total-like mx-1"><img src="../assets/icon_like.png" alt="">20k</span>
                </div>
                <div class="followship">
                  <span class="following ">34個</span>
                  <span class="color-light">跟隨中</span>
                  <span class="follower ms-2">59位</span>
                  <span class="color-light">跟隨者</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.user-list {
  width: 100%;
  height: 100vh;
  border-left: 1px solid #e6ecf0;
}
.page-title {
  padding: 15px 0 15px 26px;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid #e6ecf0;
}
.card-wrap {
  width: 100%;
  padding: 15px;
}
.card {
  width: 100%;
  position: relative;
  border-radius: 10px;
}
.user-cover {
  width: 100%;
  height: 140px;
  background-color: #c4c4c4;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ffffff;
  background-color: #c4c4c4;
  position: absolute;
  top: 68px;
  left: calc(50% - 50px);
}
.card-body {
  padding-top: 33px;
  font-size: 15px;
}
.user-name {
  font-weight: 900;
}

.icon img {
  width: 24px;
  height: 24px;
}
.color-light {
 color: #657786;
}
</style>

<script>
import AdminMenu from "../components/AdminMenu.vue";
export default {
  components: {
    AdminMenu,
  },
};
</script>
