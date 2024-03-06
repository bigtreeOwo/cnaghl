<template>
  <div>
    <h1>自定义Spr</h1>
    <el-card class="box-card">
      <div slot="header" class="text item">
        <h2>使用方法：</h2>
        <p>
          OpenAG：
          直接将下载的spr文件按照目录复制进ag的sprites文件夹覆盖原文件即可。
        </p>
        <div>HL:</div>
        <div>
          -若开启了自定义内容：将文件复制进valve_addon的sprites文件夹（没有的话新建一个）中即可，如果想卸载可以直接删除。
        </div>
        <div>
          -未开启自定义内容，启用高清模型：将文件复制进valve_hd的sprites文件夹，覆盖必要文件。
        </div>
        <div>
          -未开启自定义内容，未启用高清模型：将文件复制进valve的sprites文件夹，覆盖必要文件。
        </div>
        <div>要浏览spr文件请百度搜索Sprviewer</div>
        <strong style="color: red"
          >关于HUD图标：部分Spr需要对hud.txt或者武器单独的txt文件进行编辑才能使用，请注意资源内是否有相关说明。</strong
        >
        <br />
        <strong style="color: red"
          >(任何涉及覆盖文件的操作请提前做好文件备份，以便以后恢复)
        </strong>
      </div>
      <div v-for="item in sprite" :key="item.id" class="ItemBlockMdl">
        <div class="ImgDiv">
          <img :src="item.imgurl" :alt="item.description" lazy/>
        </div>
        <div class="ItemTitle">{{ item.name }}</div>
        <div class="SplitLine"></div>
        <div class="ItemDesrcp" v-html="item.description">
        </div>
        <a :href="filepath + item.name" :download="item.name"
          ><div class="DLButton"></div
        ></a>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "sprite",
  data() {
    return {
      filepath: "./files/sprite/",
      sprite: [
        {
          id: "HR_Alex_Sprites.7z",
          name: "HR_Alex_Sprites.7z",
          description:
            "AG传奇玩家Alex的全套Spr。包含HUD、准星、数字、爆炸效果、高斯光束等。用上它，像Alex一样主宰全场！",
          imgurl: require("@/assets/images/download/sprites/AlexSpr.gif"),
        },
        {
          id: "rammy_sprites.zip",
          name: "rammy_sprites.zip",
          description: "国外AG高手Rammy制作的spr包，继承了rammy一如既往的极简风格。该spr包主打大HUD以及纯色特效，并且隐藏了高斯光束、胶子炮光束等特效。",
          imgurl: require("@/assets/images/download/sprites/rammy_sprites.gif"),
        },
        {
          id: "KingiSus_Sprites.rar",
          name: "KingiSus_Sprites.rar",
          description: "AG传奇玩家KingiSus的全套Spr，采用点状准星，简化了爆炸效果，修改了rpg轨迹、高斯枪光束等。",
          imgurl: require("@/assets/images/download/sprites/KingiSus_Sprites.gif"),
        },
        {
          id: "RainbowHotglow.rar",
          name: "RainbowHotglow.rar",
          description:
            '"你最享受的比赛时刻是什么？" sXLg:"看着对手的高斯火花在我的gibs上跳舞。"',
          imgurl: require("@/assets/images/download/sprites/RainbowHotglow.gif"),
        },
        {
          id: "BlueArcExp.rar",
          name: "BlueArcExp.rar",
          description:
            "从Alex的圆形爆炸效果修改，颜色改成了蓝色，并且延长了动画持续时间。",
          imgurl: require("@/assets/images/download/sprites/BlueArcExp.gif"),
        },
        {
          id: "BlueHotglow.rar",
          name: "BlueHotglow.rar",
          description: "经典",
          imgurl: require("@/assets/images/download/sprites/BlueHotglow.webp"),
        },
        {
          id: "HLRedux_Spr.rar",
          name: "HLRedux_Spr.rar",
          description:
            "从HL:Redux（Moddb主页： <a href='https://www.moddb.com/mods/half-life-redux-v2' target='_blank'>https://www.moddb.com/mods/half-life-redux-v2</a>）中提取的Spr，主打BMS的HUD、武器图标以及一些高清的贴图例如枪口火焰、血液等。",
          imgurl: require("@/assets/images/download/sprites/HLR.gif"),
        },
        {
          id: "go_pain_maxter_snake.rar",
          name: "go_pain_maxter_snake.rar",
          description: "搬运自Gamebanana，由MAXTER_SNAKE制作的CSGO式的HUD伤害指示。<span><a href='https://gamebanana.com/mods/11554'>此处为原地址</a></span>",
          imgurl: require("@/assets/images/download/sprites/go_pain_maxter_snake.webp"),
        },
        {
          id: "RainbowSmoke.rar",
          name: "RainbowSmoke.rar",
          description: "搬运自Gamebanana，由[TheLastBreath]分享的彩虹高斯光束以及Rpg轨迹，配合彩色高斯火花食用风味更佳。<span><a href='https://gamebanana.com/mods/331519' target='_blank'>此处为原地址</a></span>",
          imgurl: require("@/assets/images/download/sprites/RainbowSmoke.webp"),
        },
        {
          id: "RedHotglow.rar",
          name: "RedHotglow.rar",
          description: "自古红蓝出CP。",
          imgurl: require("@/assets/images/download/sprites/RedHotglow.webp"),
        },
        {
          id: "SourceRpgDot.rar",
          name: "SourceRpgDot.rar",
          description: "搬运自Gamebanana，由MAXTER_SNAKE制作的起源式RPG激光红点，比起原版的红点有着更好的可视度。<span><a href='https://gamebanana.com/mods/11525' target='_blank'>此处为原地址</a></span>",
          imgurl: require("@/assets/images/download/sprites/SourceRpgDot.webp"),
        },
        {
          id: "new_laser_dot.zip",
          name: "new_laser_dot.zip",
          description: "搬运自Gamebanana，由Benjamim制作的打击坐标式的RPG红点，颇有创意。<span><a href='https://gamebanana.com/mods/11526' target='_blank'>此处为原地址</a></span>",
          imgurl: require("@/assets/images/download/sprites/new_laser_dot.webp"),
        },
        
      ],
    };
  },
  mounted() {
    document.title = "自定义Spr - CN-AGHL";
  }
};
</script>

<style src="@/assets/css/download.css" scoped>

</style>