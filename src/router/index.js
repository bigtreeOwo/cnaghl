import { createRouter, createWebHistory } from 'vue-router';

// Intro
const Intro = () => import('../components/Intro.vue');

// Index
const Index = () => import('../components/Index.vue');

// PlayAg
const PlayAG = () => import('@/components/PlayAG/PlayAG.vue');

// Serverlist
const Serverlist = () => import('../components/Serverlist.vue');

// Video
const MatchVideo = () => import('@/components/DemoVideo/MatchVideo.vue');
const Video = () => import('@/components/DemoVideo/Video.vue');
// Download
const Model = () => import('../components/Download/Model/Model.vue');
const Sprite = () => import('../components/Download/Sprite/Sprite.vue');
const Wadtexture = () =>
  import('../components/Download/Wadtexture/Wadtexture.vue');
const AGMODX = () => import('../components/Download/Client/AGMODX.vue');
const BugfixedHL = () => import('../components/Download/Client/BugfixedHL.vue');
const OpenAG = () => import('../components/Download/Client/OpenAG.vue');
const TrainingMod = () =>
  import('../components/Download/Client/TrainingMod.vue');
const Client = () => import('../components/Download/Client.vue');

// Tutorial Weapon
const Weapon = () => import('../components/Tutorial/Weapon.vue');
const weapon_9mmAR = () =>
  import('../components/Tutorial/Weapons/weapon_9mmAR.vue');
const weapon_9mmhandgun = () =>
  import('../components/Tutorial/Weapons/weapon_9mmhandgun.vue');
const weapon_357 = () =>
  import('../components/Tutorial/Weapons/weapon_357.vue');
const weapon_crossbow = () =>
  import('../components/Tutorial/Weapons/weapon_crossbow.vue');
const weapon_crowbar = () =>
  import('../components/Tutorial/Weapons/weapon_crowbar.vue');
const weapon_egon = () =>
  import('../components/Tutorial/Weapons/weapon_egon.vue');
const weapon_gauss = () =>
  import('../components/Tutorial/Weapons/weapon_gauss.vue');
const weapon_handgrenade = () =>
  import('../components/Tutorial/Weapons/weapon_handgrenade.vue');
const weapon_hornetgun = () =>
  import('../components/Tutorial/Weapons/weapon_hornetgun.vue');
const weapon_rpg = () =>
  import('../components/Tutorial/Weapons/weapon_rpg.vue');
const weapon_satchel = () =>
  import('../components/Tutorial/Weapons/weapon_satchel.vue');
const weapon_shotgun = () =>
  import('../components/Tutorial/Weapons/weapon_shotgun.vue');
const weapon_snark = () =>
  import('../components/Tutorial/Weapons/weapon_snark.vue');
const weapon_tripmine = () =>
  import('../components/Tutorial/Weapons/weapon_tripmine.vue');

// Tutorial Command
const Commands = () => import('../components/Tutorial/Commands.vue');

// Tutorial BasicSkills
const BasicSkill = () => import('../components/Tutorial/BasicSkill.vue');
const Devicesetting = () =>
  import('../components/Tutorial/BasicSkills/Devicesetting.vue');
const Dropweapon = () =>
  import('../components/Tutorial/BasicSkills/Dropweapon.vue');
const Fasterswitch = () =>
  import('../components/Tutorial/BasicSkills/Fasterswitch.vue');
const Gausstrick = () =>
  import('../components/Tutorial/BasicSkills/Gausstrick.vue');
const Headshot = () =>
  import('../components/Tutorial/BasicSkills/Headshot.vue');
const Longjump = () =>
  import('../components/Tutorial/BasicSkills/Longjump.vue');
const Quickbow = () =>
  import('../components/Tutorial/BasicSkills/Quickbow.vue');

// Tutorial AdvancedSkills
const AdvancedSkill = () => import('../components/Tutorial/AdvancedSkill.vue');
const Bunnyhop = () =>
  import('../components/Tutorial/AdvancedSkills/Bunnyhop.vue');
const Gaussjump = () =>
  import('../components/Tutorial/AdvancedSkills/Gaussjump.vue');
const Spawnpoint = () =>
  import('../components/Tutorial/AdvancedSkills/Spawnpoint.vue');

const Mapknowledge = () =>
  import('../components/Tutorial/AdvancedSkills/Mapknowledge.vue');

//MapKnowledge maps
const Crossfire = () =>
  import('../components/Tutorial/AdvancedSkills/MapStrategy/Crossfire.vue');
const Lost_village2 = () =>
  import('../components/Tutorial/AdvancedSkills/MapStrategy/Lost_village2.vue');
const Stalkx = () =>
  import('../components/Tutorial/AdvancedSkills/MapStrategy/Stalkx.vue');
const Stalkyard = () =>
  import('../components/Tutorial/AdvancedSkills/MapStrategy/Stalkyard.vue');

// Tournament
const Tournament = () => import('../components/Tournament.vue');

// 登录注册
const Login = () => import('../components/Login/Login.vue');
const Register = () => import('../components/Register/Register.vue');

//401 403
const Auth = () => import('../components/Auth.vue');
const NotFound = () => import('../components/NotFound.vue');

const router = createRouter({
  history: createWebHistory(),
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
});

// 页面标题映射（按前缀匹配，具体路径优先）
const TITLE_MAP = {
  '/intro': 'CN-AGHL',
  '/index': '主页 - CN-AGHL',
  '/playag': '开始玩AG - CN-AGHL',
  '/server': '服务器列表 - CN-AGHL',
  '/matchvideo': '比赛视频 - CN-AGHL',
  '/video': '其他视频 - CN-AGHL',
  '/tournament': '赛事 - CN-AGHL',
  '/login': '登录 - CN-AGHL',
  '/register': '注册 - CN-AGHL',
  '/model': '自定义模型 - CN-AGHL',
  '/sprite': '自定义spr - CN-AGHL',
  '/wadtexture': '自定义纹理 - CN-AGHL',
  '/client': '游戏客户端 - CN-AGHL',
  '/commands': '游戏指令说明 - CN-AGHL',
  '/weapon': '武器使用 - CN-AGHL',
  '/basicskill': '基础技巧 - CN-AGHL',
  '/advancedskill': '进阶技巧 - CN-AGHL',
};

router.afterEach((to) => {
  let title = 'CN-AGHL';
  // 先尝试精确匹配，再退化为最长前缀匹配
  if (TITLE_MAP[to.path]) {
    title = TITLE_MAP[to.path];
  } else {
    const matchedPrefix = Object.keys(TITLE_MAP)
      .filter((prefix) => prefix !== '/' && to.path.startsWith(prefix))
      .sort((a, b) => b.length - a.length)[0];
    if (matchedPrefix) title = TITLE_MAP[matchedPrefix];
  }
  document.title = title;
});

router.beforeEach((to, from, next) => {
  const needLoginPaths = ['/playag']; // 需要登录查看的页面路径
  const noLoginPaths = ['/login', '/register']; // 登录后不能访问的页面

  if (
    needLoginPaths.includes(to.path) &&
    localStorage.getItem('user-token') === null
  ) {
    next('/403');
  } else if (
    noLoginPaths.includes(to.path) &&
    localStorage.getItem('user-token') !== null
  ) {
    next('/index');
  } else {
    next();
  }
});

export default router;
