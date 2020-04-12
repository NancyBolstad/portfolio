<template>
  <div class="uk-button-group">
    <button class="uk-button uk-button-default" @click="sortHandler('all')">
      All
    </button>
    <button
      class="uk-button uk-button-default"
      v-for="(category, index) in categories"
      :key="index"
      @click="sortHandler(category)"
    >
      {{ category }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Sort',
  props: {
    categories: Array,
    sortHandler: Function,
  },
  methods: {},
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
}
</style>
