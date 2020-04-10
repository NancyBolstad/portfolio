<template>
  <div class="uk-section">
    <Banner />
    <h2 class="uk-article-title">/projects</h2>
    <ul>
      <li v-for="(option, index) in options" :key="index">
        {{ option }}
      </li>
    </ul>
    <ProjectsList :projects="projects" />
  </div>
</template>

<script>
import ProjectsList from "../components/ProjectsList.vue";
import Banner from "../components/Banner";

export default {
  components: {
    ProjectsList,
    Banner
  },
  data: function() {
    return {
      api_url: process.env.VUE_APP_API_URL,
      projects: [],
      options: ["react", "typescript"]
    };
  },
  created() {
    this.fetchData();
  },
  destroyed() {
    window.scrollTo({
      top: 0
    });
  },
  methods: {
    fetchData() {
      fetch(this.api_url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.projects = data.projects;
          console.log(this.projects);
        });
    }
  },
  computed: {
    amount() {
      return this.projects.length;
    },
    fullList() {
      return this.projects;
    }
  }
};
</script>

<style lang="css">
.uk-section {
  max-width: 1080px;
  margin: 0 auto;
}

.uk-card-body {
  padding: 2.5rem 0.5rem 3rem 0.5rem;
  color: black;
}

.uk-label {
  background-color: black;
  margin-right: 0.5rem;
  text-transform: lowercase;
}

.uk-button-text {
  text-transform: lowercase;
  font-size: 1rem;
}

.uk-article-title {
  margin: 5rem 0 3rem 0;
}
</style>
