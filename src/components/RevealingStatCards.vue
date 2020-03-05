<template>
  <section class="RevealingStatCardsComponent">
    <div
      v-for="card in revealingStatCards.cards"
      :key="card.imageUrl"
      class="RevealingStatCardsComponent__stat"
    >
      <div class="RevealingStatCardsComponent__stat__image">
        <img :src="card.imageUrl" />
      </div>
      <div class="RevealingStatCardsComponent__stat__copy">
        <h3>{{ card.question }}</h3>
      </div>
      <div class="RevealingStatCardsComponent__stat__reveal">
        <p>{{ card.answer }}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["revealingStatCards"]
};
</script>

<style lang="scss">
.RevealingStatCardsComponent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1600px) {
    justify-content: center;
  }
  &__stat {
    background: $color_grey;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 450px;
    width: 450px;
    max-width: 100%;
    margin: 0 $half_space $base_space $half_space;
    overflow: hidden;
    position: relative;
    &__image {
      height: calc(100% - 90px);
      width: 100%;
      z-index: 2;
    }
    img {
      width: 100%;
      z-index: -1;
    }
    &__copy {
      background: $color_grey;
      box-sizing: border-box;
      padding: $half_space;
      text-align: center;
      text-transform: uppercase;
      z-index: 2;
    }
    &__reveal {
      background: rgba(253, 185, 19, 0.8);
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      z-index: 3;
      transition: opacity 0.3s ease-in-out;
      p {
        font-size: 24px;
        max-width: 75%;
        text-align: center;
        text-transform: uppercase;
      }
    }
    &:hover,
    &:focus {
      .RevealingStatCardsComponent__stat__reveal {
        opacity: 1;
      }
    }
  }
}
</style>