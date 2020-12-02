<template>
  <div class="show">
    <h1 class="titulo-show">Vaja a Programação completa do evento aqui:</h1>
    <div class="texto-intro">
      <p>
        Com todas as atrações anunciadas, o Rock in Rio divulgou os horários dos
        shows da edição do festival.
      </p>
      <p>
        O evento será nos dias 27, 28 e 29 de setembro e 3, 4, 5 e 6 de outubro,
        no Parque Olímpico, na Zona Oeste do Rio.
      </p>
      <p><strong>Clique na atração principal para obter mais informações</strong></p>
    </div>
    <drake/>
    <foo-fighters/>
    <bon-jovi/>
    <red-hot/>
    <scorpions/>
    <pink/>
    <muse/>

  </div>
</template>

<script>
import BonJovi from './programacao/BonJovi.vue';
import Drake from './programacao/Drake.vue';
import FooFighters from './programacao/FooFighters.vue';
import Muse from './programacao/Muse.vue';
import Pink from './programacao/Pink.vue';
import RedHot from './programacao/RedHot.vue';
import Scorpions from './programacao/Scorpions.vue';
export default {
  components: { Drake, FooFighters, BonJovi,RedHot, Scorpions, Pink, Muse },
  
    name: "Shows",
};
</script>
<style scoped>
.titulo-show {
  margin: 20px;
}
.texto-intro {
  margin-bottom: 30px;
}

.texto-intro p {
  font-size: 20px;
}

</style>

