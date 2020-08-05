<template>
  <nav class="applicationNavbar">
    <div class="navbg"></div>
    <router-link to="/" class="navbar__brand__wrapper">
      <MaxarLogo class="navbar__brand" />
    </router-link>
    <div class="navbar">
      <ul class="navbar__categories">
        <li
          v-for="link in navbar.links"
          :key="link.title"
          class="navbar__categories__list-item"
        >
          <router-link
            :to="link.path"
            class="navbar__categories__header"
          >{{link.title}}</router-link>
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
  props: ["navbar"]
};
</script>

<style lang="scss">
nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: $half_space $base_side_space 0 $base_side_space;
  position: relative;
  z-index: 9999;

  .navbar__brand__wrapper {
    align-items: center;
    display: flex;
  }
}

.navbg {
  background: $color_dark_grey;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -9;
}

nav ul {
  padding: 0;
  list-style: none;
}

.navbar__brand {
  height: 36px;
  max-width: 200px;
  width: 100%;
  @media (max-width: 1100px) {
    height: 20px;
    max-width: 111px;
    width: 100%;
  }
}

.navbar__categories {
  display: flex;
  margin: 0;
}

.navbar__categories__header {
  color: white;
  cursor: pointer;
  display: block;
  padding: $base_space;
  position: relative;
  transition: color 0.3s ease-in-out;
  &:focus,
  &:hover {
    color: $color_primary_brand;
  }
}

@media (max-width: 1024px) {
  nav {
    box-sizing: content-box;
    padding: $mobile_side_space;
  }

  .navbar__brand {
    height: 17px;
    width: 94px;
  }

  .navbar__categories__header {
    padding: 0 $mobile_side_space;
  }
}
</style>