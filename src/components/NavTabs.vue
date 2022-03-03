<template>
<div>
  <ul class="nav nav-tab my-4">
    <li v-for="tab in tabs" :key="tab.id" class="nav-item" >
      <router-link :to="tab.path" class="nav-link">
        {{ tab.title }}
      </router-link>
    </li>
  </ul>


</div>
  
</template>
<style scoped>
.nav-tab {
  border-bottom: 1px solid var(--border-line-color);
}
.nav-link {
  width: 120px;
  height: 48px;
  text-align: center;
  color: var(--light-gray-text);
  font-size: 15px;
  font-weight: 700;
}
.nav-link:hover {
  color: var(--orange);
  border-bottom: 2px solid var(--orange);
}
.active {
  color: var(--orange);
  border-bottom: 2px solid var(--orange);
}
</style>

<script>

export default {
  props: {
    userId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      tabs: [
        {
          title: "推文",
          name: "user-tweets",
          path: "",
        },
        {
          title: "推文與回覆",
          name: 'user-replies',
          path: "",
        },
        {
          title: "喜歡的內容",
          name: 'user-likes',
          path: "",
        },
      ],
    };
  },
  created() {
    const { userId } = this.$route.params
    this.fetchTabs(userId);
    // console.log(this.route.name)
  },
  watch: {
    userId(newValue) {
      this.fetchTabs(newValue)
    }
  },
  methods: {
    fetchTabs(userId) {
      this.tabs = this.tabs.map((tab) => {
        if (tab.title === "推文") {
          return {
            ...tab,
            path: `/user-profile/${userId}/tweets`,
          };
        } else if (tab.title === "推文與回覆") {
          return {
            ...tab,
            path: `/user-profile/${userId}/replies`,
          };
        } else {
          return {
            ...tab,
            path: `/user-profile/${userId}/likes`,
          };
        }
      });
    },
  },
};
</script>