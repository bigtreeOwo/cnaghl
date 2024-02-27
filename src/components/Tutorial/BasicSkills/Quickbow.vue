<template>
  <div class="AGTricksContent">
    <h1>瞬 弩</h1>
    <p>
      弩在开镜模式下拥有极强的攻击能力，然而却因为视野受限，对付近距离敌人的能力较弱。因此与CS里的瞬狙类似的，玩家们开发出了瞬弩的操作。
    </p>

    <el-image alt="xbox" :src="require('@/assets/images/tutorial/basicskills/xbow.gif')" lazy></el-image>
    <p class="ImgCaption">
      图：使用瞬弩击倒一名敌人
    </p>

    <p>
      瞬弩的操作非常简单，只需要<span style="font-weight: bold;">开镜之后马上开火就可以，因此你可以左右键齐按，也可以先按右键再快速按下左键来完成。</span>此外还可以通过以下脚本来完成
      (脚本使用教程请移步“<a href="/command">游戏参数及命令</a>”)：
    </p>

    <p class="Code">
      alias "bowfire" "+attack2;wait;+attack;wait;-attack2;wait;-attack"
    </p>

    <p>
      该脚本实现的就是开镜后马上开火，然后再退出开镜模式。
    </p>

    <p>
      瞬弩的实战应用例子：
    </p>

    <el-image alt="xbox" :src="require('@/assets/images/tutorial/basicskills/xbow2.gif')" lazy></el-image>
    <p class="ImgCaption">
      图：高斯跳配合瞬弩高速索敌
    </p>

    <p>
      因此，瞬弩具有非常大的实用价值，且由于对瞄准的高要求，瞬弩也是AG比赛中极具观赏性的操作之一。
    </p>
  </div>
</template>

<script>
export default {

}
</script>
<style src="@/assets/css/basicskill.css" scoped>
</style>