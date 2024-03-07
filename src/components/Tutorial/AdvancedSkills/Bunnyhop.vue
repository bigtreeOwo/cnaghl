<template>
  <div class="AGTricksContent">
    <h1>连 跳（BunnyHopping）</h1>
    <p>
      <strong style="color: red">1、什么是连跳。</strong>
      <br>
      如果你玩过cs1.6的kz、或者是csgo的kz，你肯定对连跳不陌生。兔子跳是在1997到1998年的时候于雷神之锤1中被发现的技巧，第一次使用BunnyHop是在1998年9月完成的Quake done Quick Lite的游戏速通上面。因为半条命1的金源引擎是基于Quake1的，所以这个技巧被带到了金源引擎中。玩家们对这个bug并不排斥，反而用这个bug拉高了游戏上限，衍生出很多其他的进阶游戏技巧。
      <br>
    </p>
    <hr>
    <p>
      <strong style="color: red">2、如何使用连跳</strong>
      <br>
      首先，在AG中，自动连跳和一些其他的脚本时被允许使用的，因为这样可以简化操作，将游戏上限提高。大部分情况下，在连跳时，空格是不会松开的。所以请在练习连跳前安装<a href="/client/bugfixedhl">BugfixedHL</a> 或者 <a href="/client/openag">OpenAG</a>。
      <br>
      <br>
      <strong style="color: red">2.1 prestrafe</strong>（走地速）
      <br>
      <br>
      在起跳之前，需要prestrafe，即跑地速。按住W和A的同时，鼠标控制视角向左；按住W和D的同时，鼠标控制视角向右。
      <br>
      在标准的AG服务器参数中，平地走地速为300，使用prestrafe时，地速可达到400+。（<strong style="color: red">演示如下，注意下方地速的增加</strong>）
      <br>
      <video width="800px" height="600px" style="margin-left: 20%;" controls :poster="prestrafeposter" preload="none">
        您的浏览器不支持html5播放视频
        <source :src="prestrafe" type="video/mp4">
      </video>
      <br>
      <br>
      <strong style="color: red">2.2 air strafe</strong>（空中加速）
      <br>
      操作方法：键盘按A时，有向左移动的趋势，同时鼠标控制视角向左转；键盘按D时，有向右移动的趋势，同时鼠标控制视角向右转。(<strong style="color: red">演示如下，注意在键盘A和D按键切换时，鼠标方向的控制</strong>)
      <br>
      <br>
      <video width="800px" height="600px" style="margin-left: 20%;" controls :poster="bunnyhopposter" preload="none">
        您的浏览器不支持html5播放视频
        <source :src="bunnyhop" type="video/mp4">
      </video>
    </p>
    <hr>
    <p>
      <strong style="color: red">3、原理。（仅限于半条命1中。雷神之锤2代及之后的续作、半条命2等其他游戏的原理稍有不同）</strong>
      <br>
      在游戏中，玩家的移动状态可以用三个向量表示：
      <br>
      <strong style="color:red">view_angle</strong>（玩家视角朝向）
      <strong style="color:green">vel</strong>（当前移动速度）
      <strong style="color:blue">wishdir</strong>（键盘输入的移动朝向）
      <br>
      <strong style="color:red">view_angle</strong>和<strong style="color:blue">wishdir</strong>之间的夹角只能是0°、45°、90°、135°、180°的其中一种角度
      <br>
      <!-- <button @click="drawBunnyhop">开始绘制</button>
      <br>
      <br>
      <canvas id="myCanvas" ref="myCanvas" width="700px" height="700px">
        您的浏览器版本过低，不支持canvas，请升级浏览器
      </canvas> -->
      <iframe src="http://player.bilibili.com/player.html?bvid=BV1Fs411M77h&cid=1443550509&p=1&high_quality=1&danmaku=0&autoplay=0&high" width="800px" height="600" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="margin-left: 20%;"> </iframe>
    </p>
  </div>
</template>
<script>
import Vector2D from '@/class/Vector2D.js';
export default {
  data() {
    return {
      code: `
      private Vector3 Accelerate(Vector3 accelDir, Vector3 prevVelocity, float accelerate, float max_velocity)
      {
        float projVel = Vector3.Dot(prevVelocity, accelDir); // Vector projection of Current velocity onto accelDir.
        float accelVel = accelerate * Time.fixedDeltaTime; // Accelerated velocity in direction of movment

        // If necessary, truncate the accelerated velocity so the vector projection does not exceed max_velocity
        if(projVel + accelVel > max_velocity)
          accelVel = max_velocity - projVel;

        return prevVelocity + accelDir * accelVel;
      }
      `,
      vel: null,
      wishdir: null,
      view_angle: null,
      intervalIdViewAngle: null,
      intervalIdDraw: null,
      bunnyhop: require("@/assets/videos/tutorial/advancedskill//bunnyhop/bunnyhop.mp4"),
      prestrafe: require("@/assets/videos/tutorial/advancedskill/bunnyhop/prestrafe.mp4"),
      bunnyhopposter: require("@/assets/images/tutorial/advancedskills/bunnyhop/BunnyHop.webp"),
      prestrafeposter: require("@/assets/images/tutorial/advancedskills/bunnyhop/prestrafe.webp"),
    }
  },
  methods: {
    drawBunnyhop() {
      this.vel = new Vector2D(0, 50);
      this.wishdir = new Vector2D(20, 10);
      this.view_angle = new Vector2D(-10, 20);
      console.log("drawbunnyhop -------------------");
      const MAX_SPEED = 1000;
      const ACCEL = 10;
      const canvas = document.querySelector('canvas');
      const ctx = canvas.getContext('2d');
      console.log(this.vel.x);
      console.log(this.vel.dot(this.wishdir));

      // 重置canvas原点
      ctx.translate(canvas.width / 2, canvas.height);
      ctx.scale(1, -1);

      this.intervalIdViewAngle = setInterval(() => {
        this.wishdir.rotate(Math.PI);
      }, 1500);

      this.intervalIdDraw = setInterval(() => {
        console.log("draw time------------------------------------------------");
        console.log("vel:", this.vel);
        console.log("wishdir:", this.wishdir);
        console.log("view_angle:", this.view_angle);
        ctx.clearRect(-350, 350, 350, 0);

        // accelerate
        console.log("accelerate-------------------------------------");

        let projVel = this.vel.dot(this.wishdir);
        let accelVel = ACCEL * 3;

        if (projVel + accelVel > MAX_SPEED) {
          accelVel = MAX_SPEED - projVel;
        }
        this.vel = this.vel.add(this.wishdir.multiply(accelVel));

        //drawvel 
        console.log("draw vel time------------------------------------------------");
        console.log("vel:", this.vel);
        console.log("wishdir:", this.wishdir);
        console.log("view_angle:", this.view_angle);
        ctx.strokeStyle = 'green';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.vel.x, this.vel.y);
        ctx.stroke();


        // drawwishdir
        console.log("draw wishdir time------------------------------------------------");
        console.log("vel:", this.vel);
        console.log("wishdir:", this.wishdir);
        console.log("view_angle:", this.view_angle);
        ctx.strokeStyle = 'blue';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.wishdir.x, this.wishdir.y);
        ctx.stroke();

        // drawviewangle
        console.log("draw view angle time------------------------------------------------");
        console.log("vel:", this.vel);
        console.log("wishdir:", this.wishdir);
        console.log("view_angle:", this.view_angle);
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.view_angle.x, this.view_angle.y);
        ctx.stroke();
      }, 500);
    }
  },
  mounted() {
    // this.drawBunnyhop();
  },

  destroyed() {
    console.log("destroyed");
    clearInterval(this.intervalIdDraw);
    clearInterval(this.intervalIdWishdir);
  }
}
</script>


<style scoped>
#myCanvas {
  margin-left: 20%;
  background: white;
}
</style>

<style src="@/assets/css/advancedskill.css" scoped>
</style>