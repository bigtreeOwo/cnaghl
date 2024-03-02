<template>
  <div id="screen">
    <div class="menu">
      <audio :src="clickWav" id="clickWav" hidden preload="none">
      </audio>
      <audio :src="hoverWav" id="hoverWav" hidden preload="none">
      </audio>

      <audio v-for="item in fovx" :key="item.name" :src="item.src" :id="item.name" hidden></audio>

      <h1 id="welcomehl">H λ l f - L i f e <sup>1</sup><br>A d r e n a l i n e&nbsp;&nbsp;G a m e r</h1>
      <div id="time"></div>
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
import toEnglish from '@/class/uitls/toEnglish.js';

export default {
  data() {
    return {
      centerDialogVisible: true,
      clickWav: "./sound/IntroUI/buttonclickrelease.wav",
      hoverWav: "./sound/IntroUI/buttonrollover.wav",
      volume: 0.2,
      fovx: [
        {
          name: "one",
          src: "./sound/fvox/one.wav",
        },
        {
          name: "two",
          src: "./sound/fvox/two.wav",
        },
        {
          name: "three",
          src: "./sound/fvox/three.wav",
        },
        {
          name: "four",
          src: "./sound/fvox/four.wav",
        },
        {
          name: "five",
          src: "./sound/fvox/five.wav",
        }
        , {
          name: "six",
          src: "./sound/fvox/six.wav",
        },
        {
          name: "seven",
          src: "./sound/fvox/seven.wav",
        },
        {
          name: "eight",
          src: "./sound/fvox/eight.wav",
        },
        {
          name: "nine",
          src: "./sound/fvox/nine.wav",
        },
        {
          name: "ten",
          src: "./sound/fvox/ten.wav",
        },
        {
          name: "eleven",
          src: "./sound/fvox/eleven.wav",
        },
        {
          name: "twelve",
          src: "./sound/fvox/twelve.wav",
        },
        {
          name: "thirteen",
          src: "./sound/fvox/thirteen.wav",
        },
        {
          name: "fourteen",
          src: "./sound/fvox/fourteen.wav",
        },
        {
          name: "fifteen",
          src: "./sound/fvox/fifteen.wav",
        },
        {
          name: "sixteen",
          src: "./sound/fvox/sixteen.wav",
        },
        {
          name: "seventeen",
          src: "./sound/fvox/seventeen.wav",
        },
        {
          name: "eighteen",
          src: "./sound/fvox/eighteen.wav",
        },
        {
          name: "nineteen",
          src: "./sound/fvox/nineteen.wav",
        }, {
          name: "twenty",
          src: "./sound/fvox/twenty.wav",
        },
        {
          name: "thirty",
          src: "./sound/fvox/thirty.wav",
        }, {
          name: "forty",
          src: "./sound/fvox/fourty.wav",
        },
        {
          name: "fifty",
          src: "./sound/fvox/fifty.wav",
        },
        {
          name: "am",
          src: "./sound/fvox/am.wav",
        },
        {
          name: "pm",
          src: "./sound/fvox/pm.wav",
        },
        {
          name: "welcome",
          src: "./sound/fvox/welcome.wav",
        }
        ,
        {
          name: "timeisnow",
          src: "./sound/fvox/time_is_now.wav",
        }

      ],


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
        // showClose: false,
        customClass: 'message_box_alert',
        confirmButtonText: '进入网站',
        callback: action => {
          if (action === 'confirm') {
            this.broadcasttime();
          }
          this.$message({

            type: 'info',
            message: `欢迎来到AGHL China`
          })
        }
      })
    },
    broadcasttime() {
      let playlist = [];// 要播放audio的id
      let timemessage = [];// 显示的时间信息
      const date = new Date();
      let hour = date.getHours();
      const minute = date.getMinutes();
      let day = null;
      if (hour < 12) {
        day = "am";
      } else {
        hour = hour - 12;
        day = "pm";
      }
      if (hour === 0) {
        hour = 12;
      }
      const minute_ones = minute % 10;
      const minute_tens = minute - minute_ones;
      // console.log("broadcasttime", hour, minute, day, hour_tens, hour_ones, minute_tens, minute_ones);

      playlist.push("welcome", "timeisnow");
      timemessage.push("你好，欢迎来到AGHL China，", "现在时间是", date.toLocaleTimeString(), day.toUpperCase());

      const audio_welcome = this.$refs["welcome"];
      const audio_timeisnow = this.$refs["timeisnow"];
      // console.log(toEnglish(hour));
      playlist.push(toEnglish(hour));

      if ((minute <= 20 && minute > 0) || (minute % 10 === 0)) {
        playlist.push(toEnglish(minute));
      } else if (minute > 20) {
        console.log(toEnglish(minute_tens), toEnglish(minute_ones));
        playlist.push(toEnglish(minute_tens), toEnglish(minute_ones));
      }

      playlist.push(day);


      console.log(playlist);
      // console.log(audio_welcome, audio_timeisnow, audio_day, audio_hour_tens, audio_hour_ones, audio_minute_tens, audio_minute_ones);
      let playlist_audio = [];
      for (let i = 0; i < playlist.length; i++) {
        console.log(playlist[i]);
        let audio = document.getElementById(playlist[i]);
        audio.volume = this.volume;
        if (audio) {
          playlist_audio.push(audio);
        }
      }

      const time_div = document.getElementById("time");


      console.log("timemessage", timemessage);
      // console.log(playlist_audio);
      playlist_audio[0].play();
      time_div.innerText = time_div.innerText + timemessage[0] + " ";
      for (let i = 0; i < playlist_audio.length; i++) {
        playlist_audio[i].addEventListener("ended", () => {
          if (i < playlist_audio.length - 1) {
            playlist_audio[i + 1].play();
            if (timemessage[i + 1]) {
              time_div.innerText = time_div.innerText + timemessage[i + 1] + " ";
            }
          }
        })
      }

    }
  },
  created() {
    this.open();
  },
  mounted() {

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