<template>
  <div class="tab active">
    <h1>火箭筒</h1>
    <p class="WpnCode">武器代码：weapon_rpg</p>
    <div class="SplitLine"></div>
    <div class="WpnDescrp">
      拥有激光制导能力的火箭发射器，使用方式为装一发打一。具有威力大、使用灵活的优点，绝对是战场上不容小觑的存在。当你的对手手上有一把火箭筒而你却没有合适的反制手段时，最好找个地方躲起来吧。武器弹药上限为1/5。
    </div>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_rpg.png')" alt="w_rpg" lazy></el-image></div>
    <p class="WpnImgCaption">武器w模</p>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_rpgammo.png')" alt="w_rpgammo" lazy></el-image></div>
    <p class="WpnImgCaption">武器弹药：一份为2发</p>
    <div class="SplitLine"></div>
    <div class="WpnPrimBlock">
      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/Rpg.gif')" alt="rpg" lazy></el-image>
      <h1>主要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        按左键发射一枚火箭弹，在无导航的情况下火箭弹会沿直线飞行，而有激光导航时则会向着激光所指的方向飞行。常规模式下满炸伤害为<span style="font-weight: bold;">120</span>，因此仅需要<span style="font-weight: bold;">1</span>发即可秒杀满血无甲敌人。
      </p>
    </div>

    <div class="WpnSecdBlock">

      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/RPG_Second.gif')" alt="rpg" lazy></el-image>
      <h1>次要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        火箭筒的右键是激光制导的开关。使用制导可以有效提高火箭弹对移动目标的打击能力，例如对付对手的高斯跳、长跳等。然而激光制导并不是一直开着是最好的，因为激光会暴露你瞄准的地方，使得你的攻击更容易被预测；另外，某些情况会希望火箭弹沿着直线飞行。因此根据实际情况选择是否开启激光制导才是最明智的。
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