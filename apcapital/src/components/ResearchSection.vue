<template>
  <section class="research-section">
    <div class="container">
      <header class="research-header" v-if="heading">
        <h2 v-if="heading" class="research-title">{{ heading }}</h2>
      </header>

      <div class="research-grid">
        <article
          v-for="(article, index) in articles"
          :key="article.id ?? index"
          class="research-card"
        >
          <!-- Image / figure -->
          <figure class="research-card-media">
            <img
              v-if="article.image"
              :src="article.image"
              :alt="article.title"
              class="research-card-image"
            />
            <div v-else class="research-card-image-placeholder">
              <span>Image placeholder</span>
            </div>
          </figure>

          <!-- Title -->
          <h3 class="research-card-title">
            {{ article.title }}
          </h3>

          <!-- Meta (date) -->
          <p class="research-card-meta">
            <span class="meta-item">
              <span aria-hidden="true">📅</span>
              <span>{{ article.date }}</span>
            </span>
          </p>

          <!-- Description -->
          <p class="research-card-summary">
            {{ article.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  heading: {
    type: String,
    default: "",
  },
  // articles: [{ id?, image, title, date, description }]
  articles: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped>
.research-section {
  background: var(--blue);
  color: #ffffff;
  padding: 2.2rem 0;
  margin-top: 2.5em;
}

.research-header {
  margin-bottom: 0.7rem;
}

.research-title {
  margin: 0 1.4em;
  font-size: 1.8rem;
}

/* GRID */

.research-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin: 0;
}

/* Trial example of difference to the og website*/
/* .research-grid > article:first-child {
  grid-column: span 3;
} */

.research-grid article {
  /* to make all cards same height */
  display: flex;
  flex-direction: column;
  margin: 0;
}

/* CARD */

.research-card {
  display: flex;
  flex-direction: column;
}

/* Image */

.research-card-media {
  margin: 0 0 1rem;
}

.research-card-image {
  width: 100%;
  display: block;
  border-radius: 0.4rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

.research-card-image-placeholder {
  background: #ffffff;
  border-radius: 0.4rem;
  height: 0;
  padding-top: 62.5%;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

.research-card-image-placeholder span {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: #4b5563;
}

/* Text */

.research-card-title {
  margin: 0 0 0.4rem;
  font-size: 1.2rem;
  line-height: 1.3;
}

.research-card-meta {
  margin: 0 0 0.7rem;
  font-size: 0.8rem;
  opacity: 0.9;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.research-card-summary {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.85;
}

/* Responsive */

@media (max-width: 1024px) {
  .research-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .research-section {
    padding: 2rem 0;
  }

  .research-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.5rem;
  }
}
</style>
