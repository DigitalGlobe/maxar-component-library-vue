<template>
  <nav class="mapNav">
    <router-link to="/" class="mapNav__brand__wrapper">
      <MaxarLogo class="mapNav__brand" />
    </router-link>
    <div class="mapNav__navbar">
      <ul class="mapNav__navbar__categories">
        <li
          v-for="link in navbar.links"
          :key="link.title"
          class="mapNav__navbar__categories__list-item"
        >
          <router-link :to="link.path" class="mapNav__navbar__categories__header">{{link.title}}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import MaxarLogo from "../MaxarLogo.vue";

export default {
  components: {
    MaxarLogo,
  },
  props: ["navbar"],
};
</script>

<style lang="scss">
.mapNav {
  background: $color_dark_grey;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: $half_space $base_side_space 0 $base_side_space;
  position: relative;
  z-index: 9999;
}

.mapNav__brand__wrapper {
  align-items: center;
  display: flex;
}

.mapNav__brand {
  height: 36px;
  max-width: 200px;
  width: 100%;
  @media (max-width: 1100px) {
    height: 20px;
    max-width: 111px;
    width: 100%;
  }
}

.mapNav__navbar__categories {
  align-content: center;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.mapNav__navbar__categories__header {
  color: white;
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-weight: 900;
  line-height: 1.5;
  padding: $base_space;
  position: relative;
  transition: color 0.3s ease-in-out;
  text-transform: uppercase;
  &:focus,
  &:hover {
    color: $color_primary_brand;
  }
}

@media (max-width: 1024px) {
  .mapNav {
    box-sizing: content-box;
    padding: $mobile_side_space;
  }

  .mapNav__brand {
    height: 17px;
    width: 94px;
  }

  .mapNav__navbar__categories__header {
    padding: 0 $mobile_side_space;
  }
}
</style>