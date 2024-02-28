<template>
  <div class="tab active">
    <h1>冲锋枪</h1>
    <p class="WpnCode">武器代码：weapon_9mmar</p>
    <div class="SplitLine"></div>
    <div class="WpnDescrp">
      拥有大容量弹匣的速射武器，同时还带有一个榴弹发射器。武器原型为加装了M203的MP5SD，使用9mm口径子弹，即与小手枪共用弹药。弹药上限为50/250，榴弹最大携带量为10颗。</div>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_9mmar.png')" alt="w_9mmar" lazy></el-image></div>
    <p class="WpnImgCaption">武器w模</p>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_9mmarclip.png')" alt="w_9mmarclip" lazy></el-image></div>
    <p class="WpnImgCaption">小份武器弹药：一份为50发</p>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_chainammo.png')" alt="w_chainammo" lazy></el-image></div>
    <p class="WpnImgCaption">大份武器弹药：一份为200发</p>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_argrenade.png')" alt="w_argrenade" lazy></el-image></div>
    <p class="WpnImgCaption">榴弹弹药：一份为2发</p>
    <div class="SplitLine"></div>
    <div class="WpnPrimBlock">
      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/9mmAR.gif')" alt="9mmAR" lazy></el-image>
      <h1>主要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        按住左键进行全自动速射，对付中近距离敌人非常有效。常规模式下伤害为<span style="font-weight: bold;">12</span>。不爆头需要<span style="font-weight: bold;">9</span>发子弹杀死一名满血无甲敌人，而爆头需要<span style="font-weight: bold;">3</span>发。
      </p>
    </div>

    <div class="WpnSecdBlock">

      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/9mmAR_2.gif')" alt="9mmAR" lazy></el-image>
      <h1>次要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        右键使用榴弹发射器发射一枚榴弹，榴弹呈抛物线型轨迹。常规模式下满炸伤害为<span style="font-weight: bold;">100</span>，仅需要<span style="font-weight: bold;">1</span>发即可秒杀满血无甲敌人。
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