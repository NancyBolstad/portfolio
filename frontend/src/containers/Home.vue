<template>
  <div class="uk-section">
    <Banner />
    <h2 class="uk-article-title">/projects</h2>
    <Sort :categories="categories" :sortHandler="sort" />
    <ProjectsList v-if="sorted.length > 0" :projects="sorted" />
    <ProjectsList v-else :projects="projects" />
  </div>
</template>

<script>
import ProjectsList from '../components/ProjectsList.vue';
import Banner from '../components/Banner';
import Sort from '../components/Sort';

export default {
  components: {
    ProjectsList,
    Banner,
    Sort,
  },
  data: function() {
    return {
      api_url: process.env.VUE_APP_API_URL,
      projects: [],
      sorted: [],
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

.uk-button-group > button {
  margin-bottom: 1.2rem;
  margin-right: 1rem;
  border-color: #333333;
}
</style>
