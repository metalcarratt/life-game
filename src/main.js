import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock, faBrain, faDumbbell, faHands, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faClock, faBrain, faDumbbell, faHands, faUsers);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
  render: h => h(App),
}).$mount('#app')
