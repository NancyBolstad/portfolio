<template>
  <footer>
    <span>Developed with Vue, Express and Node</span>
    <span>© 2020 Nancy Bolstad</span>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="css">
footer {
  background-color: black;
  color: aliceblue;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
}

span {
  margin: 1rem 0 0.5rem 0;
}
</style>
