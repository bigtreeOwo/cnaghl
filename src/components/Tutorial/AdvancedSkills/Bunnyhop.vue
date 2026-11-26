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
      <video class="ag-media" controls :poster="prestrafeposter" preload="none">
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
      <video class="ag-media" controls :poster="bunnyhopposter" preload="none">
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
    </p>
    <p>
      <strong style="color: red">3.1 引擎限制的是“投影”，不是速度本身</strong>
      <br>
      每一个物理帧中，引擎只检查当前速度在 wishdir 上的投影（点乘）：<code>proj = vel · wishdir</code>。
      只要投影小于服务器允许的最大速度（AG 中为 320 u/s），就允许沿 wishdir 补上一段加速度，
      补的量由剩余空间和本帧最大加速度共同决定：
    </p>
    <pre class="bunnyhop-formula">addspeed = clamp(RUN_SPEED - dot(vel, wishdir), 0, MAX_ACCEL × frametime)
vel     = vel + wishdir × addspeed</pre>
    <p>
      因此被限制的只是“速度在输入方向上的分量”，速度的模长完全可以超过 320，这正是连跳能不断提速的原因。
      在锐角范围内，wishdir 与 vel 的夹角越接近 90°，投影越小、可补的加速度越大；一旦夹角超过 90°，新速度会偏离原方向，模长反而下降。
      而 wishdir 始终垂直于 view_angle，所以必须让鼠标与 A/D 同步转动，才能把 wishdir 一直“斜着”压在速度的前侧。
      <br>
      <span class="bunnyhop-source__inline">引用来源：Adrian Biagioli（Flafla2）《Bunnyhopping from the Programmer's Perspective》，2015-02-14</span>
    </p>
    <p>
      <strong style="color: red">3.2 摩擦与“落地即起跳”</strong>
      <br>
      贴地时，引擎每帧都会按摩擦系数削减速度：<code>drop = speed × friction × frametime</code>。
      据该文说明，在落地的那一帧引擎不会施加摩擦，玩家只有在这一帧内按下跳跃，才能带着空中获得的速度重新起跳；
      一旦错过，就会先被地面摩擦减速。连跳之所以难，正是因为要精确卡住这一帧；自动连跳（一直按住空格）就是替你稳定地卡帧。
      <br>
      <span class="bunnyhop-source__inline">引用来源：Adrian Biagioli（Flafla2）《Bunnyhopping from the Programmer's Perspective》，2015-02-14</span>
    </p>

    <!-- 动态示意图：按 A/D 并同向转动视角，wishdir 与视角垂直，速度持续增加 -->
    <div class="bunnyhop-demo">
      <canvas ref="demoCanvas" class="bunnyhop-demo__canvas">
        您的浏览器版本过低，不支持 canvas，请升级浏览器
      </canvas>
      <div class="bunnyhop-demo__legend">
        <span class="bunnyhop-demo__legend-item bunnyhop-demo__legend-item--view">view_angle：视角朝向</span>
        <span class="bunnyhop-demo__legend-item bunnyhop-demo__legend-item--vel">vel：当前速度</span>
        <span class="bunnyhop-demo__legend-item bunnyhop-demo__legend-item--wish">wishdir：键盘输入方向</span>
      </div>
      <div class="bunnyhop-demo__controls">
        <div class="bunnyhop-demo__control">
          <span class="bunnyhop-demo__control-label">播放倍率</span>
          <el-slider
            v-model="playbackSpeed"
            class="bunnyhop-demo__slider"
            :min="playbackMin"
            :max="playbackMax"
            :step="0.1"
            :show-tooltip="false"
            size="small"
          />
          <span class="bunnyhop-demo__control-value">{{ playbackSpeed.toFixed(1) }}×</span>
        </div>
        <div class="bunnyhop-demo__control">
          <span class="bunnyhop-demo__control-label">目标速度</span>
          <el-input-number
            v-model="maxSpeed"
            class="bunnyhop-demo__number"
            :min="speedMin"
            :max="speedMax"
            :step="20"
            controls-position="right"
            size="small"
          />
          <span class="bunnyhop-demo__control-unit">u/s</span>
        </div>
      </div>
      <p class="bunnyhop-demo__caption">
        示意图（循环播放）：按 A/D 的同时向同一方向转动鼠标，wishdir 始终垂直于视角并保持与速度成锐角；
        空中不按 W，速度的大小和方向随之改变，达到设定的目标速度后重新播放
      </p>
    </div>

    <!-- 原理内容引用来源，醒目展示，避免与正文混淆 -->
    <div class="bunnyhop-source">
      <p class="bunnyhop-source__title">引用来源（本页原理内容出处）</p>
      <ul>
        <li>
          Adrian Biagioli（Flafla2）.
          <a href="https://adrianb.io/2015/02/14/bunnyhop.html" target="_blank" rel="noopener noreferrer">
            《Bunnyhopping from the Programmer's Perspective》
          </a>
          .2015-02-14.本页 3.1、3.2 中关于“只限制速度在输入方向上的投影”“向量投影与点乘”“摩擦只在贴地时施加、落地帧不施加摩擦”的说明、公式与代码均参考该文；该文内还引用了 Quake III 与 Source SDK 的移动代码。
        </li>
        <li>
          <a href="https://wiki.sourceruns.org/en/common/Bunnyhopping" target="_blank" rel="noopener noreferrer">
            SourceRuns Wiki：Bunnyhopping
          </a>
          （A/D 与鼠标同向转动、空中不按 W 的操作说明）。
        </li>
      </ul>
    </div>

    <iframe class="ag-media" src="http://player.bilibili.com/player.html?bvid=BV1Fs411M77h&cid=1443550509&p=1&high_quality=1&danmaku=0&autoplay=0&high" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
  </div>
</template>

<script>
import { asset } from '@/utils/asset.js';

/**
 * 连跳示意图参数
 * 速度单位为游戏内速度 u/s，角度单位为弧度
 */
/**
 * 连跳示意图参数
 * 速度单位为游戏内速度 u/s，角度单位为弧度
 * 加速公式参考：addspeed = clamp(RUN_SPEED - dot(vel, wishdir), 0, MAX_ACCEL * frametime)
 */
const DEMO_PARAMS = {
  runSpeed: 320, // RUN_SPEED：速度在 wishdir 上的投影上限
  maxAccel: 320, // MAX_ACCEL：每秒最大加速度
  startSpeed: 300, // 起跳时的地速
  defaultPlaybackSpeed: 0.3, // 默认播放倍率（放慢，便于看清加速过程）
  defaultMaxSpeed: 600, // 默认目标速度（提高，延长加速过程）
  minMaxSpeed: 340, // 目标速度下限，避免刚起跳就重置
  maxMaxSpeed: 800, // 目标速度上限（公式决定理论极限约 936 u/s）
  strafeDuration: 0.9, // 单次按 A 或 D 的持续时间（模拟秒）
  leadAngle: Math.PI / 9, // 视角领先速度的角度（20°），保证与速度成锐角
  leadSmooth: 0.12, // 换键时视角换到另一侧的平滑时间（模拟秒）
  holdTime: 0.8, // 达到目标速度后的停顿时间（秒）
};

export default {
  data() {
    return {
      bunnyhop: asset('videos/tutorial/advancedskill/bunnyhop/bunnyhop.mp4'),
      prestrafe: asset('videos/tutorial/advancedskill/bunnyhop/prestrafe.mp4'),
      bunnyhopposter: asset('images/tutorial/advancedskills/bunnyhop/BunnyHop.webp'),
      prestrafeposter: asset('images/tutorial/advancedskills/bunnyhop/prestrafe.webp'),
      // 示意图可调控件
      playbackSpeed: DEMO_PARAMS.defaultPlaybackSpeed, // 播放倍率
      maxSpeed: DEMO_PARAMS.defaultMaxSpeed, // 目标速度（u/s）
      playbackMin: 0.1, // 播放倍率下限
      playbackMax: 2, // 播放倍率上限
      speedMin: DEMO_PARAMS.minMaxSpeed, // 目标速度下限
      speedMax: DEMO_PARAMS.maxMaxSpeed, // 目标速度上限
    };
  },
  mounted() {
    this.initDemo();
  },
  beforeUnmount() {
    this.stopDemo();
  },
  methods: {
    /**
     * 初始化示意图画布：适配尺寸并启动循环动画
     * 动画状态保存在非响应式的 demoState 上，避免每帧触发 Vue 更新
     */
    initDemo() {
      this.demoState = {
        vel: { x: DEMO_PARAMS.startSpeed, y: 0 }, // 当前速度向量
        strafeDir: 1, // 1 = 按 A（向左 strafe），-1 = 按 D（向右 strafe）
        lead: -DEMO_PARAMS.leadAngle, // 视角相对速度方向的偏角
        phase: 0, // 当前按键已持续的时间（模拟秒）
        hold: 0, // 达到目标速度后的剩余停顿时间（秒）
        rafId: 0,
        dpr: 1,
        width: 0,
        height: 0,
      };

      this.$nextTick(() => {
        this.resizeDemo();
        window.addEventListener('resize', this.resizeDemo);

        let last = performance.now();
        const tick = (now) => {
          // 限制单帧步长，避免切换标签页回来后速度突变
          const dt = Math.min((now - last) / 1000, 0.05);
          last = now;
          this.stepDemo(dt);
          this.renderDemo();
          this.demoState.rafId = requestAnimationFrame(tick);
        };
        this.demoState.rafId = requestAnimationFrame(tick);
      });
    },

    /**
     * 按画布实际显示尺寸与设备像素比重设分辨率，保证高分屏下线条清晰
     */
    resizeDemo() {
      const canvas = this.$refs.demoCanvas;
      const state = this.demoState;
      if (!canvas || !state) return;

      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      state.dpr = dpr;
      state.width = rect.width;
      state.height = rect.height;
    },

    /**
     * 当前生效的目标速度（u/s）
     * 不低于起跳速度，否则刚起跳就会触发重播
     * 注：受加速公式限制，速度上限约为 runSpeed / cos(70°) ≈ 936 u/s
     * @returns {number} 目标速度
     */
    getTargetSpeed() {
      return Math.max(this.maxSpeed, DEMO_PARAMS.startSpeed + 10);
    },

    /**
     * 推进一帧状态：按 A/D 的同时向同侧转动视角，wishdir 与视角垂直并保持与速度成锐角，
     * 速度按参考公式叠加；达到用户设定的目标速度后短暂停顿再重新播放
     * @param {number} dt 距离上一帧的时间（秒）
     */
    stepDemo(dt) {
      const state = this.demoState;
      if (!state) return;

      // 播放倍率来自速率滑块，设置过小时兜底，避免画面完全静止
      const dtSim = dt * Math.max(this.playbackSpeed, 0.05);
      const targetSpeed = this.getTargetSpeed();

      // 达到目标速度后的停顿，结束即从头播放
      if (state.hold > 0) {
        state.hold -= dtSim;
        if (state.hold <= 0) this.resetDemo();
        return;
      }

      // 每隔一段时间切换 A/D，模拟玩家左右交替 strafe
      state.phase += dtSim;
      if (state.phase >= DEMO_PARAMS.strafeDuration) {
        state.phase -= DEMO_PARAMS.strafeDuration;
        state.strafeDir = -state.strafeDir;
      }

      // 视角换到速度的另一侧，并平滑过渡（相当于鼠标向 strafe 方向转动）
      const leadTarget = -state.strafeDir * DEMO_PARAMS.leadAngle;
      state.lead +=
        (leadTarget - state.lead) *
        Math.min(1, dtSim / DEMO_PARAMS.leadSmooth);

      // view_angle 领先速度一定角度，wishdir 与视角垂直：按 A 取左侧，按 D 取右侧
      const velAngle = Math.atan2(state.vel.y, state.vel.x);
      const viewAngle = velAngle + state.lead;
      const wishAngle = viewAngle + (state.strafeDir * Math.PI) / 2;
      const wishX = Math.cos(wishAngle);
      const wishY = Math.sin(wishAngle);

      // 参考公式：沿 wishdir 加速，加速度由速度在 wishdir 上的投影决定
      const proj = state.vel.x * wishX + state.vel.y * wishY;
      const addSpeed = Math.max(
        Math.min(
          DEMO_PARAMS.runSpeed - proj,
          DEMO_PARAMS.maxAccel * dtSim
        ),
        0
      );
      state.vel.x += wishX * addSpeed;
      state.vel.y += wishY * addSpeed;

      if (Math.hypot(state.vel.x, state.vel.y) >= targetSpeed) {
        state.hold = DEMO_PARAMS.holdTime;
      }
    },

    /**
     * 重置到初始状态，用于示意图的循环播放
     */
    resetDemo() {
      const state = this.demoState;
      if (!state) return;
      state.vel = { x: DEMO_PARAMS.startSpeed, y: 0 };
      state.strafeDir = 1;
      state.lead = -DEMO_PARAMS.leadAngle;
      state.phase = 0;
      state.hold = 0;
    },

    /**
     * 绘制当前帧：深色底、网格、速度刻度圆、三条向量与地速读数
     */
    renderDemo() {
      const canvas = this.$refs.demoCanvas;
      const state = this.demoState;
      if (!canvas || !state || !state.width || !state.height) return;

      const ctx = canvas.getContext('2d');
      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);

      const width = state.width;
      const height = state.height;
      const cx = width / 2;
      const cy = height / 2;
      const base = Math.min(width, height);

      // 背景
      ctx.fillStyle = '#10120e';
      ctx.fillRect(0, 0, width, height);

      // 网格
      ctx.strokeStyle = 'rgba(233, 235, 225, 0.06)';
      ctx.lineWidth = 1;
      const grid = 36;
      ctx.beginPath();
      for (let x = cx % grid; x < width; x += grid) {
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
      }
      for (let y = cy % grid; y < height; y += grid) {
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
      }
      ctx.stroke();

      // 速度刻度圆：随目标速度自适应比例，同时画出当前目标速度参考圆
      const targetSpeed = this.getTargetSpeed();
      const unit = (base * 0.46) / Math.max(600, targetSpeed);
      ctx.setLineDash([4, 6]);
      ctx.strokeStyle = 'rgba(233, 235, 225, 0.14)';
      [200, 400].forEach((speed) => {
        if (speed >= targetSpeed) return;
        ctx.beginPath();
        ctx.arc(cx, cy, speed * unit, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.strokeStyle = 'rgba(255, 156, 26, 0.45)';
      ctx.beginPath();
      ctx.arc(cx, cy, targetSpeed * unit, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      const speed = Math.hypot(state.vel.x, state.vel.y);
      const velAngle = Math.atan2(state.vel.y, state.vel.x);
      const viewAngle = velAngle + state.lead; // 视角领先速度一定角度
      // wishdir 与视角垂直：按 A 在左侧，按 D 在右侧
      const wishAngle = viewAngle + (state.strafeDir * Math.PI) / 2;

      // 三条向量：视角（红）、速度（绿）、输入方向（蓝）
      this.drawVector(ctx, cx, cy, viewAngle, base * 0.32, '#ff7a7a', 'view_angle');
      this.drawVector(ctx, cx, cy, wishAngle, base * 0.24, '#79c0ff', 'wishdir');
      this.drawVector(
        ctx,
        cx,
        cy,
        velAngle,
        Math.min(speed * unit, base * 0.46),
        '#7ee787',
        `${Math.round(speed)} u/s`
      );

      // 玩家位置
      ctx.fillStyle = '#e9ebe1';
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fill();

      // 左上角读数
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillStyle = 'rgba(233, 235, 225, 0.6)';
      ctx.font = "12px 'Segoe UI', 'Microsoft YaHei', sans-serif";
      ctx.fillText('地速', 14, 12);
      ctx.fillStyle = '#ff9c1a';
      ctx.font = "700 22px 'Segoe UI', 'Microsoft YaHei', sans-serif";
      ctx.fillText(`${Math.round(speed)} u/s`, 14, 28);

      // 右上角提示当前按键与鼠标方向
      ctx.textAlign = 'right';
      ctx.fillStyle = 'rgba(233, 235, 225, 0.6)';
      ctx.font = "12px 'Segoe UI', 'Microsoft YaHei', sans-serif";
      ctx.fillText(
        state.strafeDir > 0 ? '按住 A + 鼠标左转' : '按住 D + 鼠标右转',
        width - 14,
        12
      );
    },

    /**
     * 在画布上绘制一条带箭头的向量
     * @param {CanvasRenderingContext2D} ctx 画布上下文
     * @param {number} cx 起点横坐标
     * @param {number} cy 起点纵坐标
     * @param {number} angle 向量方向（弧度，逆时针为正）
     * @param {number} length 向量长度（像素）
     * @param {string} color 颜色
     * @param {string} label 箭头端点处的文字，可为空
     */
    drawVector(ctx, cx, cy, angle, length, color, label) {
      const len = Math.max(length, 8);
      const x2 = cx + Math.cos(angle) * len;
      const y2 = cy - Math.sin(angle) * len; // 画布 y 轴向下，取反模拟数学坐标

      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // 箭头头部
      const head = 9;
      const wing = 0.42;
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(
        x2 - Math.cos(angle - wing) * head,
        y2 + Math.sin(angle - wing) * head
      );
      ctx.lineTo(
        x2 - Math.cos(angle + wing) * head,
        y2 + Math.sin(angle + wing) * head
      );
      ctx.closePath();
      ctx.fill();

      if (label) {
        ctx.font = "600 12px 'Segoe UI', 'Microsoft YaHei', sans-serif";
        ctx.textBaseline = 'middle';
        ctx.textAlign = Math.cos(angle) >= 0 ? 'left' : 'right';

        // 标签跟随箭头端点，同时限制在画布内，避免窄屏时被裁切
        // 画布已按 dpr 缩放，除以 a 换算回 CSS 像素坐标
        const dpr = ctx.getTransform().a || 1;
        const canvasW = ctx.canvas.width / dpr;
        const canvasH = ctx.canvas.height / dpr;
        const textWidth = ctx.measureText(label).width;
        const pad = 10;
        let labelX = x2 + Math.cos(angle) * pad;
        let labelY = y2 - Math.sin(angle) * pad;
        if (ctx.textAlign === 'left') {
          labelX = Math.min(labelX, canvasW - 10 - textWidth);
        } else {
          labelX = Math.max(labelX, 10 + textWidth);
        }
        labelY = Math.min(Math.max(labelY, 10), canvasH - 10);

        ctx.fillText(label, labelX, labelY);
      }
    },

    /**
     * 停止动画帧循环并移除窗口监听，避免组件卸载后继续执行
     */
    stopDemo() {
      if (this.demoState && this.demoState.rafId) {
        cancelAnimationFrame(this.demoState.rafId);
      }
      window.removeEventListener('resize', this.resizeDemo);
      this.demoState = null;
    },
  },
};
</script>

<style scoped>
.bunnyhop-demo {
  width: 100%;
  max-width: 720px;
  margin: 18px auto;
  padding: 12px;
  background: var(--ag-surface);
  border: 1px solid var(--ag-border);
  border-radius: var(--ag-radius);
}

.bunnyhop-demo__canvas {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  border-radius: var(--ag-radius-sm);
  background: #10120e;
}

.bunnyhop-demo__legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 18px;
  margin-top: 10px;
  font-size: 0.85rem;
  color: var(--ag-text-muted);
}

.bunnyhop-demo__legend-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.bunnyhop-demo__legend-item::before {
  content: '';
  width: 14px;
  height: 3px;
  border-radius: 2px;
  background: currentColor;
}

.bunnyhop-demo__legend-item--view {
  color: #ff7a7a;
}

.bunnyhop-demo__legend-item--vel {
  color: #7ee787;
}

.bunnyhop-demo__legend-item--wish {
  color: #79c0ff;
}

.bunnyhop-demo__caption {
  margin: 10px 0 0;
  font-size: 0.82rem;
  line-height: 1.6;
  color: var(--ag-text-dim);
  text-align: center;
}

/* 正文公式块：等宽字体，窄屏可横向滚动 */
.bunnyhop-formula {
  max-width: 720px;
  margin: 10px auto 14px;
  padding: 10px 14px;
  overflow-x: auto;
  font-family: 'Cascadia Code', Consolas, 'Courier New', monospace;
  font-size: 0.82rem;
  line-height: 1.7;
  color: var(--ag-text);
  background: #10120e;
  border: 1px solid var(--ag-border);
  border-left: 3px solid var(--ag-primary);
  border-radius: var(--ag-radius-sm);
  white-space: pre;
}

/* 正文中的行内代码与变量名 */
.AGTricksContent code {
  padding: 1px 5px;
  font-family: 'Cascadia Code', Consolas, 'Courier New', monospace;
  font-size: 0.88em;
  color: var(--ag-primary);
  background: rgba(255, 156, 26, 0.1);
  border-radius: 4px;
}

/* 引用来源：橙色强调卡片，与正文明显区分 */
.bunnyhop-source {
  width: 100%;
  max-width: 720px;
  margin: 18px auto;
  padding: 12px 16px 12px 18px;
  font-size: 0.86rem;
  line-height: 1.75;
  color: var(--ag-text-muted);
  background: rgba(255, 156, 26, 0.08);
  border: 1px solid rgba(255, 156, 26, 0.35);
  border-left: 4px solid var(--ag-primary);
  border-radius: var(--ag-radius-sm);
}

.bunnyhop-source__title {
  margin: 0 0 6px;
  font-weight: 700;
  color: var(--ag-primary);
}

.bunnyhop-source ul {
  margin: 0;
  padding-left: 18px;
}

.bunnyhop-source li + li {
  margin-top: 6px;
}

.bunnyhop-source a {
  color: var(--ag-primary);
  text-decoration: underline;
  word-break: break-all;
}

/* 段落末尾的行内出处标注，保证引用来源足够醒目 */
.bunnyhop-source__inline {
  display: block;
  margin-top: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--ag-primary);
}

/* 示意图控件：播放倍率滑块 + 目标速度输入框 */
.bunnyhop-demo__controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 24px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--ag-border);
}

.bunnyhop-demo__control {
  display: flex;
  flex: 1 1 240px;
  align-items: center;
  gap: 8px;
  min-width: 0;
  font-size: 0.85rem;
  color: var(--ag-text-muted);
}

.bunnyhop-demo__control-label {
  flex: none;
}

.bunnyhop-demo__slider {
  flex: 1 1 auto;
  min-width: 80px;
  margin: 0 4px;
}

.bunnyhop-demo__slider :deep(.el-slider__runway) {
  background-color: var(--ag-border);
}

.bunnyhop-demo__control-value {
  flex: none;
  width: 40px;
  font-variant-numeric: tabular-nums;
  text-align: right;
  color: var(--ag-primary);
}

.bunnyhop-demo__control-unit {
  flex: none;
  color: var(--ag-text-dim);
}

.bunnyhop-demo__number {
  flex: none;
  width: 108px;
}

.bunnyhop-demo__number :deep(.el-input__wrapper) {
  background-color: #10120e;
  box-shadow: 0 0 0 1px var(--ag-border) inset;
}

.bunnyhop-demo__number :deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px var(--ag-primary) inset;
}

.bunnyhop-demo__number :deep(.el-input__inner) {
  color: var(--ag-text);
}
</style>

<style src="@/assets/css/advancedskill.css" scoped>
</style>
