<template>
  <div class="uk-section">
    <h2 class="uk-article-title">{{ project.title }}</h2>
    <h3>{{ project.name }}</h3>
    <img :src="project.image" :alt="project.name" />
  </div>
</template>

<script>
var moment = require("moment");
export default {
  data() {
    return {
      project: {},
      moment: moment,
      api_url: process.env.VUE_APP_API_URL + this.$route.params.id
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch(this.api_url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.project = data;
          console.log(this.project);
        });
    }
  }
};
</script>

<style lang="css"></style>
