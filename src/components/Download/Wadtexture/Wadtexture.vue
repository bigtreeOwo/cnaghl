<template>
  <div>
    <h1>自定义纹理</h1>
    <el-card class="box-card">
      <div slot="header" class="text item">
        <h2>使用方法：</h2>
        <p>
          OpenAG： 直接将下载的wad文件复制进ag文件夹覆盖原文件（如果有）即可。
        </p>
        <div>HL:</div>
        <div>
          -若开启了自定义内容：将文件复制进valve_addon文件夹中即可，如果想卸载可以直接删除。
        </div>
        <div>
          -未开启自定义内容，启用高清模型：将wad文件复制进valve_hd文件夹，覆盖必要文件。
        </div>
        <div>
          -未开启自定义内容，未启用高清模型：将wad文件复制进valve文件夹，覆盖必要文件。
        </div>
        <strong style="color: red"
          >(任何涉及覆盖文件的操作请提前做好文件备份，以便以后恢复)
        </strong>
      </div>
      <div v-for="item in wadtexture" :key="item.id" class="ItemBlockWad">
        <div v-for="url in item.imgurl" :key="url.id" class="ImgDiv">
          <img :src="url.url" :alt="item.description" lazy />
        </div>
        <div class="ItemTitle">{{ item.name }}</div>
        <div class="SplitLine"></div>
        <div class="ItemDesrcp">
          {{ item.description }}
        </div>
        <a :href="HDWadLink" :download="item.name" target="_blank"
          ><div class="DLButton"></div
        ></a>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filepath: "./files/wadtexture/",
      HDWadLink: "https://pan.baidu.com/s/1zWlNgzgL8n75F6dBtPOnWA?pwd=bs4r",
      wadtexture: [
        {
          id: 1,
          name: "高清纹理.rar",
          description:
            "专用于HL1的细节纹理贴图包，已包含cf、boot_camp、stalkyard、doublecross等常用地图。使用方法为把压缩包内容直接丢到valve_addon或valve文件夹，进入游戏后在控制台输入r_detailtextures 1启用，若不想用，则输入r_detailtextures 0即可关闭。",
          imgurl: [
            {
              id: 1,
              url: require("@/assets/images/download/wadtextures/HDwad1.jpg"),
            },
            {
              id: 2,
              url: require("@/assets/images/download/wadtextures/HDwad2.jpg"),
            },
            {
              id: 3,
              url: require("@/assets/images/download/wadtextures/HDwad3.jpg"),
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.ItemBlockWad {
  width: 1200px;
  height: 500px;
  position: relative;
  left: 50%;
  margin-left: -600px;
  margin-bottom: 35px;
  background-color: #4b5745;
  border: #ffffff 2px solid;
  box-shadow: 4px 4px 15px;
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
  background-color: #3e4537;
}

.ItemBlockWad .ItemTitle {
  display: block;
  position: absolute;
  width: 1200px;
  height: 30px;
  margin-top: 20px;
  font-family: "微软雅黑";
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
  font-family: "微软雅黑";
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
  background-image: url("@/assets/images/download/DLbutton.png");
}

.ItemBlockWad .DLButton:hover {
  background-image: url("@/assets/images/download/DLbutton2.png");
}
</style>