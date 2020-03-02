<template>
  <section class="TwoColumnComponent edge_to_edge">
    <div class="two-column__col">
      <div class="two-column__col-text">
        <h4>{{twoColumn.headline}}</h4>
        <h5 v-if="twoColumn.subheadEnabled">{{twoColumn.subhead}}</h5>
        <div class="copy">
          <div v-html="twoColumn.copy"></div>
          <a
            v-if="twoColumn.buttonEnabled"
            :href="twoColumn.buttonLink"
            :target="twoColumn.buttonIsExternal ? '_blank' : ''"
            class="button"
          >{{twoColumn.buttonText}}</a>
        </div>
      </div>
    </div>
    <div class="two-column__col">
      <div class="two-column__col-img" :style="'background-image: url(' + twoColumn.imageUrl + ')'"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["twoColumn"]
};
</script>

<style lang="scss">
//TODO: Move paddings, sizes, & colors to vars & global stylesheets

.TwoColumnComponent,
.SquareVideoTwoColumnComponent {
  display: flex;
  box-sizing: border-box;
  align-items: center;

  .two-column__col {
    height: auto;

    &-text {
      display: flex;
      position: relative;
      box-sizing: content-box;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      height: 100%;
      margin-left: $base_space;
      padding: 0 $double_space;

      a {
        color: black;
        text-decoration: underline;
        text-decoration-color: $color_primary_brand;

        &.button {
          text-decoration: none;
        }
      }
    }

    &-img {
      display: block;
      width: 100%;
      height: 100%;
      min-height: $base_space * 12;
      max-width: $base_space * 27;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    &:first-child {
      width: 45%;
    }

    &:last-child {
      width: 55%;
    }
  }

  &.right {
    flex-direction: row-reverse;

    .two-column__col {
      &-text {
        margin-left: 0;
        margin-right: $base_space;
      }
    }
  }

  @media (max-width: 1440px) {
    .two-column__col {
      &:first-child {
        width: 60%;
      }

      &:last-child {
        width: 40%;
      }
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column-reverse;

    .two-column__col {
      &-text {
        margin: 0 0 $base_space $half_space;
        padding: 0 $base_space 0 $half_space;
        position: relative;

        a.button {
          margin-bottom: $half_space;
        }
      }

      &-img {
        height: $base_space * 7.5;
        min-height: auto;
        margin-bottom: $base_space;
        background-size: cover;
      }

      &:first-child {
        width: 100%;
      }

      &:last-child {
        width: 100%;
      }
    }

    &.right {
      flex-direction: column-reverse;

      .two-column__col {
        &-text {
          border-left: none;
          margin: 0 $half_space 0 0;
          padding: 0 $half_space 0 $base_space;
        }
      }
    }
  }
}

.dark_grey {
  &.TwoColumnComponent,
  &.SquareVideoTwoColumnComponent {
    .two-column__col-text {
      a {
        color: white;
      }
    }
  }
}
</style>