<template>
  <div>
    <h1>
      <a
        href="https://github.com/tmp64/BugfixedHL-Rebased/releases"
        target="_blank"
        style="color: #ffa500"
        >BugfixedHL(点我下载)</a
      >
    </h1>
    <div>
      BFHL是原版半条命1的补丁，不属于单独的模组。BFHL旨在提升原版HLDM的游戏体验。用户安装BFHL之后即可在任何原版HL1的服务器上游玩。目前BFHL支持4554以及8xxx以上的游戏引擎版本。以下是BFHL客户端的部分优化：
    </div>
    <ul>
      <li>支持自动连跳以及小跳（如果服务器允许）</li>
      <li>彩色HUD</li>
      <li>游戏可以直接获取鼠标原始数据</li>
      <li>支持自动录取demo</li>
      <li>可完全禁用玩家的自定义模型</li>
      <li>
        更好使的用户交互，包括：更好看的记分牌、击杀音效、聊天记录可以被保存、观察者UI、团队选择界面、命令菜单以及选项对话框等。
      </li>
    </ul>
    <div>
      首先你需要一个符合支持版本的半条命1，目前(2024年2月)BFHL支持的版本为4554以及8xxx以上的版本。查看游戏版本的方法为进入游戏后打开控制台（默认~键），输入version即会返回版本信息，例如：
    </div>
    <br />

    <el-image
      :src="require('@/assets/images/download/bfhl/BFHL_INSTALL_1.jpg')"
      alt="bfhl安装"
      style="border: white 2px solid"
      lazy
    ></el-image>

    <div>最后一行的(9920)说明游戏版本号为9920。</div>
    <div>
      到BFHL的Github发布页面下找到最新版本，点击BugfixedHL-v*.*.*-client.zip进行下载。
    </div>
    <br />
    <div>
      打开游戏安装根目录，即包含valve以及hl.exe的目录，解压下载的压缩包，将valve_addon文件夹复制到该目录下，并覆盖必要文件（可以先做文件备份）。
    </div>
    <br />
    <div>
      运行HL1，在游戏选项中勾上"Allow custom addon
      content"以启用自定义内容。然后再重启游戏即可开始游玩。你可以在控制台中输入about来检查是否成功安装。
    </div>
    <br />

    <el-image
      :src="require('@/assets/images/download/bfhl/BFHL_INSTALL_2.jpg')"
      alt="bfhl安装"
      style="border: white 2px solid"
      lazy
    ></el-image>

    <h1>部分功能展示</h1>
    <h2>计分板</h2>
    <el-image
      :src="require('@/assets/images/download/bfhl/BFHL_1.jpg')"
      alt="计分板"
      style="border: white 2px solid"
      lazy
    ></el-image>
    <h2>自定义准星</h2>
    <el-image
      :src="require('@/assets/images/download/bfhl/BFHL_2.jpg')"
      alt="自定义准星"
      style="border: white 2px solid"
      lazy
    ></el-image>
    <h2>聊天框</h2>
    <el-image
      :src="require('@/assets/images/download/bfhl/BFHL_3.jpg')"
      alt="聊天框"
      style="border: white 2px solid"
      lazy
    ></el-image>
    <h2>设置界面</h2>
    <el-image
      :src="require('@/assets/images/download/bfhl/BFHL_4.jpg')"
      alt="设置界面"
      style="border: white 2px solid"
      lazy
    ></el-image>
    <h2>HUD设置界面</h2>
    <el-image
      :src="require('@/assets/images/download/bfhl/BFHL_5.jpg')"
      alt="HUD设置界面"
      style="border: white 2px solid"
      lazy
    ></el-image>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>