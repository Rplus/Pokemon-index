<template>
  <div class="moves">
    <div class="cc">mid: {{ mid }}</div>
    <hr />
    <pre>{{ move }}</pre>
    <hr />
    <div class="c">pm with move:</div>
    <div v-for="pm in pms" :key="pm.templateId">
      <details>
        <summary>
          <span>{{ pm.templateId }}</span>
          /
          <span>{{ pm.pokemonSettings.pokemonId }}</span>
        </summary>
        <pre>{{ pm }}</pre>
      </details>
    </div>
  </div>
</template>

<script>
export default {
  name: 'moves',
  props: ['mid'],
  data() {
    let mid = ('0000' + this.mid.split('-')[0]).slice(-4);
    let move = this.$store.state.moves.find(m =>
      new RegExp(`^V${mid}`).test(m.templateId)
    );
    let pms = [];
    this.$store.state.pms.forEach(dex => {
      dex.pms.forEach(j => {
        let movepool = move.isFast
          ? j.pokemonSettings.quickMoves
          : j.pokemonSettings.cinematicMoves;
        if (!movepool) {
          return;
        }
        if (movepool.indexOf(move.mid) !== -1) {
          return pms.push(j);
        }
      });
    });

    return {
      // isPvp: false,
      move,
      pms,
    };
  },
};
</script>

<style>
/**/
</style>
