<template>
  <article class="person-card">
    <figure class="person-media">
      <img v-if="person.image" :src="person.image" :alt="person.name" class="person-image" />
      <div v-else class="image-placeholder">
        <span>Profile image</span>
      </div>
    </figure>

    <h3>{{ person.name }}</h3>
    <p class="job-title">{{ person.title }}</p>
  </article>
</template>

<script setup>
defineProps({
  person: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.person-card {
  text-align: center;
  background: var(--surface);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  padding: 1rem;
  box-shadow: var(--shadow-soft);
}

.person-media {
  margin: 0 0 0.85rem;
}

.person-image,
.image-placeholder {
  width: 100%;
  max-width: 240px;
  margin: 0 auto;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  display: block;
}

.person-image {
  object-fit: cover;
}

.image-placeholder {
  background: linear-gradient(145deg, #0f2855 0%, #2f5ca8 100%);
  color: rgba(255, 255, 255, 0.86);
  position: relative;
}

.image-placeholder span {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: 0.82rem;
}

h3 {
  margin: 0.4rem 0 0.2rem;
  color: var(--navy-900);
  font-size: 1.08rem;
}

.job-title {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.88rem;
}
</style>