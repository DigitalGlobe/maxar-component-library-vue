<template>
  <nav class="applicationNavbar">
    <div class="navbg"></div>
    <gi to="/" :nuxt="false">
      <MaxarLogo class="navbar__brand" />
    </gi>
    <button
      @click="active = !active"
      :style="active ? closeIcon : hamburgerIcon"
      class="nav-mobile"
    ></button>
    <div :class="active ? 'navbar navbar--active' : 'navbar'">
      <ul class="navbar__categories">
        <li
          v-for="category in navbar.categories"
          :key="category.label"
          @focus="handleToggleActivePanel(category.label)"
          class="navbar__categories__list-item"
          tabindex="0"
        >
          <AnchorLinkOrNuxtLink
            v-if="category.type === 'top-level'"
            :to="category.link"
            :target="category.isExternal ? '_blank' : '_self'"
            class="navbar__categories__header"
          >{{category.title}}</AnchorLinkOrNuxtLink>
          <SingleColumnPanel
            v-if="category.type==='single'"
            :activePanel="activePanel"
            :category="category"
            tabindex="0"
            v-on:toggleActive="handleToggleActivePanel"
          />
          <MultiColumnPanel
            v-if="category.type==='multi'"
            :activePanel="activePanel"
            :category="category"
            tabindex="0"
            v-on:toggleActive="handleToggleActivePanel"
          />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import AnchorLinkOrNuxtLink from "../utilities/AnchorLinkOrNuxtLink.vue";
import MaxarLogo from "../MaxarLogo.vue";
import SingleColumnPanel from "./SingleColumnPanel.vue";
import MultiColumnPanel from "./MultiColumnPanel.vue";

export default {
  data: function() {
    return {
      active: false,
      activePanel: null,
      closeIcon: `background-image: url('${require("@/assets/close.svg")}');  background-position: center; background-repeat: no-repeat; background-size: contain;`,
      hamburgerIcon: `background-image: url('${require("@/assets/hamburger.svg")}'); background-position: center; background-repeat: no-repeat; background-size: contain;`
    };
  },
  components: {
    AnchorLinkOrNuxtLink,
    MaxarLogo,
    MultiColumnPanel,
    SingleColumnPanel
  },
  methods: {
    handleToggleActivePanel: function(emitter) {
      if (this.activePanel === emitter) {
        this.activePanel = null;
      } else {
        this.activePanel = emitter;
      }
    }
  },
  props: ["navbar", "nuxt"]
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

  a:first-of-type {
    align-items: center;
    display: flex;
  }

  label {
    display: none;
  }

  hr {
    border-color: $color_primary_brand;
    margin-left: -$half_space;
    transform: translateX(-100%);
    transition: transform 1s ease-in-out;
    width: 80%;
  }
}

.navbg {
  background: white;
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

.nav-mobile,
#siteSearch--mobile {
  display: none;
}

#siteSearch--desktop {
  border: none;
  &:focus,
  &:hover {
    background: transparent !important;
  }
  img.hidden {
    display: none;
  }
}

.siteSearch--desktop__form {
  background: white;
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  top: 0;
  right: 0;
  transform: translateX(calc(100% + #{$base_side_space}));
  transition: transform 0.3s ease-in-out;
  height: 100%;
  width: 100%;
  &.active {
    transform: translateX(calc(#{-$base_side_space} - 5px));
  }
  input {
    border: none;
    box-sizing: border-box;
    display: inline-block;
    font-family: $dinFontFamily;
    font-size: 18px;
    height: $base_space;
    padding-left: $half_space;
    right: 0;
    width: 300px;
  }
  #siteSearch__submit {
    border: none !important;
    box-sizing: border-box;
    transform: rotate(-90deg);
    padding: 0;
    height: $base_space;
    width: $base_space;
  }
}

.navbar__categories {
  display: flex;
  margin: 0;
}

.navbar__categories__header {
  color: black;
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

.navbar__categories__header--active {
  color: $color_primary_brand;
}

.navbar__category {
  background: $color_dark_grey;
  box-sizing: border-box;
  color: white;
  min-height: 45vh;
  left: -9999px;
  top: 0;
  opacity: 0;
  padding: $half_space;
  position: absolute;
  top: 100%;
  transform: translateY(-100%);
  z-index: -10;
  h3 {
    margin-left: 10%;
  }
  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 200px;
    margin-left: 20%;
    max-width: 600px;
  }
}

.navbar__category--active {
  left: 0;
  opacity: 0.98;
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;
  width: 100%;
  hr {
    transform: translateX(0);
  }
}

.navbar__category__item {
  margin-bottom: $half_space;
  width: 200px;
}

.navbar__link {
  color: white;
}

.secondaryNav {
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
  width: 100%;
  a,
  button {
    border: none;
    color: black;
    padding: 8px $half_space;
    transition: color 0.3s ease-in-out;
    &:focus,
    &:hover {
      color: $color_primary_brand;
      background-color: transparent !important;
    }
  }
}

#siteSearch--mobile__submit {
  display: none;
}

@media (max-width: 1024px) {
  nav {
    box-sizing: content-box;
    height: 24px;
    padding: $mobile_side_space;
    label {
      color: $color_primary_brand;
      display: block;
    }
  }

  .navbar__categories__header {
    color: white;
    padding: $half_space;
    padding-left: 0;
    position: relative;
    transition: font-size 0.3s ease-in-out;
    &:before {
      background: $color_primary_brand;
      bottom: 0;
      content: "";
      height: 1px;
      left: -$mobile_side_space;
      position: absolute;
      width: calc(100% + #{$mobile_side_space});
    }
    &:after {
      background-color: transparent;
      // background-image: image-url("icons/down-arrow.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      content: "";
      height: 8px;
      left: calc(100% - #{$mobile_side_space});
      top: 50%;
      transform: translate(-100%, -50%);
      width: 13px;
    }
  }

  .navbar__categories__header--active {
    font-size: 20px;
    // font-weight: normal;
    &::after {
      transform: translate(-100%, -50%) rotate(180deg);
      transform-origin: center;
    }
  }

  .navbar__brand {
    height: 17px;
    width: 94px;
  }

  .nav-mobile {
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

    img {
      height: 100%;
      width: 100%;
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

  #siteSearch--desktop {
    display: none;
  }

  .navbar__link {
    display: inline-block;
  }

  .navbar__categories {
    display: block;
  }

  .navbar__category {
    height: auto;
    max-height: 0;
    transition: max-height 0.7s ease-in-out;
    z-index: unset;
    h3,
    hr {
      display: none;
    }
    ul {
      display: block;
      height: auto;
      margin-left: 0;
    }
  }

  .navbar__category--active {
    max-height: 1000px;
    position: relative;
  }

  .multi-col__category {
    position: relative;
  }

  .secondaryNav {
    display: none;
  }

  .loginListItem {
    display: block;
  }

  #siteSearch--mobile {
    border: none;
    box-sizing: border-box;
    display: inline-block;
    font-family: $dinFontFamily;
    font-size: 18px;
    height: $base_space;
    margin-bottom: $base_space;
    padding-left: $half_space;
    width: calc(100% - 45px);
  }

  #siteSearch--mobile__submit {
    background: white;
    border: none;
    box-sizing: border-box;
    display: inline-block;
    height: $base_space;
    margin-left: -5px;
    margin-top: -1px;
    padding: 0;
    transform: rotate(-90deg);
    width: calc(#{$base_space} - 1px);
    width: $base_space;
  }
  .navbg {
    display: none;
  }
}
</style>