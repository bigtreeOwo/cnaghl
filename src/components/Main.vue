<template>
  <div class="ag-main-wrap">
    <el-main class="ag-main">
      <router-view name="main"></router-view>
    </el-main>
  </div>
</template>

<style scoped>
.ag-main-wrap {
  flex: 1 1 auto;
  width: 100%;
}

.ag-main {
  width: 100%;
  max-width: var(--ag-container);
  min-height: 60vh;
  margin: 0 auto;
  padding: clamp(18px, 3vw, 34px) clamp(14px, 3vw, 28px) 48px;
  overflow: visible;
}
</style>
