<template>
  <div>
    <div>
      <hr />
      <h2>Dia 28 de Setembro (Sábado)</h2>
    </div>
    <b-card-group deck>
      <b-card header="Palco Mundo">
        <b-list-group>
          <b-button variant="primary" v-b-modal.modal-3
            ><b-list-group-item href="#"
              >0h10 - Foo Fighters</b-list-group-item
            ></b-button
          >

          <b-modal id="modal-3" title="Foo Fighters">
            <img width="50%" src="https://midias.jb.com.br/_midias/jpg/2019/09/29/627x418/1_foo_fighters-477424.jpg" alt="Banda Foo Fighters">
            <p class="my-4">
              Foo Fighters é uma banda de rock dos Estados Unidos formada pelos
              ex-Nirvana Dave Grohl em 1994. Seu nome é uma referência ao
              termo "foo fighter", usado por aviadores na Segunda Guerra Mundial
              para descrever fenômenos aéreos misteriosos, considerados OVNIs. A
              banda atingiu sucesso internacional, lançando vários hits
              incluindo "This Is a Call", "Everlong", "Learn to Fly", "All My
              Life", "Times Like These", "Best of You", "Walk", "My Hero" e "The
              Pretender". Quatro de seus álbuns, There Is Nothing Left to Lose,
              One by One, Echoes, Silence, Patience & Grace e Wasting Light
              ganharam o Grammy por "melhor álbum de rock".
            </p>
          </b-modal>

          <b-list-group-item href="#">22h20 - Weezer</b-list-group-item>
          <b-list-group-item href="#">20h10 - Tenacious D</b-list-group-item>
          <b-list-group-item href="#"
            >18h - CPM 22 + Raimundos</b-list-group-item
          >
        </b-list-group>

        <p class="card-text mt-2">
          <img
            class="img-show"
            src="https://s2.glbimg.com/ZeqWHgC9dzXwe0EMsGucSbB042I=/0x0:2000x1333/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/n/o/3WrNOjSgAul6BdKuKYdQ/foo-fighters-132a2565-fabio-tito-g1.jpg"
            alt="Dave Grohl berrando"
          />
        </p>
      </b-card>

      <b-card header="Palco Sunset">
        <b-list-group>
          <b-button variant="primary" v-b-modal.modal-4
            ><b-list-group-item href="#"
              >21h15 - Helloween</b-list-group-item
            ></b-button
          >

          <b-modal id="modal-4" title="Helloween">
            <img width="50%" src="https://www.radiorock.com.br/wp-content/uploads/2018/09/helloween.jpg" alt="Banda Helloween">
            <p class="my-4">
              Helloween é uma influente banda de power metal alemã, fundada em
              1984. É composta por Andi Deris (vocal), Dani Löble (bateria),
              Sascha Gerstner (guitarra), Michael Weikath (guitarra) e Markus
              Grosskopf (baixo), sendo esses dois últimos membros fundadores,
              junto com Kai Hansen e Ingo Schwichtenberg (falecido). Em 2016,
              Michael Kiske e Kai Hansen foram reincorporados à banda. É
              considerada por muitos como a criadora do power metal. Influenciou
              bandas como Angra, Hammerfall, Edguy, Rhapsody of Fire, Shaman,
              Stratovarius, Sonata Arctica, Avantasia, entre outras.
            </p>
          </b-modal>

          <b-list-group-item href="#"
            >19h05 - Titãs convidam Ana Cañas, Edi Rock & Érika
            Martins</b-list-group-item
          >
          <b-list-group-item href="#"
            >16h55 - Detonautas & Pavilhão 9</b-list-group-item
          >
          <b-list-group-item href="#"
            >15h30 - Ego Kill Talent</b-list-group-item
          >
        </b-list-group>

        <b-card-body>
          <img
            class="img-show"
            src="https://s2.glbimg.com/Q057oDN-LycgY2qI0_xI7IEVob8=/0x0:2200x1467/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/B/Z/u58oFUQOa0cBQNWJ7Rgw/014-f99a2464.jpg"
            alt="Helloween no Palco sunset"
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