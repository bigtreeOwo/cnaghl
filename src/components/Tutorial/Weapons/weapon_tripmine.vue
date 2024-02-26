<template>
  <div class="tab active">
    <h1>激光伴雷</h1>
    <p class="WpnCode">武器代码：weapon_tripmine</p>
    <div class="SplitLine"></div>
    <div class="WpnDescrp">使用激光触发的地雷，当激光路径上检测到物体变化时即会发生爆炸。伤害和范围较为可观。最大携带量为5个。</div>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_tripmine.jpg')" alt="w_tripmine" lazy></el-image></div>
    <p class="WpnImgCaption">武器w模</p>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_tripmine2.jpg')" alt="w_tripmine" lazy></el-image></div>
    <p class="WpnImgCaption">已部署的激光伴雷</p>

    <div class="SplitLine"></div>
    <div class="WpnPrimBlock">
      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/tripmine.gif')" alt="tripmine" lazy></el-image>
      <h1>主要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        按左键进行部署，可以附着在墙壁上。放置完成后激光会随即启动，当激光启动后即完成部署。除了激光触发之外，伴雷本身受到任何伤害都会直接引爆，因此可以借助高斯穿墙、榴弹爆炸等方式引爆。单颗伴雷满炸伤害为<span style="font-weight: bold;">150</span>，仅需<span style="font-weight: bold;">1</span>颗即可杀死满血无甲敌人。
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