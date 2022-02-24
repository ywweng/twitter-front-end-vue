<template>
  <div id="menu" class="d-flex flex-column h-100 py-3">
    <div class="ms-3 mb-5">
      <img src="./../assets/Logo.png" width="30px" />
    </div>
    <div class="mb-auto">
      <div class="ms-3 mb-4 lh-1">
        <ul>
          <li class="menu-icon mb-4 d-flex">
            <div class="me-3">
              <img
                class="d-block"
                height="20px"
                src="./../assets/VectorMain.png"
              />
            </div>
            <!-- TODO:router-link -->
            <a class="menu-text">首頁</a>
          </li>
          <li class="menu-icon mb-4 d-flex">
            <div class="me-3">
              <img
                class="d-block"
                height="20px"
                width="21px"
                src="./../assets/VectorUserProfile.png"
              />
            </div>
            <!-- TODO:router-link -->
            <a class="menu-text">個人資料</a>
          </li>
          <li class="menu-icon mb-4 d-flex">
            <div class="me-3">
              <img
                class="d-block"
                height="20px"
                src="./../assets/VectorSetting.png"
              />
            </div>
            <!-- TODO:router-link -->
            <a class="menu-text">設定</a>
          </li>
        </ul>
      </div>
      <!-- TODO:router-link -->
      <button class="btn-active w-75">推文</button>
    </div>
    <div>
      <div class="ms-3 d-flex">
        <div class="me-2">
          <img
            class="d-block"
            height="20px"
            src="./../assets/VectorLogout.png"
          />
        </div>
        <!-- TODO:router-link -->
        <a class="menu-text">登出</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #menu {
    max-width: 285px;
  }
</style>
