<template>
  <div id="app">
    <Navbar :navbar="navbar" />
    <HomeHero :homeHero="homeHero" />
    <Hero :hero="hero" />
    <MultiLink :multiLink="multiLink" />
    <HeadlineCopy :headlineCopy="headlineCopy1" />
    <HeadlineCopy :headlineCopy="headlineCopy2" class="dark_grey" />
    <HeadlineCopy :headlineCopy="headlineCopy3" class="light_grey" />
    <MasonryGrid :masonryGrid="masonryGrid" />
    <ThreeQuarters :threeQuarters="threeQuarters" />
    <TwoColumn :twoColumn="twoColumn" />
    <ThreeCard :threeCard="threeCard" />
    <RevealingStatCards :revealingStatCards="revealingStatCards" />
    <FeaturedResource :featuredResource="featuredResource" />
    <StatBlock :statBlock="statBlock" />
    <IconBlock :iconBlock="iconBlock" />
    <TwoColumnTallIcons :twoColumnTallIcons="twoColumnTallIcons" />
    <FullWidthHeightImage :fullWidthHeightImage="fullWidthHeightImage" />
    <Carousel :carousel="carousel" />
    <WistiaVideo :wistiaVideo="wistiaVideo" />
    <FullColorCta :fullColorCta="fullColorCta" />
    <MapNav :navbar="mapNav" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
import Hero from "./components/Hero.vue";
import HeadlineCopy from "./components/HeadlineCopy.vue";
import MasonryGrid from "./components/MasonryGrid.vue";
import ThreeQuarters from "./components/ThreeQuarters.vue";
import TwoColumn from "./components/TwoColumn.vue";
import ThreeCard from "./components/ThreeCard.vue";
import RevealingStatCards from "./components/RevealingStatCards.vue";
import Carousel from "./components/Carousel.vue";
import FullColorCta from "./components/FullColorCta.vue";
import FeaturedResource from "./components/FeaturedResource.vue";
import StatBlock from "./components/StatBlock.vue";
import IconBlock from "./components/IconBlock.vue";
import TwoColumnTallIcons from "./components/TwoColumnTallIcons.vue";
import FullWidthHeightImage from "./components/FullWidthHeightImage.vue";
import WistiaVideo from "./components/WistiaVideo.vue";
import MultiLink from "./components/MultiLink.vue";
import HomeHero from "./components/HomeHero.vue";
import MapNav from "./components/Maps/MapNav";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    HeadlineCopy,
    MasonryGrid,
    ThreeQuarters,
    TwoColumn,
    ThreeCard,
    RevealingStatCards,
    Carousel,
    FullColorCta,
    FeaturedResource,
    StatBlock,
    IconBlock,
    TwoColumnTallIcons,
    FullWidthHeightImage,
    WistiaVideo,
    MultiLink,
    HomeHero,
    MapNav,
  },
  data: function () {
    return {
      navbar: {
        categories: [
          {
            link: "/",
            title: "Home",
            isExternal: false,
            type: "top-level",
          },
          {
            label: "Single column",
            type: "single",
            links: [
              {
                label: "Link one",
                link: "https://www.maxar.com",
                isExternal: true,
              },
            ],
          },
          {
            label: "Multi column",
            type: "multi",
            columns: [
              {
                label: "Column one",
                links: [
                  {
                    label: "Col one link one",
                    link: "https://www.maxar.com",
                    isExternal: false,
                  },
                ],
              },
              {
                label: "Column two",
                links: [
                  {
                    label: "Col two link one",
                    link: "https://www.maxar.com",
                    isExternal: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      homeHero: {
        heading: "Improving life on Earth from space",
        subHeading:
          "We make global change visible, information actionable and space accessible.",
        buttonEnabled: true,
        link: "https://www.maxar.com/splash/worldview-legion",
        buttonIsExternal: true,
        buttonText: "Learn more",
        image:
          "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/655/WorldView-Legion_6-satellites__1_.jpg",
      },
      hero: {
        heading: "Hello, world!",
        subheading: "This is Maxar",
        buttonEnabled: true,
        buttonLink: "https://www.maxar.com",
        buttonText: "Learn more",
        backgroundImageUrl:
          "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/655/WorldView-Legion_6-satellites__1_.jpg",
      },
      headlineCopy1: {
        heading: "HEADLINE WITH COMPONENT & BUTTON",
        copyEnabled: true,
        copy:
          "The promise of truth and transparency from space lives on in Maxar’s constellation. In addition to manufacturing satellites for government and commercial customers, Maxar owns and operates the world’s most sophisticated constellation of Earth imaging satellites. With five active satellites on orbit, we collect more than 3 million square kilometers of imagery each day to provide customers with a current view of our changing planet.",
        buttonEnabled: true,
        buttonExternal: true,
        buttonLink: "https://maxar.com",
        buttonText: "Learn more",
      },
      headlineCopy2: {
        heading: "HEADLINE WITH COpy, no button",
        copyEnabled: true,
        copy:
          "The promise of truth and transparency from space lives on in Maxar’s constellation. In addition to manufacturing satellites for government and commercial customers, Maxar owns and operates the world’s most sophisticated constellation of Earth imaging satellites. With five active satellites on orbit, we collect more than 3 million square kilometers of imagery each day to provide customers with a current view of our changing planet.",
        buttonEnabled: false,
        buttonExternal: true,
        buttonLink: "https://maxar.com",
        buttonText: "Learn more",
      },
      headlineCopy3: {
        heading: "HEADLINE WITH NO BUTTON OR COPY",
        copyEnabled: false,
        copy:
          "The promise of truth and transparency from space lives on in Maxar’s constellation. In addition to manufacturing satellites for government and commercial customers, Maxar owns and operates the world’s most sophisticated constellation of Earth imaging satellites. With five active satellites on orbit, we collect more than 3 million square kilometers of imagery each day to provide customers with a current view of our changing planet.",
        buttonEnabled: false,
        buttonExternal: true,
        buttonLink: "https://maxar.com",
        buttonText: "Learn more",
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
            linkText: "Learn more",
          },
          {
            link: "https://www.maxar.com",
            linkIsExternal: true,
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/642/Reuters_Myanmar_Investigates.jpg",
            heading: "New era in geospatial information and OEM data privacy",
            copy:
              "<p>See how geospatial technology is key to moving us from level 3 to level 5, full autonomy.</p>",
            linkText: "Learn more",
          },
          {
            link: "https://www.maxar.com",
            linkIsExternal: true,
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/643/200129_Maxar_09-0130.jpg",
            heading: "New era in geospatial information and OEM data privacy",
            copy:
              "<p>See how geospatial technology is key to moving us from level 3 to level 5, full autonomy.</p>",
            linkText: "Learn more",
          },
        ],
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
        buttonText: "Learn more",
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
          "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/452/about_making_history.jpg",
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
            linkIsExternal: true,
          },
          {
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/653/Building_in_Space_IMG_2.jpg",
            link: "https://www.maxar.com",
            heading: "Where We’re Going",
            copy:
              "<p>See how geospatial technology is key to moving us from level 3 to level 5, full autonomy.</p>",
            linkIsExternal: true,
          },
          {
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/654/card-3.png",
            link: "https://www.maxar.com",
            heading: "Open Data Program",
            copy:
              "<p>See how geospatial technology is key to moving us from level 3 to level 5, full autonomy.</p>",
            linkIsExternal: true,
          },
        ],
      },
      revealingStatCards: {
        cards: [
          {
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/448/about_stats_1.png",
            answer: "5,800 employees in more than 30 locations",
            question: "How many employees?",
          },
          {
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/449/about_stats_2.png",
            answer: "Customers in more than 70 countries",
            question: "How many countries?",
          },
          {
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/450/about_stats_3.png",
            answer:
              "Collecting more than 3 million sq km of high-resolution imagery of Earth per day",
            question: "How much imagery?",
          },
        ],
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
              "<p>Join Maxar at the 36th annual Space Symposium hosted by the Space Foundation.</p>",
            buttonEnabled: true,
            buttonLink: "https://maxar.com",
            buttonIsExternal: true,
            buttonText: "Learn more",
          },
          {
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/645/regular_dragonfly_1_SPIDER.jpg",
            heading: "MAXAR IN THE NEWS",
            body:
              "<p>NASA’s plan to build stuff in space just took its first step</p>",
            buttonEnabled: true,
            buttonLink: "https://maxar.com",
            buttonIsExternal: true,
            buttonText: "Learn more",
          },
          {
            imageUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/646/regular_WorldView-Legion_6-satellites_2x.jpg",
            heading: "New on the blog",
            body:
              "<p>Enhancing national security missions with WorldView Legion</p>",
            buttonEnabled: true,
            buttonLink: "http://blog.maxar.com",
            buttonIsExternal: true,
            buttonText: "Learn more",
          },
        ],
      },
      fullColorCta: {
        heading: "Stay curious",
        copy:
          "<p>Get the latest in geospatial breakthroughs from The GIST and in-depth analysis of real-world events by subscribing to our monthly Maxar Spotlight periodical.</p>",
        buttonEnabled: true,
        buttonLink: "https://maxar.com",
        buttonExternal: true,
        buttonText: "Learn more",
      },
      featuredResource: {
        title: "UI/UX Software Engineer (TS/SCI)",
        subtitle: "Herndon, VA",
        link: "https://maxar.com",
        linkExternal: true,
        linkText: "Read more",
      },
      statBlock: {
        imageUrl:
          "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/647/Solar_Array_Deploy.jpg",
        stats: [
          {
            stat: "60+ years",
            description: "Space Infrastructure leadership",
          },
          {
            stat: "2,200",
            description: "Collective years on orbit",
          },
          {
            stat: "92",
            description: "Geo communication satellites on orbit today",
          },
          {
            stat: "5",
            description: "5 robotic arms on Mars",
          },
          {
            stat: "100+ PB",
            description: "Archive of global imagery",
          },
          {
            stat: "3M sq km",
            description: "Collected each day",
          },
        ],
      },
      iconBlock: {
        icons: [
          {
            heading: "We put the mission first",
            iconUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/460/rocket.png",
            copyEnabled: true,
            copy:
              "Everything we do is to exceed the expectations and support the ambitions of our customers.",
          },
          {
            heading: "We work better together",
            iconUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/461/gear.png",
            copyEnabled: true,
            copy:
              "We are an organization that values collaboration and diversity to create a better future.",
          },
          {
            heading: "We stay curious",
            iconUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/462/magglass.png",
            copyEnabled: true,
            copy:
              "We never stop working to discover the answers to the questions of tomorrow and to solve the most difficult problems.",
          },
        ],
      },
      twoColumnTallIcons: {
        imageUrl:
          "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/504/world_cropped.gif",
        bullets: [
          {
            heading: "Competitive salary",
            iconUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/496/Path_603.jpg",
            copy:
              "We competitively structure our salaries based on a number of factors including the responsibilities you will have as well as the current market conditions in the region.",
          },
          {
            heading: "Compehensive health plan",
            iconUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/497/Group_1092.png",
            copy:
              "We offer comprehensive health coverage, health and wellness programs and on-site fitness centers (at some locations) to keep you and your family healthy. This includes medical, dental and vision insurance, along with flexible spending accounts, life insurance, pet insurance and more.",
          },
          {
            heading: "401K retirement benefits",
            iconUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/498/Group_1093.png",
            copy:
              "We help you prepare for your future by offering an employee match on your contributions up to 4 percent of your salary which is immediately vested.",
          },
          {
            heading: "Generous time off policy",
            iconUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/499/Group_1094.png",
            copy:
              "We value a healthy work-life balance. We have a flexible leave policy so you can take the time you need off, when you need it, with your manager's approval. In addition, we have leave policies to support parental leave, military duty, bereavement, jury duty and disability.",
          },
          {
            heading: "Tuition reimbursement & loan repayment",
            iconUrl:
              "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/500/Group_1095.png",
            copy:
              "We are committed to continuous learning and employee development. Through our tuition reimbursement and student loan repayment program, you will have the financial support needed to enhance your skills, learn new ones, and stay on top of the industry.",
          },
        ],
      },
      fullWidthHeightImage: {
        imageUrl:
          "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/451/constellation_beauty_shots_2.jpg",
      },
      wistiaVideo: {
        wistiaId: "n0u0wusht0",
      },
      multiLink: {
        links: [
          {
            link: "https://www.maxar.com/products/use-cases#explore",
            heading: "Explore",
            copy:
              "<p>Design, build and deploy resilient space infrastructure for any mission</p>",
            isExternal: true,
          },
          {
            link: "https://www.maxar.com/products/use-cases#connect",
            heading: "Connect",
            copy:
              "<p>Deploy cutting-edge systems for communications and data from or across space</p>",
            isExternal: true,
          },
          {
            link: "https://www.maxar.com/products/use-cases#access",
            heading: "Access",
            copy:
              "<p>Identify, understand and address change with accurate geospatial information</p>",
            isExternal: true,
          },
          {
            link: "https://www.maxar.com/products/use-cases#map",
            heading: "Map",
            copy:
              "<p>Create and customize maps with professional-grade imagery mosaics and information layers</p>",
            isExternal: true,
          },
          {
            link: "https://www.maxar.com/products/use-cases#analyze",
            heading: "Analyze",
            copy:
              "<p>Reveal patterns, detect objects and extract geospatial insight at scale</p>",
            isExternal: true,
          },
        ],
      },
      mapNav: {
        links: [
          { title: "One", path: "/one" },
          { title: "Two", path: "/two" },
        ],
      },
    };
  },
};
</script>

<style>
</style>
