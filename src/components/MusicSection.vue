<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation.js';
const { elementRef: titleRef } = useScrollAnimation();
const { elementRef: playerRef } = useScrollAnimation();
</script>

<template>
  <section id="musica">
    <div class="container">
      <h2 ref="titleRef" class="fade-in-on-scroll">
        Ouça nosso último single
      </h2>
      
      <iframe
        ref="playerRef"
        class="spotify-player fade-in-on-scroll"
        style="border-radius:12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);"
        width="100%"
        height="152"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 60px 0;
  background-color: #3d0808c7; 
}

h2 {
  text-align: center;
  margin-bottom: 40px; 
  font-size: 2rem;
}

.spotify-player.fade-in-on-scroll {
  transition-delay: 0.2s;
}

@media (max-width: 768px) {
  h2 {
    font-size: 1.8rem;
  }
}
</style>