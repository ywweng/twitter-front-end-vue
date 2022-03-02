import { apiHelper } from './../utils/helpers'

export default {
  update({ userId, account, name, email, password, passwordCheck }) {
    return apiHelper.put(`/users/${userId}`, {
      account,
      name,
      email,
      password,
      passwordCheck,
    })
  },
  //   addFollowing({userId}) {
  //     return apiHelper.post(`/followships/${userId}`)
  //   },
  //   deleteFollowing({userId}) {
  //     return apiHelper.delete(`/followships/${userId}`)
  //   },
  //   getTopUsers() {
  //     return apiHelper.get(`/users/top`)
  //   },
}
