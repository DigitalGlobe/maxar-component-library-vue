<template>
  <div ref="map" class="map" :style="`height: ${height}vh; width: ${width}%`">
    <LayerToggles v-if="config.layerToggles.enabled" :toggles="config.layerToggles.toggles" :map="map" />
  </div>
</template>

<script>
import LayerToggles from "./LayerToggles";
export default {
  props: {
    config: {
      type: Object,
      default: null,
    },
    height: {
      type: Number,
      default: 100,
    },
    width: {
      type: Number,
      default: 100,
    },
  },
  components: {
    LayerToggles,
  },
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.map = new window.mapboxgl.Map({
      ...this.config.mapProperties,
      container: this.$refs.map,
    });
    this.map.on("load", () => {
      if (this.config.navigationControl.enabled) {
        const nav = new window.mapboxgl.NavigationControl({
          options: this.config.navigationControl,
        });
        this.map.addControl(nav, this.config.navigationControl.position);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.map {
  margin: 0 auto;
  position: relative;
  z-index: 0;
}
</style>
