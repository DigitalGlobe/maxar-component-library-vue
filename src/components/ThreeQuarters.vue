<template>
  <section class="ThreeQuartersComponent edge_to_edge">
    <div class="three_quarters__col">
      <div class="three_quarters__col-img">
        <img :src="threeQuarters.imageUrl" />
      </div>
    </div>
    <div class="three_quarters__col">
      <div class="three_quarters__col-text">
        <h2>{{threeQuarters.headline }}</h2>
        <h2 v-if="threeQuarters.subheadEnabled">{{threeQuarters.subhead}}</h2>
        <div class="copy">
          <div v-html="threeQuarters.copy"></div>
          <a
            v-if="threeQuarters.buttonEnabled"
            :href="threeQuarters.buttonLink"
            :target="threeQuarters.linkIsExternal ? '_blank' : ''"
            class="button"
          >{{threeQuarters.buttonText}}</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["threeQuarters"]
};
</script>
<style lang="scss">
.ThreeQuartersComponent {
  display: flex;
  box-sizing: border-box;
  padding: 0;
  // margin-bottom: $half_space;

  .three_quarters__col {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;

    &-text {
      display: flex;
      position: relative;
      box-sizing: content-box;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      //margin-left: $base_space;
      padding: $base_space $double_space * 2 $base_space $double_space * 2;
    }

    &-img {
      display: flex;
      width: 100%;

      img {
        width: 100%;
        max-width: 100%;
        height: 100%;
      }
    }

    &:first-child {
      width: 55%;
    }

    &:last-child {
      width: 45%;
    }
  }

  &.is_inverse {
    flex-direction: row-reverse;

    .three_quarters__col {
    }
  }

  @media (max-width: 1440px) {
    .three_quarters__col {
      &-text {
        padding: $base_space $double_space $base_space $double_space;
      }

      &:first-child {
        width: 55%;
      }

      &:last-child {
        width: 45%;
      }
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;

    .three_quarters__col {
      &-text {
        margin: 0;
        padding: $base_space $base_space $base_space $base_space;
      }

      &:first-child {
        width: 100%;
      }

      &:last-child {
        width: 100%;
      }
    }

    &.is_inverse {
      flex-direction: column;

      .three_quarters__col {
        &-text {
          margin: 0;
          padding: $base_space $base_space $base_space $base_space;
        }
      }
    }
  }

  &.white {
    .three_quarters__col {
      background-color: white;
    }
  }
  &.light_grey {
    .three_quarters__col {
      background-color: $color_extra_light_grey;
    }
  }
  &.dark_grey {
    .three_quarters__col {
      background-color: $color_dark_grey;
    }
  }
}

// Style component form here
.component_form.three_quarters_components {
  display: flex;
  flex-direction: column;

  input[type="text"] {
    width: 100%;
  }

  .tq_row {
    display: flex;
    flex-direction: row;
  }
}
</style>