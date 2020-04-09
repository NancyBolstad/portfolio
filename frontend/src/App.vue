<template>
  <div id="app">
    <Nav />
    <router-view :key="$route.fullPath"></router-view>
    <Banner />
    <ProjectsList />
    <a href="#" uk-totop uk-scroll></a>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import ProjectsList from "./components/ProjectsList";
import Banner from "./components/Banner";

export default {
  name: "App",
  components: {
    Nav,
    Banner,
    ProjectsList
  }
};
</script>

<style lang="css">
body {
  color: #333;
  background-color: #f6f6f6;
  margin: 0 auto;
  font-family: "Roboto Mono", monospace;
  padding: 0 1rem;
}

a {
  text-decoration: none;
  color: #333;
}

a:hover,
a:focus {
  color: #333;
  opacity: 0.8;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto Mono", monospace;
}

h1 {
  font-size: 2.25rem;
}

h2 {
  font-size: 1.75rem;
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
  font-family: "Roboto Mono", monospace;
}

img:hover {
  opacity: 1;
  transition: opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);
}
</style>
