<template>
  <section class="HomeHeroComponent edge_to_edge">
    <div class="HomeHeroComponent__copy">
      <h1>{{ homeHero.heading}}</h1>
      <p>{{ homeHero.subHeading}}</p>
      <a
        v-if="homeHero.buttonEnabled"
        :href="homeHero.link"
        :target="homeHero.buttonIsExternal ? '_blank' : '_self'"
        class="button"
      >{{ homeHero.buttonText}}</a>
    </div>
    <img :src="homeHero.image" />
  </section>
</template>

<script>
export default {
  props: ["homeHero"]
};
</script>

<style lang="scss">
.HomeHeroComponent {
  display: flex;
  height: 66vh;
  overflow: hidden;
  padding-bottom: 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: 75vh;
  }

  &__copy {
    align-self: flex-start;
    border-left: 2px solid $color_primary_brand;
    box-sizing: border-box;
    flex-shrink: 0;
    margin: $half_space 0 0 $mobile_side_space;
    padding: 0 $mobile_side_space $half_space $mobile_side_space;
    padding-top: 0;
    width: 500px;
    max-width: calc(100% - #{$half_space});
    p {
      padding-right: $base_space;
    }

    @media (min-width: 1440px) {
      width: 690px;
      box-sizing: content-box;
      margin: $half_space 0 0 $base_side_space;
      padding: 0 $base_side_space $half_space $base_side_space;
      p {
        padding-right: $double_space * 2;
      }
    }
  }

  img {
    flex: 1;
    object-fit: cover;
    object-position: center right;
    overflow: hidden;
    @media (max-width: 1024px) {
      object-position: center right;
    }
  }
}
</style>