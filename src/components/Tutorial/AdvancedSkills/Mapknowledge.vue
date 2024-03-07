<template>
  <div>
    <br>
    <el-menu background-color="#4b5745" text-color="#ffffff" active-text-color="#000000" class="mapselect" router>
      <el-menu-item v-for="map in maps" :key="map" class="map" :index="'/advancedskill/mapknowledge/' + map">{{ map }}</el-menu-item>
    </el-menu>
    <br>
    <hr>
    <router-view name="map"></router-view>

  </div>
</template>
<script>
export default {
  data() {
    return {
      maps: [
        "crossfire",
        "lost_village2",
        "stalkx",
        "stalkyard",

      ]
    }
  }
}
</script>
<style src="@/assets/css/mapknowledge.css" scoped>
</style>