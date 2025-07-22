<template>
  <section class="hero">
    <div class="title-container">
      <h1 class="band-name">BANDA VIDRAÇAS</h1>
    </div>
    <p class="tagline">BANDO DE BROXA TRISTE (e o Lincoln)</p>
  </section>
</template>

<style scoped>
.hero {
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('/image.png');
  background-size: cover;
  background-position: center;
  overflow: hidden; /* Importante para a animação não vazar */
}

/* --- A MÁGICA DA ANIMAÇÃO DO TÍTULO --- */

.band-name {
  font-size: 6rem;
  font-weight: bold;
  text-transform: uppercase; 
  background: linear-gradient(90deg, #ffffff, #a0a0a0, #ffffff);
  background-size: 200% auto;

  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;

  animation: 
    gradient-flow 4s linear infinite, 
    reveal-text 2.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s forwards; 
}

/* Animação do gradiente se movendo no fundo do texto */
@keyframes gradient-flow {
  to {
    background-position: -200% center;
  }
}

/* Animação que "revela" o texto com um efeito de máscara */
@keyframes reveal-text {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

/* Animação para o subtítulo (tagline) */
.tagline {
  font-size: 1.2rem;
  color: #ddd;
  text-shadow: 1px 1px 4px #000;
  opacity: 0; /* Começa invisível */
  animation: fade-in-up 1s ease-out 1.5s forwards; 
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero {
    height: 90vh;
  }

  .band-name {
    font-size: 2.8rem;
  }

  .tagline {
    font-size: 1rem;
    padding: 0 15px;
  }
}
</style>