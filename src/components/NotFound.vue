<template>
  <div style="height: 100vh;display: flex;align-items: center;flex-flow:column nowrap;justify-content: center;">

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