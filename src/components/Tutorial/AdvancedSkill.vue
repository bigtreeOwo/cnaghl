<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <h1>进阶技巧</h1>
      </div>

      <div id="skillnav">
        <el-menu default-active="/advancedskill/bunnyhop" @open="handleOpen" @close="handleClose" router>
          <el-menu-item index="/advancedskill/bunnyhop">
            <span slot="title">连跳</span>
          </el-menu-item>
          <el-menu-item index="/advancedskill/gaussjump">
            <span slot="title">高斯跳</span>
          </el-menu-item>
          <el-menu-item index="/advancedskill/spawnpoint">
            <span slot="title">重生点</span>
          </el-menu-item>
          <el-menu-item index="/advancedskill/Mapknowledge">
            <span slot="title">地图攻略</span>
          </el-menu-item>
        </el-menu>
        <div id="skilldescription">
          <router-view name="advancedskill"></router-view>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  mounted() {
    document.title = "进阶技巧 - CN-AGHL"
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

<style src="@/assets/css/advancedskill.css" scoped>
</style>