<template>
  <div id="scroller-wrapper">
    <a id="scroller-button" href="#" uk-totop uk-scroll></a>
  </div>
</template>

<script>
export default {
  name: "Scroller"
};
</script>

<style lang="css">
#scroller-wrapper {
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
}

#scroller-button {
  color: black;
  font-weight: bold;
  margin-right: 2rem;
}
</style>
