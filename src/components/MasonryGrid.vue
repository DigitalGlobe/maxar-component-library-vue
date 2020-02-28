<template>
  <section class="MasonryGridComponent">
    <div class="MasonryGridComponent__featured">
      <a
        class="MasonryGridComponent__card"
        :href="masonryGrid.cards[0].link"
        :target="masonryGrid.cards[0].linkIsExternal ? '_blank' : ''"
      >
        <img :src="masonryGrid.cards[0].imageUrl" />
        <div class="MasonryGridComponent__card__copy">
          <h3>{{masonryGrid.cards[0].heading}}</h3>
          <div v-html="masonryGrid.cards[0].copy"></div>
          {{masonryGrid.cards[0].linkText}}
        </div>
      </a>
    </div>
    <div class="MasonryGridComponent__right-column">
      <a
        v-for="card of rightColumnCards"
        v-bind:key="card.link"
        class="MasonryGridComponent__card"
        :href="card.link"
        :target="card.linkIsExternal? '_blank' : ''"
      >
        <img :src="card.imageUrl" />
        <div class="MasonryGridComponent__card__copy">
          <h3>{{ card.heading }}</h3>
          <div v-html="card.copy "></div>
          {{ card.linkText }}
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
    computed: {
        rightColumnCards: function() {
            return this.masonryGrid.cards.slice(1);
        }
    },
  props: ["masonryGrid"]
};
</script>

<style lang="scss">
.MasonryGridComponent {
  box-sizing: border-box;
  display: flex;
  @media (max-width: 1280px) {
    flex-wrap: wrap;
    padding-left: $mobile_side_space;
    padding-right: $mobile_side_space;
  }
  h3,
  p {
    text-transform: none;
  }
  p {
    font-weight: normal;
  }
  &__featured {
    width: 66%;
    margin-right: $base_space;
    .MasonryGridComponent__card {
      height: 100%;
    }
    @media (max-width: 1280px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: $half-space;
    }
  }

  &__right-column {
    flex: 1;
    .MasonryGridComponent__card:last-of-type {
      margin-bottom: 0;
    }
    @media (max-width: 1280px) {
      width: 100%;
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: $half_space;
    overflow: hidden;
    &__copy {
      background: $color_grey;
      color: white;
      padding: $half_space;
      position: relative;
      flex: 1;
      &:after {
        background: $color_primary_brand;
        content: "";
        position: absolute;
        height: 100%;
        width: $half-space;
        right: 0;
        bottom: 0;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }
    }
    &:hover,
    &:focus {
      img {
        transform: scale(1.1);
      }
      .MasonryGridComponent__card__copy:after {
        opacity: 1;
      }
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
    transition: all 0.3s ease-in-out;
  }
}
</style>