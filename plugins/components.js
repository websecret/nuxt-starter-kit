import Vue from 'vue'

import 'vue-loaders/dist/vue-loaders.css'
import * as VueLoaders from 'vue-loaders'

import vClickOutside from 'v-click-outside'

import vAutosize from 'v-autosize/dist/plugin'

import MaskedInput from 'vue-text-mask'

import VueFlatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

import ElHeading from './../components/elements/ElHeading'
import ElButton from './../components/elements/ElButton'
import ElInput from './../components/elements/ElInput'
import ElSelect from './../components/elements/ElSelect'
import ElDropdown from './../components/elements/ElDropdown'
import ElBreadcrumbs from './../components/elements/ElBreadcrumbs'

Vue.use(VueLoaders)
Vue.use(vClickOutside)
Vue.use(vAutosize)
Vue.component('masked-input', MaskedInput)
Vue.use(VueFlatPickr)

Vue.use(ElHeading)
Vue.use(ElButton)
Vue.use(ElInput)
Vue.use(ElSelect)
Vue.use(ElDropdown)
Vue.use(ElBreadcrumbs)
