<template>
  <div class="tab active">
    <h1>遥控炸弹</h1>
    <p class="WpnCode">武器代码：weapon_satchel</p>
    <div class="SplitLine"></div>
    <div class="WpnDescrp">
      具有较为可观的爆炸伤害和范围的遥控炸弹，使用方法为放置一颗或多颗炸弹后使用遥控进行远程触发。可以埋在拐角处当老六，也可以直接扔到对手脸上当手雷使。最大携带量为5个。</div>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_satchel.jpg')" alt="w_satchel" lazy></el-image></div>
    <p class="WpnImgCaption">武器w模</p>

    <div class="SplitLine"></div>
    <div class="WpnPrimBlock">
      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/satchel.gif')" alt="satchel" lazy></el-image>
      <h1>主要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        按左键放置一颗炸弹，随后切换为遥控，遥控状态下主要攻击即为引爆。单颗炸弹满炸伤害为<span style="font-weight: bold;">120</span>，仅需<span style="font-weight: bold;">1</span>颗即可杀死满血无甲敌人。
      </p>
    </div>

    <div class="WpnSecdBlock">

      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/satchel_2.gif')" alt="satchel_2" lazy></el-image>
      <h1>次要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        遥控状态下按右键放置多枚炸弹，把你的敌人彻底炸成渣。
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