import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/components/_globals';

Vue.config.productionTip = false;
Vue.config.performance = true;

import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css';
import 'material-icons';
// import "@mdi/font/css/materialdesignicons.css";
import '@fortawesome/fontawesome-free/css/all.css';

// necessary for Webpack to bundle favicon for index.html
require('@/assets/images/favicon.ico');

const opts = {
  icons: {
    iconfont: 'md',
    values: {
      add: 'add',
      github: 'fab fa-github',
      google: 'fab fa-google',
      facebook: 'fab fa-facebook',
      twitter: 'fab fa-twitter'
    }
  }
};

Vue.use(Vuetify);

new Vue({
  store,
  router,
  vuetify: new Vuetify(opts),
  render: h => h(App)
}).$mount('#app');
