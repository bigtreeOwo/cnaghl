<template>
  <div>
    <h1>自定义模型</h1>
    <el-card class="box-card">
      <div slot="header" class="text item">
        <h2>使用方法：</h2>
        <p>
          OpenAG：
          直接将下载的mdl文件按照目录复制进ag的models文件夹覆盖原文件即可，玩家模型位于models/player中
        </p>
        <div>HL:</div>
        <div>
          -若开启了自定义内容：将文件复制进valve_addon的models文件夹（没有的话新建一个）中即可，如果想卸载可以直接删除。
        </div>
        <div>
          -未开启自定义内容，启用高清模型：将文件复制进valve_hd的models文件夹，覆盖必要文件。
        </div>
        <div>
          -未开启自定义内容，未启用高清模型：将文件复制进valve的models文件夹，覆盖必要文件。
        </div>
        <div>要浏览模型文件请百度搜索HLMV模型浏览器</div>
        <strong style="color: red">(任何涉及覆盖文件的操作请提前做好文件备份，以便以后恢复)
        </strong>
      </div>
      <div v-for="item in model" :key="item.id" class="ItemBlockMdl">
        <div class="ImgDiv">
          <el-image :src="item.imgurl" :alt="item.description" lazy />
        </div>
        <div class="ItemTitle">{{ item.name }}</div>
        <div class="SplitLine"></div>
        <div class="ItemDesrcp" v-html="item.description">
        </div>
        <a :href="filepath + item.name" :download="item.name">
          <div class="DLButton"></div>
        </a>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Model",
  data() {
    return {
      filepath: "./files/model/",
      model: [
        {
          id: 1,
          name: "亮色玩家模型.rar",
          description:
            "高亮纯色人物模型，包含多种颜色，让你的敌人无处遁形，再也不怕眼瞎看不见人。可以搭配BFHL强制指定人物模型的功能使用，也可以直接改名字替换原模型。",
          imgurl: require("@/assets/images/download/models/MDL1.webp"),
        },
        {
          id: 2,
          name: "辉光玩家模型.rar",
          description: "在以上模型的基础上增加一层辉光，更显尊贵。",
          imgurl: require("@/assets/images/download/models/MDL2.webp"),
        },
        {
          id: 3,
          name: "WireframeGunsPack.zip",
          description: "嫌v模阻挡视线但是又不想直接隐藏模型？那么你可以试试这个。该资源基于HL1的原版模型，包含整套v模和w模。",
          imgurl: require("@/assets/images/download/models/MDL3.webp"),
        },
        {
          id: 4,
          name: "方块W模.7z",
          description: "老版AG自带的资源，是AG的标志性模型，本意是为了降低模型的面数以提高fps。在电脑配置已经远超HL1要求的今天，该模型的意义主要在于怀旧。",
          imgurl: require("@/assets/images/download/models/MDL4.webp"),
        },
        {
          id: 5,
          name: "Spr式W模.rar",
          description: "由国外玩家rammy制作的模型包。可以让武器W模变成类似于spr图标的效果。又帅又省资源。",
          imgurl: require("@/assets/images/download/models/MDL5.webp"),
        },
        {
          id: 6,
          name: "纯色透明V模.rar",
          description: "由国外玩家rammy制作的极简主义V模，隐藏了手臂模型，武器模型为纯色+透明。",
          imgurl: require("@/assets/images/download/models/MDL6.webp"),
        },
        {
          id: 7,
          name: "一堆高斯.zip",
          description: "作为AG最超模的武器，高斯枪的皮肤往往是最多且最炫酷的，这个包就包含了网上收集的一堆高斯v模。",
          imgurl: require("@/assets/images/download/models/MDL7.webp"),
        },
        {
          id: 8,
          name: "sXLg_Gauss.rar",
          description: "抽象高斯模型，用了之后高斯命中率-90%，且对手预瞄重生点成功率+90%。用了它，赢得比赛从未变得如此困难！",
          imgurl: require("@/assets/images/download/models/MDL8.webp"),
        },
        {
          id: 9,
          name: "HL2武器模型.rar",
          description: "从HL2移植的武器模型，包含音效。",
          imgurl: require("@/assets/images/download/models/MDL9.webp"),
        },
        {
          id: 10,
          name: "一堆高斯皮肤By_K3NS4N.rar",
          description: "由国外玩家K3NS4N制作并整合的高斯皮肤包，基于原版的HD模型修改。",
          imgurl: require("@/assets/images/download/models/MDL10.webp"),
        },
        {
          id: 11,
          name: "高亮原版LD玩家模型.rar",
          description: "怕看不见人但是又不想失去原本玩家模型的辨析度？那你可以试试这个！",
          imgurl: require("@/assets/images/download/models/MDL11.webp"),
        },
        {
          id: 12,
          name: "bms_style-wpn-v23.rar",
          description: '搬运自Gamebanana。由动画师MTB-Animations制作的全套新动作武器模型，动画风格仿制了黑山起源的风格。该模型包包含了pw模型，位于文件夹Pee-Wees中，音效文件位于SFX文件夹中，包含了提取自BMS的音效文件(BlackMesa SFX)和HL1原版风格的音效(HL1 SFX)，可任君选择。另外该包还同时包含了争锋相对和蓝色行动的模型版本，分别位于gearbox_addon和bshift_addon文件夹中。<span><a href="https://gamebanana.com/mods/391280" target="_blank"> 此处为原地址</a></span >',
          imgurl: require("@/assets/images/download/models/bms_style-wpn-v23.gif"),
        },
        {
          id: 13,
          name: "cs_in_hl.zip",
          description: '搬运自Gamebanana。由Reden分享的用于HL1的CS零点行动武器模型，手感十分奇妙。<span><a href="https://gamebanana.com/mods/179849" target="_blank">此处为原地址</a></span>',
          imgurl: require("@/assets/images/download/models/cs_in_hl.webp"),
        },
        {
          id: 14,
          name: "half-life_with_mw_anims_61aa4.zip",
          description: '搬运自Gamebanana。由H33eLmeted制作的基于COD现代战争枪械动画的HL1原版武器，包含音效以及原版手臂、高清手臂两种模型，分别位于valve以及valve_hd文件夹中。另外该包还同时包含了争锋相对和蓝色行动的模型版本，分别位于gearbox和bshift文件夹中。<span><a href="https://gamebanana.com/mods/435798" target="_blank">此处为原地址</a></span>',
          imgurl: require("@/assets/images/download/models/half-life_with_mw_anims_61aa4.gif"),
        },
        {
          id: 15,
          name: "hlmix.zip",
          description: '搬运自Gamebanana。由Slartibary制作的模型包，该模型包将HD模型的HEV手臂换到了LD模型的武器V模。<span><a href="https://gamebanana.com/mods/179910" target="_blank">此处为原地址</a></span>',
          imgurl: require("@/assets/images/download/models/hlmix.webp"),
        },
        {
          id: 16,
          name: "thirdpersonmodels.rar",
          description: '搬运自Gamebanana。你是否曾觉得原版的模型仍然过于高清？由casualmilk制作的这款超低清模型可以满足你！该模型包将第三人称的模型换到第一人称上，让你体验极致的低清模型！<span><a href="https://gamebanana.com/mods/410380" target="_blank">此处为原地址</a></span>',
          imgurl: require("@/assets/images/download/models/thirdpersonmodels.webp"),
        },
        {
          id: 17,
          name: "LDremake.rar",
          description: '搬运自Gamebanana。由动画师MTB-Animations制作的全套新动作原版低清武器模型，相比于原版有着更细致的动画质量。另外该包还同时包含了争锋相对和蓝色行动的模型版本，分别位于gearbox和bshift文件夹中。<span><a href="https://gamebanana.com/mods/179921" target="_blank">此处为原地址</a></span>',
          imgurl: require("@/assets/images/download/models/LDremake.webp"),
        },
        {
          id: 18,
          name: "redonedefaults_update.7z",
          description: '搬运自Gamebanana。由Sedqubus分享的模型包，该模型包将Brutal Half-Life的武器移植到了原版HL1中。<span><a href="https://gamebanana.com/mods/179870" target="_blank">此处为原地址</a></span>',
          imgurl: require("@/assets/images/download/models/redonedefaults_update.webp"),
        },
        {
          id: 19,
          name: "光环玩家模型.zip",
          description: '手持高斯枪，身穿雷神锤MK IV的超级战士？联合军能撑得过1天吗？',
          imgurl: require("@/assets/images/download/models/光环玩家模型.webp"),
        },
        {
          id: 20,
          name: "K3NS4N_方块w模.zip",
          description: '由国外玩家K3NS4N制作的方块w模，与AG自带的方块w模相比，该模型包具有更加细致的贴图。',
          imgurl: require("@/assets/images/download/models/K3NS4N_方块w模.webp"),
        }
      ],
    };
  },
  mounted() {
    document.title = "下载模型 - CN-AGHL";
  }
};
</script>

<style src="@/assets/css/download.css" scoped>
</style>