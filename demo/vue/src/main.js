import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'

import kb from '../../../dist/keyboardly.esm.mjs'; // Keyboardly
import '../../../dist/style.css';

import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


window.kb = kb;