import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as FaIcons from 'oh-vue-icons/icons'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import App from './App.vue'

const Fa = Object.values({ ...FaIcons })
addIcons(...Fa)

const app = createApp(App)

app.use(createPinia())
app.component('v-icon', OhVueIcon)

app.mount('#app')
