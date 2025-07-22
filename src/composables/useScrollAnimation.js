import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollAnimation() {
  const elementRef = ref(null);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Se o elemento está entrando na tela...
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } 
        // Se o elemento está saindo da tela...
        else {
          entry.target.classList.remove('is-visible');
        }
      });
    },
    {
      threshold: 0.1, // Ação acontece quando 10% do elemento está visível
    }
  );

  onMounted(() => {
    if (elementRef.value) {
      observer.observe(elementRef.value);
    }
  });

  onUnmounted(() => {
    if (elementRef.value) {
      observer.unobserve(elementRef.value);
    }
  });

  return {
    elementRef,
  };
}