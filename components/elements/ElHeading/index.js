import ElHeading from './ElHeading'

const plugin = {
  install: function(Vue) {
    Vue.component('el-heading', ElHeading)
  },
}

export default plugin
