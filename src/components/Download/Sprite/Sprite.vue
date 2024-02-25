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
        <div class="ItemDesrcp">
          {{ item.description }}
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
          id: 1,
          name: "HR_Alex_Sprites.7z",
          description:
            "AG传奇玩家Alex的全套Spr。包含HUD、准星、数字、爆炸效果、高斯光束等。用上它，像Alex一样主宰全场！",
          imgurl: require("@/assets/images/download/sprites/AlexSpr.gif"),
        },
        {
          id: 2,
          name: "RainbowHotglow.rar",
          description:
            '"你最享受的比赛时刻是什么？" sXLg:"看着对手的高斯火花在我的gibs上跳舞。"',
          imgurl: require("@/assets/images/download/sprites/RainbowHotglow.gif"),
        },
        {
          id: 3,
          name: "BlueArcExp.rar",
          description:
            "从Alex的圆形爆炸效果修改，颜色改成了蓝色，并且延长了动画持续时间。",
          imgurl: require("@/assets/images/download/sprites/BlueArcExp.gif"),
        },
        {
          id: 4,
          name: "BlueHotglow.rar",
          description: "经典",
          imgurl: require("@/assets/images/download/sprites/BlueHotglow.jpg"),
        },
        {
          id: 5,
          name: "HLRedux_Spr.rar",
          description:
            "从HL:Redux（Moddb主页： https://www.moddb.com/mods/half-life-redux-v2）中提取的Spr，主打BMS的HUD、武器图标以及一些高清的贴图例如枪口火焰、血液等。",
          imgurl: require("@/assets/images/download/sprites/HLR.gif"),
        },
      ],
    };
  },
};
</script>

<style>
</style>