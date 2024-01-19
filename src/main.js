import { createApp, markRaw } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/index'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faChevronLeft, faChevronRight)

const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

createApp(App)
  .use(pinia)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
