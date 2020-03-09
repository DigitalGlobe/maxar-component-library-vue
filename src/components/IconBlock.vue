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
    @media (min-width: $IconGridComponent__breakpoint) {
      padding: 0 0 0 0;
    }
    @media (min-width: 1281px) {
      justify-content: space-between;
      &.icon__count_1,
      &.icon__count_2 {
        justify-content: center;
      }
    }
  }

  &__cell {
    padding: $mobile_side_space 0 10px 0;
    flex-basis: 100%;
    width: 100%;
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

    @media (min-width: $IconGridComponent__breakpoint) {
      padding: $mobile_side_space 0 10px 0;
      min-width: 50%;
      max-width: 55%;
      flex-basis: 100%;

      &:first-child {
        padding: 0 0 0 0;
      }
      &:last-child {
        padding: $mobile_side_space 0 0 0;
      }
      &:nth-child(1) {
        padding: 0 0 0 0;
      }

      @include with-count(1) {
        flex-basis: 100%;
      }
    }

    @media (min-width: 1281px) {
      padding: $base_space $base_space 0px $base_space;
      min-width: 25%;
      flex-basis: 33.33%;
      &:first-child,
      &:last-child {
        padding: $base_space $base_space 0px $base_space;
      }
      @include with-count(1) {
        min-width: 25%;
        flex-basis: 33.33%;
      }
      @include with-count(2) {
        min-width: 25%;
        flex-basis: 33.33%;
      }
    }
  }

  img {
    height: 78px;
    width: 78px;
  }
}

// Style component form here
.component_form.icon_grid_components {
  display: flex;
  flex-direction: column;

  input[type="text"] {
    width: 100%;
  }

  .icongrid_row {
    display: flex;
    flex-direction: row;
  }
}
</style>