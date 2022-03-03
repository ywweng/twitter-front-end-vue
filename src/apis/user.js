import { apiHelper } from './../utils/helpers'

export default {
  getUser({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
  updateUser({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData)
  },
  addFollowing({ userId }) {
    return apiHelper.post(`/followShips/${userId}`, null)
  },
  deleteFollowing({ userId }) {
    return apiHelper.delete(`/followShips/${userId}`)
  },
  getCurrentUser() {
    return apiHelper.get('/users/current_user')
  },
  getUserTweets({ userId }) {
    return apiHelper.get(`/users/${userId}/tweets`)
  },
  getUserReplies({userId}) {
    return apiHelper.get(`/users/${userId}/replied_tweets`)
  },
  getUserLikes({userId}) {
    return apiHelper.get(`/users/${userId}/likes`)
  },
  getUserFollowing({userId}) {
    return apiHelper.get(`/users/${userId}/followings`)
  },
  getUserFollowers({userId}) {
    return apiHelper.get(`/users/${userId}/followers`)
  },
  addFollow({ id }) {
    return apiHelper.post('/followships', { id } )
  },
  deleteFollow({followingId}) {
    return apiHelper.delete(`/followships/${followingId}`)
  }
}