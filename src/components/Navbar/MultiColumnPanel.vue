<template>
  <div class="navbar__multi-col-panel">
    <span class="navbar__categories__header">{{node.label}}</span>
    <ul class="navbar__multi-col navbar__category">
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
  props: ["node"]
};
</script>