<template>
  <header class="ag-header">
    <div class="ag-header__inner">
      <router-link to="/index" class="ag-brand">
        <el-avatar
          :size="40"
          :src="$asset('images/header/lambda1.webp')"
          class="ag-brand__logo"
        />
        <span class="ag-brand__text">
          <strong>CN-AGHL</strong>
          <small>Half-Life · Adrenaline Gamer</small>
        </span>
      </router-link>

      <!-- 桌面端导航 -->
      <el-menu
        class="ag-nav"
        mode="horizontal"
        :default-active="route.path"
        :ellipsis="false"
        @select="handleSelect"
      >
        <template v-for="item in navItems" :key="item.index">
          <el-sub-menu v-if="item.children" :index="item.index">
            <template #title>
              <el-icon><component :is="item.icon" /></el-icon>{{ item.label }}
            </template>
            <el-menu-item
              v-for="child in item.children"
              :key="child.index"
              :index="child.index"
            >
              {{ child.label }}
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item v-else :index="item.index">
            <el-icon><component :is="item.icon" /></el-icon>{{ item.label }}
          </el-menu-item>
        </template>

        <el-sub-menu v-if="isLogin" index="user" class="ag-nav__user">
          <template #title>
            <el-icon><UserFilled /></el-icon>
            <span class="ag-nav__username">{{ userName }}</span>
          </template>
          <el-menu-item index="/playag">查看排名</el-menu-item>
          <el-menu-item index="logout">退出登录</el-menu-item>
        </el-sub-menu>
        <template v-else>
          <el-menu-item index="/login" class="ag-nav__user">
            <el-icon><UserFilled /></el-icon>登录
          </el-menu-item>
          <el-menu-item index="/register">
            <el-icon><DocumentAdd /></el-icon>注册
          </el-menu-item>
        </template>
      </el-menu>

      <!-- 移动端汉堡按钮 -->
      <button
        class="ag-burger"
        type="button"
        aria-label="打开导航菜单"
        @click="drawerOpen = true"
      >
        <el-icon><MenuIcon /></el-icon>
      </button>
    </div>

    <!-- 移动端抽屉导航
         append-to-body：Header 使用了 backdrop-filter，会创建包含块，
         若不挂载到 body，抽屉和遮罩会被限制在 64px 高的顶栏内 -->
    <el-drawer
      v-model="drawerOpen"
      direction="rtl"
      size="78%"
      :with-header="false"
      append-to-body
      modal-class="ag-drawer-overlay"
      class="ag-drawer"
    >
      <div class="ag-drawer__head">
        <span class="ag-brand__text">
          <strong>CN-AGHL</strong>
          <small>Half-Life · Adrenaline Gamer</small>
        </span>
        <button
          class="ag-burger"
          type="button"
          aria-label="关闭导航菜单"
          @click="drawerOpen = false"
        >
          <el-icon><Close /></el-icon>
        </button>
      </div>

      <nav class="ag-drawer__nav">
        <template v-for="item in navItems" :key="item.index">
          <div v-if="item.children" class="ag-drawer__group">
            <div class="ag-drawer__group-title">
              <el-icon><component :is="item.icon" /></el-icon>{{ item.label }}
            </div>
            <router-link
              v-for="child in item.children"
              :key="child.index"
              :to="child.index"
              class="ag-drawer__link"
              @click="drawerOpen = false"
            >
              {{ child.label }}
            </router-link>
          </div>
          <router-link
            v-else
            :to="item.index"
            class="ag-drawer__link ag-drawer__link--main"
            @click="drawerOpen = false"
          >
            <el-icon><component :is="item.icon" /></el-icon>{{ item.label }}
          </router-link>
        </template>
      </nav>

      <div class="ag-drawer__user">
        <template v-if="isLogin">
          <div class="ag-drawer__name">欢迎你，{{ userName }}</div>
          <router-link
            to="/playag"
            class="ag-drawer__link"
            @click="drawerOpen = false"
          >
            查看排名
          </router-link>
          <button class="ag-drawer__logout" type="button" @click="logout">
            退出登录
          </button>
        </template>
        <template v-else>
          <router-link
            to="/login"
            class="ag-drawer__link"
            @click="drawerOpen = false"
          >
            登录
          </router-link>
          <router-link
            to="/register"
            class="ag-drawer__link"
            @click="drawerOpen = false"
          >
            注册
          </router-link>
        </template>
      </div>
    </el-drawer>
  </header>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  HomeFilled,
  Medal,
  OfficeBuilding,
  Download,
  VideoCamera,
  Notebook,
  UserFilled,
  DocumentAdd,
  Menu as MenuIcon,
  Close,
} from '@element-plus/icons-vue';

const route = useRoute();
const router = useRouter();

const drawerOpen = ref(false);
const isLogin = ref(localStorage.getItem('user-token'));

/** 当前登录用户名（解析失败时回退为“玩家”） */
const userName = computed(() => {
  try {
    return JSON.parse(isLogin.value)?.name || '玩家';
  } catch {
    return '玩家';
  }
});

/** 导航配置：有 children 的项渲染为下拉子菜单 */
const navItems = [
  { index: '/index', label: '主页', icon: HomeFilled },
  { index: '/playag', label: 'PlayAG排行榜', icon: Medal },
  { index: '/server', label: '服务器', icon: OfficeBuilding },
  {
    index: '/download',
    label: '下载',
    icon: Download,
    children: [
      { index: '/model', label: '自定义模型' },
      { index: '/sprite', label: '自定义spr' },
      { index: '/wadtexture', label: '自定义纹理' },
      { index: '/client', label: '游戏客户端/补丁' },
    ],
  },
  {
    index: '/demovideo',
    label: 'DEMO视频',
    icon: VideoCamera,
    children: [
      { index: '/matchvideo', label: '比赛视频' },
      { index: '/video', label: '其他视频' },
    ],
  },
  {
    index: '/tutorial',
    label: '教程',
    icon: Notebook,
    children: [
      { index: '/commands', label: '游戏指令说明' },
      { index: '/weapon', label: '武器使用' },
      { index: '/basicskill', label: '基础技巧' },
      { index: '/advancedskill', label: '进阶技巧' },
    ],
  },
  { index: '/tournament', label: '赛事', icon: Medal },
];

/** 路由变化时同步登录态（与迁移前 watch $route 的行为一致） */
watch(
  () => route.path,
  () => {
    isLogin.value = localStorage.getItem('user-token');
  }
);

/** 菜单选择：统一处理路由跳转与退出登录 */
function handleSelect(index) {
  if (index === 'logout') {
    logout();
    return;
  }
  if (index.startsWith('/')) {
    router.push(index);
  }
}

/** 退出登录并回到登录页 */
function logout() {
  localStorage.removeItem('user-token');
  isLogin.value = null;
  drawerOpen.value = false;
  router.push('/login');
}
</script>

<style>
/* ===== 顶部导航条 ===== */
.ag-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(11, 13, 9, 0.88);
  border-bottom: 1px solid var(--ag-border);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.ag-header__inner {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: var(--ag-container);
  height: var(--ag-header-h);
  margin: 0 auto;
  padding: 0 clamp(12px, 3vw, 28px);
}

/* 品牌区 */
.ag-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
  color: var(--ag-text);
  text-decoration: none;
}

.ag-brand:hover {
  color: var(--ag-text);
}

.ag-brand__logo {
  background: #11130e;
  border: 1px solid var(--ag-border-strong);
}

.ag-brand__text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.ag-brand__text strong {
  font-size: 1.02rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  color: #fff;
}

.ag-brand__text small {
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  color: var(--ag-text-muted);
}

/* 桌面导航 */
.ag-nav.el-menu {
  flex: 1;
  min-width: 0;
  height: var(--ag-header-h);
  background: transparent;
  border-bottom: none;
  /* 显式覆盖 Element Plus 菜单变量，避免默认灰底/蓝色系串色 */
  --el-menu-bg-color: transparent;
  --el-menu-text-color: var(--ag-text);
  --el-menu-active-color: var(--ag-primary);
  --el-menu-hover-bg-color: rgba(255, 156, 26, 0.1);
  --el-menu-hover-text-color: var(--ag-primary);
}

.ag-nav.el-menu .el-menu-item,
.ag-nav.el-menu .el-sub-menu__title {
  height: var(--ag-header-h);
  line-height: var(--ag-header-h);
  padding: 0 11px;
  font-size: 0.92rem;
  color: var(--ag-text);
  border-bottom: 2px solid transparent;
  background: transparent;
  transition: color 0.18s ease, background-color 0.18s ease,
    border-color 0.18s ease;
}

.ag-nav.el-menu .el-menu-item .el-icon,
.ag-nav.el-menu .el-sub-menu__title .el-icon {
  margin-right: 4px;
}

.ag-nav.el-menu .el-menu-item:hover,
.ag-nav.el-menu .el-sub-menu__title:hover {
  background: rgba(255, 156, 26, 0.1) !important;
  color: var(--ag-primary) !important;
  border-bottom-color: var(--ag-primary);
  box-shadow: none !important;
}

.ag-nav.el-menu .el-menu-item.is-active {
  color: var(--ag-primary) !important;
  border-bottom-color: var(--ag-primary) !important;
  background: rgba(255, 156, 26, 0.08) !important;
  font-weight: 600;
}

.ag-nav__user {
  margin-left: auto !important;
}

.ag-nav__username {
  display: inline-block;
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
}

/* 下拉弹层（teleport 到 body，需全局样式） */
.el-menu--popup {
  min-width: 168px;
  padding: 6px;
  background: #1e2218 !important;
  border: 1px solid var(--ag-border-strong);
  border-radius: 10px;
  box-shadow: var(--ag-shadow);
}

.el-menu--popup .el-menu-item {
  height: 40px;
  line-height: 40px;
  margin: 2px 0;
  padding: 0 12px !important;
  border-radius: 6px;
  color: var(--ag-text) !important;
  background: transparent !important;
}

.el-menu--popup .el-menu-item:hover {
  background: rgba(255, 156, 26, 0.14) !important;
  color: var(--ag-primary) !important;
}

.el-menu--popup .el-menu-item.is-active {
  color: var(--ag-primary) !important;
  font-weight: 600;
}

/* 汉堡按钮 */
.ag-burger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  flex: 0 0 auto;
  margin-left: auto;
  padding: 0;
  border: 1px solid var(--ag-border-strong);
  border-radius: 10px;
  background: transparent;
  color: var(--ag-primary);
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.18s ease, border-color 0.18s ease;
}

.ag-burger:hover {
  background: rgba(255, 156, 26, 0.12);
  border-color: var(--ag-primary);
}

/* ===== 移动端抽屉 ===== */
/* el-drawer 的 class 可能落在遮罩根节点上，这里用 modal-class 定位面板，
   显式设置背景，避免默认白色面板导致浅色文字看不清 */
.ag-drawer-overlay .el-drawer,
.el-drawer.ag-drawer {
  max-width: 400px;
  background-color: #12140f !important;
  color: var(--ag-text);
}

.ag-drawer-overlay .el-drawer__body,
.ag-drawer .el-drawer__body {
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow-y: auto;
  background: transparent;
}

.ag-drawer__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--ag-border);
}

.ag-drawer__head .ag-burger {
  display: inline-flex;
  margin-left: 0;
}

.ag-drawer__nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 14px 16px;
}

.ag-drawer__group-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 12px 12px 4px;
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  color: var(--ag-text-dim);
  text-transform: uppercase;
}

.ag-drawer__link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 12px;
  border: 1px solid transparent;
  border-radius: 8px;
  color: var(--ag-text);
  font-size: 0.96rem;
  text-decoration: none;
  transition: background-color 0.16s ease, border-color 0.16s ease;
}

.ag-drawer__link--main {
  font-weight: 600;
}

.ag-drawer__link:hover,
.ag-drawer__link.router-link-active {
  background: rgba(255, 156, 26, 0.12);
  border-color: rgba(255, 156, 26, 0.35);
  color: var(--ag-primary);
}

.ag-drawer__user {
  margin-top: auto;
  padding: 14px 14px 28px;
  border-top: 1px solid var(--ag-border);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ag-drawer__name {
  padding: 0 12px 8px;
  color: var(--ag-text-muted);
  font-size: 0.9rem;
}

.ag-drawer__logout {
  margin-top: 4px;
  padding: 10px 12px;
  border: 1px solid var(--ag-border);
  border-radius: 8px;
  background: transparent;
  color: var(--ag-text-muted);
  font-family: inherit;
  font-size: 0.92rem;
  cursor: pointer;
}

.ag-drawer__logout:hover {
  border-color: var(--ag-primary);
  color: var(--ag-primary);
}

/* ===== 响应式 ===== */
@media (max-width: 1160px) {
  .ag-nav.el-menu {
    display: none;
  }

  .ag-burger {
    display: inline-flex;
  }
}

@media (max-width: 420px) {
  .ag-brand__text small {
    display: none;
  }
}
</style>
