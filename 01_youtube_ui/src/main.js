import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import './assets/tailwind.css';

createApp(App)
  .component('fa', FontAwesomeIcon)
  .mount('#app');
