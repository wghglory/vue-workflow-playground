import { createApp } from 'vue';
import App from './App.vue';
import 'vfonts/Lato.css';

import router from './router';
import store from './store';

import { i18nClient } from './i18n/i18nClient';

async () => {
  await i18nClient.coreService.loadI18nData();
};

const app = createApp(App);
app.use(store);
app.use(router);

app.mount('#app');
