import ElTab from './ElTab'
import ElTabs from './ElTabs'

const plugin = {
  install: function(Vue) {
    Vue.component('el-tab', ElTab)
    Vue.component('el-tabs', ElTabs)
  },
}

export default plugin
