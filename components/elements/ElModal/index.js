import Vue from 'vue'

import ElModalContainer from './ElModalContainer'
import ElModal from './ElModal'

const plugin = {
  install(Vue) {
    if (process.client) {
      const container = mount()
      Vue.prototype.$modal = container

      Vue.directive('modal', {
        bind(el, binding) {
          el.addEventListener('click', () => {
            let name = binding.value
            let params = null
            if (typeof name === 'object') {
              params = name.params
              name = name.name
            }
            container.show(name, params)
          })
        },
      })
    }

    Vue.component('el-modal', ElModal)
  },
}

const mount = () => {
  const modalsContainer = document.createElement('div')
  document.body.appendChild(modalsContainer)

  return new Vue({
    parent: null,
    methods: {
      show(name, params) {
        const modal = this.find(name)
        if (modal) {
          modal.context.show(params)
        } else {
          console.error('Modal not found')
        }
      },
      hide() {
        const modal = this.find(name)
        if (modal) {
          modal.context.hide()
        }
      },
      find(name) {
        return this.$children[0].$children[0].passengers.find(p => {
          return p.context.name === name
        })
      },
    },
    render: h => h(ElModalContainer),
  }).$mount(modalsContainer)
}

export default plugin
