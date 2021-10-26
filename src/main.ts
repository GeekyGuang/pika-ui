import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {
            path: '/', 
            component: Home
        },
        {
            path: '/doc', 
            component: Doc,
            children:[
                {path: 'switch', component: SwitchDemo}
            ]
        }
    ]
})

createApp(App)
  .use(router)
  .mount('#app')
