<template>
  <div class="index-page">
    <h1 id="welcome">
      <img src="@/assets/images/main/ag.png" alt="ag" title="ag" class="welcome-logo" />
      <span>欢迎来到 AGHL 中国!</span>
      <img src="@/assets/images/main/ag.png" alt="ag" title="ag" class="welcome-logo" />
    </h1>

    <div class="index-hero">
      <article id="ag" class="index-article">
        <h2>什么是 ag</h2>
        <p>
          Adrenaline gamer(AG)是一款基于半条命1的模组，其为半条命死亡竞赛(Half
          Life:Death Match, HLDM)的改进升级版，属于竞技场式FPS游戏(Arena
          FPS)。AG在原版死亡竞赛的基础上加入了一系列改动，极大地增强了其竞技性，例如取消连跳速度限制、额外的游戏模式、投票机制等。正如其名字所言，AG旨在提供给玩家极致竞技所带来的肾上腺素飙升的快感，其探索的是半条命1多人游戏的极限。
        </p>
        <h2>为什么是AG而不是HL1原版</h2>
        <p>
          <strong>因为AG可玩性更高、竞技性更强、游玩体验更舒服。</strong>AG在原版死亡竞赛的基础上加入了一系列改进，极大地增强了其可玩性，例如取消连跳速度限制、增加投票机制、bug修复以及额外的游戏模式等。另外AG没有对游戏作过多修改，忠于原版游戏体验的玩家完全可以当成原版游戏游玩。
        </p>
        <h2>如何进行游戏</h2>
        <p>
          目前国内已设有数个安装了AG插件的半条命1服务器(<a href="#"><router-link to="/server">点我进入服务器界面</router-link></a>)，因此最简单的游玩方式是<strong>下载一个半条命1然后直接进服开始干架</strong>
          。如果想要进一步提升游戏体验，则可以<strong>安装BFHL</strong>
          （详见下载页面）。因为使用方便，BFHL+装有AG插件的服务器也是目前国内最流行的游玩方式。如果想和国外pro进行切磋，则建议额外安装OpenAG。
        </p>
        <h2>AG强度太高了，我想玩点休闲的</h2>
        <p>
          完全可以理解！除了传统AGHL以外，我们还增设了数个偏娱乐的HLDM服务器，这些服务器主要由国内开发者维护，旨在提高HLDM/AG的可玩性、削弱竞技性，让所有玩家都可以愉快玩耍，详情请移步到<a href="#"><router-link to="/server">服务器界面</router-link></a>。
        </p>
        <h2>AG的游戏模式：</h2>
        <p>
          作为HLDM的改进版，AG在原版HLDM的基础上增加了数种新游戏模式，以下是几种常用的默认游戏模式：
        </p>
        <p>
          -FFA(Free for All):
          最经典的自由混战游戏模式，与所有经典FPS的FFA模式一样，该模式下不分团队，每个玩家都是独立个体。尝试生存并杀死除了自己之外的所有人是你唯一的目标。
        </p>
        <p>
          -TDM(Team Death Match):
          团队死亡竞赛，该模式下按照玩家模型或服务器预定分组进行团队游戏，常见的比赛游戏方式为2v2。
        </p>
        <p>
          -HLCCL:
          适用于比赛的模式，该模式基于TDM，开启友伤机制，默认回合时间为20分钟。值得注意的是，该模式削弱了胶子炮(EGON)的伤害至原来的一半。
        </p>
        <p>
          -Arcade：
          满装备混战模式，该模式下每人重生即获得所有武器和装备，包括100护甲和长跳。击杀任一敌人即可恢复满状态，该模式适用于练习武器的使用以及枪法。
        </p>
        <p>
          -Arena：
          竞技场模式，该模式与Arcade类似，每人重生都是满状态。不同的是，在Arean模式下，服务器将会逐个挑选玩家强制进行1v1的决斗，胜者可以进行下一回合，而败者则进入观察者等待下一轮叫出。
        </p>
        <p>
          -LLHL:
          AG的第三方游戏模式，与HLCCL类似都是为比赛而生的游戏模式。该模式可以提供更加公平的游戏竞技，例如修复了诡雷(Ghostmine)、
          高斯穿灯bug，以及可以完全随机重生等机制。
        </p>
        <p>
          -CTF:(Capture the Flag):
          经典的夺旗模式，该模式会把玩家分为红蓝两队，目标是保护己方旗帜的同时夺取对方的旗帜。
        </p>
        <p>
          -更多模式：
          玩家可以在ag文件目录下的gamemodes文件夹根据自己的需求编写cfg文件来简单地自定义自己喜爱的游戏模式。
        </p>

        <div class="index-creatures">
          <img src="@/assets/images/main/headcrab.png" alt="headcrab" title="headcrab" />
          <img src="@/assets/images/main/scientist.png" alt="scientist" title="scientist" />
        </div>
      </article>

      <aside id="videocarousel" class="index-media">
        <h2>游戏截图</h2>
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="img in imgList" :key="img.id" class="indexcarousel">
            <img :src="img.url" alt="图片加载错误" :title="img.title" />
          </el-carousel-item>
        </el-carousel>

        <h2 class="index-video-title">
          Adrenaline Gamer Cn Movie - By
          <a href="https://space.bilibili.com/8994696" target="_blank" rel="noopener">Real-Hunter</a>
        </h2>
        <iframe id="movie" src="http://player.bilibili.com/player.html?aid=46100312&bvid=BV1ob411e7Uf&cid=80770774&p=1&t=5&high_quality=1&autoplay=0" allowfullscreen="allowfullscreen" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>
      </aside>
    </div>
  </div>
</template>

<script>
import { asset } from '@/utils/asset.js';
export default {
  data() {
    return {
      imgList: [
        { id: 1, url: asset("images/main/GameScreenshot1.jpg"), title: "图片1" },
        { id: 2, url: asset("images/main/GameScreenshot2.jpg"), title: "图片2" },
        { id: 3, url: asset("images/main/GameScreenshot3.jpg"), title: "图片3" },
        { id: 4, url: asset("images/main/GameScreenshot4.jpg"), title: "图片4" },
        { id: 5, url: asset("images/main/GameScreenshot5.jpg"), title: "图片5" },
        { id: 6, url: asset("images/main/GameScreenshot6.jpg"), title: "图片6" },
        { id: 7, url: asset("images/main/GameScreenshot7.jpg"), title: "图片7" },
        { id: 8, url: asset("images/main/GameScreenshot8.jpg"), title: "图片8" },
      ],
    };
  },
  mounted() {
    document.title = "主页 - CN-AGHL";
  }
};
</script>

<style scoped>
.index-page {
  width: 100%;
}

#welcome {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 4px 0 24px;
  font-size: clamp(1.5rem, 3.2vw, 2.1rem);
  color: var(--ag-primary);
  text-align: center;
}

.welcome-logo {
  height: clamp(38px, 6vw, 60px);
  width: auto;
}

/* ===== 双栏主体 ===== */
.index-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: clamp(20px, 3vw, 36px);
  align-items: start;
}

/* 左侧介绍卡片 */
#ag {
  min-width: 0;
  padding: clamp(18px, 3vw, 30px);
  border: 1px solid var(--ag-border);
  border-radius: var(--ag-radius);
  background: linear-gradient(rgba(14, 16, 12, 0.88), rgba(14, 16, 12, 0.95)),
    url("../assets/images/main/aboutag.webp") center / cover no-repeat;
  box-shadow: var(--ag-shadow-sm);
  font-size: 1rem;
  line-height: 1.9;
  color: var(--ag-text);
}

#ag h2 {
  margin: 1.4em 0 0.6em;
  padding-left: 10px;
  border-left: 3px solid var(--ag-primary);
  font-size: clamp(1.15rem, 2vw, 1.4rem);
  color: var(--ag-hazard);
}

#ag h2:first-child {
  margin-top: 0;
}

#ag p {
  margin-bottom: 0.85em;
  color: #d8dbce;
}

#ag strong {
  color: #fff;
}

#ag a {
  color: var(--ag-primary);
  text-decoration: none;
  border-bottom: 1px dashed rgba(255, 156, 26, 0.5);
}

#ag a:hover {
  color: var(--ag-primary-hover);
}

.index-creatures {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
}

.index-creatures img {
  width: clamp(64px, 10vw, 100px);
  height: auto;
}

/* 右侧媒体 */
#videocarousel {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

#videocarousel h2 {
  margin: 0 0 10px;
  text-align: center;
  color: var(--ag-primary);
  font-size: clamp(1.1rem, 2vw, 1.35rem);
}

.index-video-title {
  margin-top: 22px !important;
}

.index-video-title a {
  color: var(--ag-primary-hover);
}

#videocarousel :deep(.el-carousel) {
  border-radius: var(--ag-radius);
  overflow: visible;
}

#videocarousel :deep(.el-carousel__container) {
  height: clamp(190px, 26vw, 420px) !important;
  border-radius: var(--ag-radius);
  overflow: hidden;
  border: 1px solid var(--ag-border);
}

.indexcarousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

#movie {
  width: 100%;
  aspect-ratio: 16 / 9;
  height: auto;
  border: 1px solid var(--ag-border);
  border-radius: var(--ag-radius);
  background: #000;
}

/* ===== 响应式 ===== */
@media (max-width: 1024px) {
  .index-hero {
    grid-template-columns: minmax(0, 1fr);
  }

  #videocarousel {
    order: 2;
  }

  #videocarousel :deep(.el-carousel__container) {
    height: clamp(200px, 46vw, 380px) !important;
  }
}

@media (max-width: 480px) {
  #welcome {
    gap: 8px;
  }

  #ag {
    padding: 14px;
    font-size: 0.95rem;
  }
}
</style>
