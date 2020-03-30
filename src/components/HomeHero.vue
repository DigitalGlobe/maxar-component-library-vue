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
    <img :src="homerHero.image" />
  </section>
</template>

<script>
export default {
  props: ["homeHero"]
};
</script>

<style lang="scss">
$HeroComponent__breakpoint: 1280px;

.HeroComponent {
  display: flex;
  flex-direction: column;
  //min-height: 66vh;
  overflow: hidden;
  //margin-bottom: $half_space;
  @media (max-width: 768px) {
    //min-height: 75vh;
  }
  &__copy {
    align-self: flex-start;
    border-left: 2px solid $color_primary_brand;
    box-sizing: border-box;
    flex-shrink: 0;
    margin: $half_space 0 $half_space $mobile_side_space;
    padding: 0 $mobile_side_space $half_space $mobile_side_space;
    padding-top: 0;
    width: 1280px;
    max-width: calc(100% - #{$half_space});
    @media (min-width: 768px) {
      box-sizing: content-box;
      margin: $half_space 0 $base_space $base_side_space;
      padding: 0 $base_side_space $half_space $base_side_space;
    }
    p {
      max-width: 500px;
    }
  }
  &__image {
    width: 100%;
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media (max-width: 1200px) {
      height: 250px;
    }
    @media (max-height: 900px) {
      height: 250px;
    }
  }
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    min-height: 200px;
    max-height: 400px;
  }
}
</style>