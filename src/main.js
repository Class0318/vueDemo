//入口js
import Vue from 'vue'
import App from './App'

import './base.css'
//Vue.config.productionTip = false


/* 只能当前文件有效 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { 
    App 
  },
  template: '<App/>'
})
