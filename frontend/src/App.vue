<template>
  <div id="app" class="uk-width-*@l uk-padding-large">
    <Nav />
    <router-view :key="$route.fullPath"></router-view>
    <ProjectsList />
    <a href="#" uk-totop uk-scroll></a>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import ProjectsList from "./components/ProjectsList";

export default {
  name: "App",
  components: {
    Nav,
    ProjectsList
  }
};
</script>

<style lang="css">
body {
  color: black;
  max-width: 1080px;
  margin: 0 auto;
}

a {
  text-decoration: none;
}

h1 {
  font-family: "Roboto Mono", monospace;
  font-size: 120px;
}

#category {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
}

#title {
  letter-spacing: 0.4px;
  font-size: 22px;
  font-size: 1.375rem;
  line-height: 1.13636;
}

#banner {
  margin: 20px;
  height: 800px;
}

#editor {
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.75;
}

.uk-navbar-container {
  background: #fff !important;
  font-family: "Roboto Mono", monospace;
}

img:hover {
  opacity: 1;
  transition: opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);
}
</style>
