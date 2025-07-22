<script setup>
import { computed } from 'vue';

const shows = [
  { date: '08/08/2025', place: 'Beco do Papa', venue: 'Niver Bel Priori' },
  { date: '25/07/2025', place: 'Parque Cuiabá', venue: 'Fazer Musical' },
  { date: '21/06/2025', place: 'Beco do Papa', venue: 'Soulfest 2a edição' },
];

const processedShows = computed(() => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return shows.map(show => {
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
      <ul class="show-list">
        <li v-for="show in processedShows" :key="show.date" :class="{ 'past-show': show.isPast }">
          <span class="date">{{ show.date }}</span>
          <span class="city">{{ show.place }}</span>
          <span class="venue">{{ show.venue }}</span>

          <a v-if="!show.isPast" href="#" class="tickets-link">Te esperamos lá!</a>
          <span v-else class="status-past">Evento finalizado!</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
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
</style>