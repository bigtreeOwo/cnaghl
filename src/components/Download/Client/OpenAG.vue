<template>
  <div>
    <h1><a href="https://openag.pro/" style="color: #ffa500" target="_blank">Openag(点我下载)</a></h1>
    <el-image :src="require('@/assets/images/download/openag/OpenAG.png') " alt="openag" lazy></el-image>
    <div>
      OpenAG是AG的开源客户端，是目前AG的主流版本。该版本在AG6.6的基础上加入了一系列功能，极大地提升了游戏体验，例如：
    </div>
    <ul>
      <li>支持游戏直接获取鼠标原始数据(控制台命令m_rawinput 1)</li>
      <li>修复了许多bug</li>
      <li>原生Linux系统支持</li>
      <li>自定义准星</li>
      <li>可开启移动速度显示</li>
      <li>自带连跳以及小跳脚本</li>
      <li>击杀音效</li>
    </ul>
    <h2>安装：</h2>
    <div>
      首先你需要一个完整的半条命1作为宿主，这里建议使用Steam平台的正版HL1，因为目前正版HL1支持Steam
      Networking，可以直接联机。到OpenAG官网下载完整模组包，即点击FULL MOD
      PACKAGE。
    </div>
    <br />
    <div>
      下载完成后解压其中的“ag”文件夹至你的半条命1根目录，与vavle文件夹以及hl.exe处于同一个目录
    </div>
    <br>
    <el-image :src="require('@/assets/images/download/openag/OpenAGfolder.jpg')" alt="openagfolder" lazy></el-image>
    <br>
    <div>完成后在Steam游戏库中找到名为“OpenAG”的游戏，点击启动即可。</div>
  </div>
</template>
<script>
export default {

};
</script>
<style>
</style>