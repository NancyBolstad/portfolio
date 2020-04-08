<template>
  <div>
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <router-link
          v-for="article in leftArticles"
          :to="{ path: '/article/' + article.id }"
          class="uk-link-reset"
          :key="article.id"
        >
          <div class="uk-card uk-card-muted">
            <div class="uk-card-media-top">
              <img :src="article.image" :alt="article.name" height="100" />
            </div>
            <div class="uk-card-body">
              <p id="category" v-if="article.name" class="uk-text-uppercase">
                {{ article.name }}
              </p>
              <p id="title" class="uk-text-large">{{ article.title }}</p>
            </div>
          </div>
        </router-link>
      </div>
      <div>
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
          <router-link
            v-for="article in rightArticles"
            :to="{ path: '/article/' + article.id }"
            class="uk-link-reset"
            :key="article.id"
          >
            <div class="uk-card uk-card-muted">
              <div class="uk-card-media-top">
                <img :src="article.image" :alt="article.name" height="100" />
              </div>
              <div class="uk-card-body">
                <p id="category" v-if="article.name" class="uk-text-uppercase">
                  {{ article.name }}
                </p>
                <p id="title" class="uk-text-large">{{ article.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
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
    leftArticlesCount() {
      return 5;
    },
    leftArticles() {
      return this.projects.slice(0, 5);
    },
    rightArticles() {
      return this.projects.slice(5, 11);
    }
  }
};
</script>
