<template>
  <nav>
    <a href="/">
      <MaxarLogo class="navbar__brand" />
    </a>
    <button
      class="nav-mobile"
      @click="active = !active"
      :style="active ? closeIcon : hamburgerIcon"
    ></button>
    <div :class="active ? 'navbar navbar--active' : 'navbar'">
      <ul class="navbar__categories">
        <li v-for="link in navbar.links" :key="link">
          <a
            class="navbar__link"
            :href="link.link"
            :target="link.isExternal ? '_blank' : '_self'"
          >{{link.title}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import MaxarLogo from "./MaxarLogo.vue";
export default {
  data: function() {
    return {
      active: false,
      closeIcon: `background-image: url('${require("@/assets/close.svg")}');  background-position: center; background-repeat: no-repeat; background-size: contain;`,
      hamburgerIcon: `background-image: url('${require("@/assets/hamburger.svg")}'); background-position: center; background-repeat: no-repeat; background-size: contain;`
    };
  },
  props: ["navbar"],
  components: {
    MaxarLogo
  }
};
</script>

<style lang="scss" scoped>
nav {
  box-sizing: border-box;
  margin: 0;
  padding: $half_space $mobile_side_space;
  @media (min-width: 768px) {
    padding: $half_space $base_side_space;
  }
}
.navbar {
  background: $color_dark_grey;
  box-sizing: border-box;
  color: white;
  left: 0;
  padding: $mobile_side_space;
  position: absolute;
  top: 72px;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  width: 100%;
  z-index: 1;
}
.navbar--active {
  transform: translateX(0%);
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
.nav-mobile {
  display: none;
}

ul {
  list-style: none;
  padding-left: 0;
}

.navbar__link {
  color: white;
}

@media (max-width: 1024px) {
  .nav-mobile {
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    cursor: pointer;
    display: block;
    height: 24px;
    padding: 0;
    position: absolute;
    right: $mobile_side_space;
    top: $mobile_side_space;
    z-index: 1;
    width: 48px;
  }
}
</style>