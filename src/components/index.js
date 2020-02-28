import Vue from "vue";
import Hero from "./Hero.vue";

const Components = {
    Hero
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;