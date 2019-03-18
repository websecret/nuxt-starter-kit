import Vue from 'vue'

import 'vue-loaders/dist/vue-loaders.css'
import * as VueLoaders from 'vue-loaders'

import vClickOutside from 'v-click-outside'

import ElHeading from './../components/elements/ElHeading'
import ElButton from './../components/elements/ElButton'
import ElDropdown from './../components/elements/ElDropdown'

Vue.use(VueLoaders)
Vue.use(vClickOutside)

Vue.use(ElHeading)
Vue.use(ElButton)
Vue.use(ElDropdown)
