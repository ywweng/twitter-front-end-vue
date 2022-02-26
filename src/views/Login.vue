<template>
  <div id="login" class="d-flex flex-column mx-auto">
    <div class="logo mx-auto mb-4">
      <img :src="require('./../assets/Logo.png')" width="50px" />
    </div>
    <p class="menu-text mx-auto mb-4">登入 Alphitter</p>
    <form class="mx-auto w-100" action="" @submit.prevent="login">
      <div
        class="form-input d-flex flex-column"
        :class="{
          'form-input-error': account.length === 0,
        }"
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
          v-model="password"
          required
        />
        <div class="d-flex justify-content-between">
          <span class="text-danger" v-if="password.length === 0"
            >不可空白
          </span>
        </div>
      </div>
      <button type="submit" class="btn-active w-100 mb-3" @click="login">
        登入
      </button>
      <div class="text-end">
        <router-link to="register" class="mx-auto text-blue"
          >註冊 Alphitter</router-link
        >
        <span class="space">．</span>
        <a href="#" class="mx-auto text-blue">後台登入</a>
      </div>
    </form>
    <!-- alert -->
    <div
      class="alert alert-danger d-flex fixed-top"
      id="alert"
      role="alert"
      v-if="checkAccount"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
        viewBox="0 0 16 16"
        role="img"
        aria-label="Warning:"
      >
        <path
          d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </svg>
      <div class="ms-2 mx-auto text-danger">帳號不存在</div>
    </div>
  </div>
</template>

<script>
  const dummyUser = {
    account: 'user1',
    password: '12345678',
  }
  export default {
    name: 'Login',
    data() {
      return {
        account: '',
        password: '',
        checkAccount: false,
      }
    },
    methods: {
      alertTrigger() {
        const bootstrap = require('bootstrap')
        let alertNode = document.querySelector('#alert')
        return bootstrap.Alert.getInstance(alertNode)
      },
      login() {
        // TODO:登入API，需驗證
        const { account, password } = dummyUser
        if (account === this.account && password === this.password) {
          this.$router.push('/main')
        } else {
          this.checkAccount = true
          this.alertTrigger()
        }
      },
    },
  }
</script>

<style scoped>
  #login {
    width: 540px;
    padding-top: 60px;
  }
  .menu-text {
    font-size: 1.5rem;
  }
  .space {
    font-size: 18px;
    font-weight: 700;
    color: #0099ff;
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
</style>
