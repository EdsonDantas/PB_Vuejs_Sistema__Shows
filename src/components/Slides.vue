<template>
  <div class="carousel">
    <b-carousel
      id="carousel-1"
      :interval="6000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="foto in fotos"
        :key="foto.id"
        :caption="foto.nome"
        :text="foto.descricao"
        :img-src="foto.linkUrl"
      ></b-carousel-slide>
    </b-carousel>

    <div class="bandas">
      <img
        class="logo-bandas"
        src="../assets/imagine.png"
        alt="Imagine Dragons"
      />
      <img class="logo-bandas" src="../assets/iron.png" alt="Iron Maiden" />
      <img class="logo-bandas" src="../assets/ivete.png" alt="Ivete Sangalo" />
      <p></p>
    </div>
    <div class="patrocinio">
      <b-carousel
        id="carousel-2"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
      >
        <!-- Text slides with image -->
        <h5>Patrocinadores</h5>
        <b-carousel-slide
          v-for="imagem in fotos2"
          :key="imagem"
          :img-src="imagem.linkImg"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fotos: Array,
    fotos2: Array,
  },
};
</script>

<style>
</style>