import ElCheck from './ElCheck'
import ElCheckbox from './ElCheckbox'
import ElRadio from './ElRadio'

const plugin = {
  install: function(Vue) {
    Vue.component('el-radio', ElRadio)
    Vue.component('el-checkbox', ElCheckbox)
    Vue.component('el-check', ElCheck)
  },
}

export default plugin
