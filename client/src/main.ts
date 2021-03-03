import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import VuePersist from "vue-persist";

createApp(App)
  .use(router)
  .use(VuePersist)
  .mount("#app");
