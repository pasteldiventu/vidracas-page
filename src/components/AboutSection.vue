<template>
  <section id="sobre">
    <div class="container">
      <h2>Sobre Nós</h2>
      <div class="about-content">
        <div class="about-image">
          <img src="/backDAVIDRACA.jpeg" alt="Foto da Banda Vidraças">
        </div>
        <div class="about-text">
          <p>
            Historia mt massa da banda com as influências, os primeiros shows.OSCARALHO A QUATRO MEMO.
          </p>
          <p>
            popipí popopo pipipi bababa blabla rtlgd qau aquelas coisa!
          </p>
          <p>
            Mt foda mano agor auma mensagem tipo"Siga-nos nas redes sociais para não perder nenhuma novidade!".
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Nenhuma lógica de script necessária para esta seção estática.
</script>

<style scoped>
section {
  padding: 60px 0;
  background-color: #181818; /* Um fundo um pouco diferente para destacar a seção */
}

h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
}

.about-content {
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap; /* Faz com que o layout se ajuste em telas menores */
}

.about-image {
  flex: 1; /* Ocupa uma parte do espaço */
  min-width: 300px; /* Largura mínima antes de quebrar a linha */
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.about-text {
  flex: 2; /* Ocupa duas partes do espaço, deixando mais espaço para o texto */
  min-width: 300px;
}

.about-text p {
  line-height: 1.7; /* Melhora a legibilidade */
  margin-bottom: 1em;
}

.about-text p:last-child {
  margin-bottom: 0;
}
</style>