import ElBreadcrumbs from './ElBreadcrumbs'
import ElBreadcrumbsItem from './ElBreadcrumbsItem'

const plugin = {
  install: function(Vue) {
    Vue.component('el-breadcrumbs', ElBreadcrumbs)
    Vue.component('el-breadcrumbs-item', ElBreadcrumbsItem)
  },
}

export default plugin
