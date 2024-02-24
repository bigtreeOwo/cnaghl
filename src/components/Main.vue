<template>
  <div>
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minHeight: window.screen.height,
    };
  },
};
</script>

<style>
.el-main {
  opacity: 100%;
  margin: auto;

}
</style>