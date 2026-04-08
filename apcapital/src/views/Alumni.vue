<template>
  <section class="alumni-page">
    <div class="container">
      <header class="alumni-header">
        <p class="eyebrow">Our Team</p>
        <h1>Alumni</h1>
        <p>Meet former AP Capital Research members who have helped shape the society.</p>
      </header>

      <div class="alumni-grid">
        <PersonIcon v-for="person in alumni" :key="person.name + person.title" :person="person" />
      </div>
    </div>
  </section>
</template>

<script setup>
import PersonIcon from "../components/PersonIcon.vue"

const alumni = [
  { name: "John Doe", title: "Former Job Role", image: null },
  { name: "John Doe", title: "Former Job Role", image: null },
  { name: "John Doe", title: "Former Job Role", image: null },
  { name: "John Doe", title: "Former Job Role", image: null },
  { name: "John Doe", title: "Former Job Role", image: null },
  { name: "John Doe", title: "Former Job Role", image: null },
]
</script>

<style scoped>
.alumni-page {
  padding: 4rem 0;
  background: linear-gradient(180deg, #f2f6fe 0%, #eef3fb 100%);
}

.alumni-header {
  max-width: 60ch;
  margin-bottom: 2rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.13em;
  color: var(--blue-600);
  font-size: 0.72rem;
  margin: 0 0 0.6rem;
}

.alumni-header h1 {
  margin: 0;
  color: var(--navy-900);
  font-size: clamp(1.9rem, 4vw, 2.5rem);
}

.alumni-header p {
  margin: 0.9rem 0 0;
  color: var(--text-muted);
  line-height: 1.6;
}

.alumni-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 900px) {
  .alumni-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .alumni-page {
    padding: 3rem 0;
  }

  .alumni-grid {
    grid-template-columns: 1fr;
  }
}
</style>
