<script setup>
import TheHeader from './components/TheHeader.vue';
import HeroSection from './components/HeroSection.vue';
import MusicSection from './components/MusicSection.vue';
import AboutSection from './components/AboutSection.vue';
import TourSection from './components/TourSection.vue';
import ContactSection from './components/ContactSection.vue';
import TheFooter from './components/TheFooter.vue';
import VideoSection from './components/VideoSection.vue';
import TourSectionBackup from './components/TourSectionBackup.vue'; 
</script>

<template>
  <div class="app-container"> 
  <TheHeader />
  <main>
    <HeroSection />
    <MusicSection />
    <AboutSection />
    <VideoSection />
    <TourSectionBackup/>
    <ContactSection />
  </main>
  <TheFooter />
  </div>
</template>
<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

main {
  flex-grow: 1;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: sans-serif;
  background-color: #121212;
  color: #fff;
  padding-top: 70px; 
}
</style>