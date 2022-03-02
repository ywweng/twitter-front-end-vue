import { apiHelper } from './../utils/helpers'

export default {
  login({ account, password }) {
    return apiHelper.post('/signin', {
      account,
      password,
    })
  },
  //   register(data) {
  //     return apiHelper.post('/signup'. {
  //       ...data
  //     })
  //   }
}
