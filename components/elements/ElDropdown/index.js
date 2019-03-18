import ElDropdown from './ElDropdown'
import ElDropdownItem from './ElDropdownItem'
import ElDropdownSeparator from './ElDropdownSeparator'

const plugin = {
  install: function(Vue) {
    Vue.component('el-dropdown', ElDropdown)
    Vue.component('el-dropdown-item', ElDropdownItem)
    Vue.component('el-dropdown-separator', ElDropdownSeparator)
  },
}

export default plugin
