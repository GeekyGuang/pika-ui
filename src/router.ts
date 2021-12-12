import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import DocDemo from './components/DocDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import Install from './views/Install.vue'
import Intro from './views/Intro.vue'
import GetStarted from './views/GetStarted.vue'

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
        { path: '', component: DocDemo },
        { path: 'install', component: Install },
        { path: 'intro', component: Intro },
        { path: 'get-started', component: GetStarted },
        { path: 'switch', component: SwitchDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
      ],
    },
  ],
})
