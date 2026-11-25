<template>
  <div>
    <h2>
      Stalkyard重生点
    </h2>
    <el-image class="respawnpoint" :src="respawnpointpic" lazy></el-image>
  </div>
</template>
<script>
import { asset } from '@/utils/asset.js';
export default {
  data() {
    return {
      respawnpointpic: asset("images/tutorial/advancedskills/spawn/stalkyard.png"),
    }
  }
}
</script>
<style src="@/assets/css/mapknowledge.css" scoped>

</style>