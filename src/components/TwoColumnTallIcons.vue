<template>
  <section class="TwoColumnTallIconsComponent edge_to_edge">
    <div class="column">
      <article
        v-for="bullet in twoColumnTallIcons.bullets"
        :key="bullet.heading"
        class="h_space_margin-double"
      >
        <div class="headline_icon">
          <img :src="bullet.iconUrl" />
          <h4>{{ bullet.heading }}</h4>
        </div>
        <div v-html="bullet.copy"></div>
      </article>
    </div>
    <div
      class="column image"
      :style="`background-image: url('${twoColumnTallIcons.imageUrl}')`"
    ></div>
  </section>
</template>

<script>
export default {
  props: ["twoColumnTallIcons"]
};
</script>

<style lang="scss">
.TwoColumnTallIconsComponent {
  display: flex;
  align-items: stretch;
  height: 100%;

  .column {
    width: 100%;

    @media (min-width: $mobile_breakpoint) {
      &:first-child {
        width: 75%;
      }

      &:last-child {
        width: 25%;
      }
    }

    @media (min-width: 1280px) {
      &:first-child {
        width: 50%;
      }

      &:last-child {
        width: 50%;
      }
    }

    &.image {
      display: none;

      @media (min-width: $mobile_breakpoint) {
        display: block;
        background-size: cover;
        background-position: center left;
        background-repeat: no-repeat;
      }

      @media (min-width: 1280px) {
        display: block;
        background-size: contain;
        background-position: top right;
        background-repeat: no-repeat;
      }
    }
  }

  article {
    padding-bottom: $base_space;
  }

  .headline_icon {
    display: flex;
    align-items: center;
    padding-bottom: $base_space;

    img {
      padding-right: $base_space;
    }
  }

  &.flipped {
    flex-direction: row-reverse;
  }
}
</style>