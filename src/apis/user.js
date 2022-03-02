import { apiHelper } from './../utils/helpers'

export default {
  getUser({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
  updateUser({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData)
  },

}