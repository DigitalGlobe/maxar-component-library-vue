<template>
  <div id="app">
    <MaxarLogo />
    <Hero :hero="hero" />
    <HeadlineCopy :headlineCopy="headlineCopy1" />
    <HeadlineCopy :headlineCopy="headlineCopy2" />
    <HeadlineCopy :headlineCopy="headlineCopy3" />
    <MasonryGrid :masonryGrid="masonryGrid" />
    <ThreeQuarters :threeQuarters="threeQuarters" />
    <TwoColumn :twoColumn="twoColumn" />
    <ThreeCard :threeCard="threeCard" />
    <RevealingStatCards :revealingStatCards="revealingStatCards" />
    <Carousel :carousel="carousel" />
    <FeaturedResource :featuredResource="featuredResource" />
    <StatBlock :statBlock="statBlock" />
    <IconBlock :iconBlock="iconBlock" />
    <FullColorCta :fullColorCta="fullColorCta" />
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import HeadlineCopy from "./components/HeadlineCopy.vue";
import MasonryGrid from "./components/MasonryGrid.vue";
import ThreeQuarters from "./components/ThreeQuarters.vue";
import TwoColumn from "./components/TwoColumn.vue";
import MaxarLogo from "./components/MaxarLogo.vue";
import ThreeCard from "./components/ThreeCard.vue";
import RevealingStatCards from "./components/RevealingStatCards.vue";
import Carousel from "./components/Carousel.vue";
import FullColorCta from "./components/FullColorCta";
import FeaturedResource from "./components/FeaturedResource";
import StatBlock from "./components/StatBlock.vue";
import IconBlock from "./components/IconBlock.vue";

export default {
  name: "App",
  components: {
    Hero,
    HeadlineCopy,
    MasonryGrid,
    ThreeQuarters,
    TwoColumn,
    MaxarLogo,
    ThreeCard,
    RevealingStatCards,
    Carousel,
    FullColorCta,
    FeaturedResource,
    StatBlock,
    IconBlock
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
      },
      threeQuarters: {
        imageUrl:
          "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/453/about_leadership.jpg",
        headline: "Leadership",
        subheadEnabled: true,
        subhead: "Subhead would go here",
        copy:
          "<p>Grounded in our values, the Maxar leadership team is committed to serving our customers and communities all over the globe and brings together industry leading experience to accelerate our innovation forward.</p>",
        buttonEnabled: true,
        buttonLink: "https://maxar.com",
        linkIsExternal: true,
        buttonText: "Learn more"
      },
      twoColumn: {
        headline: "Making history",
        subheadEnabled: true,
        copy:
          "<p>Explore the pivotal milestones that have helped us make so many customer missions and applications possible.</p>",
        buttonEnabled: true,
        buttonLink: "https://www.maxar.com",
        buttonIsExternal: true,
        buttonText: "Learn more",
        imageUrl:
          "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/452/about_making_history.jpg"
      },
      threeCard: {
        cards: [
          {
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/652/masonry_what_is_geospatial.png",
            link: "https://www.maxar.com",
            heading: "What we’re doing",
            copy:
              "<p>See how geospatial technology is key to moving us from level 3 to level 5, full autonomy.</p>",
            linkIsExternal: true
          },
          {
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/653/Building_in_Space_IMG_2.jpg",
            link: "https://www.maxar.com",
            heading: "Where We’re Going",
            copy:
              "<p>See how geospatial technology is key to moving us from level 3 to level 5, full autonomy.</p>",
            linkIsExternal: true
          },
          {
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/654/card-3.png",
            link: "https://www.maxar.com",
            heading: "Open Data Program",
            copy:
              "<p>See how geospatial technology is key to moving us from level 3 to level 5, full autonomy.</p>",
            linkIsExternal: true
          }
        ]
      },
      revealingStatCards: {
        cards: [
          {
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/448/about_stats_1.png",
            answer: "5,800 employees in more than 30 locations",
            question: "How many employees?"
          },
          {
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/449/about_stats_2.png",
            answer: "Customers in more than 70 countries",
            question: "How many countries?"
          },
          {
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/450/about_stats_3.png",
            answer:
              "Collecting more than 3 million sq km of high-resolution imagery of Earth per day",
            question: "How much imagery?"
          }
        ]
      },
      carousel: {
        sharedHeadingEnabled: true,
        sharedHeading: "Carousel component",
        slides: [
          {
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/644/regular_featured_event_carousel.jpg",
            heading: "FEATURED EVENT",
            body:
              "Join Maxar at the 36th annual Space Symposium hosted by the Space Foundation.",
            buttonEnabled: true,
            buttonLink: "https://maxar.com",
            buttonIsExternal: true,
            buttonText: "Learn more"
          },
          {
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/645/regular_dragonfly_1_SPIDER.jpg",
            heading: "MAXAR IN THE NEWS",
            body:
              "NASA’s plan to build stuff in space just took its first step",
            buttonEnabled: true,
            buttonLink: "https://maxar.com",
            buttonIsExternal: true,
            buttonText: "Learn more"
          },
          {
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/646/regular_WorldView-Legion_6-satellites_2x.jpg",
            heading: "New on the blog",
            body: "Enhancing national security missions with WorldView Legion",
            buttonEnabled: true,
            buttonLink: "http://blog.maxar.com",
            buttonIsExternal: true,
            buttonText: "Learn more"
          }
        ]
      },
      fullColorCta: {
        heading: "Stay curious",
        copy:
          "<p>Get the latest in geospatial breakthroughs from The GIST and in-depth analysis of real-world events by subscribing to our monthly Maxar Spotlight periodical.</p>",
        buttonEnabled: true,
        buttonLink: "https://maxar.com",
        buttonExternal: true,
        buttonText: "Learn more"
      },
      featuredResource: {
        title: "UI/UX Software Engineer (TS/SCI)",
        subtitle: "Herndon, VA",
        link: "https://maxar.com",
        linkExternal: true,
        linkText: "Read more"
      },
      statBlock: {
        imageUrl:
          "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/647/Solar_Array_Deploy.jpg",
        stats: [
          {
            stat: "60+ years",
            description: "Space Infrastructure leadership"
          },
          {
            stat: "2,200",
            description: "Collective years on orbit"
          },
          {
            stat: "92",
            description: "Geo communication satellites on orbit today"
          },
          {
            stat: "5",
            description: "5 robotic arms on Mars"
          },
          {
            stat: "100+ PB",
            description: "Archive of global imagery"
          },
          {
            stat: "3M sq km",
            description: "Collected each day"
          }
        ]
      },
      iconBlock: {
        icons: [
          {
            heading: "We put the mission first",
            iconUrl: "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/460/rocket.png",
            copyEnabled: true,
            copy: "Everything we do is to exceed the expectations and support the ambitions of our customers."
          },
          {
            heading: "We work better together",
            iconUrl: "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/461/gear.png",
            copyEnabled: true,
            copy: "We are an organization that values collaboration and diversity to create a better future."
          },
          {
            heading: "We stay curious",
            iconUrl: "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/462/magglass.png",
            copyEnabled: true,
            copy: "We never stop working to discover the answers to the questions of tomorrow and to solve the most difficult problems."
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>
