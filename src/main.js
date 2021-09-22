import Vue from "vue";
import VueResource from "vue-resource";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueResource);

Vue.http.options.root = "";

Vue.filter("currency", (value) => {
  return "$" + value.toLocaleString();
});

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
