import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faLinkedinIn,
  faGithub,
  faTwitter,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons'
import { 
  faCheck, 
  faTrophy 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLinkedinIn, faGithub, faTwitter, faFacebookF)
library.add(faCheck, faTrophy);


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
