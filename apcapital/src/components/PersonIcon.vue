<template>
  <div class="person-card">
    <figure class="research-card-media">
      <img
        v-if="person.image"
        :src="person.image"
        :alt="person.name"
        class="research-card-image"
      />
      <div v-else class="image-placeholder">
        <span>Image placeholder</span>
      </div>
    </figure>

    <h1>{{ person.name }}</h1>
    <p class="job-title">{{ person.title }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  person: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
/* Root card: inherits font-size from parent */
.person-card {
  text-align: center;
  padding: 1.2em;
  border-radius: 0.8em;
  width: 24em;        /* width scales with font-size */
  max-width: 100%;
  margin: 0 auto;
}

/* media wrapper */
.research-card-media {
  margin: 0 0 1em;
}

/* real image + placeholder share same square aspect ratio */
.research-card-image,
.image-placeholder {
  width: 100%;
  aspect-ratio: 1 / 1;       /* square */
  border-radius: 0.6em;
  display: block;
  overflow: hidden;
  box-shadow: 0 0.8em 1.6em rgba(0, 0, 0, 0.35);
}

/* real image specifics */
.research-card-image {
  object-fit: cover;
}

/* placeholder specifics */
.image-placeholder {
  background-color: #ffffff;
  position: relative;
}

.image-placeholder span {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85em;
  color: var(--text-secondary);
}

/* text */
h1 {
  font-size: 1.3em;
  margin: 0.4em 0 0.2em;
  color: var(--text);
}

.job-title {
  font-size: 0.9em;
  font-style: italic;
  color: var(--text-secondary);
}

/* ---------- Responsive tweaks ---------- */

/* tablet-ish: slightly narrower card */
@media (max-width: 900px) {
  .person-card {
    width: 20em;
    padding: 1em;
    border-radius: 0.7em;
  }

  .research-card-media {
    margin-bottom: 0.9em;
  }
}

/* phones: full-width card, square image kept */
@media (max-width: 600px) {
  .person-card {
    width: 100%;
    max-width: 20em;   /* don’t get too wide on big phones */
    padding: 0.9em;
    border-radius: 0.7em;
  }

  .research-card-media {
    margin-bottom: 0.8em;
  }
}
</style>
