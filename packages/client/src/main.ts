import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'

// GLOBAL TRACER: Catch every error before the app dies
window.onerror = function(message, source, lineno, colno, error) {
  console.log("!!! GLOBAL CRASH DETECTED !!!");
  console.log("Message:", message);
  console.log("File:", source, "Line:", lineno);
  return false;
};

const app = createApp(App);
app.use(createPinia());
app.mount('#app');
