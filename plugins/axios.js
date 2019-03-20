const qs = require('qs')

export default function(ctx) {
  ctx.$axios.onRequest(config => {
    config.paramsSerializer = params => {
      return qs.stringify(params, {
        arrayFormat: 'indices',
      })
    }
    return config
  })
}
