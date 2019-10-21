<template>
  <div class="moves">
    <h1>This is an move page</h1>

    <h3>switcher:</h3>
    <label>
      is pvp?:
      <input type="checkbox" v-model="isPvp" />
    </label>

    <Filters v-on:update-filters="updateFilters" />

    <Sort
      :sorts="sortTypes"
      :switcher="Number(isPvp)"
      v-on:update-sort="updateSort"
    />

    <main class="moves-section">
      <section v-for="(movetype, i) in moves" :key="i">
        <h4>{{ i }}</h4>
        <ol>
          <li v-for="m in movetype" :key="m.templateId">
            <router-link
              :to="{
                name: 'move',
                params: {
                  mid: `${m.nid}-${m.mid.toLowerCase()}`,
                },
              }"
            >
              move:{{ m.nid }}
            </router-link>
            <pre>{{ m }}</pre>
          </li>
        </ol>
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Filters from '@/components/Filters.vue';
import Sort from '@/components/Sort.vue';
import { deepFind } from '@/u.js';

export default {
  name: 'moves',
  components: {
    Filters,
    Sort,
  },
  data() {
    let _moves = this.$store.state.moves;
    let allMoves = {
      fast: _moves.filter(m => m.isFast),
      charge: _moves.filter(m => !m.isFast),
    };
    let sortTypes = _moves.reduce((all, m) => {
      return { ...all, ...m };
    }, {});

    sortTypes = [
      {
        title: 'nid',
        value: 'nid',
        show: [0, 1],
      },
      ...Object.keys(sortTypes.data).map(p => ({
        title: `data.${p}`,
        value: `data.${p}`,
        show: [0],
      })),
      ...Object.keys(sortTypes.pvpData).map(p => ({
        title: `pvpData.${p}`,
        value: `pvpData.${p}`,
        show: [1],
      })),
    ];

    return {
      isPvp: false,
      allMoves,
      checkedTypes: [],
      sortType: 'nid',
      sortDir: 1,
      sortTypes,
    };
  },
  methods: {
    moveFilter: function(moves, types) {
      if (!types.length) {
        return moves;
      }
      return moves.filter(m => types.indexOf(m.type) !== -1);
    },

    sortMoves: function(moves, sortDir, sortType) {
      return moves.sort(
        (a, b) => (deepFind(a, sortType) - deepFind(b, sortType)) * sortDir
      );
    },

    updateFilters: function(filters) {
      this.checkedTypes = filters;
    },

    updateSort: function(sort) {
      this.sortType = sort.type;
      this.sortDir = sort.dir;
    },
  },
  computed: {
    moves: function() {
      return Object.keys(this.allMoves).reduce((all, k) => {
        all[k] = this.sortMoves(
          this.moveFilter(this.allMoves[k], this.checkedTypes),
          this.sortDir,
          this.sortType
        );
        return all;
      }, {});
    },
  },
};
</script>

<style>
.moves-section {
  display: flex;
}
</style>
