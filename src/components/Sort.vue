<template>
  <details open>
    <summary>
      <strong>sort:</strong>
    </summary>
    <dl>
      <dt>
        dir:
      </dt>

      <dd>
        <label v-for="dir in sortDirs" :key="dir.value">
          <input
            type="radio"
            name="sortDir"
            :value="dir.value"
            v-model.number="sortDir"
          />
          {{ dir.title }}
        </label>
      </dd>

      <dt>
        type:
      </dt>

      <dd>
        <div>
          <label
            v-for="type in sorts"
            :key="type.value"
            v-show="type.show.indexOf(switcher) !== -1"
          >
            <input
              type="radio"
              :value="type.value"
              name="sortType"
              v-model="sortType"
            />
            {{ type.title }}
            <br />
          </label>
        </div>
      </dd>
    </dl>
  </details>
</template>

<script>
export default {
  name: 'Sort',
  props: {
    sorts: Array,
    switcher: Number,
  },
  data() {
    return {
      sortDir: 1,
      sortType: 'nid',
      sortDirs: [
        {
          title: 'asc',
          value: 1,
        },
        {
          title: 'desc',
          value: -1,
        },
      ],
    };
  },
  methods: {
    updateSort: function() {
      this.$emit('update-sort', {
        type: this.sortType,
        dir: this.sortDir,
      });
    },
  },
  watch: {
    sortDir: function() {
      this.updateSort();
    },
    sortType: function() {
      this.updateSort();
    },
  },
};
</script>
