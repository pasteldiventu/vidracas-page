<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <header class="site-header">
    <div class="brand-name">
      <img src="/Gemini_Generated_Image_3vw5bm3vw5bm3vw5-fotor-202507219421.png" style="width: 40px;">
      <a href="#">Banda Vidraças</a>
    </div>

    <nav class="main-nav desktop-nav">
      <ul>
        <li><a href="#musica">Música</a></li>
        <li><a href="#agenda">Agenda</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>

    <button class="hamburger-btn" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>

  <nav class="mobile-nav" :class="{ 'is-open': isMenuOpen }">
    <ul>
      <li><a href="#musica" @click="toggleMenu">Música</a></li>
      <li><a href="#agenda" @click="toggleMenu">Agenda</a></li>
      <li><a href="#contato" @click="toggleMenu">Contato</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 5%;
  background-color: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1001;
  box-sizing: border-box;
}

.brand-name {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-name img {
  width: 40px;
}

.brand-name a {
  font-size: 1.7em;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  font-family: 'Shadows Into Light', cursive;
  font-weight: 300;
}

.desktop-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 25px;
}

.desktop-nav a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5em;
  font-family: 'Shadows Into Light', cursive;
  font-weight: 300;
  transition: color 0.3s ease;
}

.desktop-nav a:hover {
  color: #1db954;
}

.hamburger-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1002;
  display: none;
  flex-direction: column;
  gap: 5px;
}

.hamburger-btn span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  transition: all 0.3s ease-in-out;
}

.hamburger-btn.is-active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.hamburger-btn.is-active span:nth-child(2) {
  opacity: 0;
}
.hamburger-btn.is-active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.mobile-nav {
  position: fixed;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100vh;
  background-color: #121212;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: left 0.4s ease-in-out;
}

.mobile-nav.is-open {
  left: 0;
}

.mobile-nav ul {
  list-style: none;
  padding: 0;
  text-align: center;
}

.mobile-nav li {
  margin: 30px 0;
}

.mobile-nav a {
  color: white;
  text-decoration: none;
  font-size: 2rem;
  font-family: 'Shadows Into Light', cursive;
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  .hamburger-btn {
    display: flex;
  }
}
</style>