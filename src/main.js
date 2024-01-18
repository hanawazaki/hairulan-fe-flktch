import { createApp, markRaw } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/index'
import { createPinia } from 'pinia'

const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')
