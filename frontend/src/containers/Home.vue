<template>
  <div class="uk-section">
    <Banner />
    <h2 class="uk-article-title">/projects</h2>
    <div class="uk-button-group">
      <button class="uk-button uk-button-default" @click="showFull()">
        All
      </button>
      <button
        class="uk-button uk-button-default"
        v-for="(category, index) in categories"
        :key="index"
        @click="sort(category)"
      >
        {{ category }}
      </button>
    </div>
    <ProjectsList v-if="sorted.length > 0" :projects="sorted" />
    <ProjectsList v-else :projects="projects" />
  </div>
</template>

<script>
import ProjectsList from '../components/ProjectsList.vue';
import Banner from '../components/Banner';

export default {
  components: {
    ProjectsList,
    Banner,
  },
  data: function() {
    return {
      api_url: process.env.VUE_APP_API_URL,
      projects: [],
      sorted: [],
      options: ['react', 'typescript'],
    };
  },
  created() {
    this.fetchData();
  },
  destroyed() {
    window.scrollTo({
      top: 0,
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
        });
    },
    showFull() {
      this.sorted = [];
    },
    sort(target) {
      console.log(target);
      this.sorted = [...this.projects].slice(0, 2);
    },
  },
  computed: {
    amount() {
      return this.projects.length;
    },
    fullList() {
      return this.projects;
    },
    technologies() {
      const technologies = [];
      this.projects.map(projects => {
        projects.technologies.map(technology => {
          if (!technologies.includes(technology)) {
            technologies.push(technology);
          }
        });
      });
      return technologies;
    },
    categories() {
      const categories = [];
      this.projects.map(projects => {
        projects.categories.map(category => {
          if (!categories.includes(category)) {
            categories.push(category);
          }
        });
      });
      return categories;
    },
  },
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

.uk-button-group {
  flex-wrap: wrap;
}
</style>
