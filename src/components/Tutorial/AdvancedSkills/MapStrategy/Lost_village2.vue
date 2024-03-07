<template>
  <div>
    <h2>Lost_village2重生点</h2>
    <el-image class="respawnpoint" :src="respawnpointpic" lazy></el-image>

  </div>
</template>
<script>
export default {
  data() {
    return {
      respawnpointpic: require("@/assets/images/tutorial/advancedskills/spawn/lost_village2.png"),
    }
  }
}
</script>
<style src="@/assets/css/mapknowledge.css" scoped>

</style>