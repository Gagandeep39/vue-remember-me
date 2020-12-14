import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard';
import BaseButton from './components/ui/BaseButton';
import BaseDialog from './components/ui/BaseDialog';

createApp(App)
  .component('base-card', BaseCard)
  .component('base-button', BaseButton)
  .component('base-dialog', BaseDialog)
  .mount('#app');
