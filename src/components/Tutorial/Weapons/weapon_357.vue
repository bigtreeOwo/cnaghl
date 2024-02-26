<template>
  <div class="tab active">
    <h1>左轮手枪</h1>
    <p class="WpnCode">武器代码：weapon_357</p>
    <div class="SplitLine"></div>
    <div class="WpnDescrp">
      武器原型为柯尔特Python左轮，使用.357马格南弹药。相比于出生自带的小手枪，这把武器拥有更强大的威力，以及更高的射击精准度。多人模式下的357加装了激光指示器，可以进行放大以实现远距离索敌。由于拥有爆头一发秒杀敌人的能力，该武器在高手手中是极具威胁的。弹药上限为6/36。
    </div>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_357.jpg')" alt="w_357" lazy></el-image></div>
    <p class="WpnImgCaption">武器w模</p>
    <div class="WpnImg"><el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/w_357ammobox.jpg')" alt="w_357ammobox" lazy></el-image></div>
    <p class="WpnImgCaption">武器弹药：一份为6发</p>
    <div class="SplitLine"></div>
    <div class="WpnPrimBlock">
      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/357.gif')" alt="357" lazy></el-image>
      <h1>主要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        常规模式下伤害为<span style="font-weight: bold;">50</span>。不爆头需要<span style="font-weight: bold;">2</span>发子弹杀死一名满血无甲敌人，而爆头仅需要<span style="font-weight: bold;">1</span>发。
      </p>
    </div>

    <div class="WpnSecdBlock">

      <el-image :src="require('@/assets/images/tutorial/weapons/weaponusage/357_2.gif')" alt="357" lazy></el-image> 
      <h1>次要攻击</h1>
      <div class="SplitLine"></div>
      <p>
        357的右键为放大功能（俗称伸脖子），放大模式下武器伤害和射速不变，适合瞄准距离较远敌人的时候使用。有镜，能一发秒，是狙。
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