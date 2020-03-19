import Vue from "vue";
import Hero from "./Hero.vue";
import HeadlineCopy from "./HeadlineCopy.vue";
import MasonryGrid from "./MasonryGrid.vue";
import ThreeQuarters from "./ThreeQuarters.vue";
import TwoColumn from "./TwoColumn.vue";
import MaxarLogo from "./MaxarLogo.vue";
import ThreeCard from "./ThreeCard.vue";
import RevealingStatCards from "./RevealingStatCards.vue";
import Carousel from "./Carousel.vue";
import FullColorCta from "./FullColorCta.vue";
import FeaturedResource from "./FeaturedResource.vue";
import StatBlock from "./StatBlock.vue"; 
import IconBlock from "./IconBlock.vue";
import TwoColumnTallIcons from "./TwoColumnTallIcons.vue";
import FullWidthHeightImage from "./FullWidthHeightImage.vue";
import WistiaVideo from "./WistiaVideo.vue";
import MultiLink from "./MultiLink.vue";
import Navbar from "./Navbar/Navbar.vue";

const Components = {
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
    IconBlock,
    TwoColumnTallIcons,
    FullWidthHeightImage,
    WistiaVideo,
    MultiLink,
    Navbar
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;