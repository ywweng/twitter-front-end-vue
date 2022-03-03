import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  update({ userId, account, name, email, password, checkPassword }) {
    return apiHelper.put(
      `/users/${userId}/settings`,
      {
        account,
        name,
        email,
        password,
        checkPassword,
      },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    )
  },
  addFollowing({ id }) {
    return apiHelper.post(
      `/followships/`,
      { id },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    )
  },
  deleteFollowing({ followingId }) {
    return apiHelper.delete(
      `/followships/${followingId}`,
      { followingId },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    )
  },
  getTopUsers() {
    return apiHelper.get(`/users/top`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
  getUser({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
  updateUser({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData)
  },
  // addFollowing({ userId }) {
  //   return apiHelper.post(`/followShips/${userId}`, null)
  // },
  // deleteFollowing({ userId }) {
  //   return apiHelper.delete(`/followShips/${userId}`)
  // },
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

