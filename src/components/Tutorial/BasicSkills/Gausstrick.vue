<template>
  <div class="AGTricksContent">
    <h1>高 斯 穿 墙（Wallgauss）</h1>
    <p>
      高斯枪其中一个极强的特性是穿墙攻击的效果。许多萌新玩家总是好奇为什么自己躲在墙后连敌人都没看见的情况下就被莫名其妙地秒杀了，又或是看见敌人明明打空了，但自己还是死了。这都是因为<span style="font-weight: bold;">你受到的是高斯的穿墙伤害。</span>
    </p>
    <p>
      高斯穿墙的机理用最简单的话来说，<span style="font-weight: bold;">就是高斯的蓄力攻击在打入较薄墙体的时候可以穿透墙壁，并同时在墙壁后产生一定范围的溅射伤害。</span>
    </p>
    <p>
      下图给出的是高斯穿墙的简单示意图。当高斯蓄力攻击时，<span style="font-weight: bold;">无论蓄力多少与否，只要射入的墙体足够薄都会发生穿墙，且蓄力越多，穿透墙体后产生的溅射伤害的范围也越大。</span>当蓄满力时，最大的溅射范围能够达到490个单位！在该范围内的任何玩家都会受到高斯的穿墙伤害。
    </p>
    <el-image alt="wallgauss" :src="require('@/assets/images/tutorial/basicskills/wallgauss_machsm.png')" lazy style="width: 80%;"></el-image>
    <p class="ImgCaption">
      图：高斯穿墙的简单演示（图源自<span><a href="https://twhl.info/wiki/page/Tutorial%3A_Gauss_penetration_and_blast_damage">Wiki上的TWHL</a></span>）
    </p>
    <p>
      那么如何判断墙体能否被高斯枪穿透呢？<span><a href="https://twhl.info/wiki/page/Tutorial%3A_Gauss_penetration_and_blast_damage">Wiki</a></span>中给的确切数据是<span style="font-weight: bold;">当墙体的厚度等于或小于8个单位时会产生穿透。</span>然而你可能会有疑惑这个"8个单位"到底具体有多少？确实，对于没有接触过地图编辑的玩家来说，这种确切的说法是难以理解的。所以，<span style="font-weight: bold;">最简单的判断方法是自己进游戏试。</span>毕竟高斯是否发生穿透是能够很直观地看出来的。这里推荐练习地图可以选择crossfire，因为这图的墙壁都做得很薄，高斯穿点特别多。
    </p>
    <p>
      下边两张图就分别给出了高斯枪没有发生穿透以及发生穿透的视觉效果。当高斯枪子弹射入比较厚的墙体时，入射的地方只会留下一个弹孔和辉光，而当高斯枪子弹射入较薄墙体并发生穿透时，则会产生一个光点，并伴随着火花的散落。
    </p>
    <el-image alt="wallgauss" :src="require('@/assets/images/tutorial/basicskills/wallgauss_nohotglow.jpg')" lazy></el-image>
    <p class="ImgCaption">
      图：高斯枪射入较厚墙体的效果
    </p>
    <el-image alt="wallgauss" :src="require('@/assets/images/tutorial/basicskills/wallgauss_hotglow.jpg')" lazy></el-image>
    <p class="ImgCaption">
      图：高斯枪射入较薄墙体并发生穿透的效果
    </p>
    <p>
      高斯穿墙的伤害分为两种，<span style="font-weight: bold;">第一种是子弹直接穿透墙壁击中墙后目标产生的直射伤害。</span>在这种情况下，穿墙后的子弹依然与正常子弹一样是单点伤害。在这种情况下，无论敌人距离墙壁多远，只要对准了敌人都能直接造成伤害。
    </p>
    <el-image alt="wallgauss" :src="require('@/assets/images/tutorial/basicskills/wallgauss1.gif')" lazy></el-image>
    <p class="ImgCaption">
      图：利用高斯直射穿墙杀死敌人(注：为了方便展示图中开了透视)
    </p>
    <p>
      第二种就是喜闻乐见的范围性溅射伤害。<span style="font-weight: bold;">高斯穿墙产生的溅射伤害可以简单地理解为是墙壁后产生了"爆炸"，爆炸的中心点是穿墙的位置，且爆炸的伤害和范围随着蓄力的程度变化。</span>因此当你手上有高斯的时候，你可以瞄准离对手最近的可穿透墙体来最大化溅射伤害。相反地，当你的对手想使用高斯穿墙杀死你时，你需要快速远离身边可能发生穿透的墙体以减少受到的伤害。
    </p>
    <el-image alt="wallgauss" :src="require('@/assets/images/tutorial/basicskills/wallgauss2.gif')" lazy></el-image>
    <p class="ImgCaption">
      图：利用高斯穿墙范围伤杀敌例子1
    </p>
    <el-image alt="wallgauss" :src="require('@/assets/images/tutorial/basicskills/wallgauss4.gif')" lazy></el-image>
    <p class="ImgCaption">
      图：利用高斯穿墙范围伤杀敌例子2
    </p>
    <el-image alt="wallgauss" :src="require('@/assets/images/tutorial/basicskills/wallgauss3.gif')" lazy></el-image>
    <p class="ImgCaption">
      图：利用高斯穿墙范围伤杀敌例子3
    </p>
    <p>
      值得一提的是，<span style="font-weight: bold;">溅射伤害与爆炸物一样，都是可以爆头的</span>，这种情况通常发生于穿点位于敌人头上的时候。因此可以合理选择穿点位置以最大化伤害。
    </p>
  </div>
</template>

<script>
export default {

}
</script>
<style src="@/assets/css/basicskill.css" scoped>
</style>