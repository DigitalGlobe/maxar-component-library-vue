<template>
  <div class="navbar__single-col-panel">
    <span @click="$emit('toggleActive', node.label)" class="navbar__categories__header">{{node.label}}</span>
    <div :class="`navbar__single-col navbar__category ${activePanel === node.label ? 'navbar__category--active' : ''}`">
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
  props: ["node", "activePanel"]
};
</script>