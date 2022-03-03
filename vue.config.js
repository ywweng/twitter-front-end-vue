// module.exports = {
//   publicPath: '/login',
// }

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/twitter-front-end-vue/'
    : '/'
}