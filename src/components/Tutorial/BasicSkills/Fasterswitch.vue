<template>
  <div class="AGTricksContent">
    <h1>快 速 切 枪(Fast Switch)</h1>
    <p>
      AG中的许多武器是有攻击后摇的，例如9mmAR的榴弹、十字弩等。因此为了填补攻击后摇带来的火力空窗期，玩家往往会换出其他武器进行攻击。然而<span style="font-weight: bold;">使用默认的武器切换方式实在是太慢太麻烦了</span>，例如在满装备下要切出蜂巢枪，则要按4下“4”键才能切换，这将会让你在比赛中吃大亏。所以学会快速切枪是很有必要的。下图展示的是依次使用榴弹、RPG、霰弹枪、十字弩和357左轮来轮番对敌人进行输出。
    </p>

    <el-image :src="require('@/assets/images/tutorial/basicskills/FS.gif')" alt="FS" lazy></el-image>
    <p class="ImgCaption">
      图：丝滑小连招带走敌人
    </p>

    <p>
      快速切枪的方法非常简单，只需要绑定按键到武器代码即可。最简单的做法是在控制台输入bind "你想要的按键" "武器代码",例如以下命令可以实现按g切换到高斯，按v切换到霰弹枪
    </p>

    <p class="Code">
      bind "g" "weapon_gauss"
      <br>
      bind "v" "weapon_shotgun"
    </p>

    <p>
      各个武器的代码可以在<span><a href="/weapon">武器的使用</a></span>中找到。除了在控制台中写入的方法以外，你也可以直接将以上代码写入到valve/config.cfg（或ag/config.cfg）文件中。又或者，你可以将各个武器的按键直接加入到你的游戏设置当中，具体方式为用记事本打开valve/gfx/shell中的kb_act.lst，然后在
    </p>

    <p class="Code">
      "lastinv" "#Valve_Last_Weapon_Used"
    </p>
    <p>
      下面加上以下内容
    </p>

    <p class="Code">
      "weapon_crowbar" "撬棍"
      <br>
      "weapon_9mmhandgun" "小手枪"
      <br>
      "weapon_357" "357左轮"
      <br>
      "weapon_9mmAR" "冲锋枪"
      <br>
      "weapon_shotgun" "霰弹枪"
      <br>
      "weapon_crossbow" "十字弩"
      <br>
      "weapon_rpg" "火箭筒"
      <br>
      "weapon_gauss" "高斯枪"
      <br>
      "weapon_egon" "胶子炮"
      <br>
      "weapon_hornetgun" "蜂巢枪"
      <br>
      "weapon_handgrenade" "手雷"
      <br>
      "weapon_tripmine" "激光伴雷"
      <br>
      "weapon_satchel" "遥控炸弹"
      <br>
      "weapon_snark" "蛇鲨"
      <br>
      "drop" "丢弃武器"
    </p>

    <p>
      之后，你就可以在你的游戏设置界面对这些按键进行直接设置了！
    </p>
  </div>
</template>
<script>
export default {

}
</script>

<style src="@/assets/css/basicskill.css" scoped>
</style>