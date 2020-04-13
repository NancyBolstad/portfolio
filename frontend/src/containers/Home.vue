<template>
  <div class="uk-section">
    <Banner />
    <h2 class="uk-article-title">/projects</h2>
    <Sort :categories="categories" :sortHandler="sort" />
    <span class="uk-text-small">Sort by categories:</span>
    <select class="uk-select" @change="sort($event.target.value)">
      <option v-for="(category, index) in categories" :key="index">{{ category }}</option>
    </select>
    <ProjectsList v-if="sorted.length" :projects="sorted" />
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
      const newArray = this.projects.filter(element => {
        return element.categories.includes(target);
      });

      if (newArray) {
        this.sorted = newArray;
      } else {
        this.showFull();
      }
    },
    changeSelect() {
      console.log(222288789789789779);
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
      const categories = ['all'];
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
.uk-select {
  display: block !important;
  margin: 1.2rem auto;
  text-transform: capitalize;
}

@media screen and (min-width: 780px) {
  .uk-select,
  .uk-text-small {
    display: none !important;
  }
}
</style>
