<template>
  <div>
    <h1 id="welcome">
      <img
        src="@/assets/images/main/ag.png"
        alt="ag"
        title="ag"
        style="height: 60px"
      />欢迎来到AGHL中国!<img
        src="@/assets/images/main/ag.png"
        alt="ag"
        title="ag"
        style="height: 60px"
      />
    </h1>
    <div id="ag">
      <h2>什么是ag</h2>
      <p>
        Adrenaline gamer(AG)是一款基于半条命1的模组，其为半条命死亡竞赛(Half
        Life:Death Match, HLDM)的改进升级版，属于竞技场式FPS游戏(Arena
        FPS)。AG在原版死亡竞赛的基础上加入了一系列改动，极大地增强了其竞技性，例如取消连跳速度限制、额外的游戏模式、投票机制等。正如其名字所言，AG旨在提供给玩家极致竞技所带来的肾上腺素飙升的快感，其探索的是半条命1多人游戏的极限。
      </p>
      <h2>如何进行游戏</h2>
      <p>
        目前国内已设有数个安装了AG插件的半条命1服务器(<a href="#"
          ><router-link to="/servers">点我进入服务器界面</router-link></a
        >)，因此最简单的游玩方式是<strong
          >下载一个半条命1然后直接进服开始干架</strong
        >
        。如果想要进一步提升游戏体验，则可以<strong>安装BFHL</strong>
        （详见下载页面）。因为使用方便，BFHL+装有AG插件的服务器也是目前国内最流行的游玩方式。如果想和国外pro进行切磋，则建议额外安装OpenAG。
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
      <img
        src="@/assets/images/main/headcrab.png"
        alt="headcrab"
        title="headcrab"
        style="width: 100px"
      /><img
        src="@/assets/images/main/scientist.png"
        alt="scientist"
        title="scientist"
        style="width: 100px; margin-left: 50%"
      />
    </div>
    
    <div id="videocarousel">
      <h1>游戏截图</h1>
      <el-carousel indicator-position="outside" height="520px">
        <el-carousel-item v-for="img in imgList" :key="img.id">
          <img :src="img.url" alt="图片加载错误" :title="img.title" />
        </el-carousel-item>
      </el-carousel>
      <h1>Adrenaline Gamer Cn Movie -By Real-Hunter</h1>
      <iframe
        id="movie"
        src="https://player.bilibili.com/player.html?bvid=BV1ob411e7Uf&page=1&high_quality=1&danmaku=0&autoplay=1&t=5"
        allowfullscreen="allowfullscreen"
        width="100%"
        height="500"
        scrolling="no"
        frameborder="0"
        sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      screenheight: document.documentElement.clientHeight + "px",
      imgList: [
        {
          id: 1,
          url: require("@/assets/images/main/GameScreenshot1.jpg"),
          title: "图片1",
        },
        {
          id: 2,
          url: require("@/assets/images/main/GameScreenshot2.jpg"),
          title: "图片2",
        },
        {
          id: 3,
          url: require("@/assets/images/main/GameScreenshot3.jpg"),
          title: "图片3",
        },
        {
          id: 4,
          url: require("@/assets/images/main/GameScreenshot4.jpg"),
          title: "图片4",
        },
        {
          id: 5,
          url: require("@/assets/images/main/GameScreenshot5.jpg"),
          title: "图片5",
        },
        {
          id: 6,
          url: require("@/assets/images/main/GameScreenshot6.jpg"),
          title: "图片6",
        },
        {
          id: 7,
          url: require("@/assets/images/main/GameScreenshot7.jpg"),
          title: "图片7",
        },
        {
          id: 8,
          url: require("@/assets/images/main/GameScreenshot8.jpg"),
          title: "图片8",
        },
      ],
    };
  },
};
</script>

<style>
h1,
h2 {
  color: #ffa500;

}

.router-link-active {
  text-decoration: none;
  color: yellow;
}

a {
  text-decoration: none;
  color: red;
}

#welcome {
  margin-left: 20%;
  font-family: "微软雅黑";
}

#videocarousel {
  float: right;
  margin: auto;
}

#movie {
  margin: auto;
  width: 100%;
  border: #4b5745 solid 10px;
}
#ag {
  font-size: 1rem;
  color: #ffffff;
  float: left;
  width: 40vw;
  background: url(../assets/images/main/aboutag.webp) no-repeat;
  padding: 25px;
  height: 100%;
}

.el-carousel {
  width: 50vw;
  height: auto;
}

.el-carousel__item img {
  object-fit: cover; /* or object-fit: cover; */
  border: #4b5745 solid 10px;
}
</style>