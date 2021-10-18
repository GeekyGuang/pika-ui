import { createApp } from 'vue'
import App from './App.vue'
import {createWebHashHistory, createRouter} from 'vue-router'
import Hi from './components/hi.vue'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {
            path: '/', component: Hi
        }
    ]
})

createApp(App)
  .use(router)
  .mount('#app')
