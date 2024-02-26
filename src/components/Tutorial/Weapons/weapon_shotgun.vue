<template>
  <div class="tab active">
    <h1>霰弹枪</h1>
    <p class="WpnCode">武器代码：weapon_shotgun</p>
    <div class="SplitLine"></div>
    <div class="WpnDescrp">
      威力巨大的近战利器。原型为SPAS-12霰弹枪，不同于现实的是，半条命里的霰弹枪并没有半自动模式，取而代之的是双喷模式，也正因如此，HL1的霰弹枪有着极为恐怖的爆发力。武器弹药上限为8/125。
    </div>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_shotgunreal.jpg')" alt="w_shotgunreal" lazy></el-image></div>
    <p class="WpnImgCaption">武器w模</p>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_shotgun.jpg')" alt="w_shotgun" lazy></el-image></div>
    <p class="WpnImgCaption">武器弹药，一份为12发</p>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/ShotgunScatter.jpg')" alt="ShotgunScatter" lazy></el-image></div>
    <p class="WpnImgCaption">单发弹孔，一共含有4枚弹丸</p>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/ShotgunScatter2.jpg')" alt="ShotgunScatter2" lazy></el-image></div>
    <p class="WpnImgCaption">双发弹孔，一共含有8枚弹丸</p>
    <div class="SplitLine"></div>
    <div class="WpnPrimBlock">
      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/Shotgun.gif')" alt="" lazy></el-image>
      <h1>主要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        按左键消耗一颗弹药发射4枚弹丸，发射间隔较短。常规模式下每颗弹丸的伤害为<span style="font-weight: bold;">20</span>，因此单发模式下最大无爆头的伤害为<span style="font-weight: bold;">80</span>，需要<span style="font-weight: bold;">2</span>发子弹杀死一名满血无甲敌人，而爆头仅需要<span style="font-weight: bold;">1</span>发即可。
      </p>
    </div>

    <div class="WpnSecdBlock">

      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/Shotgun_2.gif')" alt="Shotgun" lazy></el-image>
      <h1>次要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        按右键消耗两颗弹药发射8枚弹丸，弹丸延水平方向的扩散大于垂直方向的扩散。常规模式下双发模式下最大无爆头的伤害为<span style="font-weight: bold;">160</span>，足以秒杀一名拥有30护甲的满血敌人！而爆头的最大伤害更是达到<span style="font-weight: bold;">480</span>，能够直接秒杀满血满甲的敌人！
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