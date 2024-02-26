import Vue from "vue";
import VueRouter from "vue-router";

// Serverlist
import Serverlist from "../components/Serverlist.vue";

// Index
import Index from "../components/Index.vue";

// Tournament
import Tournament from "../components/Tournament.vue";

// Download
import Model from "../components/Download/Model/Model.vue";
import Sprite from "../components/Download/Sprite/Sprite.vue";
import Wadtexture from "../components/Download/Wadtexture/Wadtexture.vue";
import AGMODX from "../components/Download/Client/AGMODX.vue";
import BugfixedHL from "../components/Download/Client/BugfixedHL.vue";
import OpenAG from "../components/Download/Client/OpenAG.vue";
import TrainingMod from "../components/Download/Client/TrainingMod.vue";
import Client from "../components/Download/Client.vue";

// Tutorial Weapon
import Weapon from "../components/Tutorial/Weapon.vue";
import weapon_9mmAR from "../components/Tutorial/Weapons/weapon_9mmAR.vue";
import weapon_9mmhandgun from "../components/Tutorial/Weapons/weapon_9mmhandgun.vue";
import weapon_357 from "../components/Tutorial/Weapons/weapon_357.vue";
import weapon_crossbow from "../components/Tutorial/Weapons/weapon_crossbow.vue";
import weapon_crowbar from "../components/Tutorial/Weapons/weapon_crowbar.vue";
import weapon_egon from "../components/Tutorial/Weapons/weapon_egon.vue";
import weapon_gauss from "../components/Tutorial/Weapons/weapon_gauss.vue";
import weapon_handgrenade from "../components/Tutorial/Weapons/weapon_handgrenade.vue";
import weapon_hornetgun from "../components/Tutorial/Weapons/weapon_hornetgun.vue";
import weapon_rpg from "../components/Tutorial/Weapons/weapon_rpg.vue";
import weapon_satchel from "../components/Tutorial/Weapons/weapon_satchel.vue";
import weapon_shotgun from "../components/Tutorial/Weapons/weapon_shotgun.vue";
import weapon_snark from "../components/Tutorial/Weapons/weapon_snark.vue";
import weapon_tripmine from "../components/Tutorial/Weapons/weapon_tripmine.vue";



// Tutorial Command
import Command from "../components/Tutorial/Command.vue";

// Tutorial BasicSkills
import BasicSkill from  "../components/Tutorial/BasicSkill.vue";

// Tutorial AdvancedSkills
import AdvancedSkill from "../components/Tutorial/AdvancedSkill.vue";



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
      path: "/client",name: "client", redirect: "/client/bugfixedhl" ,component: Client, children: [
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
    },
    {
      path: "/weapon", name : "tutorial", redirect: "/weapon/weapon_crowbar" ,component: Weapon, children: [
        {
          path: "weapon_9mmAR", name: "weapon_9mmAR", component: weapon_9mmAR
        },
        {
          path: "weapon_9mmhandgun", name: "weapon_9mmhandgun", component: weapon_9mmhandgun
        },
        {
          path: "weapon_357", name: "weapon_357", component: weapon_357
        },
        {
          path: "weapon_crossbow", name: "weapon_crossbow", component: weapon_crossbow
        },
        {
          path: "weapon_crowbar", name: "weapon_crowbar", component: weapon_crowbar
        },
        {
          path: "weapon_egon", name: "weapon_egon", component: weapon_egon
        },
        {
          path: "weapon_gauss", name: "weapon_gauss", component: weapon_gauss
        },
        {
          path: "weapon_handgrenade", name: "weapon_handgrenade", component: weapon_handgrenade
        },
        {
          path: "weapon_hornetgun", name: "weapon_hornetgun", component: weapon_hornetgun
        },
        {
          path: "weapon_rpg", name: "weapon_rpg", component: weapon_rpg
        },
        {
          path: "weapon_satchel", name: "weapon_satchel", component: weapon_satchel
        },
        {
          path: "weapon_shotgun", name: "weapon_shotgun", component: weapon_shotgun
        },
        {
          path: "weapon_snark", name: "weapon_snark", component: weapon_snark
        },
        {
          path: "weapon_tripmine", name: "weapon_tripmine", component: weapon_tripmine
        }
      ]
    },
    {
      path: "/command", name: "command", component: Command
    },
    {
      path: "/basicskill", name: "basicskills", component: BasicSkill
    },
    {
      path: "/advancedskill", name: "advancedskills", component: AdvancedSkill
    }
  ]
})

export default router;