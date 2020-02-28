import Vue from "vue";
import Hero from "./Hero.vue";
import HeadlineCopy from "./HeadlineCopy.vue";
import MasonryGrid from "./MasonryGrid.vue";

const Components = {
    Hero,
    HeadlineCopy,
    MasonryGrid
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;