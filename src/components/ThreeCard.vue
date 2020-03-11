<template>
  <section class="ThreeCardComponent">
    <article v-for="(card, index) in threeCard.cards" :key="card.link + index" @click="pretendToBeALink(card)">
      <img :src="card.imageUrl" />
      <div class="ThreeCardComponent__copy">
        <div>
          <h4>{{card.heading}}</h4>
          <div v-html="card.copy"></div>
        </div>
        <a :href="card.link" :target="card.linkIsExternal ? '_blank' : ''">Learn more</a>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: ["threeCard"],
  methods: {
    pretendToBeALink: function(card) {
      if (card.linkIsExternal) {
        window.open(card.link, "_blank");
      } else {
        window.open(card.link, "_self");
      }
    }
  }
};
</script>

<style lang="scss">
.ThreeCardComponent {
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
  @media (max-width: 1280px) {
    padding-left: $mobile_side_space;
    padding-right: $mobile_side_space;
  }
  article {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: $half-space;
    overflow: hidden;
    width: 100%;
    @media (min-width: 1024px) {
      margin-bottom: 0;
    }
    &:hover,
    &:focus {
      cursor: pointer;
      img {
        transform: scale(1.1);
      }
      a {
        color: $color_primary_brand;
      }
      .ThreeCardComponent__copy:after {
        opacity: 1;
      }
    }
    &:nth-of-type(2) {
      @media (min-width: 1024px) {
        margin-left: $half-space;
        margin-right: $half-space;
      }
      @media (min-width: 1280px) {
        margin-left: $base_space;
        margin-right: $base_space;
      }
    }
  }
  .button {
    color: white;
  }
  a {
    color: white;
  }
  img {
    object-fit: cover;
    object-position: center;
    height: 25vh;
    transition: all 0.3s ease-in-out;
    width: 100%;
  }
  &__copy {
    background: $color_grey;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;
    padding: $half-space;
    position: relative;
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
}
</style>