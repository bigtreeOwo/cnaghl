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
        <br>

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
        <div class="ItemDesrcp" v-html="item.description">
        </div>
        <a :href="item.WadLink" :download="item.name" target="_blank"
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
      wadtexture: [
        {
          id: 1,
          name: "高清纹理.rar",
          description:
            "专用于HL1的细节纹理贴图包，已包含cf、boot_camp、stalkyard、doublecross等常用地图。进入游戏后在控制台输入r_detailtextures 1启用，若不想用，则输入r_detailtextures 0即可关闭。",
          imgurl: [
            {
              id: 1,
              url: require("@/assets/images/download/wadtextures/HDwad1.webp"),
            },
            {
              id: 2,
              url: require("@/assets/images/download/wadtextures/HDwad2.webp"),
            },
            {
              id: 3,
              url: require("@/assets/images/download/wadtextures/HDwad3.webp"),
            },
          ],
          WadLink: "https://pan.baidu.com/s/1zWlNgzgL8n75F6dBtPOnWA?pwd=bs4r",
        },
        {
          id: 2,
          name: "模糊化纹理",
          description:
            '搬运自halflife.pro，由国外AG大佬Rammy制作的纹理包，该纹理包将游戏原版的纹理进行了模糊化处理，以减少纹理细节并提高敌人的可见度。<span><a href="https://halflife.pro/customization" target="_blank"> 此处为原地址</a></span >',
          imgurl: [
            {
              id: 1,
              url: require("@/assets/images/download/wadtextures/BlurWad1.jpg"),
            },
            {
              id: 2,
              url: require("@/assets/images/download/wadtextures/BlurWad2.jpg"),
            },
            {
              id: 3,
              url: require("@/assets/images/download/wadtextures/BlurWad3.jpg"),
            },
          ],
          WadLink: "https://pan.baidu.com/s/1KNssd7cg7DBjVzEbeWZBrg?pwd=5gml",
        },
        {
          id: 3,
          name: "灰度纹理",
          description:
            '搬运自halflife.pro，由国外AG大佬Rammy制作的纹理包，该纹理包将游戏原版的纹理进行了灰度处理理，以减少纹理的颜色细节，更能凸显敌人。<span><a href="https://halflife.pro/customization" target="_blank"> 此处为原地址</a></span >',
          imgurl: [
            {
              id: 1,
              url: require("@/assets/images/download/wadtextures/GreyScaleWad1.jpg"),
            },
            {
              id: 2,
              url: require("@/assets/images/download/wadtextures/GreyScaleWad2.jpg"),
            },
            {
              id: 3,
              url: require("@/assets/images/download/wadtextures/GreyScaleWad3.jpg"),
            },
          ],
          WadLink: "https://pan.baidu.com/s/1TPe3jMpBDkei1_ghEHZNwg?pwd=2nxj",
        },
        {
          id: 4,
          name: "单色格子纹理",
          description:
          '搬运自halflife.pro，由国外AG大佬Rammy制作的纹理包，该纹理包将游戏原版的纹理变成了单色的格子，作用也是为了进一步凸显敌人。<span><a href="https://halflife.pro/customization" target="_blank"> 此处为原地址</a></span >',
          imgurl: [
            {
              id: 1,
              url: require("@/assets/images/download/wadtextures/GridWad1.jpg"),
            },
            {
              id: 2,
              url: require("@/assets/images/download/wadtextures/GridWad2.jpg"),
            },
            {
              id: 3,
              url: require("@/assets/images/download/wadtextures/GridWad3.jpg"),
            },
          ],
          WadLink: "https://pan.baidu.com/s/1zBKgT0S8JRubNIyG4GJvPg?pwd=2c4x",
        },
      ],
    };
  },
  mounted() {
    document.title = "自定义纹理 - CN-AGHL";
  }
};
</script>

<style src="@/assets/css/download.css" scoped>

</style>