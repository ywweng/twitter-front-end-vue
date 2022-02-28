<template>
  <div id="register" class="d-flex flex-column mx-auto">
    <div class="logo mx-auto mb-4">
      <img :src="require('./../assets/Logo.png')" width="50px" />
    </div>
    <p class="menu-text mx-auto mb-4">建立你的帳號</p>
    <form class="mx-auto w-100" @submit.prevent.stop="handleSubmit">
      <!-- 優化：字數空白提示 -->
      <div
        class="form-input d-flex flex-column account"
        :class="{ 'form-input-error': account.length === 0 }"
      >
        <label for="account" class="form-input-text">帳號</label>
        <input
          type="text"
          name="account"
          id="account"
          v-model.trim="account"
          required
        />
        <span class="text-danger" v-if="account.length === 0">不可空白</span>
        <span class="text-danger" v-if="account.length > 20"
          >字數超出上限！
        </span>
      </div>
      <div
        class="form-input d-flex flex-column"
        :class="{ 'form-input-error': name.length === 0 }"
      >
        <label for="name" class="form-input-text">名稱</label>
        <input type="text" name="text" id="name" v-model.trim="name" required />
        <div class="d-flex justify-content-between">
          <div class="me-auto">
            <span class="text-danger" v-if="name.length === 0">不可空白 </span>
            <span class="text-danger" v-if="name.length > 50"
              >字數超出上限！
            </span>
          </div>
          <span class="length-input">{{ name.length }} / 50</span>
        </div>
      </div>
      <div
        class="form-input d-flex flex-column"
        :class="{
          'form-input-error': email.length === 0,
        }"
      >
        <label for="email" class="form-input-text">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model.trim="email"
          required
        />
        <span class="text-danger" v-show="email.length === 0">不可空白</span>
      </div>
      <div
        class="form-input d-flex flex-column"
        :class="{ 'form-input-error': password.length === 0 }"
      >
        <label for="password" class="form-input-text">密碼</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model.trim="password"
          required
        />
        <div class="d-flex justify-content-between">
          <span class="text-danger" v-if="password.length === 0">不可空白</span>
        </div>
      </div>
      <div
        class="form-input d-flex flex-column"
        :class="{ 'form-input-error': pwdChecked.length === 0 }"
      >
        <label for="password" class="form-input-text">密碼確認</label>
        <input
          type="password"
          name="text"
          id="pwdChecked"
          v-model.trim="pwdChecked"
          required
        />
        <div class="d-flex justify-content-between">
          <span class="text-danger" v-if="pwdChecked.length === 0"
            >不可空白
          </span>
          <span class="text-danger" v-else-if="password !== pwdChecked"
            >密碼錯誤
          </span>
          <span v-else></span>
        </div>
      </div>
      <button type="submit" class="btn-active w-100 mt-2 mb-3">註冊</button>
      <router-link to="/login" class="text-blue d-flex justify-content-center"
        >取消</router-link
      >
    </form>
    <!-- alert -->
    <div
      class="alert d-flex fixed-top"
      id="alert"
      role="alert"
      v-if="alertStatus !== false"
    >
      <div class="ms-2 mx-auto my-auto text-alert">{{ alertMsg }}</div>
      <div class="ms-auto">
        <img
          :src="require('./../assets/error-alert.svg')"
          v-if="alertStatus === 'error'"
        />
        <img
          :src="require('./../assets/success-alert.svg')"
          v-else-if="alertStatus === 'success'"
        />
      </div>
    </div>
  </div>
</template>

<script>
  // import authorizationAPI from './../apis/authorization'

  const dummyUser = [
    {
      account: 'user1',
      name: '使用者1',
      email: 'user1@example.com',
    },
    {
      account: 'user2',
      name: '使用者2',
      email: 'user2@example.com',
    },
  ]

  export default {
    name: 'Register',
    data() {
      return {
        account: '',
        name: '',
        email: '',
        password: '',
        pwdChecked: '',
        alertMsg: '',
        alertStatus: false,
      }
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
      handleSubmit() {
        // TODO:改成async/await
        console.log(dummyUser)
        if (
          !this.name ||
          !this.account ||
          !this.email ||
          !this.password ||
          !this.pwdChecked
        ) {
          return
        }

        if (this.password !== this.pwdChecked) {
          this.alertMsg = '密碼錯誤，請重新輸入'
          this.alertStatus = 'error'
          this.alertShow()
          this.pwdChecked = ''
          return
        }
        // TODO:串接API
        // const { data } = await authorizationAPI.register({
        //   account: this.account,
        //   name: this.name,
        //   email: this.email,
        //   password: this.password,
        //   passwordCheck: this.pwdChecked,
        // })

        if (data.status === 'error') {
          throw new Error(data.message)
          this.alertMsg = data.message
          this.alertStatus = 'error'
          this.alertShow()
        }

        // this.alertMsg = data.message
        this.alertStatus = 'success'
        this.alertShow()
        setTimeout(() => {
          this.$router.push('/login')
        }, 3000)

        // catch
      },
    },
  }
</script>

<style scoped>
  #register {
    width: 540px;
    padding-top: 60px;
  }
  .menu-text {
    font-size: 1.5rem;
  }
  .form-input {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    height: 54px;
    background: #f5f8fa;
  }
  .form-input input {
    padding-left: 10px;
    border-top: inherit;
    border-left: inherit;
    border-right: inherit;
    border-bottom-color: #657786;
    background: inherit;
  }

  .form-input input:hover {
    border-bottom: 2px solid #50b5ff;
  }

  .form-input input:focus {
    outline: none;
    border-bottom: 2px solid #50b5ff;
  }

  .form-input-error input {
    outline: none;
    border-bottom: 2px solid #fc5a5a;
  }

  .form-input-text {
    margin-top: 5px;
    margin-left: 10px;
    color: #657786;
  }

  .length-input {
    color: #657786;
  }
</style>
