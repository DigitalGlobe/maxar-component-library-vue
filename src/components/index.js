import Vue from "vue";
import Hero from "./Hero.vue";
import HeadlineCopy from "./HeadlineCopy.vue";

const Components = {
    Hero,
    HeadlineCopy
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;