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
        />
        <label for="account">帳號</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-input"
          id="password"
        />
        <label for="password">密碼</label>
      </div>
      <button type="submit" class="btn">登入</button>  
      <!-- @click=""把表單post給後端驗證，this.$route.push('') -->
    </form>
    <div class="front-link"><router-link to="/">前台登入</router-link>
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
.form-input{
  width: 540px;
  height: 52px;
  background-color: #F5F8FA;
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
button {
  width: 540px;
  height: 50px;
  margin-top: 40px;
  border-radius: 50px;
  background: #FF6600;
  color: white;
  font-size: 18px;
  font-weight: 700;
}
.front-link {
  margin-top: 20px;
  margin-left: calc(50% + 270px - 64px);
}
</style>


