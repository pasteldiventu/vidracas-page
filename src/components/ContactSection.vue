<script setup>
const socialLinks = [
  { name: 'Email', url: 'mailto:bandavidracas@gmail.com', iconClass: 'fas fa-envelope' },
  { name: 'Instagram', url: 'https://www.instagram.com/bandavidracas', iconClass: 'fab fa-instagram' },
  { name: 'YouTube', url: 'https://www.youtube.com/@BandaVidraças', iconClass: 'fab fa-youtube' },
];
</script>

<template>
  <section id="contato" class="contact-section">
    <h2>Siga-nos / Contato</h2>
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
  </section>
</template>

<style scoped>
.contact-section {
  text-align: center;
  padding: 40px 20px;
  background-color: #181818;
}

h2 {
  margin-bottom: 30px;
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap; 
}

.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
  font-family: 'Shadows Into Light', cursive;
  font-weight: 800;
  font-size: 1.2rem;
}

.social-link:hover {
  color: #1db954;
  transform: scale(1.1);
}

.icon {
  font-size: 32px;
}
</style>
