<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="profileEditModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <form action="" @submit.stop.prevent="handleSubmit" >
            <!-- modal-header -->
            <div class="modal-header">
              <div class="d-flex">
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  &#10005;
                </button>
                <h5 class="modal-title fw-bold ms-4" id="exampleModalLabel">
                  編輯個人資料
                </h5>
              </div>
              <button
                type="submit"
                class="btn btn-save"
                :disabled="nameLength > 50 || introLength > 160"
              >
                儲存
              </button>
            </div>
            <!-- modal-body -->
            <div class="modal-body p-0">
              <div class="form-group position-relative">
                <div>
                  <label for="cover" class="">
                    <img
                      src="../assets/icon_uploadPhoto.png"
                      class="upload-cover position-absolute"
                      alt=""
                    />
                  </label>
                  <img
                    src="../assets/icon_delete.png"
                    class="delete-cover position-absolute"
                    alt=""
                    @click.stop.prevent="deleteCover"
                  />
                  <img :src="user.cover" class="cover-img w-100" alt="" />
                  <input
                    id="cover"
                    type="file"
                    name="cover"
                    accept="image/*"
                    class="form-control d-none"
                    @change="handleCoverChange"
                  />
                </div>
                <img
                  :src="user.avatar"
                  class="avatar-img rounded-circle position-absolute"
                  alt=""
                />
                <label for="avatar" class="">
                  <img
                    src="../assets/icon_uploadPhoto.png"
                    class="upload-avatar position-absolute"
                    alt=""
                  />
                </label>
                <input
                  id="avatar"
                  type="file"
                  name="avatar"
                  accept="image/*"
                  class="form-control d-none"
                  @change="handleAvatarChange"
                />
                <div class="input-group mx-3 d-flex flex-column">
                  <div class="form-floating">
                    <input
                      type="text"
                      name="name"
                      class="form-control form-input name"
                      :class="{ 'form-input-warn': nameLength > 50 }"
                      id="name"
                      v-model="user.name"
                    />
                    <label for="name">名稱</label>
                  </div>
                  <div class="word-wrap d-flex justify-content-between">
                    <span class="warning">{{
                      nameLength > 50 ? "字數超出上限！" : ""
                    }}</span>
                    <span
                      class="word-count text-end"
                      :class="{ 'word-count-warn': nameLength > 50 }"
                    >
                      {{ nameLength }}/50</span
                    >
                  </div>
                  <div class="form-floating mt-3">
                    <textarea
                      class="form-control form-input text-wrap introduction"
                      id="introduction"
                      name="introduction"
                      v-model="user.introduction"
                    >
                    </textarea>
                    <label for="introduction">自我介紹</label>
                  </div>
                  <div class="word-wrap d-flex justify-content-between">
                    <span class="warning">{{
                      introLength > 160 ? "字數超出上限！" : ""
                    }}</span>
                    <span
                      class="word-count text-end"
                      :class="{ 'word-count-warn': introLength > 160 }"
                    >
                      {{ introLength }}/160</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal-header {
  padding: 14px;
}
.close {
  /* margin-left: 0; */
  color: var(--orange);
  font-size: 20px;
  font-weight: bold;
}
.close:hover {
  color: var(--main-text);
}
.btn-save {
  width: 66px;
  padding: 2px 10px;
  color: white;
  background-color: var(--orange);
  border-radius: 100px;
}
.btn-save:hover {
  box-shadow: 2px 2px 5px gray;
}
.cover-img {
  height: 200px;
  background-color: #999999;
  opacity: 0.8;
}
.avatar-img {
  width: 140px;
  height: 140px;
  top: 124px;
  left: 14px;
  border: 4px solid white;
  background-color: #999999;
}
.input-group {
  width: auto;
  margin-top: 80px;
  margin-bottom: 50px;
}
.form-input {
  height: 52px;
  margin-bottom: 0;
  background-color: #f5f8fa;
  border: none;
  border-bottom: 2px solid #657786;
  border-radius: 4px;
}
.form-input-warn {
  border-bottom: 2px solid #fc5a5a;
}
.introduction {
  height: 150px;
}
.form-floating > label {
  padding-top: 10px;
  padding-left: 10px;
  font-size: 18px;
  color: var(--light-gray-text);
  font-weight: 500;
}
.word-count {
  font-size: 15px;
  color: var(--light-gray-text);
  font-weight: 500;
}
.word-count-warn,
.warning {
  color: #fc5a5a;
}
.upload-cover,
.upload-avatar,
.delete-cover {
  width: 24px;
  height: 24px;
  z-index: 10;
}
.upload-cover {
  top: 88px;
  left: 200px;
}
.delete-cover {
  top: 88px;
  right: 200px;
}
.upload-avatar {
  top: 182px;
  left: 72px;
}
.upload-cover:hover,
.delete-cover:hover,
.upload-avatar:hover {
  cursor: pointer;
  background-color: var(--orange);
  border-radius: 50%;
  opacity: 0.5;
}
</style>

<script>
import userAPI from "../apis/user"
// import { Toast } from "../utils/helpers";

export default {
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: {
        id: this.currentUser.id,
        name: this.currentUser.name,
        account: this.currentUser.account,
        avatar: this.currentUser.avatar,
        cover: this.currentUser.cover,
        introduction: this.currentUser.introduction
      },
    };
  },
  watch: {
    currentUser(newValue) {
      this.user = {
        ...this.user,
        ...newValue,
      }

    }
  },
  methods: {
    handleCoverChange(e) {
      const { files } = e.target;
      if (!files.length) {
        return;
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.cover = imageURL;
      }
    },
    deleteCover() {
      this.user.cover = "";
    },
    handleAvatarChange(e) {
      const { files } = e.target;
      if (!files.length) {
        return;
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.avatar = imageURL;
      }
    },
    async handleSubmit() {
      try{
        if (this.namelength > 50 || this.introduction > 160) {
        this.saveInvalid = true;
        return;
      }
      // const formData = new FormData(e.target)
      const formData = {
        name: this.user.name,
        avatar: this.user.avatar,
        cover: this.user.cover,
        introduction: this.user.introduction
      }
      const { data } = await userAPI.updateUser({ 
        userId: this.user.id,
        formData
      })

      this.$emit("after-profile-submit", data);

      } catch (error) {
        console.log(error.response.data.message)
      }
      
      
    },
  },
  computed: {
    nameLength: {
      get: function () {
        const length = this.user.name.length;
        return length;
      },
      set: function (newValue) {
        this.nameLength = newValue;
      },
    },
    introLength: {
      get: function () {
        const length = this.user.introduction.length;
        return length;
      },
      set: function (newValue) {
        this.introLength = newValue;
      },
    },
  },
};
</script>