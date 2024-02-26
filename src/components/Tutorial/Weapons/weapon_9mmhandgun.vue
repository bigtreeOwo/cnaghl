<template>
  <div class="tab active">
    <h1>Glock手枪</h1>
    <p class="WpnCode">武器代码：weapon_9mmhandgun</p>
    <div class="SplitLine"></div>
    <div class="WpnDescrp">俗称小手枪，属于常规模式下的初始自带装备之一，是一把残血收割利器。武器原型为Glock 17。使用9mm规格子弹，与MP5冲锋枪共用弹药，弹药上限为17/250。
    </div>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_9mmhandgun.jpg')" alt="w_9mmhandgun" lazy></el-image></div>
    <p class="WpnImgCaption">武器w模</p>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_9mmclip.jpg')" alt="w_9mmclip" lazy></el-image></div>
    <p class="WpnImgCaption">武器弹药：一份为17发</p>
    <div class="SplitLine"></div>
    <div class="WpnPrimBlock">
      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/9mmhandgun.gif')" alt="9mmhandgun" lazy></el-image>
      <h1>主要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        小手枪的左键攻击为射速较慢的点射（虽然说是点射，但是按住左键依然可以持续开火），精准度较高。常规模式下伤害为<span style="font-weight: bold;">12</span>。不爆头需要<span style="font-weight: bold;">9</span>发子弹杀死一名满血无甲敌人，而爆头需要<span style="font-weight: bold;">3</span>发。
      </p>
    </div>

    <div class="WpnSecdBlock">

      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/9mmhandgun_2.gif')" alt="9mmhandgun" lazy></el-image>
      <h1>次要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        小手枪的右键为射速较快的连射，相比于主要攻击，右键以牺牲精准度为代价换取更高的射速，适合贴脸使用。该攻击方式的单发伤害不变。
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