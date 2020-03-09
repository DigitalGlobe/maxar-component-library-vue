<template>
  <section class="FullcolorCtaComponent">
    <div class="FullcolorCtaComponent__container">
      <h2>{{ fullColorCta.heading }}</h2>
      <div class="FullcolorCtaComponent__copy">
        <div v-html="fullColorCta.copy"></div>
        <a
          v-if="fullColorCta.buttonEnabled"
          :href="fullColorCta.buttonLink"
          :target="fullColorCta.buttonExternal ? '_blank' : '_self'"
          class="button gold_grey FullcolorCtaComponent__button"
        >{{fullColorCta.buttonText}}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["fullColorCta"]
};
</script>

<style lang="scss">
$FullcolorCtaComponent__breakpoint: 1280px;

.FullcolorCtaComponent {
  padding-left: $mobile_side_space;
  padding-right: $mobile_side_space;
  padding-top: $double_space;
  padding-bottom: $double_space;
  background-color: $color_primary_brand;
  margin-top: $half_space * -1;

  @media (min-width: $FullcolorCtaComponent__breakpoint) {
    padding-left: $base_side_space;
    padding-right: $base_side_space;
  }

  &__container {
    position: relative;
    width: 100%;

    @media (min-width: 1000px) {
      width: 50%;
    }
    @media (min-width: $FullcolorCtaComponent__breakpoint) {
      width: 33%;
    }
  }
  &__copy {
    p {
      padding-bottom: 1em;
    }
  }
  h2 {
    color: $color_grey;
  }
}
</style>