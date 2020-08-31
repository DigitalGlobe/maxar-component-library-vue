<template>
  <section class="IconGridComponent">
    <div class="IconGridComponent__container icon__count_<%= enabled['true'] %>">
      <div v-for="icon in iconBlock.icons" :key="icon.heading" class="IconGridComponent__cell">
        <img :src="icon.iconUrl" class="IconGridComponent__icon" />
        <h4>{{ icon.heading}}</h4>
        <div v-if="icon.copyEnabled">
          <div v-html="icon.copy"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["iconBlock"]
};
</script>

<style lang="scss">
$IconGridComponent__breakpoint: 980px;

.IconGridComponent {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__container {
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    max-width: $mid_content_width;
    width: 100%;
    padding: 0 $half_space;

    @media (min-width: 520px) {
      padding: 0 0 0 0;
      width: 520px;
    }

    @media (min-width: 1281px) {
      justify-content: center;
      flex-direction: row;
      width: 100%;
    }
  }

  &__cell {
    padding: $mobile_side_space 0 10px 0;
    flex-basis: 100%;
    width: 50%;
    -ms-flex: auto;
    box-sizing: border-box;
    position: relative;

    &:first-child {
      padding: 0 0 0 0;
    }

    &:last-child {
      padding: $mobile_side_space 0 0 0;
    }

    &:nth-child(1) {
      padding: 0 0 0 0;
    }

    @media (min-width: 1281px) {
      padding: $base_space $base_space 0px $base_space;
      min-width: 25%;
      flex-basis: 25%;

      &:first-child,
      &:last-child {
        padding: $base_space $base_space 0px $base_space;
      }
    }
  }

  img {
    padding-bottom: $half_space;
  }

  .IconGridComponent__fullWidth {
    width: 280px;
    max-height: 128px;
    max-width: 100%;
  }

  .IconGridComponent__icon {
    height: 78px;
    width: 78px;
  }

  &.vertical {
    .IconGridComponent__cell {
      border: 3px solid $color_primary_brand;
      margin-left: $half_space;
      margin-right: $half_space;
      padding: $base_space $half_space $base_space $half_space;
      min-width: 19%;
      flex-basis: 19%;
      text-align: center;

      @media (max-width: 1280px) {
        margin: $base_space 0 0 0;
        min-width: 50%;
        flex-basis: 70%;

        &:first-child {
          margin: 0 0 0 0;
        }

        &:last-child {
          margin: $base_space 0 0 0;
        }

        &:nth-child(1) {
          margin: 0 0 0 0;
        }
      }

      h3 {
        padding-bottom: $half_space;
      }
    }
  }
}
</style>