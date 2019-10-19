import Vue from 'vue';
import Vuex from 'vuex';
import data from '../public/pm-index.min.json';

data.moves.forEach(m => {
  m.nid = (+m.templateId.slice(1, 5)).toString();
  m.isFast = /_FAST$/.test(m.templateId);
});

data.pms.forEach(dex => {
  dex.pms.forEach(pm => {
    pm.pid = pm.templateId.replace(
      `_POKEMON_${pm.pokemonSettings.pokemonId}`,
      ''
    );
  });
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...data,
  },
  mutations: {},
  actions: {},
});
