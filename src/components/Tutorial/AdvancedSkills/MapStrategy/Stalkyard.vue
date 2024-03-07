<template>
  <div>
    <h2>
      Stalkyard重生点
    </h2>
    <el-image class="respawnpoint" :src="respawnpointpic" lazy></el-image>
  </div>
</template>
<script>
export default {
  data() {
    return {
      respawnpointpic: require("@/assets/images/tutorial/advancedskills/spawn/stalkyard.png"),
    }
  }
}
</script>
<style src="@/assets/css/mapknowledge.css" scoped>

</style>