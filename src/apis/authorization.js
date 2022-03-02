import { apiHelper } from './../utils/helpers'

export default {
  login({ account, password }) {
    return apiHelper.post('/signin', {
      account,
      password,
    })
  },
  register({ account, name, email, password, checkPassword }) {
    return apiHelper.post('/signup', {
      account,
      name,
      email,
      password,
      checkPassword,
    })
  },
}
