<template>
  <div class="app-container" id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    <el-backtop :bottom="100">

    </el-backtop>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: { Header, Footer, Main },
  methods: {

  },
};
</script>

<style>
html,
body {
  margin: 0;
  border: 0;
  padding: 0;
}

.app-container {
  background: url("assets/images/main/background.jpg");
  background-attachment: fixed;
  background-size: cover;
}
</style>