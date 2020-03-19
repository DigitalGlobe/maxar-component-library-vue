<template>
  <div class="navbar__single-col-panel">
    <span
      @keydown="handleKeydown"
      @mousedown="handleMouseDown"
      :class="`navbar__categories__header ${activePanel === node.label ? 'navbar__categories__header--active' : ''}`"
    >{{node.label}}</span>
    <div
      :class="`navbar__single-col navbar__category ${activePanel === node.label ? 'navbar__category--active' : ''}`"
    >
      <h3>{{node.label}}</h3>
      <hr />
      <ul>
        <li v-for="link in node.links" :key="link.link" class="navbar__category__item">
          <a class="navbar__link" :href="link.link">{{link.label}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleKeydown: function(event) {
      const KEY_ENTER = 13;
      const KEY_SPACE = 32;
      switch (event.which) {
        case KEY_ENTER:
        case KEY_SPACE: {
          this.$emit("toggleActive", this.node.label);
        }
      }
    },
    handleMouseDown: function() {
      this.$emit("toggleActive", this.node.label);
    }
  },
  props: ["node", "activePanel"]
};
</script>