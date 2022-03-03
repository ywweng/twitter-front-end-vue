import { apiHelper } from './../utils/helpers'

export default {
  getTweets() {
    return apiHelper.get(`/tweets`)
  },
  getOneTweet({tweetId}) {
    return apiHelper.get(`/tweets/${tweetId}`)
  },
  postTweet({ description }) {
    return apiHelper.post(`/tweets`, { description })
  },
  getTweetReplies({ tweetId }) {
    return apiHelper.get(`/tweets/${tweetId}/replies`)
  },
  postTweetReply({ tweetId, comment }) {
    return apiHelper.post(`/tweets/${tweetId}/replies`, { comment })
  },
  addLike({ id }) {
    return apiHelper.post(`/tweets/${id}/like`)
  },
  deleteLike({ id }) {
    return apiHelper.post(`/tweets/${id}/unlike`)
  },
}

