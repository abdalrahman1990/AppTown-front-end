
import axios from "axios";
import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import App from "./App";
// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
//import { router } from './router';
import router from "./router/index";
import store from './store';
import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n"
import './registerServiceWorker'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VeeValidate from 'vee-validate';
import Vuex from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import VueMaterial from "vue-material";
import 'vue-material/dist/vue-material.min.css'

import StarRating from 'vue-star-rating'
import Toastr from 'vue-toastr';

Vue.use(Toastr);

Vue.component('star-rating', StarRating);

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueMaterial)
Vue.use(Vuex);
Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);


Vue.config.productionTip = false;

axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 422) {
      store.commit("setErrors", error.response.data.errors);
    } else if (error.response.status === 401) {
      store.commit("auth/setUserData", null);
      localStorage.removeItem("authToken");
      router.push({ name: "Login" });
    } else {
      return Promise.reject(error);
    }
  }
);


axios.interceptors.request.use(function(config) {
  config.headers.common = {
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    "Content-Type": "application/json",
    Accept: "application/json"
  };

  return config;
});


new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount("#app");
