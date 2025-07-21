<template>
  <header class="site-header">
    <div class="brand-name">
     <img src="/Gemini_Generated_Image_3vw5bm3vw5bm3vw5-fotor-202507219421.png" style="width: 40px;">
      <a href="#">Banda Vidraças</a>
    </div>
    <nav class="main-nav">
      <ul>
        <li><a href="#musica">Música</a></li>
        <li><a href="#agenda">Agenda</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
.site-header {
  position: fixed; /* Fixa o header no topo */
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 5%; /* Usa porcentagem para ser mais adaptável */
  background-color: rgba(18, 18, 18, 0.8); /* Fundo preto semi-transparente */
  backdrop-filter: blur(10px); /* Efeito de vidro em navegadores compatíveis */
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000; /* Garante que o header fique na frente de outros elementos */
  box-sizing: border-box; /* Garante que o padding não aumente a largura total */
}

.brand-name a {
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

.main-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 25px;
}

.main-nav a {
  color: #fff;
  text-decoration: none;
  font-size: 1em;
  transition: color 0.3s ease;
}

.main-nav a:hover {
  color: #1db954; /* Verde Spotify para consistência */
}
</style>
