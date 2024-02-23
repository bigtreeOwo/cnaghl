<template>
  <div class="app-container">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: { Header, Footer, Main },
  methods: {},
};
</script>

<style>
html,body {
  height: 100%;
  margin: 0;
  border: 0;
  padding: 0;
}

.app-container {
  height: 100%;
  background: url("assets/images/main/background.jpg");
  background-attachment: fixed;
}
</style>