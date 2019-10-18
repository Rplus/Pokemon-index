<template>
  <div class="moves">
    <div class="cc">mid: {{ mid }}</div>
    <hr />
    <pre>{{ move }}</pre>
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

    return {
      // isPvp: false,
      move,
    };
  },
};
</script>

<style>
/**/
</style>
