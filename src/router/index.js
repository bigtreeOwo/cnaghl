import Vue from 'vue'
import VueRouter from 'vue-router'

// Intro
import Intro from '../components/Intro.vue'

// Index
import Index from '../components/Index.vue'

// PlayAg
import PlayAG from '@/components/PlayAG/PlayAG.vue'

// Serverlist
import Serverlist from '../components/Serverlist.vue'

// Video
import MatchVideo from '@/components/DemoVideo/MatchVideo.vue'
import Video from '@/components/DemoVideo/Video.vue'
// Download
import Model from '../components/Download/Model/Model.vue'
import Sprite from '../components/Download/Sprite/Sprite.vue'
import Wadtexture from '../components/Download/Wadtexture/Wadtexture.vue'
import AGMODX from '../components/Download/Client/AGMODX.vue'
import BugfixedHL from '../components/Download/Client/BugfixedHL.vue'
import OpenAG from '../components/Download/Client/OpenAG.vue'
import TrainingMod from '../components/Download/Client/TrainingMod.vue'
import Client from '../components/Download/Client.vue'

// Tutorial Weapon
import Weapon from '../components/Tutorial/Weapon.vue'
import weapon_9mmAR from '../components/Tutorial/Weapons/weapon_9mmAR.vue'
import weapon_9mmhandgun from '../components/Tutorial/Weapons/weapon_9mmhandgun.vue'
import weapon_357 from '../components/Tutorial/Weapons/weapon_357.vue'
import weapon_crossbow from '../components/Tutorial/Weapons/weapon_crossbow.vue'
import weapon_crowbar from '../components/Tutorial/Weapons/weapon_crowbar.vue'
import weapon_egon from '../components/Tutorial/Weapons/weapon_egon.vue'
import weapon_gauss from '../components/Tutorial/Weapons/weapon_gauss.vue'
import weapon_handgrenade from '../components/Tutorial/Weapons/weapon_handgrenade.vue'
import weapon_hornetgun from '../components/Tutorial/Weapons/weapon_hornetgun.vue'
import weapon_rpg from '../components/Tutorial/Weapons/weapon_rpg.vue'
import weapon_satchel from '../components/Tutorial/Weapons/weapon_satchel.vue'
import weapon_shotgun from '../components/Tutorial/Weapons/weapon_shotgun.vue'
import weapon_snark from '../components/Tutorial/Weapons/weapon_snark.vue'
import weapon_tripmine from '../components/Tutorial/Weapons/weapon_tripmine.vue'

// Tutorial Command
import Commands from '../components/Tutorial/Commands.vue'

// Tutorial BasicSkills
import BasicSkill from '../components/Tutorial/BasicSkill.vue'
import Devicesetting from '../components/Tutorial/BasicSkills/Devicesetting.vue'
import Dropweapon from '../components/Tutorial/BasicSkills/Dropweapon.vue'
import Fasterswitch from '../components/Tutorial/BasicSkills/Fasterswitch.vue'
import Gausstrick from '../components/Tutorial/BasicSkills/Gausstrick.vue'
import Headshot from '../components/Tutorial/BasicSkills/Headshot.vue'
import Longjump from '../components/Tutorial/BasicSkills/Longjump.vue'
import Quickbow from '../components/Tutorial/BasicSkills/Quickbow.vue'

// Tutorial AdvancedSkills
import AdvancedSkill from '../components/Tutorial/AdvancedSkill.vue'
import Bunnyhop from '../components/Tutorial/AdvancedSkills/Bunnyhop.vue'
import Gaussjump from '../components/Tutorial/AdvancedSkills/Gaussjump.vue'
import Spawnpoint from '../components/Tutorial/AdvancedSkills/Spawnpoint.vue'

import Mapknowledge from '../components/Tutorial/AdvancedSkills/Mapknowledge.vue'

//MapKnowledge maps
import Crossfire from '../components/Tutorial/AdvancedSkills/MapStrategy/Crossfire.vue'
import Lost_village2 from '../components/Tutorial/AdvancedSkills/MapStrategy/Lost_village2.vue'
import Stalkx from '../components/Tutorial/AdvancedSkills/MapStrategy/Stalkx.vue'
import Stalkyard from '../components/Tutorial/AdvancedSkills/MapStrategy/Stalkyard.vue'

// Tournament
import Tournament from '../components/Tournament.vue'

// 登录注册
import Login from '../components/Login/Login.vue'
import Register from '../components/Register/Register.vue'

//401 403
import Auth from '../components/Auth.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/intro',
    },
    {
      path: '/intro',
      components: { main: Intro },
    },
    {
      path: '/index',
      name: 'index',
      components: { main: Index },
    },
    {
      path: '/playag',
      name: 'playag',
      components: { main: PlayAG },
    },
    {
      path: '/server',
      name: 'serverlist',
      components: { main: Serverlist },
    },
    {
      path: '/matchvideo',
      name: 'matchvideo',
      components: { main: MatchVideo },
    },
    {
      path: '/video',
      name: 'video',
      components: { main: Video },
    },
    {
      path: '/tournament',
      name: 'tournament',
      components: { main: Tournament },
    },
    {
      path: '/login',
      name: 'login',
      components: { main: Login },
    },
    {
      path: '/register',
      name: 'register',
      components: { main: Register },
    },
    {
      path: '/model',
      name: 'model',
      components: { main: Model },
    },
    {
      path: '/sprite',
      name: 'sprite',
      components: { main: Sprite },
    },
    {
      path: '/wadtexture',
      name: 'wadtexture',
      components: { main: Wadtexture },
    },
    {
      path: '/client',
      name: 'client',
      redirect: '/client/bugfixedhl',
      components: { main: Client },
      children: [
        {
          path: 'agmodx',
          name: 'agmodx',
          components: { client: AGMODX },
        },
        {
          path: 'bugfixedhl',
          name: 'bugfixedhl',
          components: { client: BugfixedHL },
        },
        {
          path: 'openag',
          name: 'openag',
          components: { client: OpenAG },
        },
        {
          path: 'trainingmod',
          name: 'trainingmod',
          components: { client: TrainingMod },
        },
      ],
    },
    {
      path: '/weapon',
      name: 'tutorial',
      redirect: '/weapon/weapon_crowbar',
      components: { main: Weapon },
      children: [
        {
          path: 'weapon_9mmAR',
          name: 'weapon_9mmAR',
          components: { weapon: weapon_9mmAR },
        },
        {
          path: 'weapon_9mmhandgun',
          name: 'weapon_9mmhandgun',
          components: { weapon: weapon_9mmhandgun },
        },
        {
          path: 'weapon_357',
          name: 'weapon_357',
          components: { weapon: weapon_357 },
        },
        {
          path: 'weapon_crossbow',
          name: 'weapon_crossbow',
          components: { weapon: weapon_crossbow },
        },
        {
          path: 'weapon_crowbar',
          name: 'weapon_crowbar',
          components: { weapon: weapon_crowbar },
        },
        {
          path: 'weapon_egon',
          name: 'weapon_egon',
          components: { weapon: weapon_egon },
        },
        {
          path: 'weapon_gauss',
          name: 'weapon_gauss',
          components: { weapon: weapon_gauss },
        },
        {
          path: 'weapon_handgrenade',
          name: 'weapon_handgrenade',
          components: { weapon: weapon_handgrenade },
        },
        {
          path: 'weapon_hornetgun',
          name: 'weapon_hornetgun',
          components: { weapon: weapon_hornetgun },
        },
        {
          path: 'weapon_rpg',
          name: 'weapon_rpg',
          components: { weapon: weapon_rpg },
        },
        {
          path: 'weapon_satchel',
          name: 'weapon_satchel',
          components: { weapon: weapon_satchel },
        },
        {
          path: 'weapon_shotgun',
          name: 'weapon_shotgun',
          components: { weapon: weapon_shotgun },
        },
        {
          path: 'weapon_snark',
          name: 'weapon_snark',
          components: { weapon: weapon_snark },
        },
        {
          path: 'weapon_tripmine',
          name: 'weapon_tripmine',
          components: { weapon: weapon_tripmine },
        },
      ],
    },
    {
      path: '/commands',
      name: 'commands',
      components: { main: Commands },
    },
    {
      path: '/basicskill',
      name: 'basicskills',
      redirect: '/basicskill/headshot',
      components: { main: BasicSkill },
      children: [
        {
          path: 'dropweapon',
          name: 'dropweapon',
          components: { basicskill: Dropweapon },
        },
        {
          path: 'devicesetting',
          name: 'devicesetting',
          components: { basicskill: Devicesetting },
        },
        {
          path: 'fasterswitch',
          name: 'fasterswitch',
          components: { basicskill: Fasterswitch },
        },
        {
          path: 'gausstrick',
          name: 'gausstrick',
          components: { basicskill: Gausstrick },
        },
        {
          path: 'headshot',
          name: 'headshot',
          components: { basicskill: Headshot },
        },
        {
          path: 'longjump',
          name: 'longjump',
          components: { basicskill: Longjump },
        },
        {
          path: 'quickbow',
          name: 'quickbow',
          components: { basicskill: Quickbow },
        },
      ],
    },
    {
      path: '/advancedskill',
      name: 'advancedskills',
      redirect: '/advancedskill/bunnyhop',
      components: { main: AdvancedSkill },
      children: [
        {
          path: 'bunnyhop',
          name: 'bunnyhop',
          components: { advancedskill: Bunnyhop },
        },
        {
          path: 'gaussjump',
          name: 'gaussjump',
          components: { advancedskill: Gaussjump },
        },
        {
          path: 'spawnpoint',
          name: 'spawnpoint',
          components: { advancedskill: Spawnpoint },
        },
        {
          path: 'mapknowledge',
          name: 'mapknowledge',
          components: { advancedskill: Mapknowledge },
          redirect: '/advancedskill/mapknowledge/crossfire',
          children: [
            {
              path: 'crossfire',
              name: 'crossfire',
              components: { map: Crossfire },
            },
            {
              path: 'lost_village2',
              name: 'lost_village2',
              components: { map: Lost_village2 },
            },
            {
              path: 'stalkx',
              name: 'stalkx',
              components: { map: Stalkx },
            },
            {
              path: 'stalkyard',
              name: 'stalkyard',
              components: { map: Stalkyard },
            },
          ],
        },
      ],
    },
    {
      path: '/403',
      name: 'Auth',
      components: { main: Auth },
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      components: { main: NotFound },
    },
  ],
})

router.beforeEach((to, from, next) => {
  // console.log(to.path);
  // console.log(from.path);
  // console.log(localStorage.getItem('user-token'));

  let needLoginPaths = ['/playag']; // 需要登录查看的页面路径
  let noLoginPaths = ['/login', '/register']; // 登录后不能访问的页面

  // if (
  //   needLoginPaths.includes(to.path) &&
  //   localStorage.getItem('user-token') === null
  // ) {
  //   console.log('权限验证不通过')
  //   next('/403')
  // } else {
  //   console.log('权限验证通过')
  //   next()
  // }

  // if (
  //   noLoginPaths.includes(to.path) &&
  //   localStorage.getItem('user-token') !== null
  // ) {
  //   console.log("已登录但尝试访问登陆页面");
  //   next('/index')
  // }

  if (
    needLoginPaths.includes(to.path) &&
    localStorage.getItem('user-token') === null
  ) {
    // console.log('权限验证不通过');
    next('/403');
  } else if (
    noLoginPaths.includes(to.path) &&
    localStorage.getItem('user-token') !== null
  ) {
    // console.log('已登录但尝试访问登陆页面');
    next('/index');
  } else {
    // console.log('权限验证通过');
    next();
  }
})

export default router
