<template>
  <div class="tab active">
    <h1>撬棍</h1>
    <p class="WpnCode">武器代码：weapon_crowbar</p>
    <div class="SplitLine"></div>
    <div class="WpnDescrp">
      家喻户晓的物理学圣剑，半条命的标志之一，经典无需多言。与小手枪一样为出生自带的武器。
    </div>
    <div class="WpnImg">
      <el-image alt="w_crowbar" :src="require('@/assets/images/tutorial/weapons/weaponusage/w_crowbar.jpg')" lazy></el-image>
    </div>
    <p class="WpnImgCaption">武器w模</p>
    <div class="SplitLine"></div>
    <div class="WpnPrimBlock">
      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/Crowbar.gif')" alt="crowbar" lazy></el-image>
      <h1>主要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        按左键进行敲击，常规模式下伤害为<span style="font-weight: bold">25</span>。不爆头需要<span style="font-weight: bold">4</span>下敲死一名满血无甲敌人，而爆头仅需要<span style="font-weight: bold">2</span>下，还可以把敌人直接砍成排骨。
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style src="@/assets/css/tutorial.css" scoped>
</style>