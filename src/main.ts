import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import Poyap from './components/Poyap.vue'
import Poyap2 from './components/Poyap2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path:'/',
            component: Poyap
        },
        {path:'/xxx',
            component: Poyap2
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
