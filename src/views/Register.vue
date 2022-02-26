<template>
  <div id="register" class="d-flex flex-column mx-auto">
    <div class="logo mx-auto mb-4">
      <img :src="require('./../assets/Logo.png')" width="50px" />
    </div>
    <p class="menu-text mx-auto mb-4">建立你的帳號</p>
    <form class="mx-auto w-100">
      <div
        class="form-input d-flex flex-column"
        :class="{
          'form-input-error': isRegistered.account || user.account.length === 0,
        }"
      >
        <label for="account" class="form-input-text">帳號</label>
        <input
          type="text"
          name="account"
          id="account"
          v-model.trim="user.account"
          @blur="checkAccount(user.account)"
          required
        />
        <span class="text-danger" v-if="user.account.length === 0"
          >不可空白</span
        >
        <span class="text-danger" v-if="user.account.length > 20"
          >字數超出上限！
        </span>
      </div>
      <div
        class="form-input d-flex flex-column"
        :class="{ 'form-input-error': user.name.length === 0 }"
      >
        <label for="name" class="form-input-text">名稱</label>
        <input type="text" name="text" id="name" v-model="user.name" required />
        <div class="d-flex justify-content-between">
          <div class="me-auto">
            <span class="text-danger" v-if="user.name.length === 0"
              >不可空白
            </span>
            <span class="text-danger" v-if="user.name.length > 50"
              >字數超出上限！
            </span>
          </div>
          <span class="length-input">{{ user.name.length }} / 50</span>
        </div>
      </div>
      <div
        class="form-input d-flex flex-column"
        :class="{
          'form-input-error': isRegistered.email || user.email.length === 0,
        }"
      >
        <label for="email" class="form-input-text">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="user.email"
          @blur="checkEmail"
          required
        />
        <span class="text-danger" v-show="user.email.length === 0"
          >不可空白
        </span>
      </div>
      <div
        class="form-input d-flex flex-column"
        :class="{ 'form-input-error': user.password.length === 0 }"
      >
        <label for="password" class="form-input-text">密碼</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="user.password"
          required
        />
        <div class="d-flex justify-content-between">
          <span class="text-danger" v-if="user.password.length === 0"
            >不可空白
          </span>
        </div>
      </div>
      <div
        class="form-input d-flex flex-column"
        :class="{ 'form-input-error': user.pwdChecked.length === 0 }"
      >
        <label for="password" class="form-input-text">密碼確認</label>
        <input
          type="password"
          name="text"
          id="pwdChecked"
          v-model="user.pwdChecked"
          @blur="checkPassword"
          required
        />
        <div class="d-flex justify-content-between">
          <span class="text-danger" v-if="user.pwdChecked.length === 0"
            >不可空白
          </span>
          <span
            class="text-danger"
            v-else-if="user.password !== user.pwdChecked"
            >密碼錯誤
          </span>
          <span v-else></span>
        </div>
      </div>
      <button
        type="submit"
        class="btn-active w-100 mt-2 mb-3"
        @submit="submitForm"
      >
        註冊
      </button>
      <router-link to="/login" class="text-blue d-flex justify-content-center"
        >取消</router-link
      >
    </form>
    <!-- account alert -->
    <div
      class="alert alert-danger d-flex fixed-top"
      id="alert"
      role="alert"
      v-if="isRegistered.account"
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
      <div class="ms-2 mx-auto text-danger">帳號已重複註冊！</div>
    </div>
    <!-- email alert -->
    <div
      class="alert alert-danger d-flex fixed-top"
      id="alert"
      role="alert"
      v-if="isRegistered.email"
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
      <div class="ms-2 mx-auto text-danger">Email 已重複註冊</div>
    </div>
  </div>
</template>

<script>
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
        user: {
          account: '',
          name: '',
          email: '',
          password: '',
          pwdChecked: '',
        },
        isRegistered: { account: false, email: false },
      }
    },
    methods: {
      alertTrigger() {
        const bootstrap = require('bootstrap')
        let alertNode = document.querySelector('#alert')
        return bootstrap.Alert.getInstance(alertNode)
      },
      checkAccount(account) {
        if (account.length === 0) return
        // TODO:確認帳號API
        this.isRegistered.account = dummyUser.some(
          (user) => user.account === this.user.account
        )
        if (this.isRegistered.account) {
          this.alertTrigger()
          this.user.account = ''
        }
      },
      checkEmail(email) {
        // TODO:確認email API
        // email格式確認
        if (email.length === 0) return
        this.isRegistered.email = dummyUser.some(
          (user) => user.email === this.user.email
        )
      },
      checkPassword() {
        if (this.user.password !== this.user.pwdChecked) {
          return true
        } else {
          return false
        }
      },
      submitForm() {
        if (!this.user.account) {
          return false
        }
        if (!this.user.name) {
          return false
        }
        if (!this.user.email) {
          return false
        }
        if (!this.user.password) {
          return false
        }
        if (!this.user.pwdChecked) {
          return false
        }
        // TODO: 新增使用者資料API
        this.$router.push('/login')
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
