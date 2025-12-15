<template>
  <div class="page">
    <main>
      <div class="topJob">
        <PersonIcon :person="person1" style="font-size: 1.35rem;"/>
      </div>
      <div class="jobRow">
        <PersonIcon :person="person1" />
        <PersonIcon :person="person1" />
        <PersonIcon :person="person1" />
      </div>
    </main>
  </div>
</template>

<script setup>
  import PersonIcon from '../components/PersonIcon.vue';

  const person1 = {
    name: 'John Doe',
    title: 'Job 1',
    image: null,
  };
</script>

<style scoped>
p {
  text-align: center;
  margin-top: 2rem;
  font-size: 1.2rem;
  color: var(--text);
}

.topJob {
  display: flex;
  justify-content: center;
  margin: 2rem 0 2.5rem;
}

.topJob :deep(.person-card) {
  font-size: 1.2rem;
}

/* Row of other roles */
.jobRow {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, auto));
  gap: 2rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.jobRow :deep(.person-card) {
  font-size: 0.95rem;
}

/* ---------- Responsive tweaks ---------- */

/* Tablets: 2 columns, slightly smaller cards */
@media (max-width: 900px) {
  p {
    font-size: 1.1rem;
    margin-top: 1.5rem;
  }

  .topJob {
    margin: 1.8rem 0 2rem;
  }

  .topJob :deep(.person-card) {
    font-size: 1.1rem;
  }

  .jobRow {
    grid-template-columns: repeat(2, minmax(0, auto));
    gap: 1.5rem;
  }

  .jobRow :deep(.person-card) {
    font-size: 0.9rem;
  }
}

/* Phones: 1 column, full-width cards */
@media (max-width: 600px) {
  p {
    font-size: 1rem;
    margin-top: 1.2rem;
    padding: 0 1rem;
  }

  .topJob {
    margin: 1.5rem 0 1.75rem;
  }

  .topJob :deep(.person-card) {
    font-size: 1rem;
  }

  .jobRow {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.2rem;
  }

  .jobRow :deep(.person-card) {
    font-size: 0.9rem;
  }
}
</style>

