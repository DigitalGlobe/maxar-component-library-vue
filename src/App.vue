<template>
  <div id="app">
    <Hero :hero="hero" />
    <HeadlineCopy :headlineCopy="headlineCopy1" />
    <HeadlineCopy :headlineCopy="headlineCopy2" />
    <HeadlineCopy :headlineCopy="headlineCopy3" />
    <MasonryGrid :masonryGrid="masonryGrid" />
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import HeadlineCopy from "./components/HeadlineCopy.vue";
import MasonryGrid from "./components/MasonryGrid.vue";
export default {
  name: "App",
  components: {
    Hero,
    HeadlineCopy,
    MasonryGrid
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
      },
      headlineCopy1: {
        heading: "HEADLINE WITH COMPONENT & BUTTON",
        copyEnabled: true,
        copy:
          "The promise of truth and transparency from space lives on in Maxar’s constellation. In addition to manufacturing satellites for government and commercial customers, Maxar owns and operates the world’s most sophisticated constellation of Earth imaging satellites. With five active satellites on orbit, we collect more than 3 million square kilometers of imagery each day to provide customers with a current view of our changing planet.",
        buttonEnabled: true,
        buttonExternal: true,
        buttonLink: "https://maxar.com",
        buttonText: "Learn more"
      },
      headlineCopy2: {
        heading: "HEADLINE WITH COpy, no button",
        copyEnabled: true,
        copy:
          "The promise of truth and transparency from space lives on in Maxar’s constellation. In addition to manufacturing satellites for government and commercial customers, Maxar owns and operates the world’s most sophisticated constellation of Earth imaging satellites. With five active satellites on orbit, we collect more than 3 million square kilometers of imagery each day to provide customers with a current view of our changing planet.",
        buttonEnabled: false,
        buttonExternal: true,
        buttonLink: "https://maxar.com",
        buttonText: "Learn more"
      },
      headlineCopy3: {
        heading: "HEADLINE WITH NO BUTTON OR COPY",
        copyEnabled: false,
        copy:
          "The promise of truth and transparency from space lives on in Maxar’s constellation. In addition to manufacturing satellites for government and commercial customers, Maxar owns and operates the world’s most sophisticated constellation of Earth imaging satellites. With five active satellites on orbit, we collect more than 3 million square kilometers of imagery each day to provide customers with a current view of our changing planet.",
        buttonEnabled: false,
        buttonExternal: true,
        buttonLink: "https://maxar.com",
        buttonText: "Learn more"
      },
      masonryGrid: {
        cards: [
          {
            link: "https://www.maxar.com",
            linkIsExternal: true,
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/641/new_vricon_img.jpg",
            heading: "New era in geospatial information and OEM data privacy",
            copy:
              "<p>See how geospatial technology is key to moving us from level 3 to level 5, full autonomy.</p>",
            linkText: "Learn more"
          },
          {
            link: "https://www.maxar.com",
            linkIsExternal: true,
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/642/Reuters_Myanmar_Investigates.jpg",
            heading: "New era in geospatial information and OEM data privacy",
            copy:
              "<p>See how geospatial technology is key to moving us from level 3 to level 5, full autonomy.</p>",
            linkText: "Learn more"
          },
          {
            link: "https://www.maxar.com",
            linkIsExternal: true,
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/643/200129_Maxar_09-0130.jpg",
            heading: "New era in geospatial information and OEM data privacy",
            copy:
              "<p>See how geospatial technology is key to moving us from level 3 to level 5, full autonomy.</p>",
            linkText: "Learn more"
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>
