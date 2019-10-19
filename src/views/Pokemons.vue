<template>
  <div class="pms">
    <router-link to="/pokemon/1">
      /pokemon/1
    </router-link>
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
export default {
  name: 'pokemons',
  data() {
    let pms = this.$store.state.pms;
    return {
      pms,
    };
  },
};
</script>

<style>
/**/
</style>
