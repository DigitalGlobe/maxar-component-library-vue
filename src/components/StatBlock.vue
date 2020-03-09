<template>
  <section class="StatsComponent edge_to_edge">
    <div class="StatsComponent__image">
      <img :src="statBlock.imageUrl" />
    </div>
    <div class="StatsComponent__stats">
      <div
        v-for="stat in statBlock.stats"
        :key="stat.stat"
        class="StatsComponent__stats__stat"
      >
        <p>{{ stat.stat }}</p>
        <p>{{ stat.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["statBlock"]
};
</script>

<style lang="scss">
.StatsComponent {
  display: flex;
  flex-wrap: wrap;
  &__image {
    width: 55%;
    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
    @media (max-width: 1280px) {
      width: 50%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  &__stats {
    box-sizing: border-box;
    padding: $half_space $mobile_side_space;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    @media (min-width: 768px) {
      padding: $half_space $base_side_space;
    }
    &__stat {
      align-self: flex-start;
      box-sizing: border-box;
      width: 45%;
      p {
        font-family: $blenderFontFamily;
      }
      p:first-of-type {
        line-height: 1;
        font-size: 60px;
      }
    }
  }
}
</style>