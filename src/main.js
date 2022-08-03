import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.compilerOptions.isCustomElement = tag => tag.startsWith('smart-')
app.mount('#app')
