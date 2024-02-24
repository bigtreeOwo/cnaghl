<template>
  <div>
    <h1>
      <a
        href="https://github.com/andreiseverin/teylo-aim-training-mod/releases/"
        style="color: #ffa500"
        target="_blank"
        >Training Mod(点我下载)</a
      >
    </h1>
    <el-image
      :src="require('@/assets/images/download/trainingmod/TeyloTranning.png')"
      alt="trainingmod"
      lazy
    ></el-image>
    <br />
    <div>
      Teylo Tranning
      Mod是一款由Teylo开发的HL、AG专用的训练插件。其包含BOT对战以及练枪功能。是单人练习AG技巧的绝佳选择。以下是插件的一些功能：
    </div>
    <ul>
      <li>Classic Training（经典训练模式）：</li>
      <p>
        Start/Reset training:
        给予玩家全部武器、无限弹药以及无限生命，并开始计时，系统会同时记录杀敌数量
      </p>
      <p>
        tart/Reset training - no ammo:
        给予玩家全无限生命，但是武器弹药需要自己捡，并开始计时，系统会同时记录杀敌数量
      </p>
      <p>
        Stop training: 停止训练计时，系统将会显示玩家的KPM数据（Kills per
        min，每分钟击杀数）
      </p>
      <p>Add more bots: 添加BOT，BOT具有不同等级，级别越高越强</p>
      <p>Kick a bot: 踢掉一个BOT</p>
      <p>Boost bots HP - 200/200: 设置默认血量和护甲为200/200</p>
      <p>Freeze bots: 冻结所有BOT</p>
      <p>Unfreeze bots: 解冻所有BOT</p>
      <p>Killing Blue Fade: 当击杀敌人时屏幕变蓝</p>
      <p>Drop weaponbox: 是否清除死亡掉落的武器盒</p>
      <p>WallHack: 是否开启透视</p>
      <li>Spawn Training（重生点训练）：</li>
      <p>Add a moving bot: 添加一个移动的BOT，级别越高越强</p>
      <p>Add a stationary: 添加一个静止的BOT</p>
      <p>Remove bots: 移除所有BOT</p>
      <p>Show Spawn Info: 显示重生点的数字编号</p>
      <p>Show Damage info: 显示BOT受到的伤害</p>
      <li>包含来自不同作者的训练地图</li>
    </ul>
    <h2>安装：</h2>
    <div>
      Teylo Trainning
      Mod适用于原版HL、OpenAG以及AG-mini。因此你可以根据自己的爱好选择不同的游玩平台，建议使用OpenAG来作为宿主以获得最佳训练体验。
    </div>
    <br />
    <div>
      到Teylo Trainning
      Mod的Github发布页面下找到最新版本，根据你想游玩的游戏平台下载对应版本，例如如果是OpenAG则下载ag-1.1.0.rar,
      是原版HL或BFHL就下载valve-1.1.0.rar, 是AG MOD
      X就下载valve-ag-mini-1.1.0.rar。
    </div>
    <br />
    <div>
      下载完毕后把压缩包内的文件夹解压到游戏根目录下，覆盖必要文件（建议先做文件备份）
    </div>
    <br />
    <div>
      启动游戏，自行创建房间，若用的是AG平台（包括OpenAG以及AG Mod
      X），需要确认游戏模式是"train"。之后在聊天中输入/train开始训练！
    </div>
    <h2>游戏截图：</h2>
    <el-image
      :src="require('@/assets/images/download/trainingmod/AGT_1.webp')"
      style="border: white 2px solid"
      alt="trainingmod1"
      lazy
    ></el-image>
    <br>
    <el-image
      :src="require('@/assets/images/download/trainingmod/AGT_2.webp')"
      style="border: white 2px solid"
      alt="trainingmod1"
      lazy
    ></el-image>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>