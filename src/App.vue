<template>
  <div id="app">
    <Hero :hero="hero" />
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";

export default {
  name: "App",
  components: {
    Hero
  },
  data: function() {
    return {
      hero: {
        heading: "Hello, world!",
        subheading: "This is Maxar",
        buttonEnabled: true,
        buttonLink: "https://www.maxar.com",
        buttonText: "Learn more",
        backgroundImageUrl:
          "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/655/WorldView-Legion_6-satellites__1_.jpg"
      }
    };
  }
};
</script>

<style>
</style>
