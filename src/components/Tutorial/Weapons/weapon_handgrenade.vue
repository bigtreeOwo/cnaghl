<template>
  <div class="tab active">
    <h1>手雷</h1>
    <p class="WpnCode">武器代码：weapon_grenade</p>
    <div class="SplitLine"></div>
    <div class="WpnDescrp">威力小、引信时间长、投掷距离短，炸别人还不如用来炸飞自己。你可以拿这个东西来羞辱你的对手。最大携带量为10颗。</div>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_grenade.png')" alt="w_grenade" lazy></el-image></div>
    <p class="WpnImgCaption">武器w模，一份5颗。</p>
    <div class="SplitLine"></div>
    <div class="WpnPrimBlock">
      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/Grenade.gif')" alt="grenade" lazy></el-image>
      <h1>主要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        按左键投掷，按住左键可以捏雷以缩短投掷后爆炸的时间，然而由于威力不够大并且需要捏很久所以并没有什么用。常规模式下满炸伤害为<span style="font-weight: bold;">100</span>，因此理论上仅需要<span style="font-weight: bold;">1</span>发即可秒杀满血无甲敌人，但是难度极大，比赛中几乎不可能发生。
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