import Vue from "vue";
import Vuex from "vuex";
import data from "../public/pm-index.min.json";

console.log(123, { ...data });

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...data
  },
  mutations: {},
  actions: {}
});
