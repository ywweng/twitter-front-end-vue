<template>
  <div class="row">
    <Spinner v-if="isLoading" />
    <!-- v-else -->
    <div class="follow-list" >
      <div class="user-card d-flex position-relative">
        <img src="" class="avatar" alt="" />
        <div class="user-info d-flex flex-column">
          <div class="text-name">Apple</div>
          <div class="text-account ms-0">@apple</div>
          <div class="text-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque nisi
            odio ipsa quaerat ipsam repellendus repellat
          </div>
        </div>
        <button
          type="button"
          class="btn btn-follow position-absolute"
          v-if="!isFollow"
          @click.stop.prevent="addFollow"
        >
          跟隨
        </button>
        <button
          type="button"
          class="btn btn-following position-absolute"
          v-else
          @click.stop.prevent="deleteFollow"
        >
          正在跟隨
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-card {
  padding: 10px 15px;
  /* height: 95px; */
  border-bottom: 1px solid #e6ecf0;
}
.text-content {
  margin-top: 6px;
  max-width: 510px;
  font-size: 15px;
  text-overflow: ellipsis;
}
.btn-follow,
.btn-following {
  right: 15px;
  padding: 5px 15px;
  border-color: var(--orange);
  border-radius: 100px;
  color: var(--orange);
  font-size: 15px;
  font-weight: 700;
}
.btn-following {
  background-color: var(--orange);
  color: white;
}
</style>

<script>
import Spinner from "../components/Spinner.vue";

export default {
  name: "FollowerList",
  components: {
    Spinner,
  },
  data() {
    return {
      followerList: [],
      isFollow: false,
      isLoading: true,
    };
  },
  methods: {
    // TODO:串API
    fetchFollower() {},
    addFollow() {
      this.isFollow = true;
    },
    deleteFollow() {
      this.isFollow = false;
    },
  },
};
</script>