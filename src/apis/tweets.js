import { apiHelper } from './../utils/helpers'

export default {
  getTweets() {
    return apiHelper.get(`/tweets`)
  },
  getOneTweet({id}) {
    return apiHelper.get(`/tweets/${id}`)
  },
  postTweet({ description }) {
    return apiHelper.post(`/tweets`, { description })
  },
  getTweetReplies({ id }) {
    return apiHelper.get(`/tweets/${id}/replies`)
  },
  postTweetReply({ id, comment }) {
    return apiHelper.post(`/tweets/${id}/replies`, { comment })
  },
  addLike({ id }) {
    return apiHelper.post(`/tweets/${id}/like`)
  },
  deleteLike({ id }) {
    return apiHelper.post(`/tweets/${id}/unlike`)
  },
}
