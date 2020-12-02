<template>
  <div class="saude">
    <h1>Caso necessite de atendimento hospitalar:</h1>
    <h2></h2>
    <div class="tabela">
      <div class="tabela-saude">
        <b-table striped hover dark responsive head-variant="light" :items="hospitais" :fields="fields"> </b-table>
      </div>

      <div class="btn-tabela">
        <p class="chegar">Como chegar</p>

        <b-button class="btn"
          href="https://www.google.com/maps/dir/Cidade+do+Rock+-+Avenida+Salvador+Allende+-+Barra+da+Tijuca,+Rio+de+Janeiro+-+RJ/Hospital+Municipal+Louren%C3%A7o+Jorge+-+Barra+da+Tijuca+-+Av.+Ayrton+Senna,+2.000+-+Barra+da+Tijuca,+Rio+de+Janeiro+-+RJ,+22793-000/@-22.9844926,-43.4020734,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x9bdc0abb55987b:0x645b3a4ccd9d39b0!2m2!1d-43.4068912!2d-22.9806216!1m5!1m1!1s0x9bda35e7439087:0xa5c42872fc2460f7!2m2!1d-43.3638259!2d-22.9950161" target="blank"
          >Mapa</b-button
        >
        <b-button class="btn"
          href="https://www.google.com/maps/dir/Cidade+do+Rock+-+Avenida+Salvador+Allende+-+Barra+da+Tijuca,+Rio+de+Janeiro+-+RJ/UPA+(Unidade+De+Pronto+Atendimento)+-+Rua+Ayrton+Senna,+2000+-+Barra+da+Tijuca,+Rio+de+Janeiro+-+RJ/@-22.9844926,-43.4020734,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x9bdc0abb55987b:0x645b3a4ccd9d39b0!2m2!1d-43.4068912!2d-22.9806216!1m5!1m1!1s0x9bda35a631c36b:0xf3f6b921e0954644!2m2!1d-43.3653813!2d-22.9948293" target="blank"          >Mapa</b-button
        >
        <b-button class="btn"
          href="https://www.google.com/maps/dir/Cidade+do+Rock+-+Avenida+Salvador+Allende+-+Barra+da+Tijuca,+Rio+de+Janeiro+-+RJ/CER+Barra+da+Tijuca+(Louren%C3%A7o+Jorge)+-+Av.+Ayrton+Senna,+2.000+-+Barra+da+Tijuca,+Rio+de+Janeiro+-+RJ,+22775-003/@-22.9844926,-43.4020734,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x9bdc0abb55987b:0x645b3a4ccd9d39b0!2m2!1d-43.4068912!2d-22.9806216!1m5!1m1!1s0x9bdbecb5a0386b:0xf8ccb7907b256bdb!2m2!1d-43.3653586!2d-22.9947561" target="blank"
          >Mapa</b-button
        >
        <b-button class="btn"
          href="https://www.google.com/maps/dir/Cidade+do+Rock+-+Avenida+Salvador+Allende+-+Barra+da+Tijuca,+Rio+de+Janeiro+-+RJ/Hospital+Unimed-Rio+-+Av.+Ayrton+Senna,+2550+-+Barra+da+Tijuca,+Rio+de+Janeiro+-+RJ,+22775-003/@-22.9864421,-43.4156454,13.5z/data=!4m14!4m13!1m5!1m1!1s0x9bdc0abb55987b:0x645b3a4ccd9d39b0!2m2!1d-43.4068912!2d-22.9806216!1m5!1m1!1s0x9bda33d3295767:0x551d3fee8ab98ab!2m2!1d-43.3639244!2d-22.989019!3e0" target="blank"
          >Mapa</b-button
        >
      </div>
      
    </div>
    <h3 class="titulo-frame">Atendimento de emergência 24h</h3>
    <div class="frame">
        <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29384.55144945174!2d-43.4020734355619!3d-22.984492579616358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x9bdc0abb55987b%3A0x645b3a4ccd9d39b0!2sCidade%20do%20Rock%20-%20Avenida%20Salvador%20Allende%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ!3m2!1d-22.9806216!2d-43.4068912!4m5!1s0x9bda35a631c36b%3A0xf3f6b921e0954644!2sUPA%20(Unidade%20De%20Pronto%20Atendimento)%20-%20Rua%20Ayrton%20Senna%2C%202000%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ!3m2!1d-22.9948293!2d-43.365381299999996!5e0!3m2!1spt-BR!2sbr!4v1606782960659!5m2!1spt-BR!2sbr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["nome", "endereco", "pagina"],
      hospitais: [
        {
          nome: "Hospital Municiapl Lourenço Jorge",
          endereco: "Av. Ayrton Senna, 2000",
          pagina: "https://www.rio.rj.gov.br/web/sms/exibeconteudo?id=4206759",
        },
        {
          nome: "UPA - Unidade de Pronto Atendimento",
          endereco: "Rua Ayton Senna, 2000",
          pagina: "https://www.rio.rj.gov.br/web/sms/exibeconteudo?id=4206759",
        },
        {
          nome: "CER Barra da Tijuca",
          endereco: "Av. Ayton Senna, 2000",
          pagina: "https://www.rio.rj.gov.br/web/sms/exibeconteudo?id=4206759",
        },
        {
          nome: "Hospital Unimed Rio",
          endereco: "Av. Ayton Senna, 2550",
          pagina: "unimedrio.com.br",
        },
      ],
    };
  },
};
</script>

<style>
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