<template>
  <div id="client">
    <h1>游戏客户端/补丁</h1>
    <br />
    <div id="discription">
      <el-card class="box-card" shadow="hover">
        <div slot="header">
          <h2>What are these ?</h2>
        </div>
        <div class="text item">
          这里提供了多种AG相关资源的介绍、下载地址和安装方式。包括BFHL、BFHL、AG
          MOD X以及AG的训练插件Teylo Tranning
          Mod。当然，AG在漫长的发展过程中也发布了许多版本。本站点罗列的是目前AG的主流资源，某些旧资源不再提及。感兴趣想要考古的可以自行上Google搜索。
        </div>
      </el-card>
      <br />
      <el-card class="box-card" shadow="hover">
        <div slot="header">
          <h2>该选哪个？</h2>
        </div>
        <div class="text item">
          如果你只考虑游玩AG而不考虑开服务器，那么可以选择下载BFHL和OpenAG。两者的主要区别在于：BFHL是HL1的一个补丁，而OpenAG是独立模组。两者可以同时安装不产生冲突。
        </div>
        <br />
        <div class="text item">
          BFHL几乎属于必装补丁，因为其能够极大改善原版HLDM的体验。BFHL本身不具备AG的一系列功能，例如额外的游戏模式、投票机制等。但是如果进入装了AG插件（AG
          MOD
          X或AGMini）的服务器，便可以获得和AG一样的游戏体验。而目前国内已经设有若干个带有AG
          MOD
          X的服务器。因此你只需要安装BFHL后进入这些服务器便可以开始愉快地揍人了。如果服务器没有装AG插件，那么你也可以当成体验升级的HLDM来玩。
        </div>
        <br />
        <div class="text item">
          而OpenAG在国外玩家中比较流行，因此如果你想和国外一些Pro玩家切磋一下，则可以启动OpenAG（如果顶得住ping的话）。
        </div>
        <h2>可以参考以下视频</h2>
        <iframe src="http://player.bilibili.com/player.html?aid=1450834316&bvid=BV12v421k7UR&cid=1443550509&p=1&high_quality=1&danmaku=0&autoplay=0&high" width="800px" height="600" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
      </el-card>
    </div>

    <div id="select">
      <el-card class="box-card">
        <div slot="header">
          <h1>点击选择</h1>
          <el-row>
            <router-link to="/client/bugfixedhl"><el-button>BFHL</el-button></router-link>
            <router-link to="/client/openag"><el-button>OpenAG</el-button></router-link>
          </el-row>
          <el-row>
            <router-link to="/client/agmodx"><el-button>AG MOD X</el-button></router-link>
            <router-link to="/client/trainingmod"><el-button>Training Mod</el-button></router-link>
          </el-row>
        </div>
        <div>
          <router-view></router-view>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "client",
  mounted() {
    document.title = "下载客户端 - CN-AGHL";
  }
};
</script>

<style src="@/assets/css/client.css" scoped>
</style>
<style>

.box-card {
  background: #3e4537;
  color: white;
}

.box-card .el-card__header {
  background-color: #4b5745;
  color: white;
}

.box-card .el-card__body {
  background-color: #3e4537;
  color: white;
  height: auto;
}

#select .el-card__body {
  height: 650px;
  overflow-y: scroll;
}
</style>