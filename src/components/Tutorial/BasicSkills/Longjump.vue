<template>
  <div class="AGTricksContent">
    <h1>长 跳（Longjump）</h1>
    <p>
      这里的长跳指的是拿取长跳包后进行的高速跳跃。AG中的长跳包是非常重要的资源，因为<span style="font-weight: bold;">它可以提供更强的机动性，可以更快地拾取资源和躲闪。</span>
    </p>
    <el-image alt="w_lj" :src="require('@/assets/images/tutorial/basicskills/w_lj.jpg')" lazy></el-image>
    <p class="ImgCaption">
      图：地图rapidcore中的长跳包
    </p>

    <p>
      <span style="font-weight: bold;">长跳带来的收益有三点：一、跳得更高；二、跳的更快更远；三、能够静步长跳。</span>这里第三点指的是在有长跳包的时候，可以静步走起跳，并在落地前按s减速，这样既可以拥有高机动性，也不会发出脚步声，是相当实用的操作。然而需要注意的是，<span style="font-weight: bold;">拾取长跳包时会有HEV的语音播报，</span>如果敌人在附近的话就能听见该播报，进而获取到你的位置，因此比赛中长跳包往往需要挑选合适的时机拾取。
    </p>

    <el-image alt="lj" :src="require('@/assets/images/tutorial/basicskills/lj.gif')" lazy></el-image>
    <p class="ImgCaption">
      图：捡起长跳包并连续长跳
    </p>

    <p>
      长跳的操作非常简单，只要<span style="font-weight: bold;">在装备长跳包的情况下助跑，然后同时按蹲键和跳跃键即可，或者先按蹲后马上按跳跃键也可以。</span>为了方便使用，你也可以使用脚本来进行一键长跳
      (脚本使用教程请移步“<a href="/commands">游戏参数及命令</a>”)：
    </p>

    <p class="Code">
      alias "+lj" "+duck;wait;+jump;wait;-jump"
      <br>
      alias "-lj" "-duck"
    </p>

    <p>
      长跳包在某些地图（例如stalkyard）中是非常有用的，因此在你下次比赛的时候，多多留意长跳包带来的优势吧！
    </p>

    <el-image alt="lj" :src="require('@/assets/images/tutorial/basicskills/lj2.gif')" lazy></el-image>
    <p class="ImgCaption">
      图：在stalkyard中利用长跳快速拿资源
    </p>
  </div>
</template>
<script>
export default {

}
</script>

<style src="@/assets/css/basicskill.css" scoped>
</style>