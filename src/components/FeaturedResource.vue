<template>
  <section class="FeaturedResource">
    <h4>{{featuredResource.title}}</h4>
    <h5>{{featuredResource.subtitle}}</h5>
    <a
      :href="featuredResource.link"
      :target="featuredResource.linkExternal ? '_blank' : '_self'"
      class="navbar__link arrow"
    >{{featuredResource.linkText}}</a>
  </section>
</template>

<script>
export default {
  props: ["featuredResource"]
};
</script>

<style lang="scss">
.FeaturedResource {
  background: #f5f5f5;
  border-top: 2px solid $color_primary_brand;
  border-bottom: 2px solid $color_primary_brand;
  margin-bottom: $half_space !important;
}
</style>