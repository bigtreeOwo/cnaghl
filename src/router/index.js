import Vue from "vue";
import VueRouter from "vue-router";
import Serverlist from "../components/Serverlist.vue";
import Index from "../components/Index.vue";
import Tournament from "../components/Tournament.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/", redirect: "/index"
    },
    {
      path: "/index",name: "index" ,component: Index
    },
    {
      path: "/servers",name : "serverlist" ,component: Serverlist
    },
    {
      path: "/tournament",name : "tournament" ,component: Tournament
    },
  ]
})

export default router;