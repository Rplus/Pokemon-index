<template>
  <div class="moves">
    <h1>This is an move page</h1>

    <h3>switcher:</h3>
    <label>
      is pvp?:
      <input type="checkbox" v-model="isPvp">
    </label>

    <h3>filter:</h3>

    <h3>sort:</h3>

    <main class="moves-section">
      <section v-for="(movetype, i) in moves" :key="i">
        <h4>{{ i }}</h4>
        <ol>
          <li v-for="m in movetype" :key="m.templateId">
            <pre>{{ m }}</pre>
          </li>
        </ol>
      </section>
    </main>
  </div>
</template>

<script>

// @ is an alias to /src
export default {
  name: "moves",
  data() {
    let _moves = this.$store.state.moves;
    let moves = {
      fast: _moves.filter(m => /_FAST$/.test(m.templateId)),
      charge: _moves.filter(m => !/_FAST$/.test(m.templateId)),
    };
    return {
      isPvp: false,
      moves
    };
  },
  computed: {
  }
};
</script>

<style>
  .moves-section {
    display: flex;
  }
</style>
