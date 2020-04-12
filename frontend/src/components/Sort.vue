<template>
  <div class="uk-button-group">
    <button
      class="uk-button uk-button-default"
      v-for="(category, index) in categories"
      :key="index"
      :title="category"
      @click="handler(category, index, $event)"
      :class="{ selected: currentTab === index }"
    >
      {{ category }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Sort',
  data: function() {
    return {
      selected: 'not',
      currentTab: 0,
    };
  },
  props: {
    categories: Array,
    sortHandler: Function,
  },
  methods: {
    handler(category, index) {
      this.currentTab = index;
      this.sortHandler(category);
      console.log(this.currentTab);
    },
  },
  computed: {},
};
</script>

<style lang="css">
.uk-button-group {
  flex-wrap: wrap;
}

.uk-button-group > button {
  margin-bottom: 1.2rem;
  margin-right: 1rem;
  border-color: #333333;
  text-transform: capitalize;
}

.uk-button-group > button:hover,
.uk-button-group > button:focus {
  background-color: #333333;
  color: aliceblue;
}
.selected {
  background-color: #333333;
  color: aliceblue;
}
</style>
