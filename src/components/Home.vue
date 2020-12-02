<template>
  <div class="principal-home">
    <div class="home">
      <h2 class="titulo-home">
        Vai começar o maior festival de música da terra
      </h2>
      <hr />
     <slides :fotos="fotos" :fotos2="fotos2" />
    </div>
   <info-home/>
  </div>
</template>

<script>
import InfoHome from './InfoHome.vue';
import Slides from './Slides.vue';
export default {
  name: "Home",
  components: {InfoHome, Slides},
  data() {
    return {
      fotos: [
        {
          id: 1,
          nome: "Roda Gigante e Fogos ",
          descricao:
            "Muita diversão aguarda os frequentadores do Rock in Rio neste ano.",
          linkUrl:
            "https://s2.glbimg.com/VOlbB1FuzttOnYm42bFxmtuKJEM=/0x0:3000x2000/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/W/J/ybxSEXRrqt6LbbYDTvcw/dsc-0350.jpg",
        },
        {
          id: 2,
          nome: "Red Hot Chili Peppers",
          descricao:
            "A banda America promete duas horas de show. Eles tocam no dia 03 de Outubro, às 0h10.",
          linkUrl:
            "https://s2.glbimg.com/SKmPbu8ikpNxmh85fQKkyfIvhk8=/0x0:2000x1333/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/4/q/PbqlQgS0CvCkKGENByFQ/rhcp-132a8998-fabio-tito-g1.jpg",
        },
        {
          id: 3,
          nome: "Iron Maiden",
          descricao:
            "A maior banda de Heavy Metal inglesa vem mais uma vaz ao RIR. Todas as participações do Iron foram memoráveis. Eles sobem ao palco no dia 04 de Outubro, às 21h30.",
          linkUrl:
            "https://s2.glbimg.com/9VU0zOElbII0vo0PMCjIlN9xf7I=/0x0:1291x860/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/B/K/8yK4P0SOaSt7EZBRWEhg/ironmaiden2.jpg",
        },
        {
          id: 4,
          nome: "MUSE",
          descricao:
            "A banda Britânica MUSE se apresenta pela primeira vez no palco do RIR. Misturando vários gêneros musicais, o Muse é uma das bandas de rock mais conceituada. A banda sobe ao palco no dia 06 de Outubro, às 0h40.",
          linkUrl:
            "https://s2.glbimg.com/Q30gJzm_dJXEfxvB3yjVyn-mNOo=/0x0:3000x1996/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/D/K/QaGlLOT2OKIQQ3ZHh8zA/muse.jpg",
        },
        {
          id: 5,
          nome: "Foo Fighters",
          descricao:
            "O ex baterista da banda Nirva, Dave Grohl, vem ao festival pela primeira vez esse ano. Com uma base de fãs brasileiros muito grande, prometem agitar a noite. O Foo Fighters sobe ao palco no dia 28 de Setembro, às 0h10",
          linkUrl:
            "https://s2.glbimg.com/ZeqWHgC9dzXwe0EMsGucSbB042I=/0x0:2000x1333/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/n/o/3WrNOjSgAul6BdKuKYdQ/foo-fighters-132a2565-fabio-tito-g1.jpg",
        },
      ],
      fotos2: [
        {
          linkImg:
            "https://i2.wp.com/geekpublicitario.com.br/wp-content/uploads/2019/12/heineken-00-agora-vc-pode-scaled.jpg?ssl=1",
        },
        {
          linkImg:
            "https://s2.glbimg.com/0Jf2y4KU-H2TI-bDUgzaC6DvG8A=/512x320/smart/e.glbimg.com/og/ed/f/original/2017/11/30/heineken.jpg",
        },
        {
          linkImg:
            "https://foodbizbrasil.com/wp-content/uploads/2020/07/rede-bobs.jpg",
        },
        {
          linkImg:
            "https://assets.b9.com.br/wp-content/uploads/2019/12/https___hypebest.com_image_2019_12_coca-cola-insiders-club-subscription-service-info-1-1170x720.jpg",
        },
        {
          linkImg:
            "https://santosbancarios.com.br/uploads/images/2020/01/itau-e-acusado-de-racismo-1580499787.jpg",
        },
      ],
    };
  },

};
</script>

<style>
.principal-home {
  padding: 20px;
}
.home {
  background-color: rgb(36, 34, 34);
}
.titulo-home {
  padding: 20px;
  font-weight: bold;
  background-color: rgb(53, 53, 56);
  color: aliceblue;
}
.carousel {
  margin-left: 20px;
  margin-bottom: 30px;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  text-align: center;
  align-content: center;
}
.patrocinio {
  padding: 20px;
  margin-right: 30px;
  width: 50%;
}
.bandas {
  width: 50.5%;
  height: 100%;
  background-color: rgb(2, 2, 2);
}
.logo-bandas {
  align-content: center;
  display: block;
  width: 100%;
}


</style>