<template>
  <div class="navbar__multi-col-panel">
    <span
      @keydown="handleKeydown"
      @mousedown="handleMouseDown"
      :class="`navbar__categories__header ${activePanel === node.label ? 'navbar__categories__header--active' : ''}`"
    >{{node.label}}</span>
    <ul
      :class="`navbar__multi-col navbar__category ${activePanel === node.label ? 'navbar__category--active' : ''}`"
    >
      <h3>{{node.label}}</h3>
      <hr />
      <li v-for="column in node.columns" :key="column.label">
        <span>{{column.label}}</span>
        <ul class="multi-col__category">
          <li v-for="link in column.links" :key="link.link" class="multi-col__category__item">
            <a class="navbar__link" :href="link.link">{{link.label}}</a>
          </li>
        </ul>
      </li>
    </ul>
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