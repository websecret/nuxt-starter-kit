export default (ctx, inject) => {
  const get = (url, data = {}) =>
    ctx.$axios.get(url, { params: data }).then(response => response.data)

  const post = (url, data = {}) => {
    return ctx.$axios.post(url, data).then(response => response.data)
  }

  inject('api', {
    auth: {
      user: (data = {}) => get(`auth/user`, data),
      store: (data = {}) => post(`auth/user`, data),
    },
  })
}
