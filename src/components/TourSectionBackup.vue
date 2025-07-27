<script setup>
import { computed } from 'vue';

const shows = [
  { date: '08/08/2025', city: 'Beco do Papa', venue: 'Niver Bel Priori' },
  { date: '08/08/2025', city: 'Parque Cuiabá', venue:'Fazer Musical' },
  { date: '21/06/2025', city: 'Beco do Papa', venue: 'Soulfest 2a edição' },
  { date: '23/05/2025', city: 'Beco do Papa', venue: 'Capivara Aniversário' },
  { date: '29/03/2025', city: 'Casa das Pretas', venue: 'Especial 1 ano batalha das batalhas' },
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
      <h2>Agenda de Shows 2025</h2>
      <ul class="show-list">
        <li v-for="show in processedShows" :key="show.date" :class="{ 'past-show': show.isPast }">
          <span class="date">{{ show.date }}</span>
          <span class="city">{{ show.city }}</span>
          <span class="venue">{{ show.venue }}</span>

          <a v-if="!show.isPast" href="#" class="tickets-link">Ingressos</a>
          <span v-else class="status-past">Evento Finalizado</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>

#agenda{
  background-color: rgba(14, 14, 14, 0.911);
  padding-bottom: 40px;
}

.show-list {
  list-style: none;
  padding: 0;
}

h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 1.8rem;
}


.show-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #333;
  transition: all 0.3s ease;
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