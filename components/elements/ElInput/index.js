import ElInput from './ElInput'

const plugin = {
  install: function(Vue) {
    Vue.component('el-input', ElInput)
  },
}

export default plugin
