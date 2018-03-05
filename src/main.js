// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Sample from './components/HelloWorld'

Vue.config.productionTip = false
Vue.component('app-component', Sample)

/* eslint-disable no-new */
new Vue({
  el: '#app'
})
