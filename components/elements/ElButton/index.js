import ElButton from './ElButton'

const plugin = {
  install: function(Vue) {
    Vue.component('el-button', ElButton)
  },
}

export default plugin
