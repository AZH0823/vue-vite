import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import runoob from './components/runoob.vue'
import vImg from './components/vImg.vue'

const app = createApp(App)
app.component(
  'mycomponent', runoob,
)
app.component(
  'vImg', vImg,
)
app.mount('#app')