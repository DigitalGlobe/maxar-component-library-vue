<template>
  <nuxt-link v-if="isNuxtLink" :to="to" :target="target ? target : '_self'">
    <slot></slot>
  </nuxt-link>
  <a v-else :href="to" :target="target ? target : '_self'">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ["target", "to"],
  computed: {
    isNuxtLink() {
      return this.$nuxt && this.to.substring(0, 1) === "/";
    }
  }
};
</script>