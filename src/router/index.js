import Vue from "vue";
import VueRouter from "vue-router";
import Serverlist from "../components/Serverlist.vue";
import Index from "../components/Index.vue";
import Tournament from "../components/Tournament.vue";
import Model from "../components/Download/Model/Model.vue";
import Sprite from "../components/Download/Sprite/Sprite.vue";
import Wadtexture from "../components/Download/Wadtexture/Wadtexture.vue";
import AGMODX from "../components/Download/Client/AGMODX.vue";
import BugfixedHL from "../components/Download/Client/BugfixedHL.vue";
import OpenAG from "../components/Download/Client/OpenAG.vue";
import TrainingMod from "../components/Download/Client/TrainingMod.vue";
import Client from "../components/Download/Client.vue"

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/", redirect: "/index"
    },
    {
      path: "/index", name: "index", component: Index
    },
    {
      path: "/server", name: "serverlist", component: Serverlist
    },
    {
      path: "/tournament", name: "tournament", component: Tournament
    },
    {
      path: "/model", name: "model", component: Model
    },
    {
      path: "/sprite", name: "sprite", component: Sprite
    },
    {
      path: "/wadtexture", name: "wadtexture", component: Wadtexture
    },
    {
      path: "/client",name: "client",component: Client, children: [
        {
          path: "agmodx", name: "agmodx", component: AGMODX
        },
        {
          path: "bugfixedhl", name: "bugfixedhl", component: BugfixedHL
        },
        {
          path: "openag", name: "openag", component: OpenAG
        },
        {
          path: "trainingmod", name: "trainingmod", component: TrainingMod
        }
      ]
    }
  ]
})

export default router;