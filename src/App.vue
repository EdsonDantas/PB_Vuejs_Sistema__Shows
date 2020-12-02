<template>
  <div id="app">
    <Menu />
    <router-view/>
  <footer class="footer">
    <p><em> Sistema de Apoio ao Visitante 2020</em></p>
  </footer>
  </div>
</template>

<script>

import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

import Menu from './components/Menu'

export default {
  name: "App",
  components: {
   Menu,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
footer {
  margin: 40px 0 0 0;
  font-size: 10px;
}
</style>
