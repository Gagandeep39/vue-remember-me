import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard';

createApp(App)
  .component('base-card', BaseCard)
  .mount('#app');
