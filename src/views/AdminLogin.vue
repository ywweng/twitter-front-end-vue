<template>
  <div class="admin-login">
    <div class="logo">
      <img src="../assets/Logo.png" alt="" />
    </div>
    <div class="title">後台登入</div>
    <form class="d-flex flex-column align-items-center">
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-input"
          id="account"
          required
          v-model="user.account"
        />
        <label for="account">帳號</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-input"
          id="password"
          required
          v-model="user.password"
        />
        <label for="password">密碼</label>
      </div>
      <button
        type="submit"
        class="btn btn-login"
        @click.stop.prevent="adminSignIn(user.account, user.password)"
      >
        登入
      </button>
    </form>
    <div class="front-link"><router-link to="/">前台登入</router-link></div>

    <!-- alert -->
    <div class="alert-setting">
      <svg xmlns="http://www.w3.org/2000/svg" >
        <symbol
          id="exclamation-triangle-fill"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          />
        </symbol>
      </svg>
      <div
        class="
          alert alert-danger
          d-flex
          align-items-center
          fixed-top
          alert-dismissible
          fade
        "
        :class="{ show: callAlert }"
        role="alert"
      >
        <svg
          class="bi flex-shrink-0 me-2"
          width="24"
          height="24"
          role="img"
          aria-label="Danger:"
        >
          <use xlink:href="#exclamation-triangle-fill" />
        </svg>
        <div class="alert-text">{{alertMessage}}</div>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo img {
  width: 40px;
  height: 40px;
  margin-top: 65px;
  margin-left: calc(50% - 20px);
}
.title {
  margin-top: 25px;
  margin-bottom: 10px;
  font-size: 23px;
  text-align: center;
  font-weight: 700;
}
.form-floating {
  margin-top: 30px;
}
.form-input {
  width: 540px;
  height: 52px;
  background-color: #f5f8fa;
  border: none;
  border-bottom: 2px solid #657786;
  border-radius: 4px;
}
.form-floating > label {
  padding-top: 10px;
  padding-left: 10px;
  font-size: 18px;
  color: #657786;
  font-weight: 500;
}
.btn-login {
  width: 540px;
  height: 50px;
  margin-top: 40px;
  border-radius: 50px;
  background: #ff6600;
  color: white;
  font-size: 18px;
  font-weight: 700;
}
.front-link {
  margin-top: 20px;
  margin-left: calc(50% + 270px - 64px);
}
.alert-text {
  color: #fc5a5a;
}
</style>

<script>
const dummyAdmin = {
  account: "admin",
  password: "12345678",
  role: "Admin",
};
const messages = ["請填入帳號密碼！", "帳號不存在！", "密碼輸入錯誤！"]

export default {
  data() {
    return {
      user: {
        account: "",
        password: "",
        role: "",
      },
      // isAdmin: false,
      callAlert: false,
      alertMessage: ""
    };
  },
  methods: {
    adminSignIn(account, password) {
      if(!account && !password) {
        this.callAlert = true;
        this.alertMessage = messages[0]
        setTimeout(() => {
          this.callAlert = false;
        }, 3000);
        return
      }
      if (account !== dummyAdmin.account) {
        this.callAlert = true;
        this.alertMessage = messages[1]
        this.user.account = "";
        this.user.password = "";
        setTimeout(() => {
          this.callAlert = false;
        }, 3000);
        return;
      } else if (password !== dummyAdmin.password) {
        this.callAlert = true;
        this.alertMessage = messages[2]
        this.user.password = "";
        setTimeout(() => {
          this.callAlert = false;
        }, 3000);
        return;
      } else {
        this.$router.push("/admin/tweets");
      }
    },
  },
  // watch: {
  //   callAlert(newValue) {
  //     return newValue
  //   }
  // }
};
</script>
