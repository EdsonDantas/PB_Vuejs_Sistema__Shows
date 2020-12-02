<template>
  <div class="menu">
    <h1>Sistema de Apoio ao Visitante</h1>
  <b-navbar  type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item >
          <router-link tag="nav" to="/">Home</router-link>
          </b-nav-item>
        <b-nav-item >
          <router-link tag="nav" to="/shows">Shows</router-link>
        </b-nav-item>
        <b-nav-item >
          <router-link tag="nav" to="/saude">Saúde</router-link>
        </b-nav-item>
        <b-nav-item >
          <router-link tag="nav" to="/seguranca">Segurança</router-link>
        </b-nav-item>
        <b-nav-item >
          <router-link tag="nav" to="/curiosidades">Curiosidades</router-link>
        </b-nav-item>
      </b-navbar-nav>
     
        <img class="menu-img ml-auto" src="../assets/logo_rio.png" alt="">


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar shows"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
        </b-nav-form>

      </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style>

.menu-img {
    width: 50px;
}


</style>