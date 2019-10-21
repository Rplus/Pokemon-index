import Vue from 'vue';
import Vuex from 'vuex';
import data from '../public/pm-index.min.json';
import { fixedNumber } from '@/u.js';

let data0 = {
  power: 0,
  energyDelta: 0,
};

let pvpData0 = {
  power: 0,
  energyDelta: 0,
  durationTurns: 0,
};

data.moves.forEach(m => {
  m.nid = (+m.templateId.slice(1, 5)).toString();
  m.isFast = /_FAST$/.test(m.templateId);
  if (m.data) {
    m.data = {
      ...data0,
      ...m.data,
    };

    m.data.dps = fixedNumber((m.data.power * 1000) / m.data.durationMs);
    m.data.eps = fixedNumber((m.data.energyDelta * 1000) / m.data.durationMs);
  }

  if (m.pvpData) {
    if (m.isFast) {
      m.pvpData = {
        ...pvpData0,
        ...m.pvpData,
      };

      m.pvpData.cd = (m.pvpData.durationTurns + 1) * 0.5;

      m.pvpData.dpt = fixedNumber(
        m.pvpData.power / (m.pvpData.durationTurns + 1)
      );

      m.pvpData.ept = fixedNumber(
        m.pvpData.energyDelta / (m.pvpData.durationTurns + 1)
      );
    } else {
      m.pvpData.dpe = fixedNumber(m.pvpData.power / m.pvpData.energyDelta);
    }
  }
});

data.moves.sort((a, b) => a.nid - b.nid);

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
