<template>
  <div>
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
              v-for="item in project.technologies"
              :key="item.id"
              class="uk-label"
            >
              {{ item }}
            </span>
            <p class="uk-text-large">{{ project.title }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: Array
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
