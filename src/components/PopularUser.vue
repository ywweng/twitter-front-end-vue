<template>
  <div class="ms-0" id="popular-user">
    <div class="title menu-text w-100">Popular</div>
    <Spinner v-if="isLoading" />
    <div
      class="user d-flex align-items-center"
      v-for="user in users"
      :key="user.id"
    >
      <div class=""><img class="avatar" :src="user.avatar" alt="" /></div>
      <div class="account d-flex flex-column me-auto">
        <span class="text-name">{{ user.name }}</span>
        <span class="text-account">@{{ user.account }}</span>
      </div>
      <div class="follow">
        <button
          class="btn-following"
          @click.stop.prevent="deleteFollowing(user.id)"
          v-if="user.isFollowed"
        >
          正在跟隨
        </button>
        <button
          class="btn-follow"
          @click.stop.prevent="addFollowing(user.id)"
          v-else
        >
          跟隨
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import Spinner from './../components/Spinner.vue'
  import userAPI from './../apis/user'

  export default {
    components: { Spinner },
    data() {
      return {
        users: [],
        isLoading: true,
        alertMsg: '',
        alertStatus: false,
      }
    },
    created() {
      this.fetchTopUsers()
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
      async fetchTopUsers() {
        try {
          const { data } = await userAPI.getTopUsers()

          if (data.status === 'error') {
            throw new Error(data.message)
          }

          this.users = data.data
          this.isLoading = false
        } catch (error) {
          this.alertMsg = error.response.data.message
          this.alertStatus = 'error'
          this.alertShow()
        }
      },
      async addFollowing(userId) {
        try {
          const { data } = await userAPI.addFollowing({ id: userId })
          if (data.status !== 'success') {
            throw new Error(data.message)
          }
          this.users = this.users.map((user) => {
            if (user.id !== userId) {
              return user
            } else {
              return {
                ...user,
                isFollowed: true,
              }
            }
          })
        } catch (error) {
          console.log(error.response.data.message)
        }
      },
      async deleteFollowing(userId) {
        try {
          const { data } = await userAPI.deleteFollowing({
            followingId: userId,
          })
          if (data.status !== 'success') {
            throw new Error(data.message)
          }
          this.users = this.users.map((user) => {
            if (user.id !== userId) {
              return user
            } else {
              return {
                ...user,
                isFollowed: false,
              }
            }
          })
        } catch (error) {
          console.log(error.response.data.message)
        }
      },
    },
  }
</script>

<style scoped>
  #popular-user {
    margin-top: 15px;
    background: #f5f8fa;
    border-radius: 14px;
    max-width: 350px;
    min-height: 500px;
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
