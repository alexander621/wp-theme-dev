require("./bootstrap");
import Vue from 'vue';
window.axios = require("axios");
import store from './store';
import mixins from "./mixins";
import SvgVue from 'svg-vue';
import {
  ITSHelpers
} from "./utils/ITSUtilities";

Vue.prototype.$settings = SETTINGS;
Vue.prototype.$images = SETTINGS.images;
Vue.config.productionTip = false;
Vue.use(SvgVue);
Vue.mixin(mixins);

const files = require.context("./", true, /\.vue$/i);
files.keys().map((key) =>
  Vue.component(
    key
    .split("/")
    .pop()
    .split(".")[0],
    files(key).default
  )
);

new Vue({
  el: "#app",
  store,
  beforeCreate() {
    ITSHelpers.vueFixWpPlugins(document.querySelector("#app"));
  },
  mounted() {
    document.querySelector("#app").classList.remove("invisible");
  },
});
