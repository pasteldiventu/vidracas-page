<script setup>
import { ref, computed, onMounted } from 'vue';

const shows = ref([]);
const isLoading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/shows');
    if (!response.ok) {
      throw new Error('Falha ao buscar os dados dos shows.');
    }
    shows.value = await response.json();
  } catch (err) {
    error.value = err.message;
    console.error("Erro ao buscar shows:", err);
  } finally {
    isLoading.value = false;
  }
});

const processedShows = computed(() => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return shows.value.map(show => {
    const [day, month, year] = show.date.split('/');
    const showDate = new Date(year, month - 1, day);
    return {
      ...show,
      isPast: showDate < today
    };
  });
});
</script>

<template>
  <section id="agenda">
    <div class="container">
      <h2>Agenda de Shows</h2>

      <div v-if="isLoading" class="loading-state">Carregando agenda...</div>
      
      <div v-else-if="error" class="error-state">Erro ao carregar a agenda: {{ error }}</div>

      <ul v-else class="show-list">
        <li v-for="show in processedShows" :key="show.id" :class="{ 'past-show': show.isPast }">
          <span class="date">{{ show.date }}</span>
          <span class="place">{{ show.place }}</span>
          <span class="event">{{ show.event }}</span>

          <a v-if="!show.isPast" :href="show.ticket_link" target="_blank" class="tickets-link">Ingressos</a>
          <span v-else class="status-past">Já foi</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.loading-state, .error-state {
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
  color: #888;
}
.error-state {
  color: #ff6b6b;
}

h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
}

.show-list {
  list-style: none;
  padding: 0;
}

.show-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #333;
  transition: all 0.3s ease;
}

.show-list li:last-child {
  border-bottom: none;
}

.past-show {
  text-decoration: line-through;
  opacity: 0.6;
  color: #aaa;
}

.tickets-link {
  color: hsla(160, 100%, 37%, 1);
}

.status-past {
  font-style: italic;
  color: #ccc;
}

/* Regras de responsividade que já tínhamos */
@media (max-width: 768px) {
  .show-list li {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .tickets-link, .status-past {
    margin-top: 10px;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  }
  
  a.tickets-link {
    padding: 10px;
    border-radius: 5px;
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>