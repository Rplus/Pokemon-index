<template>
  <div class="moves">
    <div class="cc">pid: {{ pid }}</div>
    <hr />
    <h3>{{ pmSet.templateId }}</h3>
    <ol>
      <li v-for="pm in pmSet.pms" :key="pm.templateId">
        <details>
          <summary>
            <span
              :class="{
                'is-active': pm.pid === pid,
              }"
              >{{ pm.templateId }}</span
            >
          </summary>
          <pre>{{ pm }}</pre>
        </details>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'moves',
  props: ['pid'],
  data() {
    let [pmDex, pmType] = this.pid.split('_');
    let pmSet = this.$store.state.pms.find(
      dex => dex.templateId.indexOf(pmDex) !== -1
    );
    pmType;

    // console.log({ pid }, this.$store.state.pms);
    // let pms;
    // if (pmDex) {
    //   pms = pmDex.pms;
    // }
    // console.log(pms);
    // let pm = this.$store.state.pms.find(m =>
    //   new RegExp(`^V${pid}`).test(m.templateId)
    // );
    // let pms = [];

    return {
      // isPvp: false,
      pmSet,
      // pms,
    };
  },
};
</script>

<style>
/**/
</style>
