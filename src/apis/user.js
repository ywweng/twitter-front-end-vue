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
  getCurrentUser() {
    return apiHelper.get(`/users/current_user`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
}
