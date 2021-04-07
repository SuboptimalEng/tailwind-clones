import { createApp } from 'vue';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import './assets/tailwind.css';

library.add(fas, fab);

createApp(App)
  .component('fa', FontAwesomeIcon)
  .mount('#app');
