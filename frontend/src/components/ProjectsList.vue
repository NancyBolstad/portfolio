<template>
  <div class="uk-section">
    <h2 class="uk-article-title">/projects</h2>
    <div class="uk-grid-small uk-child-width-auto" uk-grid>
      <div>
        <a class="uk-button uk-button-text" href="#">#React</a>
      </div>
      <div>
        <a class="uk-button uk-button-text" href="#">#TypeScript</a>
      </div>
    </div>
    <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
      <router-link
        v-for="project in fullList"
        :to="{ path: '/project/' + project.id }"
        :key="project.id"
      >
        <div
          class="uk-card uk-card-default"
          uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500"
        >
          <div class="uk-card-media-top">
            <img :src="project.image" :alt="project.name" height="100" />
          </div>
          <div class="uk-card-body">
            <span
              id="category"
              v-for="item in project.technologies"
              :key="item.id"
              class="uk-label"
            >
              {{ item }}
            </span>
            <p id="title" class="uk-text-large">{{ project.title }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      api_url: process.env.VUE_API_URL || "http://localhost:8001/projects",
      projects: []
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
</style>
