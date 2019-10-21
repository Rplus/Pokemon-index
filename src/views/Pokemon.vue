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
    let _pid = this.pid;
    let { pmSet, pid } = this.getPmSet(this.pid);

    if (_pid !== pid) {
      this.$router.push({ name: 'pokemon', params: { pid } });
    }

    return {
      pmSet,
    };
  },
  methods: {
    getPmSet: function(pid = this.pid) {
      let [pmDex, pmType] = pid.split('_');
      let pmSet = this.$store.state.pms.find(
        dex => dex.templateId.indexOf(pmDex) !== -1
      );
      if (!pmSet) {
        return this.getPmSet('V0001_NORMAL');
      }
      if (!pmSet.pms.some(pm => pm.pid === pid)) {
        pid = pmSet.pms[0].pid;
      }
      return { pmSet, pmType, pid };
    },
  },
};
</script>

<style>
/**/
</style>
