<script setup>
const shows = [
  { date: '25/08/2025', city: 'Cuiabá, MT', venue: 'Casa de Show X' },
  { date: '30/08/2025', city: 'Cuiabá, MT', venue: 'Festival Y' },
  { date: '05/09/2025', city: 'Cuiabá, MT', venue: 'Bar Z' },
];
</script>

<template>
    <section id="agenda">
    <h2>Agenda de Shows</h2>
    <ul class="show-list">
      <li v-for="show in shows" :key="show.date">
        <span class="date">{{ show.date }}</span>
        <span class="city">{{ show.city }}</span>
        <span class="venue">{{ show.venue }}</span>
        <a href="#" class="tickets-link">Ingressos</a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
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
}
</style>