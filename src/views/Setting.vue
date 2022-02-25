<template>
  <div class="container-fluid vh-100">
    <div class="row h-100">
      <div class="col-3 menu">
        <Menu />
      </div>
      <div class="col" id="setting">
        <div class="title menu-text">帳戶設定</div>
        <form class="setting-form">
          <div
            class="form-input d-flex flex-column"
            :class="{
              'form-input-error': isRegistered.account || account.length === 0,
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
            <span class="text-danger" v-if="account.length === 0"
              >不可空白</span
            >
            <span class="text-danger" v-if="account.length > 20"
              >字數超出上限！
            </span>
          </div>
          <div
            class="form-input d-flex flex-column"
            :class="{ 'form-input-error': name.length === 0 }"
          >
            <label for="name" class="form-input-text">名稱</label>
            <input type="text" name="text" id="name" v-model="name" required />
            <div class="d-flex justify-content-between">
              <div class="me-auto">
                <span class="text-danger" v-if="name.length === 0"
                  >不可空白
                </span>
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
              'form-input-error': isRegistered.email || email.length === 0,
            }"
          >
            <label for="email" class="form-input-text">Email</label>
            <input
              type="email"
              name="email"
              autocomplete="email"
              id="email"
              v-model="email"
              required
            />
            <span class="text-danger" v-show="email.length === 0"
              >不可空白
            </span>
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
          <div
            class="form-input d-flex flex-column"
            :class="{ 'form-input-error': pwdChecked.length === 0 }"
          >
            <label for="password" class="form-input-text">密碼確認</label>
            <input
              type="password"
              name="text"
              id="pwdChecked"
              required
              v-model="pwdChecked"
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
        </form>
      </div>
    </div>
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
  import Menu from './../components/Menu.vue'
  // const dummyUser = [
  //   {
  //     account: 'user1',
  //     name: '使用者1',
  //     email: 'user1@example.com',
  //   },
  //   {
  //     account: 'user2',
  //     name: '使用者2',
  //     email: 'user2@example.com',
  //   },
  // ]
  export default {
    name: 'Setting',
    components: {
      Menu,
    },
    data() {
      return {
        account: '',
        name: '',
        email: '',
        password: '',
        pwdChecked: '',
        isRegistered: { account: false, email: false },
      }
    },
  }
</script>

<style scoped>
  #setting {
    padding-left: 0;
    border-left: 1px solid #e6ecf0;
  }
  .title {
    padding-left: 20px;
    height: 55px;
    line-height: 55px;
    border-bottom: 1px solid #e6ecf0;
  }
  .setting-form {
    margin-left: 1rem;
    margin-top: 30px;
    max-width: 642px;
  }
  .length-input {
    color: #657786;
  }
</style>
