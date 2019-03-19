import ElSelect from './ElSelect'

const plugin = {
  install: function(Vue) {
    Vue.component('el-select', ElSelect)
  },
}

export default plugin
