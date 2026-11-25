<template>
  <div>
    <br>
    <el-menu class="mapselect" :default-active="$route.path" router>
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