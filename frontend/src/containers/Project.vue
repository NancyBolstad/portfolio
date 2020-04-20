<template>
  <div class="uk-section">
    <div v-if="loading" uk-spinner="ratio: 3"></div>
    <article v-else>
      <h2 class="uk-article-title">Project: {{ project.name }}</h2>
      <img :src="project.image" :alt="project.name" />
      <div class="article-body">
        <span>Published at: {{ project.published }}</span>
        <h3 class="uk-text-lead">{{ project.title }}</h3>
        <div class="uk-child-width-auto uk-article-meta">
          <div>
            <a
              class="uk-button uk-button-text"
              :href="project.website"
              target="_blank"
              rel="noopener noreferrer"
              title="View the live website"
              aria-label="View the live website"
            >
              <span class="iconify" data-icon="cil:browser" data-inline="false"></span>
              Go to website
            </a>
          </div>
          <div v-if="project.isOpenSource">
            <a
              class="uk-button uk-button-text"
              :href="project.gitLink"
              target="_blank"
              rel="noopener noreferrer"
              title="View source code"
              aria-label="View source code"
            >
              <span class="iconify" data-icon="bx:bx-code-alt" data-inline="false"></span>
              View source code
            </a>
          </div>
        </div>
        <div v-html="project.descriptions" id="rich-text"></div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: {},
      loading: true,
      api_url: process.env.VUE_APP_API_URL + this.$route.params.id,
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
    },
  },
};
</script>

<style lang="css">
.uk-article-title {
  text-transform: capitalize;
}

.article-body {
  max-width: 650px;
  margin: 2rem auto;
}

.article-body .uk-text-lead {
  margin: 2rem auto;
  font-weight: 2rem;
  font-weight: 900;
}

.uk-article-meta {
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
}

.uk-button-text {
  font-size: 1.2rem;
  text-transform: initial;
  margin-bottom: 1rem;
  color: #333;
}

.uk-article-meta a {
  color: #333;
}

#rich-text {
  margin: 3rem auto;
  font-size: 1.2rem;
  line-height: 2;
}

#rich-text > h3 {
  font-weight: 600;
}

#rich-text > p > a {
  text-decoration: underline !important;
}

.uk-comment-body {
  max-width: 480px;
  margin: 0 auto;
  border-left: 2px solid #333;
}
</style>
