<template>
  <article>
    <h1>Hi, I am a Front-end Developer from Oslo.</h1>
    <p class="uk-text-lead">
      Currently Consultant
      <a
        href="https://www.bouvet.no/"
        target="_blank"
        rel="noopener noreferrer"
        title="Go to Bouvet's website"
        aria-label="Go to Bouvet's website"
        uk-tooltip="Go to Bouvet's website"
        >@Bouvet</a
      >
    </p>
    <p class="uk-text-lead">
      Previously Software Developer
      <a
        href="https://ludensgruppen.no/"
        target="_blank"
        rel="noopener noreferrer"
        title="Go to Luden's website"
        aria-label="Go to Luden's website"
        uk-tooltip="Go to Luden's website"
        >@Ludens</a
      >
    </p>
    <p class="uk-text-lead">Learns fast. Goal oriented. Thinks creatively.</p>
    <MediaLinks />
  </article>
</template>

<script>
import MediaLinks from './MediaLinks.vue';

export default {
  components: {
    MediaLinks,
  },
};
</script>

<style lang="css">
.uk-section {
  max-width: 1080px;
  margin: 0 auto;
  padding: 2rem 0;
}

h1 {
  margin: 2rem 0;
  font-weight: 900;
}

.uk-text-lead {
  margin: 1.375rem 0;
}
</style>
