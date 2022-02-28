<template>
  <div class="container-fluid vh-100">
    <div class="row h-100">
      <div class="col-3 menu">
        <Menu />
      </div>
      <div class="col" id="setting">
        <div class="title menu-text">帳戶設定</div>
        <form class="setting-form d-flex flex-column">
          <div
            class="form-input d-flex flex-column"
            :class="{
              'form-input-error': isNull && !account,
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
            <span class="text-danger" v-if="isNull && !account">不可空白</span>
            <span class="text-danger" v-if="account.length > 20"
              >字數超出上限！
            </span>
          </div>
          <div
            class="form-input d-flex flex-column"
            :class="{ 'form-input-error': isNull && !name }"
          >
            <label for="name" class="form-input-text">名稱</label>
            <input type="text" name="text" id="name" v-model="name" required />
            <div class="d-flex justify-content-between">
              <div class="me-auto">
                <span class="text-danger" v-if="isNull && !name"
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
              'form-input-error': isNull && !email,
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
            <span class="text-danger" v-if="isNull && !email">不可空白 </span>
          </div>
          <div
            class="form-input d-flex flex-column"
            :class="{ 'form-input-error': isNull && !password }"
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
              <span class="text-danger" v-if="isNull && !password"
                >不可空白
              </span>
            </div>
          </div>
          <div
            class="form-input d-flex flex-column"
            :class="{ 'form-input-error': isNull && !pwdChecked }"
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
              <span class="text-danger" v-if="isNull && !pwdChecked"
                >不可空白
              </span>
              <span class="text-danger" v-else-if="password !== pwdChecked"
                >密碼錯誤
              </span>
            </div>
          </div>
          <button type="submit" class="btn-active save ms-auto">儲存</button>
        </form>
      </div>
    </div>
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
  import { mapState } from 'vuex'
  import Menu from './../components/Menu.vue'

  // import userAPI from './../apis/user'

  // const data = {
  //   status: 'success',
  //   message: '修改成功，請重新登入',
  // }

  export default {
    name: 'Setting',
    components: {
      Menu,
    },
    data() {
      return {
        id: -1,
        account: '',
        name: '',
        email: '',
        password: '',
        pwdChecked: '',
        isNull: false,
        alertMsg: '',
        alertStatus: false,
      }
    },
    computed: {
      ...mapState(['currentUser'])
    },
    created() {
      this.setUser()
    },
    methods: {
      setUser() {
        const { id, account, name, email } = this.currentUser

        // if (id.toString() !== userId.toString()) {
        //   this.$router.push({ name: 'not-found' })
        // }

        this.id = id
        this.account = account
        this.name = name
        this.email = email
      },
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
  .save {
    margin-top: 1rem;
    width: 116px;
  }
</style>
