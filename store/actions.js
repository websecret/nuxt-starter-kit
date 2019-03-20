const actions = {
  nuxtServerInit(context) {
    return Promise.all([
      // context.dispatch('getAuthUser'),
    ])
  },

  // getAuthUser(context) {
  //   return this.$api.auth
  //     .user()
  //     .then(user => {
  //       context.commit('SET_AUTH_USER', user.data)
  //     })
  //     .catch(e => {
  //       context.commit('SET_AUTH_USER', null)
  //     })
  // },
}

export default actions
