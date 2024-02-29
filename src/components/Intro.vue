<template>
  <div id="screen">
    <div class="menu">
      <audio :src="clickWav" id="clickWav" hidden>
      </audio>
      <audio :src="hoverWav" id="hoverWav" hidden>
      </audio>

      <h1 id="welcome">H λ l f - L i f e <sup>1</sup><br>A d r e n a l i n e&nbsp;&nbsp;G a m e r</h1>
      <ul @click="uiClickPlay">
        <li><a href="/index" @mouseenter="uiHoverPlay" id="index">主页</a></li>
        <li><a href="/server" @mouseenter="uiHoverPlay" id="server">我们的服务器</a></li>
        <li><a href="/client" @mouseenter="uiHoverPlay" id="client">下载客户端</a></li>
        <li><a href="/basicskill" @mouseenter="uiHoverPlay" id="tutorial">游戏基础教程</a></li>
        <li><a href="/matchvideo" @mouseenter="uiHoverPlay" id="demo">DEMO</a></li>
        <li><a href="/tournament" @mouseenter="uiHoverPlay" id="tournament">赛事</a></li>
        <!-- <li><a href="https://www.bilibili.com/video/BV1GJ411x7h7" @mouseenter="uiHoverPlay" id="troll">退出</a></li> -->
      </ul>
    </div>
    <div id="gordonsmile">
      <el-image :src="require('@/assets/images/intro/GordonSmile.png')" alt="GordonSmile"></el-image>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      centerDialogVisible: true,
      clickWav: "./sound/IntroUI/buttonclickrelease.wav",
      hoverWav: "./sound/IntroUI/buttonrollover.wav",
      volume: 0.2,
    }
  },
  methods: {
    uiClickPlay(e) {
      const audio = document.getElementById('clickWav');
      e.preventDefault();
      audio.volume = this.volume;
      if (audio.paused) {
        audio.play();
        setTimeout(() => {
          window.open(e.target.href, "_self");
        }, 400)
      }
    }
    ,
    uiHoverPlay(e) {
      const audio = document.getElementById('hoverWav');
      e.preventDefault();
      audio.volume = this.volume;
      if (audio.paused) {
        audio.play();
      }
    },
    open() {
      this.$alert('<br><h1>欢迎来到AGHL China！<br><br>各种模型、spr、纹理应有尽有<br><br>专业游戏客户端保障流畅体验<br><br>从入门到高手，看教程就够了</h1>', '', {
        dangerouslyUseHTMLString: true,
        customClass: 'message_box_alert',
        confirmButtonText: '进入网站',
        callback: action => {
          this.$message({
            type: 'info',
            message: `欢迎来到AGHL China`
          })
        }
      })
    }
  },
  created() {
    this.open();
  }
}

</script>

<style>
.message_box_alert {
  width: 609px;
  height: 328px;
  border: 0;
  background: url("../assets/images/intro/intromessage.webp");
  color: pink !important;
}

.message_box_alert .el-button--primary {
  font-size: 1rem;
  width: 100px;
  background: #4b5745;
  box-shadow: 0px 0px 2px inset #eeeeee;
  border: 0;
  border-radius: 0;
  margin: 10px;
}

.message_box_alert .el-button--primary:hover {
  background: #ffa500;
  color: white;
}
</style>

<style src="@/assets/css/intro.css" scoped>

</style>