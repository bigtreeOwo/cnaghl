<template>
  <div class="AGTricksContent">
    <h1>高 斯 跳（Gauss Jumping）</h1>
    <video width="800px" height="600px" style="margin-left: 20%;" controls :poster="exampleGaussjumpposter" preload="none">
      您的浏览器不支持html5播放视频
      <source :src="exampleGaussjump" type="video/mp4">
    </video>
    <p>
      <strong style="color: red">1、高斯跳基础操作方法</strong>
    </p>
    <p>
      高斯枪的蓄力攻击会给玩家一个向高斯攻击方向的<strong style="color: red">相反方向</strong>的助推力，这个助推力使玩家速度在短时间内快速增大，从而可以实现灵活移动。
    </p>
    <p>
      高斯跳需要在跳出之前使用高斯枪蓄力（蓄力时间越长，后坐力越大，速度越快），跳出的瞬间向跳出方向的反方向射出，然后视角快速回正。
      练习时可以适当放慢动作，不断练习形成肌肉记忆。
    </p>
    <p>
      以下为基础高斯跳的操作演示
    </p>
    <p>
      1.1 水平高斯跳
    </p>
    <video width="800px" height="600px" style="margin-left: 20%;" controls :poster="basicgaussjump1poster" preload="none">
      您的浏览器不支持html5播放视频
      <source :src="basicGaussjump['basicgaussjump1']" type="video/mp4">
    </video>
    <p>
      1.2 竖直高斯跳
    </p>
    <video width="800px" height="600px" style="margin-left: 20%;" controls :poster="basicgaussjump2poster" preload="none">
      您的浏览器不支持html5播放视频
      <source :src="basicGaussjump['basicgaussjump2']" type="video/mp4">
    </video>
    <p>
      1.3 下落高斯跳
    </p>
    <p>
      下落高斯跳可以抵消一定的竖直方向速度，在一定限度内可以防止摔落伤害。
    </p>
    <video width="800px" height="600px" style="margin-left: 20%;" controls :poster="basicgaussjump3poster" preload="none">
      您的浏览器不支持html5播放视频
      <source :src="basicGaussjump['basicgaussjump3']" type="video/mp4">
    </video>
    <hr>
    <p>
      <strong style="color: red">2、高斯跳进阶</strong>
    </p>
    <p>
      2.1 结合连跳
      <br>
      高斯跳可与连跳结合使用，需要把握好起跳位置和时机。
    </p>
    <video width="800px" height="600px" style="margin-left: 20%;" controls :poster="bhopGaussjumpposter" preload="none">
      您的浏览器不支持html5播放视频
      <source :src="bhopGaussjump" type="video/mp4">
    </video>
    <br>
    <p>
      2.2 跟在长跳后
      <br>
      长跳后可接高斯跳，可以用较少的高斯子弹达到高斯跳的效果，可节省子弹。
    </p>
    <video width="800px" height="600px" style="margin-left: 20%;" controls :poster="longjumpGaussjumpposter" preload="none">
      您的浏览器不支持html5播放视频
      <source :src="longjumpGaussjump" type="video/mp4">
    </video>
    <br>
    <p>
      2.3 高斯跳落点
      <br>
      高斯跳需要控制落点方位：如果落点和当前位置基本在同一高度，高斯跳时射向地面的角度与水平方向的夹角就要小一些；如果落点位置和当前位置高度差异巨大，则需要靠近落点方向，射向地面的角度与水平方向夹角就要大些。
    </p>
    <br>
    <p>
      水平高斯跳
    </p>
    <video width="800px" height="600px" style="margin-left: 20%;" controls :poster="xposter" preload="none">
      您的浏览器不支持html5播放视频
      <source :src="directGaussjump['x']" type="video/mp4">
    </video>
    <br>
    <p>竖直高斯跳</p>
    <video width="800px" height="600px" style="margin-left: 20%;" controls :poster="yposter" preload="none">
      您的浏览器不支持html5播放视频
      <source :src="directGaussjump['y']" type="video/mp4">
    </video>
  </div>
</template>
<script>
export default {
  data() {
    return {
      exampleGaussjump: require("@/assets/videos/tutorial/advancedskill/gaussjump/GaussjumpExample.mp4"),
      exampleGaussjumpposter: require("@/assets/images/tutorial/advancedskills/gaussjump/GaussjumpExample.webp"),
      basicGaussjump: {
        "basicgaussjump1": require("@/assets/videos/tutorial/advancedskill/gaussjump/basicGaussjump.mp4"),
        "basicgaussjump2": require("@/assets/videos/tutorial/advancedskill/gaussjump/basicGaussjump2.mp4"),
        "basicgaussjump3": require("@/assets/videos/tutorial/advancedskill/gaussjump/basicGaussjump3.mp4"),
      },
      basicgaussjump1poster: require("@/assets/images/tutorial/advancedskills/gaussjump/basicGaussjump.webp"),
      basicgaussjump2poster: require("@/assets/images/tutorial/advancedskills/gaussjump/basicGaussjump2.webp"),
      basicgaussjump3poster: require("@/assets/images/tutorial/advancedskills/gaussjump/basicGaussjump3.webp"),
      bhopGaussjump: require("@/assets/videos/tutorial/advancedskill/gaussjump/BhopGaussjump.mp4"),
      bhopGaussjumpposter: require("@/assets/images/tutorial/advancedskills/gaussjump/BhopGaussjump.webp"),
      longjumpGaussjump: require("@/assets/videos/tutorial/advancedskill/gaussjump/longjumpGaussjump.mp4"),
      longjumpGaussjumpposter: require("@/assets/images/tutorial/advancedskills/gaussjump/longjumpGaussjump.webp"),
      directGaussjump: {
        "x": require("@/assets/videos/tutorial/advancedskill/gaussjump/x_Gaussjump.mp4"),
        "y": require("@/assets/videos/tutorial/advancedskill/gaussjump/y_Gaussjump.mp4"),
      }, 
      xposter: require("@/assets/images/tutorial/advancedskills/gaussjump/x_Gaussjump.webp"),
      yposter: require("@/assets/images/tutorial/advancedskills/gaussjump/y_Gaussjump.webp"),
    }
  }
}
</script>
<style src="@/assets/css/advancedskill.css" scoped>
</style>