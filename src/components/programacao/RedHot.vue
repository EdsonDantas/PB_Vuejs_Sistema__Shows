<template>
  <div>
    <div>
      <hr />
      <h2>Dia 03 de Outubro (Quinta-Feira)</h2>
    </div>
    <b-card-group deck>
      <b-card header="Palco Mundo">
        <b-list-group>
          <b-button variant="primary" v-b-modal.modal-7
            ><b-list-group-item href="#"
              >0h10 - Red Hot Chili Peppers</b-list-group-item
            ></b-button
          >

          <b-modal id="modal-7" title="Red Hot Chili Peppers">
            <img width="50%"
              src="https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/d/e/6/8/de68d2521081ec73ba7fb0845266084f.jpg"
              alt="Red Hot Chilli Peppers"
            />
            <p class="my-4">
              Red Hot Chili Peppers (também conhecido como Red Hot ou RHCP) é
              uma banda de rock dos Estados Unidos formada em Los Angeles,
              Califórnia, em 13 de fevereiro de 1983, considerada uma das
              maiores bandas da história do rock. O estilo musical do grupo
              consiste principalmente no funk rock, bem como elementos de outros
              gêneros, tais como punk, rock alternativo, rap rock e rock
              psicodélico. A banda é constituída pelos membros fundadores
              Anthony Kiedis (vocais) e Flea (baixo), juntamente com o baterista
              de longa data Chad Smith e o guitarrista John Frusciante.
            </p>
          </b-modal>

          <b-list-group-item href="#"
            >22h20 - Panic! at the Disco</b-list-group-item
          >
          <b-list-group-item href="#"
            >20h10 - Nile Rodgers & Chic</b-list-group-item
          >
          <b-list-group-item href="#">18h - Capital Inicial</b-list-group-item>
        </b-list-group>

        <p class="card-text mt-2">
          <img
            class="img-show"
            src="https://s2.glbimg.com/zk4n0dYcXoeGnY21y_f9NRbFfGk=/0x0:2200x1467/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/k/5/dS7HBBQHSQbfOgO9WBnQ/033-f99a1719.jpg"
            alt="Red Hot Chili Peppers"
          />
        </p>
      </b-card>

      <b-card header="Palco Sunset">
        <b-list-group>
          <b-button variant="primary" v-b-modal.modal-8
            ><b-list-group-item href="#"
              >21h15 - Hip Hop Hurricane, Baco Exu do Blues & Rincon
              Sapiência</b-list-group-item
            ></b-button
          >

          <b-modal id="modal-8" title="Dj Hurricane">
            <img width="50%" src="https://s2.glbimg.com/0ACXSOtQ2rV9-GzRfJiudyI3HRc=/0x0:2200x1467/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/h/c/luMMA2TByWhNtFwTqwBw/hip-hop-hurricane-f99a0858-marcelo-brandt-g1.jpg" alt="Dj Hurricane" />

            <p class="my-4">
              DJ Hurricane (born Wendell Timothy Fite on January 12, 1965) is
              an American hip hop DJ, producer and rapper. He is best known
              for his work with the Beastie Boys. He was a member of the
              groups Solo Sounds and The Afros and recorded three solo
              albums, featuring many well-known artists such as Xzibit,
              Public Enemy, Kool G Rap, Black Thought, Papoose and Talib Kweli.
            </p>
          </b-modal>

          <b-list-group-item href="#"
            >19h05 - Emicida & Ibeyi</b-list-group-item
          >
          <b-list-group-item href="#"
            >16h55 - Pará Pop com Dona Onete, Fafá de Belém, Gaby Amarantos,
            Jaloo e Lucas Estrela</b-list-group-item
          >
          <b-list-group-item href="#"
            >15h30 - Francisco, el Hombre & Monsieur Periné</b-list-group-item
          >
        </b-list-group>

        <b-card-body>
          <img
            class="img-show"
            src="https://s2.glbimg.com/yzuy0k2SJ_y0bcj7uwTaHT8YAtc=/0x0:2200x1467/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/A/5/p0zC9TTMqDkO9Jtk1TvA/emicida-ibeyi-f99a0293-marcelo-brandt-g1.jpg"
            alt="Emicida e Ibeyi"
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