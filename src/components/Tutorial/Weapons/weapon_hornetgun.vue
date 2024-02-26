<template>
  <div class="tab active">
    <h1>蜂巢枪</h1>
    <p class="WpnCode">武器代码：weapon_hornetgun</p>
    <div class="SplitLine"></div>
    <div class="WpnDescrp">来自XEN星的带有跟踪功能的生物武器。无聊的时候还可以调戏发射出来的蜜蜂，好用又好玩。最大弹药携带量为8发，随着时间推移会自动补充弹药。</div>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_hgun.jpg')" alt="w_hgun" lazy></el-image></div>
    <p class="WpnImgCaption">武器w模</p>

    <div class="SplitLine"></div>
    <div class="WpnPrimBlock">
      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/hornetgun.gif')" alt="hgun" lazy></el-image>
      <h1>主要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        按住左键发射具有追踪能力的蜜蜂，未发现敌人时会沿着直线飞行，当敌人在一定范围内将会自动飞向敌人。单发伤害为<span style="font-weight: bold;">10</span>，至少需要<span style="font-weight: bold;">10</span>发弹药杀死一名满血无甲敌人，且无法爆头。
      </p>
    </div>

    <div class="WpnSecdBlock">

      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/hornetgun_2.gif')" alt="hgun_2" lazy></el-image>
      <h1>次要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        按右键进行速射，速射模式下的蜂巢枪射速大幅度提高，且蜜蜂飞行速度加快，但是无跟踪功能。单发伤害与主要攻击一样，并且同样无法爆头。
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style src="@/assets/css/tutorial.css" scoped>
</style>