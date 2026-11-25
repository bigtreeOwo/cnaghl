<template>
  <div class="ag-center-page">

    <el-result icon="error" title="" subTitle="">

    </el-result>
    <div>
      <h1>:(</h1>
    </div>
    <div>
      <h1>这个页面好像不存在</h1>
    </div>
    <div>
      <router-link to="/">返回首页</router-link>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    document.title = "404 Not Found - CN-AGHL"
  }
}
</script>

<style>
</style>