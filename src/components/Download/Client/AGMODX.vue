<template>
  <div>
    <h1>
      <a
        href="https://github.com/rtxa/agmodx/releases"
        style="color: #ffa500"
        target="_blank"
        >AG MOD X (点我下载)</a
      >
    </h1>
    <el-image
      :src="require('@/assets/images/download/agmodx/AGMODX.png')"
      alt="agmodx"
      lazy
    ></el-image>
    <br />
    <div>
      AG Mod X是一款基于Mini
      AG的AMXX插件，其主要运行在服务器端，使用该插件可以用原版的HLDM获得与AG几乎无异的游戏体验。以下是插件的一些特点：
    </div>
    <ul>
      <li>已包含BugfixedHL的功能。</li>
      <li>支持多种语言</li>
      <li>可以灵活使用。该插件可以与其他的AMXX插件共同使用。</li>
      <li>加入了LLHL模式</li>
      <li>开源</li>
    </ul>
    <h2>安装：</h2>
    <div>
      首先你需要在服务器上安装最新的Half-Life Dedicated
      Server，目前(2024年2月)AG MOD X支持的版本为8308以及以上的版本。
    </div>
    <br />
    <div>
      到AG MOD
      X的Github发布页面下找到最新版本，根据你的服务器系统（Windows或Linux）进行下载，压缩包内已包含Metamod以及AMXX平台。
    </div>
    <br />
    <div>
      下载完毕后把压缩包内的valve文件夹解压到服务器的游戏安装目录，覆盖相关文件。然后开启服务器即可。
    </div>
    <br />
    <div>
      当然，如果你想本地部署，也可以将valve文件夹直接复制到你的游戏目录，但请注意安装之前需要做好备份。
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style src="@/assets/css/client.css" scoped>
</style>