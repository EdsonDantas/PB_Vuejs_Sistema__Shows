<template>
  <div>
    <div>
      <hr />
      <h2>Dia 27 de Setembro (Sexta-Feira)</h2>
    </div>
    <b-card-group deck>
      <b-card header="Palco Mundo">
        <b-list-group>
          <b-button variant="primary" class="btn-modal" v-b-modal.modal-1
            ><b-list-group-item href="#"
              >0h10 - Drake</b-list-group-item
            ></b-button
          >

          <b-modal id="modal-1" title="Drake">
            <img width="50%" src="https://cdn.abcdoabc.com.br/Drake-RiR_2a007a04.jpg" alt="Drake">
            <p class="my-4">
              Aubrey Drake Graham (Toronto, 24 de outubro de 1986), conhecido
              profissionalmente como Drake, é um rapper, cantor, compositor,
              produtor musical, ator e empresário canadense. Drake inicialmente
              ganhou reconhecimento como ator na série de televisão de drama
              adolescente Degrassi: The Next Generation, no início dos anos
              2000. Atualmente está trabalhando com as gravadoras Young Money
              Entertainment, Universal Motown e OVO Sound, sendo que o próprio
              Drake fundou a terceira. O mesmo também é um torcedor fanático do
              time de basquete da NBA, o Toronto Raptors.
            </p>
          </b-modal>

          <b-list-group-item href="#">22h20 - Ellie Goulding</b-list-group-item>
          <b-list-group-item href="#">20h10 - Bebe Rexha</b-list-group-item>
          <b-list-group-item href="#">18h05 Alok</b-list-group-item>
        </b-list-group>

        <p class="card-text mt-2">
          <img
            class="img-show"
            src="https://s2.glbimg.com/pxN6oDhR8JFrCD-ZtCfAEvHGLOw=/0x0:1192x794/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/w/l/KD1ihJQ8qfLY09anhBLg/drake.jpg"
            alt="Drake posando pra foto"
          />
        </p>
      </b-card>

      <b-card header="Palco Sunset">
        <b-list-group>
          <b-button variant="primary" v-b-modal.modal-2
            ><b-list-group-item href="#"
              >21h15 - Seal convida Xenia França</b-list-group-item
            ></b-button
          >

          <b-modal id="modal-2" title="Seal">
            <img src="data:image/jpeg;base64,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" alt="Cantor Seal">
            <p class="my-4">
              Henry Olusegun Adeola Samuel (Londres, 19 de fevereiro de 1963),
              conhecido profissionalmente como Seal, é um músico, cantor e
              compositor britânico de origem nigeriana. Entre seus maiores
              sucessos, está a canção Kiss from a Rose, trilha sonora do filme
              Batman Forever, pela qual recebeu três prêmios Grammy em 1995. No
              total, o cantor já ganhou três prêmios Brit Awards, na categoria
              de melhor cantor masculino, quatro prêmios Grammy e um MTV Video
              Music Awards. Já vendeu 15 milhões de cópias no mundo todo até
              hoje.
            </p>
          </b-modal>

          <b-list-group-item href="#"
            >19h05 - Mano Brown & Bootsy Collins</b-list-group-item
          >
          <b-list-group-item href="#"
            >16h55 - Karol Conka convida Linn da Quebrada e Gloria
            Groove</b-list-group-item
          >
          <b-list-group-item href="#">15h15 - Lellê & Blaya</b-list-group-item>
        </b-list-group>

        <b-card-body>
          <img
            class="img-show"
            src="https://s2.glbimg.com/ktuSln9lX7pMQ2KBXz4dNtz6b_Q=/0x0:2200x1467/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/6/o/WCJ7SASrKBTbqeiz7LpA/seal-convida-xenia-franca-f99a7361-marcelo-brandt-g1.jpg"
            alt="Cantor Seal"
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