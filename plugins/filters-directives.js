import Vue from 'vue'
import numeral from 'numeral'

// Numeral
Vue.filter('number', (value, decimals = 2) => {
  if (value == null) return null
  const decimalString = ''.padStart(decimals, '0')
  return numeral(value)
    .format('0,0.' + decimalString)
    .replace(/,/g, ' ')
})

// nl2br
Vue.filter('nl2br', value => {
  if (value == null) return null
  return ('' + value).replace(/(?:\r\n|\r|\n)/g, '<br />')
})
