import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import DocDemo from './components/DocDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import { h } from 'vue';
import Markdown from './components/Markdown.vue';
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })

const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', redirect: '/doc/intro' },
        { path: 'install', component: md('install') },
        { path: 'intro', component: md('intro') },
        { path: 'get-started', component: md('get-started') },
        { path: 'switch', component: SwitchDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
      ],
    },
  ],
})
