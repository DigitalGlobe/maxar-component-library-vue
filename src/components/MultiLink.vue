<template>
  <section class="MultilinkComponent">
    <div v-for="link in multiLink.links" :key="link.link" class="MultilinkComponent__link">
      <p class="MultilinkComponent__link__title">{{link.heading}}</p>
      <div v-html="link.copy"></div>
      <a class="button" :href="link.link" :target="link.isExternal ? '_blank' : '_self'">Learn more</a>
    </div>
  </section>
</template>

<script>
export default {
  props: ["multiLink"]
};
</script>

<style lang="scss">
.MultilinkComponent {
  display: flex;
  justify-content: space-between;
  @media (max-width: 1280px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  &__link {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 $base_space;
    min-width: 250px;
    @media (max-width: 1280px) {
      width: 30%;
      margin-bottom: $base_space;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
    &__title {
      font-family: $blenderFontFamily;
      font-size: 18px;
      font-weight: 900;
      text-transform: uppercase;
    }
    a {
      align-self: flex-start;
    }
  }
}
</style>