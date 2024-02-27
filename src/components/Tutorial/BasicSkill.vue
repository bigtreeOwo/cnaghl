<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <h1>基础技巧</h1>
        <h2>将 你 自 己 武 装 起 来！</h2>
        <p class="text item">
          初来乍到，不会玩AG？又或是自己玩了一段时间后玩不明白？没有关系！这里提供了一些AG的基本游戏技能，以及对游戏的一些原理的简单解释，是专门为刚起步的萌新玩家准备的，只要你有一定的FPS游戏基础，就一定能快速上手这个游戏！
        </p>
        <p class="text item">
          在AG中，<span style="font-weight: bold;">真正的手无寸铁并不是只拿一把小手枪和撬棍，而是对游戏操作的一无所知。</span>
          因此我们经常可以看见两个FPS基础相近的玩家在比赛中都能拉开很大差距，就是因为对游戏技巧的掌握程度不同。所以，请认真学习和练习，将你自己武装起来吧！
        </p>
        <p class="text item">
          如果你是第一次游玩AG，最好确保你已经了解了<span><a href="/weapon" style="color: red; font-weight: bold;">武器的使用</a></span>！
        </p>
      </div>
  
      <div id="skillnav">
        <el-menu default-active="/basicskill/devicesetting" @open="handleOpen" @close="handleClose" router>
          <el-menu-item index="/basicskill/devicesetting">
            <span slot="title">外设设置</span>
          </el-menu-item>
          <el-menu-item index="/basicskill/headshot">
            <span slot="title">爆头</span>
          </el-menu-item>
          <el-menu-item index="/basicskill/fasterswitch">
            <span slot="title">快速切枪</span>
          </el-menu-item>
          <el-menu-item index="/basicskill/longjump">
            <span slot="title">长跳</span>
          </el-menu-item>
          <el-menu-item index="/basicskill/quickbow">
            <span slot="title">瞬弩</span>
          </el-menu-item>
          <el-menu-item index="/basicskill/dropweapon">
            <span slot="title">丢弃武器</span>
          </el-menu-item>
          <el-menu-item index="/basicskill/gausstrick">
            <span slot="title">高斯穿墙</span>
          </el-menu-item>
        </el-menu>
        <div id="skilldescription">
          <router-view></router-view>
        </div>
      </div>
    </el-card>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: 'left',
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  }
}
</script>

<style src="@/assets/css/basicskill.css" scoped>
</style>