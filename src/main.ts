import './lib/pika.scss'
import './index.scss'
import 'github-markdown-css'
import { router } from './router'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
