import Vue from "vue";
import Hero from "./Hero.vue";
import HeadlineCopy from "./HeadlineCopy.vue";
import MasonryGrid from "./MasonryGrid.vue";
import ThreeQuarters from "./ThreeQuarters.vue";
import TwoColumn from "./TwoColumn.vue";
import MaxarLogo from "./MaxarLogo.vue";
import ThreeCard from "./ThreeCard.vue";

const Components = {
    Hero,
    HeadlineCopy,
    MasonryGrid,
    ThreeQuarters,
    TwoColumn,
    MaxarLogo,
    ThreeCard
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;