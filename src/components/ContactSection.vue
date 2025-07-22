<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation.js';
const { elementRef: titleRef } = useScrollAnimation();
const { elementRef: formRef } = useScrollAnimation();
const { elementRef: linksRef } = useScrollAnimation();

// VOLTAMOS PARA A SUA ESTRUTURA ORIGINAL DE DADOS COM 'iconClass'
const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/bandavidracas', iconClass: 'fab fa-instagram' },
  { name: 'YouTube', url: 'https://www.youtube.com/@BandaVidraças', iconClass: 'fab fa-youtube' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@banda.vidraas?_t=ZM-8yDqAeDlrUL&_r=1', iconClass: 'fab fa-tiktok' },
];
</script>

<template>
  <section id="contato" class="contact-section">
    <div class="container">
      <h2 ref="titleRef" class="fade-in-on-scroll">Contato</h2>

      <form 
        action="https://formspree.io/f/SUA_URL_AQUI" 
        method="POST"
        ref="formRef"
        class="contact-form fade-in-on-scroll"
      >
        <div class="form-group">
          <label for="name">Seu Nome</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Seu Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="message">Mensagem</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" class="submit-btn">Enviar Mensagem</button>
      </form>

      <div class="social-links-container fade-in-on-scroll" ref="linksRef">
        <h3>Siga-nos também</h3>
        <div class="social-links">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
          >
            <i :class="`${link.iconClass} icon`"></i>
            <span>{{ link.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 60px 0;
}

h2, h3 {
  text-align: center;
  margin-bottom: 40px;
}

h3 {
  margin-top: 60px;
  font-family: 'Oswald', sans-serif;
  font-size: 1.5rem;
}

.contact-form {
  max-width: 400px;
  margin: 0 auto;
  transition-delay: 0.2s;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #ccc;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  background-color: #2a2a2a;
  border: 1px solid #444;
  border-radius: 5px;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #1db954;
  box-shadow: 0 0 5px hsla(160, 100%, 37%, 0.5);
}

.submit-btn {
  display: block;
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 5px;
  background-color: #1db954;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #1ed760;
}

.social-links-container {
  text-align: center;
  margin-top: 40px;
  transition-delay: 0.4s;
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.icon {
  font-size: 28px;
}
</style>