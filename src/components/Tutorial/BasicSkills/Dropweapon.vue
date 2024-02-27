<template>
  <div class="AGTricksContent">
    <h1>丢弃武器（Drop weapon）</h1>

    <p>
      丢弃武器即为将手中目前所拿的武器丢出。值得注意的是，<span style="font-weight: bold;">丢弃出去的武器还会附带一半的备弹，</span>例如当你手中有一把弹药为60的高斯枪时，丢出去的是高斯枪本身+30发弹药。另外，丢弃的武器会统一显示为武器盒的模型。
    </p>

    <el-image alt="w_weaponbox" :src="require('@/assets/images/tutorial/basicskills/w_weaponbox.jpg')" lazy></el-image>
    <p class="ImgCaption">
      图：丢弃的武器盒
    </p>

    <p>
      丢弃武器其实是HLDM本身一直存在的功能，但奇怪的是V社并没有把这个功能放进游戏设置里面供玩家直接绑定按键，而是让玩家自行在控制台探索。
    </p>

    <p>
      丢弃武器的命令为“drop”，因此你可以进入游戏后在控制台直接输入 bind "按键" "drop" 来绑定按键。例如，如果你想使用H键来丢弃武器，那么你可以在控制台输入以下内容：
    </p>

    <p class="Code">
      bind "h" "drop"
    </p>

    <p>
      除了在控制台中写入的方法以外，你也可以直接将以上代码写入到valve/config.cfg（或ag/config.cfg）文件中。
    </p>

    <p>
      <span style="font-weight: bold;">丢弃武器在实战中主要有两个作用，第一个是在团队比赛中将武器分享给你的队友；第二个是利用丢弃武器来实现快速装填。</span>当你手上的武器弹匣打空而地图上有对应的武器时，你可以直接丢弃手上的武器再捡起地图上刷出的武器来实现快速填满弹匣。下图是使用rpg作为例子，实现rpg连续打出两发的效果。
    </p>

    <el-image alt="drop" :src="require('@/assets/images/tutorial/basicskills/drop.gif')" lazy></el-image>
    <p class="ImgCaption">
      图：利用丢弃武器实现连续打两发rpg
    </p>

    <p>
      需要注意的是，若服务器开启了武器即时刷新的功能，则无法丢弃武器。
    </p>

  </div>
</template>

<script>
export default {

}
</script>

<style src="@/assets/css/basicskill.css" scoped>
</style>