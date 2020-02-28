<template>
  <section class="HeroComponent edge_to_edge">
    <div class="HeroComponent__copy">
      <h1>{{ hero.heading }}</h1>
      <p>{{ hero.subheading }}</p>
      <a v-if="hero.buttonEnabled" :href="hero.buttonLink" class="button HeroComponent__button">{{hero.buttonText}}</a>
    </div>
    <div class="HeroComponent__image" :style="`background-image: url('${hero.backgroundImageUrl}')`"></div>
  </section>
</template>

<script>
export default {
  props: ["hero"]
}
</script>

<style lang="scss">
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