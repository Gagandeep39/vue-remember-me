import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard';
import BaseButton from './components/ui/BaseButton';

createApp(App)
  .component('base-card', BaseCard)
  .component('base-button', BaseButton)
  .mount('#app');
