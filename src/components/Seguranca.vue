<template>
  <div class="saude">
    <h1>Caso necessite registrar uma ocorrência policial:</h1>
    <h2></h2>
    <div class="tabela">
      <div class="tabela-saude">
        <b-table striped hover dark responsive head-variant="light" :items="hospitais" :fields="fields"> </b-table>
      </div>

      <div class="btn-tabela">
        <p class="chegar">Como chegar</p>

        <b-button class="btn"
          href="https://www.google.com/maps/dir/Cidade+do+Rock+-+Avenida+Salvador+Allende+-+Barra+da+Tijuca,+Rio+de+Janeiro+-+RJ/16th+DP+-+Barra+da+Tijuca+-+Pra%C3%A7a+Des.+Ara%C3%BAjo+Jorge,+s%2Fn+-+Barra+da+Tijuca,+Rio+de+Janeiro+-+RJ,+22611-220/@-22.9840271,-43.3876151,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9bdc0abb55987b:0x645b3a4ccd9d39b0!2m2!1d-43.4068912!2d-22.9806216!1m5!1m1!1s0x9bd095f0147219:0x6199f21f3248eb09!2m2!1d-43.2968636!2d-23.0109393!3e0?hl=en-US" target="blank"
          >Mapa</b-button
        >
        <b-button class="btn"
          href="https://www.google.com/maps/dir/Cidade+do+Rock+-+Avenida+Salvador+Allende+-+Barra+da+Tijuca,+Rio+de+Janeiro+-+RJ/UPA+(Unidade+De+Pronto+Atendimento)+-+Rua+Ayrton+Senna,+2000+-+Barra+da+Tijuca,+Rio+de+Janeiro+-+RJ/@-22.9844926,-43.4020734,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x9bdc0abb55987b:0x645b3a4ccd9d39b0!2m2!1d-43.4068912!2d-22.9806216!1m5!1m1!1s0x9bda35a631c36b:0xf3f6b921e0954644!2m2!1d-43.3653813!2d-22.9948293" target="blank"
          >Mapa</b-button
        >
        <b-button class="btn"
          href="https://www.google.com/maps/dir/Cidade+do+Rock+-+Avenida+Salvador+Allende+-+Barra+da+Tijuca,+Rio+de+Janeiro+-+RJ/31%C2%BA+Batalh%C3%A3o+de+Pol%C3%ADcia+Militar+-+Av.+Salvador+Allende,+5500+-+Recreio+dos+Bandeirantes,+Rio+de+Janeiro+-+RJ,+22780-160/@-22.9803797,-43.4165011,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9bdc0abb55987b:0x645b3a4ccd9d39b0!2m2!1d-43.4068912!2d-22.9806216!1m5!1m1!1s0x9bdc7ade089711:0x811463681374a183!2m2!1d-43.4151033!2d-22.9902315!3e0?hl=en-US" target="blank"
          >Mapa</b-button
        >
        <b-button class="btn"
          href="https://www.google.com/maps/dir/Cidade+do+Rock+-+Avenida+Salvador+Allende+-+Barra+da+Tijuca,+Rio+de+Janeiro+-+RJ/Pol%C3%ADcia+Militar+-+Av.+Afonso+Arinos+de+Melo+Franco+-+Barra+da+Tijuca,+Rio+de+Janeiro+-+RJ,+22640-100/@-22.9919864,-43.4036583,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9bdc0abb55987b:0x645b3a4ccd9d39b0!2m2!1d-43.4068912!2d-22.9806216!1m5!1m1!1s0x9bd0a073d51fe5:0x34e3e0103259b066!2m2!1d-43.3291121!2d-23.0064342!3e0" target="blank"
          >Mapa</b-button
        >
      </div>
      
    </div>
    <h3 class="titulo-frame">Atendimento Policial 24h</h3>
    <div class="frame">
        <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d117538.55207742871!2d-43.422636037364434!3d-22.984094610809063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x9bdc0abb55987b%3A0x645b3a4ccd9d39b0!2sCidade%20do%20Rock%20-%20Avenida%20Salvador%20Allende%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ!3m2!1d-22.9806216!2d-43.4068912!4m5!1s0x9bd095f0147219%3A0x6199f21f3248eb09!2s16th%20DP%20-%20Barra%20da%20Tijuca%20-%20Pra%C3%A7a%20Des.%20Ara%C3%BAjo%20Jorge%2C%20s%2Fn%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022611-220!3m2!1d-23.0109393!2d-43.296863599999995!5e0!3m2!1sen!2sbr!4v1606784811849!5m2!1sen!2sbr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["nome", "endereco", "telefone"],
      hospitais: [
        {
          nome: "16º DP - Barra da Tijuca",
          endereco: "Av. Ayrton Senna, 2000",
          telefone: "(21) 2333-6307 / (21) 2333-6373",
        },
        {
          nome: "11º DP - Rocinha",
          endereco: "Rua Bertha Luz, 80 - Gávea",
          telefone: "(21) 2334-6772 / (21) 2334-6776",
        },
        {
          nome: "31º Batalhão de Polícia Militar",
          endereco: "Av. Salvador Allende, 5500",
          telefone: "(21) 2332-7462",
        },
        {
          nome: "Policia Militar",
          endereco: "Av. Afonso Arinos de Melo Franco",
          telefone: "(21) 2333-6324",
        },
      ],
    };
  },
};
</script>

<style scoped>
.tabela {
  display: flex;
  justify-content: center;
}
.chegar {
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 5px;
}
.btn {
  display: block;
  margin: 10px;
}
.titulo-frame {
  margin: 30px;
}
</style>