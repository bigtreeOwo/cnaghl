<template>
  <div class="AGTricksContent">
    <h1>爆 头（Headshot）</h1>
    <p>
      与大多数FPS游戏一样，AG也有爆头机制。在AG中，根据命中区域划分，伤害包括
      “爆头伤害”以及“躯干伤害”。命中除了头部以外的身体任意部位都被视作躯干伤害，<span style="font-weight: bold;">躯干伤害即为武器的基础伤害，而爆头的伤害倍率为x3（常规模式）。</span>例如，357左轮的基础伤害为50，爆头伤害即为150，足以秒杀满血无甲敌人。
    </p>
    <el-image :src="require('@/assets/images/tutorial/basicskills/Headshot1.gif')" alt="headshot" lazy></el-image>
    <p class="ImgCaption">
      图：使用357左轮爆头
    </p>

    <p>
      以下列举了一些武器的最大单发爆头伤害，以及对应能够杀死的敌人状态（AC指的是护甲值）：
    </p>

    <p style="font-weight: bold;">
      ·357左轮：单发爆头伤害150，能够杀死HP=100,AC=20。
      <br>
      <br>
      ·霰弹枪单发模式：单发爆头伤害160，能够杀死HP=100,AC=30。
      <br>
      <br>
      ·弩放大模式：单发爆头伤害360，能够杀死HP=100,AC=100。
      <br>
      <br>
      ·高斯蓄力一发：单发爆头伤害201，能够杀死HP=100,AC=50。
      <br>
      <br>
      ·高斯蓄满：单发爆头伤害600，能够杀死HP=100,AC=100。
    </p>

    <p>
      可以看到，AG里面爆头带来的收益是很大的，在某些关键节点甚至能扭转比赛局势，所以尽量朝你对手的脸上打吧！
    </p>

    <p>
      然而更有趣的是，在AG里<span style="font-weight: bold;">“万物皆可爆头”</span>，除了常规的子弹以外，<span style="font-weight: bold;">撬棍、爆炸、高斯穿墙都可以造成爆头伤害。</span>这也是许多pro在比赛中喜欢把rpg和榴弹朝天花板炸的原因之一。例如9mmAR的榴弹基础伤害为100，但是在下图中却能够造成250的伤害！
    </p>

    <el-image :src="require('@/assets/images/tutorial/basicskills/Headshot2.gif')" alt="headshot" lazy></el-image>
    <p class="ImgCaption">
      图：使用榴弹把敌人炸成渣
    </p>

    <p>
      因此在AG中，爆炸物不仅需要炸得到人，还要尽量将爆炸的地点指向敌人的头部，以最大化伤害。
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style src="@/assets/css/basicskill.css" scoped>
</style>