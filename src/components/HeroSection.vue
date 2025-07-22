<template>
  <section class="hero">
    <h1 class="band-name">BANDA VIDRAÇAS</h1>
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
}
.band-name {
  font-size: 6rem;
  color: white;
  text-shadow: 2px 2px 8px #000;
}
@media (max-width: 768px) {
  .band-name {
    font-size: 2.8rem;
  }

  .tagline {
    font-size: 1rem;
    padding: 0 15px;
  }
}
</style>
