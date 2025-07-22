<template>
  <section id="video">
    <div class="container">
      <h2>Veja:</h2>
      <div class="video-responsive-container">
        <iframe 
          src="https://www.youtube.com/embed/gUJbqCDUjnU?si=xG1zhkcsKFJrkJj9"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 60px 0;
}

h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
}

.video-responsive-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; 
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.video-responsive-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
@media (max-width: 768px) {
  h2 {
    font-size: 1.8rem;
  }
}
</style>
