<template>
  <div class="app-container" id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    <el-backtop :bottom="100" :right="24" />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./components/Main.vue";
</script>

<style>
/* 页面整体：深色底 + 半透明覆盖层压暗背景图，保证文字对比度 */
.app-container {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: linear-gradient(
      rgba(8, 10, 7, 0.9),
      rgba(8, 10, 7, 0.94)
    ),
    url("./assets/images/main/background.jpg");
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

.el-backtop {
  --el-backtop-bg-color: #1e2218;
  --el-backtop-text-color: #ff9c1a;
  --el-backtop-hover-bg-color: #2a3123;
}

@media (max-width: 768px) {
  /* 移动端 background-attachment: fixed 会抖动，改为 scroll */
  .app-container {
    background-attachment: scroll;
  }
}
</style>
