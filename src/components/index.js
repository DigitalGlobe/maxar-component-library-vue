import Vue from "vue";
import Hero from "./Hero.vue";
import HeadlineCopy from "./HeadlineCopy.vue";
import MasonryGrid from "./MasonryGrid.vue";
import ThreeQuarters from "./ThreeQuarters.vue";

const Components = {
    Hero,
    HeadlineCopy,
    MasonryGrid,
    ThreeQuarters
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;