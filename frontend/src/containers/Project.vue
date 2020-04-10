<template>
  <div class="uk-section">
    <div v-if="loading" uk-spinner="ratio: 3"></div>
    <div v-else>
      <h2 class="uk-article-title">Project: {{ project.name }}</h2>
      <p class="uk-text-lead">{{ project.title }}</p>
      <div class="uk-child-width-auto uk-article-meta">
        <div>
          <a
            class="uk-button uk-button-text"
            :href="project.website"
            target="_blank"
            rel="noopener noreferrer"
            ><span
              class="iconify"
              data-icon="cil:browser"
              data-inline="false"
            ></span>
            Go to website</a
          >
        </div>
        <div v-if="project.isOpenSource">
          <a
            class="uk-button uk-button-text"
            :href="project.gitLink"
            target="_blank"
            rel="noopener noreferrer"
            ><span
              class="iconify"
              data-icon="bx:bx-code-alt"
              data-inline="false"
            ></span>
            View source code</a
          >
        </div>
      </div>
      <img :src="project.image" :alt="project.name" />
      <div v-html="project.descriptions" id="rich-text"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: {},
      loading: true,
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
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="css">
.uk-article-title {
  text-transform: capitalize;
}

.uk-text-lead {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.uk-article-meta {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.uk-button-text {
  font-size: 1.2rem;
  text-transform: initial;
  margin-bottom: 1rem;
}

#rich-text > p {
  max-width: 650px;
  margin: 4rem auto 2rem;
}
</style>
