<template>
  <div class="tab active">
    <h1>十字弩</h1>
    <p class="WpnCode">武器代码：weapon_crossbow</p>
    <div class="SplitLine"></div>
    <div class="WpnDescrp">
      能够发射爆炸性弹头的弩，安静且致命。在开镜模式下指哪打哪，并且拥有任意部位一发秒杀无护甲敌人的能力，因此是一把名副其实的“狙”。开镜的同时开火可实现“瞬弩”操作，是实战中极具实用性和观赏性的操作。武器弹药上限为5/50。
    </div>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_crossbow.jpg')" alt="w_crossbow" lazy></el-image></div>
    <p class="WpnImgCaption">武器w模</p>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_crossbow_clip.jpg')" alt="w_crossbow_clip" lazy></el-image></div>
    <p class="WpnImgCaption">武器弹药，一份为5发</p>
    <div class="SplitLine"></div>
    <div class="WpnPrimBlock">
      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/crossbow.gif')" alt="crossbow" lazy></el-image>
      <h1>主要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        按左键发射一枚爆炸性弩箭，弩箭具有飞行延迟，在碰到物体后会产生小范围爆炸。由于弩箭的飞行延迟与AG的高机动性天生不符，因此该攻击模式常用于收割残血敌人。该攻击模式的伤害分为两段，分别为直击伤害和爆炸的范围伤害，其中直击伤害为<span style="font-weight: bold;">20</span>，爆炸的最大伤害为<span style="font-weight: bold;">40</span>，因此不爆头直击需要<span style="font-weight: bold;">2</span>发杀死一名满血无甲敌人，而爆头仅需要<span style="font-weight: bold;">1</span>发。
      </p>
    </div>

    <div class="WpnSecdBlock">

      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/crossbow_2.gif')" alt="crossbow_2" lazy></el-image>
      <h1>次要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        按下右键进入或退出放大模式，放大模式下的攻击方式为没有飞行延迟的直击弩箭，并且具有100%的命中率。左右键同时使用可以开镜后马上发射，也就是“瞬弩”，是AG高手的必备技能之一。常规模式下的伤害为<span style="font-weight: bold;">120</span>，可以直接带走满血无甲敌人，爆头伤害达到<span style="font-weight: bold;">360</span>，更是可以直接秒杀满血满甲的敌人！
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