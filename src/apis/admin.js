import { apiHelper } from "../utils/helpers";

export default {
  tweets: {
    get() {
      return apiHelper.get('/admin/tweets')
    },
    delete({ tweetId }) {
      return apiHelper.delete(`/admin/tweets/${tweetId}`)
    }
  },
  users: {
    get() {
      return apiHelper.get('/admin/users')
    }
  }
}