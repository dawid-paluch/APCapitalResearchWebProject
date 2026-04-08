<template>
  <section class="team-page">
    <div class="container">
      <header class="team-header">
        <p class="eyebrow">Leadership</p>
        <h1>Our Team</h1>
        <p>
          Surrey Capital Research is led by a student committee spanning research, events, and education.
        </p>
      </header>

      <div class="top-role">
        <PersonIcon :person="president" />
      </div>

      <div class="role-grid">
        <PersonIcon v-for="person in leads" :key="person.name + person.title" :person="person" />
      </div>
    </div>
  </section>
</template>

<script setup>
import PersonIcon from "../components/PersonIcon.vue"

const president = {
  name: "John Doe",
  title: "Job Role",
  image: null,
}

const leads = [
  { name: "John Doe", title: "Job Role", image: null },
  { name: "John Doe", title: "Job Role", image: null },
  { name: "John Doe", title: "Job Role", image: null },
]
</script>

<style scoped>
.team-page {
  padding: 4rem 0;
  background: linear-gradient(180deg, #f2f6fe 0%, #eef3fb 100%);
}

.team-header {
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

.team-header h1 {
  margin: 0;
  color: var(--navy-900);
  font-size: clamp(1.9rem, 4vw, 2.5rem);
}

.team-header p {
  margin: 0.9rem 0 0;
  color: var(--text-muted);
  line-height: 1.6;
}

.top-role {
  margin-bottom: 1rem;
}

.role-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 900px) {
  .role-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .team-page {
    padding: 3rem 0;
  }

  .role-grid {
    grid-template-columns: 1fr;
  }
}
</style>