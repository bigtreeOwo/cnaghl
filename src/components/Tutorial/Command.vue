<template>
  <div>
    <h1>游 戏 指 令 说 明</h1>

    <el-card class="box-card">
      <div slot="header">
        <h1>原版指令</h1>
      </div>
      <h2>游戏中有许多不同功能的指令，详情参见<a href="https://developer.valvesoftware.com/wiki/List_of_Half-Life_console_commands_and_variables" target="_blank">v社官方说明</a></h2>
      <div class="text item">
        现在介绍几个关键指令
      </div>
      <ul class="Code">
        <li>bind指令</li>
        bind [key] [command(s)] 为某个按键绑定一个指令或者一批指令,例如<br>
        bind z weapon_shotgun 在游戏中按下z键就可以切换到霰弹枪<br>
        bind m "say_team ^2Dropped ^3[^5%w^3] at ^8%l;drop" 发送当前武器信息，丢掉当前武器<br>
        <br>
        <li>alias指令</li>
        alias [aliasname] [command(s)] 为某个或者某些指令设置别名，例如<br>
        alias 100fps "fps_max 100" 把后面"fps_max 100"这条指令取一个别名为100fps，这时我们如果设置bind f1 100fps，那么按下f1就会切换到100fps<br>
        alias dropweapon "say_team ^2Dropped ^3[^5%w^3] at ^8%l;drop" 为dropweapon指令设置别名为dropweapon，这时我们如果设置bind g dropweapon，那么按下g就会发送丢弃武器信息并丢弃武器，和上述效果一样<br>
        <br>
        <li>exec指令</li>
        exec [filename] 执行一个指令文件，适用于加载已有cfg配置文件，例如<br>
        exec bigtree.cfg 把bigtree.cfg文件中的指令一行一行地执行<br>
      </ul>
    </el-card>
    <br>
    <br>
    <el-card class="box-card">
      <div slot="header">
        <h1>AG指令</h1>
      </div>
      <h2>==控制台指令==</h2>
      <pre class="Code">
help - 列出所有指令并解释
spectate - 切换观察者
timeout - 比赛中发起一分钟倒计时暂停
ready/notready - 准备
play_team file.wav - 向队友播放音频
play_close file.wav - 向附近的人播放音频
settings - 显示服务器设置
auth name pass - 验证身份为管理员
newpass oldpass newpass - 修改管理员密码
stopsound - 停止正在播放的所有音频
+commandmenu - 显示菜单
togglebrowser - 切换到服务其浏览器。密码保存在password.txt中
customtimer (秒数) - 设置自定义倒计时
dropitems or drop flag - 在CTF模式中丢下旗帜
agrecord (文件名) - 录制demo到特定文件
loadauthid (文件路径) - 加载玩家认证信息（steamid对应的真实名称），需要有realnames.txt文件。

</pre>

      <pre class="Code">
say - 向所有人发送信息
say_team - 向队友发送信息
say_close - 向附近的人发送信息
</pre>

      <h2>==发送玩家信息指令==</h2>
      <pre class="Code">
%H - 生命值
%A - 护甲值
%L - 位置
%W - 武器
%Q - 弹药
%P - 是否捡起长跳
%F - 是否捡起旗帜
</pre>

      <h2>==客户端指令== 推荐设置 (如无特殊说明，1表示开启, 0表示关闭)</h2>
      <pre class="Code">
hud_color "255 160 0" - 修改hud显示颜色
con_color "255 160 0" - 修改控制台信息颜色
hud_centerid 1 - 居中玩家名到准星下， 0表示把名称移动到左边
hud_playerid 1 -显示玩家id
hud_spectatebar 1 - 显示观察者菜单
hud_timer 1 - 显示计时器： 1表示剩余时间，2表示当前时间，3为系统时间， 0 关闭.
hud_settings 1 - 显示服务器设置
hud_weapon 1 - 在HUD上显示当前物品（适合关掉武器模型时）
hud_takesshots 1 - 在换地图时截图
cl_matchreport 1 - 每张图换图后在/aghl/matchreport路径下生成比赛报告
cl_autowepswitch 2 - 自动切换到捡起的武器（如果更好）
cl_disablespecs 0 - 阻止其他人观察自己
cl_scores 2 - HUD上显示小型计分板，队伍积分或玩家积分
cl_scores_pos "30 30" - 小型计分板位置，默认在左上角
cl_old_scoreboard 1 - 是否开启旧的比赛积分板
cl_only_team_talk 0 - 是否开启队内通话
cl_show_colors 1 - Set to 0 to turn off the colors.
cl_ctf_volume 1 - CTF声音
cl_lc 1 - 延迟补偿
cl_lw 1 - Client side controlled effects.
</pre>

      <h2>==投票，管理员指令==</h2>
      <pre class="Code">
agstart - 开始比赛
agallow (玩家名) - 允许玩家加入比赛
agpause - 暂停服务其
agnextmap (map) - 设置下一张地图
agnextmode (mode) - 设置下一个游戏模式
ffa - 切换到全武器模式
tdm - 切换到tdm (FF1, WS0)模式
tdm2 - 切换到tdm2 (FF0,WS0)模式
tdm3 - 切换到tdm3 (FF0,WS1)模式
tdmx - 切换到tdmx模式
arena - 切换到arena模式
arcade - 切换到arcade模式
sgbow - 切换到仅用霰弹枪和弩模式
instagib - 切换到秒伤模式
lts - 切换到Last Team Standing模式
lms - 切换到Last Man Standing模式
ctf - 切换到CTF模式
ag_spectalk 1 - 允许观察者说话
ag_spec_team_only 0 - 仅允许观察者队伍内说话
ag_gauss_fix 1 - 修复self_gauss伤害
ag_rpg_fix 0 - 修复rpg的bug
</pre>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    
  },
  mounted() {
    document.title = "指令 - CN-AGHL"
  }
}
</script>
<style src="@/assets/css/command.css" scoped>
</style>