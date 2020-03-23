<template>
  <div class="navbar__single-col-panel">
    <span
      @keydown="handleKeydown"
      @mousedown="handleMouseDown"
      :class="`navbar__categories__header ${activePanel === category.label ? 'navbar__categories__header--active' : ''}`"
    >{{category.label}}</span>
    <div
      :class="`navbar__single-col navbar__category ${activePanel === category.label ? 'navbar__category--active' : ''}`"
    >
      <h3>{{category.label}}</h3>
      <hr />
      <ul>
        <li v-for="link in category.links" :key="link.link" class="navbar__category__item">
          <AnchorLinkOrNuxtLink
            class="navbar__link"
            :to="link.link"
            :target="link.isExternal ? '_blank' : '_self'"
            :nuxt="link.nuxt"
          >{{link.label}}</AnchorLinkOrNuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AnchorLinkOrNuxtLink from "../utilities/AnchorLinkOrNuxtLink.vue";

export default {
  components: {
    AnchorLinkOrNuxtLink
  },
  methods: {
    handleKeydown: function(event) {
      const KEY_ENTER = 13;
      const KEY_SPACE = 32;
      switch (event.which) {
        case KEY_ENTER:
        case KEY_SPACE: {
          this.$emit("toggleActive", this.category.label);
        }
      }
    },
    handleMouseDown: function() {
      this.$emit("toggleActive", this.category.label);
    }
  },
  props: ["category", "activePanel"]
};
</script>