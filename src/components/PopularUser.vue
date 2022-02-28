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
          @click="deleteFollowing(user.id)"
          v-if="user.isFollowing"
        >
          正在跟隨
        </button>
        <button class="btn-follow" @click="addFollowing(user.id)" v-else>
          跟隨
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import Spinner from './../components/Spinner.vue'

  const dummyData = {
    users: [
      {
        id: 1,
        account: 'user1',
        name: '使用者1',
        email: 'user1@example.com',
        avatar:
          'https://i.pinimg.com/474x/1d/84/5c/1d845c1b3d11ce372ed0f5c5a80ec562.jpg',
        role: 'user',
        isFollowing: false,
        created_at: '2022-01-18T07:23:18.000Z',
        updated_at: '2022-01-18T07:23:18.000Z',
      },
      {
        id: 2,
        account: 'user1',
        name: '使用者1',
        email: 'user1@example.com',
        avatar:
          'https://i.pinimg.com/474x/1d/84/5c/1d845c1b3d11ce372ed0f5c5a80ec562.jpg',
        role: 'user',
        isFollowing: false,
        created_at: '2022-01-18T07:23:18.000Z',
        updated_at: '2022-01-18T07:23:18.000Z',
      },
      {
        id: 3,
        account: 'user1',
        name: '使用者1',
        email: 'user1@example.com',
        avatar:
          'https://i.pinimg.com/474x/1d/84/5c/1d845c1b3d11ce372ed0f5c5a80ec562.jpg',
        role: 'user',
        isFollowing: false,
        created_at: '2022-01-18T07:23:18.000Z',
        updated_at: '2022-01-18T07:23:18.000Z',
      },
      {
        id: 4,
        account: 'user1',
        name: '使用者1',
        email: 'user1@example.com',
        avatar:
          'https://i.pinimg.com/474x/1d/84/5c/1d845c1b3d11ce372ed0f5c5a80ec562.jpg',
        role: 'user',
        isFollowing: false,
        created_at: '2022-01-18T07:23:18.000Z',
        updated_at: '2022-01-18T07:23:18.000Z',
      },
      {
        id: 5,
        account: 'user1',
        name: '使用者1',
        email: 'user1@example.com',
        avatar:
          'https://i.pinimg.com/474x/1d/84/5c/1d845c1b3d11ce372ed0f5c5a80ec562.jpg',
        role: 'user',
        isFollowing: false,
        created_at: '2022-01-18T07:23:18.000Z',
        updated_at: '2022-01-18T07:23:18.000Z',
      },
      {
        id: 6,
        account: 'user1',
        name: '使用者1',
        email: 'user1@example.com',
        avatar:
          'https://i.pinimg.com/474x/1d/84/5c/1d845c1b3d11ce372ed0f5c5a80ec562.jpg',
        role: 'user',
        isFollowing: false,
        created_at: '2022-01-18T07:23:18.000Z',
        updated_at: '2022-01-18T07:23:18.000Z',
      },
      {
        id: 7,
        account: 'user1',
        name: '使用者1',
        email: 'user1@example.com',
        avatar:
          'https://i.pinimg.com/474x/1d/84/5c/1d845c1b3d11ce372ed0f5c5a80ec562.jpg',
        role: 'user',
        isFollowing: false,
        created_at: '2022-01-18T07:23:18.000Z',
        updated_at: '2022-01-18T07:23:18.000Z',
      },
      {
        id: 8,
        account: 'user1',
        name: '使用者1',
        email: 'user1@example.com',
        avatar:
          'https://i.pinimg.com/474x/1d/84/5c/1d845c1b3d11ce372ed0f5c5a80ec562.jpg',
        role: 'user',
        isFollowing: false,
        created_at: '2022-01-18T07:23:18.000Z',
        updated_at: '2022-01-18T07:23:18.000Z',
      },
      {
        id: 9,
        account: 'user1',
        name: '使用者1',
        email: 'user1@example.com',
        avatar:
          'https://i.pinimg.com/474x/1d/84/5c/1d845c1b3d11ce372ed0f5c5a80ec562.jpg',
        role: 'user',
        isFollowing: false,
        created_at: '2022-01-18T07:23:18.000Z',
        updated_at: '2022-01-18T07:23:18.000Z',
      },
      {
        id: 10,
        account: 'user1',
        name: '使用者1',
        email: 'user1@example.com',
        avatar:
          'https://i.pinimg.com/474x/1d/84/5c/1d845c1b3d11ce372ed0f5c5a80ec562.jpg',
        role: 'user',
        isFollowing: false,
        created_at: '2022-01-18T07:23:18.000Z',
        updated_at: '2022-01-18T07:23:18.000Z',
      },
    ],
  }

  export default {
    components: { Spinner },
    data() {
      return {
        users: [],
        isLoading: true,
      }
    },
    created() {
      // 模擬
      setTimeout(() => {
        this.isLoading = false
      }, 3000)
      this.fetchTopUsers()
    },
    methods: {
      fetchTopUsers() {
        // TODO:串接API
        this.isLoading = true
        // const {data} = await usersAPI.getPopularUsers()
        // if (data.status === 'error') {
        //   throw new Error(data.message)
        // }

        this.users = dummyData.users
        this.isLoading = false

        // catch
        // console.log(error.message)
        // alert訊息
      },
      addFollowing(userId) {
        // TODO:串接API
        // const { data } = await usersAPI.addFollowing({ userId })
        // if (data.status !== 'success') {
        //   throw new Error(data.message)
        // }
        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              isFollowing: true,
            }
          }
        })
        // catch error alert
      },
      deleteFollowing(userId) {
        // TODO:串接API
        // const { data } = await usersAPI.deleteFollowing({ userId })
        // if (data.status !== 'success') {
        //   throw new Error(data.message)
        // }
        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              isFollowing: false,
            }
          }
        })
        // catch error alert
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
