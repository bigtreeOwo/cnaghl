<template>
  <div class="tab active">
    <h1>高斯枪</h1>
    <p class="WpnCode">武器代码：weapon_gauss</p>
    <div class="SplitLine"></div>
    <div class="WpnDescrp">
      全游戏最强、机制最复杂、使用上限最高的武器。AG的强竞技性和高操作上限有非常大一部分都是因为高斯枪的存在，甚至可以毫不夸张地说，没有高斯枪就没有AG。该武器伤害大、无需换弹、可提供高速移动、还能穿墙，在某些地图（点名批评gayfire）是堪称变态的存在。然而同时由于上手难度大，该武器具有相当明显的技术区分度，这也是某些高手能够在noob房屠房，成为萌新噩梦的原因。武器最大弹药携带量为100。
    </div>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_gauss.png')" alt="w_gauss" lazy></el-image></div>
    <p class="WpnImgCaption">武器w模</p>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_gaussammo.png')" alt="w_gaussammo" lazy></el-image></div>
    <p class="WpnImgCaption">武器弹药，一份为20发</p>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/GaussReflect.jpg')" alt="gaussreflect" lazy></el-image></div>
    <p class="WpnImgCaption">高斯的折射</p>
    <div class="SplitLine"></div>
    <div class="WpnPrimBlock">
      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/gauss.gif')" alt="gauss" lazy></el-image>
      <h1>主要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        按左键消耗2份弹药立即发射一颗子弹，子弹光束呈黄色，当碰到墙壁且入射角度过小时会产生折射，折射后伤害减小。常规模式下无折射时的伤害为<span style="font-weight: bold;">20</span>，需要<span style="font-weight: bold;">5</span>次射击（即消耗10份弹药）杀死一名满血无甲敌人，而爆头需要<span style="font-weight: bold;">2</span>发。
      </p>
    </div>

    <div class="WpnSecdBlock">

      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/gauss_2.gif')" alt="gauss_2" lazy></el-image>
      <h1>次要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        按右键消耗弹药进行充能，充满时间为1.5秒，共消耗11份弹药。随着充能时间的增长，武器的伤害与反向作用力也会增加。一般不爆头至少需要消耗<span style="font-weight: bold;">4</span>份弹药杀死一名满血无甲敌人，而蓄满的伤害为<span style="font-weight: bold;">200</span>。除了直射，高斯蓄力攻击最有趣的两个机制是穿墙和高斯跳，详情请查看基础知识。
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