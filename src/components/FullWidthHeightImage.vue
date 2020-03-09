<template>
  <section class="FullWidthHeightImageComponent edge_to_edge">
    <img :src="fullWidthHeightImage.imageUrl" />
  </section>
</template>

<script>
export default {
  props: ["fullWidthHeightImage"]
};
</script>

<style lang="scss">
.FullWidthHeightImageComponent {
  width: 100%;
  img {
    max-width: 100%;
    width: 100%;
  }
}
</style>