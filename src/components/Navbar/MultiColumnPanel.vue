<template>
  <div class="navbar__multi-col-panel">
    <span
      @keydown="handleKeydown"
      @mousedown="handleMouseDown"
      :class="`navbar__categories__header ${activePanel === category.label ? 'navbar__categories__header--active' : ''}`"
    >{{category.label}}</span>
    <ul
      :class="`navbar__multi-col navbar__category ${activePanel === category.label ? 'navbar__category--active' : ''}`"
    >
      <h3>{{category.label}}</h3>
      <hr />
      <li v-for="column in category.columns" :key="column.label">
        <span>{{column.label}}</span>
        <ul class="multi-col__category">
          <li v-for="link in column.links" :key="link.link" class="multi-col__category__item">
            <link-selector
              class="navbar__link"
              :to="link.link"
              :target="link.isExternal ? '_blank' : '_self'"
            >{{link.label}}</link-selector>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import LinkSelector from "../utilities/LinkSelector.vue";

export default {
  components: {
    LinkSelector
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