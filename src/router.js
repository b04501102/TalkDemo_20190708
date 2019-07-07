import Vue from "vue";
import Router from "vue-router";
import Example from "./views/Example.vue";
import Slides from "./views/Slides.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "slides",
      component: Slides
    },
    {
      path: "/example",
      name: "example",
      component: Example
    }
  ]
});
