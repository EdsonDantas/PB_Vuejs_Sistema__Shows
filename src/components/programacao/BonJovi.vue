<template>
  <div>
    <div>
      <hr />
      <h2>Dia 29 de Setembro (Domingo)</h2>
    </div>
    <b-card-group deck>
      <b-card header="Palco Mundo">
        <b-list-group>
          <b-button variant="primary" v-b-modal.modal-5
            ><b-list-group-item href="#"
              >0h25 - Bon Jovi</b-list-group-item
            ></b-button
          >

          <b-modal id="modal-5" title="Bon Jovi">
            <img src="data:image/jpeg;base64,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" alt="Bon Jovi">
            <p class="my-4">
              Bon Jovi é uma banda americana de rock, formada em 1983, em
              Sayreville, Nova Jersey. A formação atual da banda consiste no
              cantor Jon Bon Jovi, no tecladista David Bryan, no baterista Tico
              Torres, no guitarrista Phil X e no baixista Hugh McDonald. A banda
              mantém algumas características do estilo hard rock dos anos 1980
              até hoje, mas assimilou influências dos variados estilos surgidos
              no rock e heavy metal desde o seu álbum de estreia, em 1984. Com
              passar dos anos veio a se tornar uma das bandas mais bem sucedidas
              da história do rock, quando se trata de turnês pelo mundo, sua
              marca, músicas em seriados, e aparições em programas de tv, a
              banda em 2011 foi eleita pela revista Rolling Stone como a segunda
              banda de rock mais cara do planeta, perdendo o topo posteriormente
              para a banda irlandesa U2.
            </p>
          </b-modal>

          <b-list-group-item href="#"
            >22h20 - Dave Matthews Band</b-list-group-item
          >
          <b-list-group-item href="#">20h10 - Goo Goo Dolls</b-list-group-item>
          <b-list-group-item href="#">18h - Ivete Sangalo</b-list-group-item>
        </b-list-group>

        <p class="card-text mt-2">
          <img
            class="img-show"
            src="https://s2.glbimg.com/sDxpLtX8p5ZdyX_Q0VI_wvgtmOA=/0x0:1900x1267/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/U/n/cOeGFWRPOTYViHx1rCPg/132a9000.jpg"
            alt="Bom Jovem!!!"
          />
        </p>
      </b-card>

      <b-card header="Palco Sunset">
        <b-list-group>
          <b-button variant="primary" v-b-modal.modal-6>
            <b-list-group-item href="#"
              >21h15 - Jessie J</b-list-group-item
            ></b-button
          >

          <b-modal id="modal-6" title="Jessie J">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Jessie_J_performing_live_at_The_Peppermint_Club_05_%28cropped%29.jpg/240px-Jessie_J_performing_live_at_The_Peppermint_Club_05_%28cropped%29.jpg"
              alt=""
            />
            <p class="my-4">
              Jessica Ellen Cornish,[1] artisticamente conhecida como Jessie J,
              (Essex, 27 de março de 1988) é uma cantora e compositora
              britânica. Antes de alcançar a fama, Jessie já havia ganho
              notoriedade na indústria da música por escrever canções de sucesso
              para artistas como Miley Cyrus, Rihanna, Justin Timberlake e Chris
              Brown, ainda quando era contratada da Sony/ATV Music Publishing.
              Assinou com a gravadora Island Records, subsidiária da Universal
              Music Group em 2009, tendo lançado seu álbum de estreia, Who You
              Are, em fevereiro de 2011. Aclamado pela crítica e pelo público, o
              álbum atingiu a 2ª posição da UK Albums Chart, do Reino Unido,
              como a melhor e o Top 10 em diversos países mundialmente,
              incluindo a Austrália, Suíça, Estados Unidos, Canadá e Irlanda.
            </p>
          </b-modal>

          <b-list-group-item href="#">19h05 - Iza & Alcione</b-list-group-item>
          <b-list-group-item href="#"
            >16h55 - Elza Soares convida As Bahias e A Cozinha Mineira, Kell
            Smith e Jéssica Ellen</b-list-group-item
          >
          <b-list-group-item href="#"
            >15h30 - Plutão Já Foi Planeta & Mahmundi</b-list-group-item
          >
        </b-list-group>

        <b-card-body>
          <img
            class="img-show"
            src="https://s2.glbimg.com/vOjztVmvqWR0yLKBDlbv9jskrng=/0x0:2200x1467/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/z/J/hdP2RCSzAXmnGBWamxEw/001-dsc-2446-iza-e-alcione-alexandre-durao.jpg"
            alt="Cantora Iza"
          />
        </b-card-body>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  margin: 30px;
}
.img-show {
  width: 100%;
}
</style>