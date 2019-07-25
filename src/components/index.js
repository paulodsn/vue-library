import Vue from "vue";
import MyLibrary from './Banner';

const Components = {
    MyLibrary,
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;
