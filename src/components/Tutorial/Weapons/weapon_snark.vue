<template>
  <div class="tab active">
    <h1>蛇鲨</h1>
    <p class="WpnCode">武器代码：weapon_snark</p>
    <div class="SplitLine"></div>
    <div class="WpnDescrp">你不会指望这玩意能杀人吧</div>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_sqknest.jpg')" alt="w_sqknest" lazy></el-image></div>
    <p class="WpnImgCaption">蛇鲨巢，一份5颗</p>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_squeak.jpg')" alt="w_squeak" lazy></el-image></div>
    <p class="WpnImgCaption">放出来的蛇鲨</p>

    <div class="SplitLine"></div>
    <div class="WpnPrimBlock">
      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/snark.gif')" alt="snark" lazy></el-image>
      <h1>主要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        按左键释放蛇鲨，单次啃咬伤害为<span style="font-weight: bold;">10</span>。
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