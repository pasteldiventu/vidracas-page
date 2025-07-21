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
            Formada pelo Ange no vocal, Alexandre na guitarra, Jp no baixo e Lincoln na bateria, a banda cuiabana Vidraças mistura metal alternativo
            com influências do rock indie, formada em janeiro de 2025, a banda busca criar um som envolvente e tocante que ressoe com o público.
          </p>
          <p>
            Com letras que falam sobre amor, solidão e a busca por significado nessa vida, a Vidraças se destaca por despejar todas as frustrações e sentimentos de um jovem adulto perdido
            em suas músicas, criando uma conexão profunda com os ouvintes e convidando-os a embarcar em uma jornada emocional através das músicas.
          </p>
          <p>
            A banda está atualmente trabalhando em seu primeiro EP, que promete trazer uma mistura única de melodias cativantes e letras introspectivas, refletindo a essência da vida moderna.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
section {
  padding: 60px 0;
  background-color: #181818; 
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
  flex-wrap: wrap;
}

.about-image {
  flex: 1; 
  min-width: 300px; 
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