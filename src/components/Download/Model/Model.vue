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
        <strong style="color: red"
          >(任何涉及覆盖文件的操作请提前做好文件备份，以便以后恢复)
        </strong>
      </div>
      <div v-for="item in model" :key="item.id" class="ItemBlockMdl">
        <div class="ImgDiv">
          <img :src="require(item.imgurl)" :alt="item.description" />
        </div>
        <div class="ItemTitle">{{ item.name }}</div>
        <div class="SplitLine"></div>
        <div class="ItemDesrcp">
          {{ item.description }}
        </div>
        <a :href="item.file" :download="item.name"><div class="DLButton"></div></a>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Model",
  data() {
    return {
      model: [
        {
          id: 1,
          name: "亮色玩家模型.rar",
          file: "../../../assets/files/model/亮色玩家模型.rar",
          description:
            "高亮纯色人物模型，包含多种颜色，让你的敌人无处遁形，再也不怕眼瞎看不见人。可以搭配BFHL强制指定人物模型的功能使用，也可以直接改名字替换原模型。",
          imgurl: '@/assets/images/models/MDL1.jpg',
        },
        {
          id: 2,
          name: "辉光玩家模型.rar",
          file: "../../../assets/files/model/辉光玩家模型.rar",
          description:"在以上模型的基础上增加一层辉光，更显尊贵。",
          imgurl: "../../../assets/images/models/MDL2.jpg",
        },
        {
          id: 3,
          name: "WireframeGunsPack.zip",
          file: "../../../assets/files/model/WireframeGunsPack.zip",
          description: "嫌v模阻挡视线但是又不想直接隐藏模型？那么你可以试试这个。该资源基于HL1的原版模型，包含整套v模和w模。",
          imgurl: "../../../assets/images/models/MDL3.jpg",
        },
        {
          id: 4,
          name: "方块W模.7z",
          file: "../../../assets/files/model/方块W模.7z",
          description:"老版AG自带的资源，是AG的标志性模型，本意是为了降低模型的面数以提高fps。在电脑配置已经远超HL1要求的今天，该模型的意义主要在于怀旧。",
          imgurl: "../../../assets/images/models/MDL4.jpg",
        },
        {
          id: 5,
          name: "Spr式W模.rar",
          file: "../../../assets/files/model/Spr式W模.rar",
          description: "由国外玩家rammy制作的模型包。可以让武器W模变成类似于spr图标的效果。又帅又省资源。",
          imgurl: "../../../assets/images/models/MDL5.jpg",
        },
        {
          id: 6,
          name: "纯色透明V模.rar",
          file: "../../../assets/files/model/纯色透明V模.rar",
          description: "由国外玩家rammy制作的极简主义V模，隐藏了手臂模型，武器模型为纯色+透明。",
          imgurl: "../../../assets/images/models/MDL6.jpg",
        },
        {
          id: 7,
          name: "一堆高斯.zip",
          file: "../../../assets/files/model/一堆高斯.zip",
          description: "作为AG最超模的武器，高斯枪的皮肤往往是最多且最炫酷的，这个包就包含了网上收集的一堆高斯v模。",
          imgurl: "../../../assets/images/models/MDL7.jpg",
        },
        {
          id: 8,
          name: "sXLg_Gauss.rar",
          file: "../../../assets/files/model/sXLg_Gauss.rar",
          description: "抽象高斯模型，用了之后高斯命中率-90%，且对手预瞄重生点成功率+90%。用了它，赢得比赛从未变得如此困难！",
          imgurl: "../../../assets/images/models/MDL8.jpg",
        },
        {
          id: 9,
          name: "HL2武器模型.rar",
          file: "../../../assets/files/model/HL2武器模型.rar",
          description:"从HL2移植的武器模型，包含音效。",
          imgurl: "../../../assets/images/models/MDL9.jpg",
        },
        {
          id: 10,
          name: "一堆高斯皮肤By_K3NS4N.rar",
          file: "../../../assets/files/model/一堆高斯皮肤By_K3NS4N.rar",
          description:"由国外玩家K3NS4N制作并整合的高斯皮肤包，基于原版的HD模型修改。",
          imgurl: "../../../assets/images/models/MDL10.jpg",
        },
        {
          id: 11,
          name:"高亮原版LD玩家模型.rar",
          file: "../../../assets/files/model/高亮原版LD玩家模型.rar",
          description:"怕看不见人但是又不想失去原本玩家模型的辨析度？那你可以试试这个！",
          imgurl: "../../../assets/images/models/MDL11.jpg",
        }

      ],
    };
  },
};
</script>

<style>
.ItemBlockMdl {
  width: 1200px;
  height: 250px;
  position: relative;
  left: 50%;
  margin-left: -600px;
  margin-bottom: 35px;
  background-color: lightgrey;
}

.ItemBlockMdl .ImgDiv {
  width: 230px;
  height: 230px;
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;
  overflow: hidden;
  background-color: brown;
}

.ItemBlockMdl .ItemTitle {
  display: inline-block;
  position: absolute;
  width: 600px;
  height: 30px;
  margin-left: 50px;
  margin-top: 25px;
  font-family: 微软雅黑;
  font-size: 35px;
}

.ItemBlockMdl .SplitLine {
  display: inline-block;
  position: absolute;
  width: 850px;
  height: 4px;
  margin-left: 50px;
  margin-top: 80px;
  background-color: black;
}

.ItemBlockMdl .ItemDesrcp {
  display: inline-block;
  position: absolute;
  width: 850px;
  height: 30px;
  margin-left: 70px;
  margin-top: 100px;
  font-family: 微软雅黑;
  font-size: 18px;
}

.ItemBlockMdl .DLButton {
  display: inline-block;
  position: absolute;
  width: 50px;
  height: 50px;
  margin-left: 870px;
  margin-top: 180px;
  overflow: hidden;
  background-image: url("../../../assets/images/models/DLbutton.png");
}

.ItemBlockMdl .DLButton:hover {
  background-image: url("../../../assets/images/models/DLbutton2.png");
}

.ItemBlockWad {
  width: 1200px;
  height: 500px;
  position: relative;
  left: 50%;
  margin-left: -600px;
  margin-bottom: 35px;
  background-color: lightgrey;
}

.ItemBlockWad .ImgDiv {
  width: 360px;
  height: 216px;
  display: inline-block;
  margin-left: 27px;
  margin-top: 20px;
  overflow: hidden;
  background-color: brown;
}

.ItemBlockWad img {
  width: 360px;
  height: auto;
}

.ItemBlockWad .SplitLine {
  display: block;
  position: absolute;
  width: 1000px;
  height: 4px;
  margin-left: 100px;
  margin-top: 80px;
  background-color: black;
}

.ItemBlockWad .ItemTitle {
  display: block;
  position: absolute;
  width: 1200px;
  height: 30px;
  margin-top: 20px;
  font-family: 微软雅黑;
  font-size: 35px;
  text-align: center;
}

.ItemBlockWad .ItemDesrcp {
  display: block;
  position: absolute;
  width: 900px;
  height: 30px;
  margin-left: 150px;
  margin-top: 100px;
  font-family: 微软雅黑;
  font-size: 18px;
}

.ItemBlockWad .DLButton {
  display: block;
  position: absolute;
  width: 50px;
  height: 50px;
  margin-left: 1120px;
  margin-top: 190px;
  overflow: hidden;
  background-image: url("../../../assets/images/models/DLbutton.png");
}

.ItemBlockWad .DLButton:hover {
  background-image: url("../../../assets/images/models/DLbutton2.png");
}
</style>