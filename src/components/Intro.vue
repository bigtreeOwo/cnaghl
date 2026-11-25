<template>
  <div id="screen">
    <div class="menu">
      <audio :src="clickWav" id="clickWav" hidden preload="none">
      </audio>
      <audio :src="hoverWav" id="hoverWav" hidden preload="none">
      </audio>

      <audio v-for="item in fovx" :key="item.name" :src="item.src" :id="item.name" hidden preload="none"></audio>

      <h1 id="welcomehl">H λ l f - L i f e <sup>1</sup><br>A d r e n a l i n e<br>G a m e r</h1>
      <div id="time"></div>
      <ul @click="uiClickPlay">
        <li><a href="/playag" @mouseenter="uiHoverPlay" id="playag">点我立刻启动AG</a></li>
        <li><a href="/index" @mouseenter="uiHoverPlay" id="index">主页</a></li>
        <li><a href="/server" @mouseenter="uiHoverPlay" id="server">我们的服务器</a></li>
        <li><a href="/client" @mouseenter="uiHoverPlay" id="client">下载客户端</a></li>
        <li><a href="/basicskill" @mouseenter="uiHoverPlay" id="tutorial">游戏基础教程</a></li>
        <li><a href="/matchvideo" @mouseenter="uiHoverPlay" id="demo">视频&DEMO</a></li>
        <li><a href="/tournament" @mouseenter="uiHoverPlay" id="tournament">赛事</a></li>
        <!-- <li><a href="https://www.bilibili.com/video/BV1GJ411x7h7" @mouseenter="uiHoverPlay" id="troll">退出</a></li> -->
      </ul>
    </div>
    <div id="gordonsmile">
      <el-image :src="$asset('images/intro/GordonSmile.png')" alt="GordonSmile"></el-image>
    </div>
  </div>

</template>

<script>
import { asset } from '@/utils/asset.js';
import toEnglish from "@/class/uitls/toEnglish.js";

export default {
  data() {
    return {
      centerDialogVisible: true,
      clickWav: asset("audio/IntroUI/buttonclickrelease.wav"),
      hoverWav: asset("audio/IntroUI/buttonrollover.wav"),
      volume: 0.15,
      fovx: [
        // 创建两个相同audio表标签的原因是为了解决小时和分钟相同时，循环播放的问题
        {
          name: "one",
          src: asset("audio/fvox/one.wav"),
        },
        {
          name: "one_2",
          src: asset("audio/fvox/one.wav"),
        },
        {
          name: "two",
          src: asset("audio/fvox/two.wav"),
        },
        {
          name: "two_2",
          src: asset("audio/fvox/two.wav"),
        },
        {
          name: "three",
          src: asset("audio/fvox/three.wav"),
        },
        {
          name: "three_2",
          src: asset("audio/fvox/three.wav"),
        },
        {
          name: "four",
          src: asset("audio/fvox/four.wav"),
        },
        {
          name: "four_2",
          src: asset("audio/fvox/four.wav"),
        },
        {
          name: "five",
          src: asset("audio/fvox/five.wav"),
        },
        {
          name: "five_2",
          src: asset("audio/fvox/five.wav"),
        },
        {
          name: "six",
          src: asset("audio/fvox/six.wav"),
        },
        {
          name: "six_2",
          src: asset("audio/fvox/six.wav"),
        },
        {
          name: "seven",
          src: asset("audio/fvox/seven.wav"),
        },
        {
          name: "seven_2",
          src: asset("audio/fvox/seven.wav"),
        },
        {
          name: "eight",
          src: asset("audio/fvox/eight.wav"),
        },
        {
          name: "eight_2",
          src: asset("audio/fvox/eight.wav"),
        },
        {
          name: "nine",
          src: asset("audio/fvox/nine.wav"),
        },
        {
          name: "nine_2",
          src: asset("audio/fvox/nine.wav"),
        },
        {
          name: "ten",
          src: asset("audio/fvox/ten.wav"),
        },
        {
          name: "ten_2",
          src: asset("audio/fvox/ten.wav"),
        },
        {
          name: "eleven",
          src: asset("audio/fvox/eleven.wav"),
        },
        {
          name: "eleven_2",
          src: asset("audio/fvox/eleven.wav"),
        },
        {
          name: "twelve",
          src: asset("audio/fvox/twelve.wav"),
        },
        {
          name: "twelve_2",
          src: asset("audio/fvox/twelve.wav"),
        },
        {
          name: "thirteen",
          src: asset("audio/fvox/thirteen.wav"),
        },
        {
          name: "fourteen",
          src: asset("audio/fvox/fourteen.wav"),
        },
        {
          name: "fifteen",
          src: asset("audio/fvox/fifteen.wav"),
        },
        {
          name: "sixteen",
          src: asset("audio/fvox/sixteen.wav"),
        },
        {
          name: "seventeen",
          src: asset("audio/fvox/seventeen.wav"),
        },
        {
          name: "eighteen",
          src: asset("audio/fvox/eighteen.wav"),
        },
        {
          name: "nineteen",
          src: asset("audio/fvox/nineteen.wav"),
        },
        {
          name: "twenty",
          src: asset("audio/fvox/twenty.wav"),
        },
        {
          name: "thirty",
          src: asset("audio/fvox/thirty.wav"),
        },
        {
          name: "forty",
          src: asset("audio/fvox/fourty.wav"),
        },
        {
          name: "fifty",
          src: asset("audio/fvox/fifty.wav"),
        },
        {
          name: "am",
          src: asset("audio/fvox/am.wav"),
        },
        {
          name: "pm",
          src: asset("audio/fvox/pm.wav"),
        },
        {
          name: "welcome",
          src: asset("audio/fvox/welcome.wav"),
        },
        {
          name: "timeisnow",
          src: asset("audio/fvox/time_is_now.wav"),
        },
      ],
    };
  },
  methods: {
    uiClickPlay(e) {
      const audio = document.getElementById("clickWav");
      e.preventDefault();
      audio.volume = this.volume;
      if (audio.paused) {
        audio.play();
        setTimeout(() => {
          window.open(e.target.href, "_self");
        }, 400);
      }
    },
    uiHoverPlay(e) {
      const audio = document.getElementById("hoverWav");
      e.preventDefault();
      audio.volume = this.volume;
      if (audio.paused) {
        audio.play();
      }
    },
    open() {
      this.$confirm(
        "<br><h1>欢迎来到AGHL China！<br><br>各种模型、spr、纹理应有尽有<br><br>专业游戏客户端保障流畅体验<br><br>从入门到高手，看教程就够了</h1>",
        "",
        {
          dangerouslyUseHTMLString: true,
          // showClose: false,
          customClass: "message_box_alert",
          confirmButtonText: "进入网站（HEV报时）",
          cancelButtonText: "进入网站（静音）",
          callback: (action) => {
            if (action === "confirm") {
              this.broadcasttime();
            }
            this.$message({
              type: "info",
              message: `欢迎来到AGHL China`,
            });
          },
        }
      );
    },
    broadcasttime() {
      let playlist = []; // 要播放audio的id
      let timemessage = []; // 显示的时间信息
      const date = new Date();
      let hour = date.getHours();
      const minute = date.getMinutes();

      let day = null;

      // 获取是上午还是下午
      if (hour < 12) {
        day = "am";
      } else {
        hour = hour - 12;
        day = "pm";
      }

      // 处理12am的情况
      if (hour === 0) {
        hour = 12;
      }

      //welcome和timeisnow进入播放队列
      playlist.push("welcome", "timeisnow");
      timemessage.push(
        "你好，欢迎来到AGHL China， ",
        "现在时间是&nbsp",
        date.toLocaleTimeString() + " ",
        "&nbsp" + day.toUpperCase()[0] + "." + day.toUpperCase()[1] + "."
      );

      // console.log(toEnglish(hour));
      // 小时数进入播放队列
      playlist.push(toEnglish(hour));

      // 获取分钟的个位和十位
      const minute_ones = minute % 10;
      const minute_tens = minute - minute_ones;
      // console.log("broadcasttime", hour, minute, day, hour_tens, hour_ones, minute_tens, minute_ones);

      //分钟进入播放队列
      if ((minute <= 20 && minute > 0) || minute % 10 === 0) {
        if (hour === minute) {
          playlist.push(toEnglish(minute) + "_2");
        } else {
          playlist.push(toEnglish(minute));
        }
      } else if (minute > 20) {
        // console.log(toEnglish(minute_tens), toEnglish(minute_ones));
        if (hour === minute_ones) {
          playlist.push(toEnglish(minute_tens), toEnglish(minute_ones) + "_2");
        } else {
          playlist.push(toEnglish(minute_tens), toEnglish(minute_ones));
        }
      }

      // 上午下午进入播放队列
      playlist.push(day);

      // console.log(playlist);
      // console.log(audio_welcome, audio_timeisnow, audio_day, audio_hour_tens, audio_hour_ones, audio_minute_tens, audio_minute_ones);

      // 获取播放音频的标签
      let playlist_audio = [];
      for (let i = 0; i < playlist.length; i++) {
        // console.log(playlist[i]);
        let audio = document.getElementById(playlist[i]);
        if (audio) {
          audio.volume = this.volume;
          playlist_audio.push(audio);
        }
      }

      // 获取时间显示标签
      const time_div = document.getElementById("time");

      // console.log("timemessage", timemessage);
      // console.log(playlist_audio);
      // 播放第一个音频
      playlist_audio[0].play();
      time_div.innerHTML = time_div.innerHTML + timemessage[0] + " ";

      // 当前一个音频播放完毕，再播放下一个
      for (let i = 0; i < playlist_audio.length; i++) {
        playlist_audio[i].addEventListener("ended", () => {
          if (i < playlist_audio.length - 1) {
            playlist_audio[i + 1].play();
            if (timemessage[i + 1]) {
              time_div.innerHTML =
                time_div.innerHTML + timemessage[i + 1] + " ";
            }
          }
        });
      }
    },
  },
  created() {
    this.open();
  },
  mounted() {
    document.title = "欢迎来到AGHL中国";
  },
};
</script>

<style>
.message_box_alert {
  width: min(609px, 92vw);
  max-width: 92vw;
  /* 保持原设计 609:328 的横幅比例，避免背景图被拉伸/裁切 */
  aspect-ratio: 609 / 328;
  height: auto;
  min-height: 0;
  padding: 0;
  border: 0;
  background: url("../assets/images/intro/intromessage.webp") center / 100% 100%
    no-repeat;
  color: #ffe0a3 !important;
  overflow: hidden;
}

.message_box_alert .el-message-box__header {
  padding: 10px 12px 0;
}

.message_box_alert .el-message-box__content {
  padding: 4px 18px;
}

.message_box_alert .el-message-box__message h1 {
  margin: 0;
  font-size: clamp(0.8rem, 2.4vw, 1.08rem);
  line-height: 1.55;
  font-weight: 700;
  text-align: center;
  color: #ffe0a3;
}

.message_box_alert .el-message-box__btns {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  padding: 6px 16px 2px;
}

.message_box_alert .el-button {
  color: white;
  font-size: 0.9rem;
  width: min(180px, 40vw);
  margin: 0;
  padding: 8px 10px;
  background: #3f4a37;
  box-shadow: 0px 0px 2px inset #eeeeee;
  border: 0;
  border-radius: 6px;
}

.message_box_alert .el-button:hover {
  background: #ffa500;
  color: white;
}
</style>

<style src="@/assets/css/intro.css" scoped>
</style>