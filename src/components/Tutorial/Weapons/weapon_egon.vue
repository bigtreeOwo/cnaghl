<template>
  <div class="tab active">
    <h1>胶子炮</h1>
    <p class="WpnCode">武器代码：weapon_egon</p>
    <div class="SplitLine"></div>
    <div class="WpnDescrp">由于伤害高、使用简单，因此经常被称作noob
      gun，但这也是胶子炮强大的证明。拿起来之后只管往敌人脸上狂射就完事了。该武器与高斯枪共用弹药，最大弹药携带量为100。</div>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_egon.jpg')" alt="w_egon" lazy></el-image></div>
    <p class="WpnImgCaption">武器w模</p>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_gaussammo.jpg')" alt="w_gaussammo" lazy></el-image></div>
    <p class="WpnImgCaption">武器弹药，一份为20发</p>

    <div class="SplitLine"></div>
    <div class="WpnPrimBlock">
      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/egon.gif')" alt="egon" lazy></el-image>
      <h1>主要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        按住左键启动胶子炮并开始对你的敌人进行扫射，顺便把他变成排骨。值得注意的是胶子炮需要短暂的启动时间，因此只按一下左键是打不出伤害的。胶子炮的伤害分为两段，常规模式下1秒钟大约消耗<span style="font-weight: bold;">5</span>份弹药，不爆头至少需要<span style="font-weight: bold;">3</span>份弹药杀死一名满血无甲敌人，耗时约<span style="font-weight: bold;">600ms</span>。
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