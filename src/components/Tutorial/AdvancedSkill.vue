<template>
  <div>
    <el-card class="box-card">
      <template #header><div>
        <h1>进阶技巧</h1>
      </div></template>

      <div id="skillnav">
        <el-menu default-active="/advancedskill/bunnyhop" @open="handleOpen" @close="handleClose" router>
          <el-menu-item index="/advancedskill/bunnyhop">
            <template #title><span>连跳</span></template>
          </el-menu-item>
          <el-menu-item index="/advancedskill/gaussjump">
            <template #title><span>高斯跳</span></template>
          </el-menu-item>
          <el-menu-item index="/advancedskill/spawnpoint">
            <template #title><span>重生点</span></template>
          </el-menu-item>
          <el-menu-item index="/advancedskill/Mapknowledge">
            <template #title><span>地图攻略</span></template>
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