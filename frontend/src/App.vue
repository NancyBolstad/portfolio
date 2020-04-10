<template>
  <div id="app">
    <div>
      <Nav />
      <router-view :key="$route.fullPath"></router-view>
      <a href="#" uk-totop uk-scroll></a>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav
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

img:hover {
  opacity: 1;
  transition: opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);
}
</style>
