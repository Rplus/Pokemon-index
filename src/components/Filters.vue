<template>
  <details>
    <summary>
      <strong>filter:</strong>
    </summary>
    <div>
      <ul>
        <li v-for="type in types" :key="type">
          <label>
            <input
              type="checkbox"
              name="type"
              :value="type"
              v-model="checkedTypes"
            />
            {{ type }}
          </label>
        </li>
      </ul>
    </div>
  </details>
</template>

<script>
export default {
  name: 'Filters',
  data() {
    let types = this.$store.state.types;
    return {
      types,
      checkedTypes: [],
    };
  },
  watch: {
    checkedTypes: function() {
      this.$emit('update-filters', this.checkedTypes);
    },
  },
};
</script>
