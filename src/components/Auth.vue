<template>
  <div class="ag-center-page">

    <el-result icon="warning" title="" subTitle="">

    </el-result>
    <div>
      <h1>:|</h1>
    </div>
    <div>
      <h1>这个页面要登录后才能查看哦૮(˶ᵔ ᵕ ᵔ˶)ა</h1>
    </div>
    <div>
      <router-link to="/login">去登录</router-link>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    document.title = "403 No Permission - CN-AGHL";
  }
}
</script>
<style>
</style>