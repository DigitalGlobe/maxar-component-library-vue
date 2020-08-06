<template>
  <div id="app">
    <MaxarMap :config="mapConfig" />
  </div>
</template>

<script>
import MaxarMap from "./components/Maps/MaxarMap";

export default {
  name: "App",
  components: {
    MaxarMap,
  },
  data: function () {
    return {
      mapConfig: {
        mapProperties: {
          style: "mapbox://styles/dginteractive/ckbcg5gse0c2r1is0ar08nr43",
          zoom: 4,
          center: [54.0716196, 32.80577492],
          maxZoom: 19,
          minZoom: 3,
        },
        navigationControl: {
          enabled: true,
          showCompass: false,
          showZoom: true,
          position: "bottom-left",
        },
        layerToggles: {
          enabled: true,
          toggles: {
            "population": {
              name: "population",
              label: "Population",
              layers: ["population"],
              toggleColor: "#0e9797",
            },
            "box": {
              name: "box",
              label: "Gold box",
              layers: ["hl-zoom-aoi-3kbt9t"],
              toggleColor: "#6b6965",
            },
            "both": {
              name: "both",
              label: "Both",
              layers: ["population", "hl-zoom-aoi-3kbt9t"],
              toggleColor: "#1b2b66",
            },
          },
        },
      },
    };
  },
};
</script>