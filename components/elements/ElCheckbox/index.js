import ElCheckboxes from './ElCheckboxes'
import ElCheckbox from './ElCheckbox'

const plugin = {
  install: function(Vue) {
    Vue.component('el-checkbox', ElCheckbox)
    Vue.component('el-checkboxes', ElCheckboxes)
  },
}

export default plugin
