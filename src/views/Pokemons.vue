<template>
  <div class="pms">
    <h3>filter:</h3>
    <Filters v-on:update-filters="updateFilters" />
    <h3>sort:</h3>
    <hr />
    <ol>
      <li v-for="dex in pms" :key="dex.templateId">
        <h3>{{ dex.templateId }}</h3>
        <details v-for="(pm, i) in dex.pms" :key="i">
          <summary>
            <span>{{ pm.templateId }}</span>
          </summary>
          <router-link
            :to="{
              name: 'pokemon',
              params: {
                pid: pm.pid,
              },
            }"
          >
            /pokemon/{{ pm.pid }}
          </router-link>
          <pre>{{ pm }}</pre>
        </details>
      </li>
    </ol>
  </div>
</template>

<script>
import Filters from '@/components/Filters.vue';

export default {
  name: 'pokemons',
  components: {
    Filters,
  },
  data() {
    let pms = this.$store.state.pms;
    return {
      pms,
      checkedTypes: [],
    };
  },
  methods: {
    updateFilters: function(filters) {
      this.checkedTypes = filters;
      console.log(this.checkedTypes);
    },
  },
};
</script>

<style>
/**/
</style>
