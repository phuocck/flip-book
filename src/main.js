import { createApp } from 'vue'
import './style.css';
import VueDraggableResizable from 'vue-draggable-resizable'
import App from './App.vue'

const app = createApp(App);
app.mount('#app');
app.component("vue-draggable-resizable", VueDraggableResizable);

