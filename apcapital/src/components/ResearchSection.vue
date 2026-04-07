<template>
  <section :id="sectionId" class="research-section">
    <div class="container">
      <header v-if="heading" class="research-header">
        <h2 class="research-title">{{ heading }}</h2>
      </header>

      <div class="research-grid">
        <article v-for="(article, index) in articles" :key="article.id ?? index" class="research-card">
          <figure class="research-media">
            <img v-if="article.image" :src="article.image" :alt="article.title" class="research-image" />
            <div v-else class="research-placeholder">
              <div class="placeholder-mark">APCR</div>
              <span>Research Brief</span>
            </div>
          </figure>

          <span v-if="article.tag" class="research-tag">{{ article.tag }}</span>
          <h3 class="research-card-title">{{ article.title }}</h3>
          <p class="research-card-meta">{{ article.date }}</p>
          <p class="research-card-summary">{{ article.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  heading: {
    type: String,
    default: "",
  },
  sectionId: {
    type: String,
    default: "",
  },
  articles: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped>
.research-section {
  padding: 1.2rem 0 2.3rem;
}

.research-header {
  margin-bottom: 1rem;
}

.research-title {
  margin: 0;
  font-size: 1.45rem;
  color: var(--navy-800);
}

.research-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.research-card {
  background: var(--surface);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-md);
  padding: 0.9rem;
  box-shadow: var(--shadow-soft);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.research-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-card);
  border-color: rgba(47, 88, 167, 0.4);
}

.research-media {
  margin: 0 0 0.85rem;
}

.research-image,
.research-placeholder {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 10px;
  display: block;
}

.research-image {
  object-fit: cover;
}

.research-placeholder {
  background: linear-gradient(140deg, #0f2a58 0%, #1e4e98 65%, #3868b5 100%);
  position: relative;
  color: rgba(255, 255, 255, 0.85);
  overflow: hidden;
}

.research-placeholder::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 25%, rgba(255, 255, 255, 0.16) 50%, transparent 75%);
  transform: translateX(-100%);
  animation: shimmer 3.4s linear infinite;
}

@keyframes shimmer {
  to {
    transform: translateX(100%);
  }
}

.placeholder-mark {
  position: absolute;
  right: 0.75rem;
  top: 0.7rem;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  color: var(--gold-300);
}

.research-placeholder span {
  position: absolute;
  left: 0.75rem;
  bottom: 0.7rem;
  font-size: 0.85rem;
}

.research-tag {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  font-size: 0.69rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 999px;
  color: #284f93;
  background: #edf3ff;
  border: 1px solid #d6e3fb;
}

.research-card-title {
  margin: 0.65rem 0 0.45rem;
  font-size: 1.05rem;
  line-height: 1.35;
  color: var(--navy-900);
}

.research-card-meta {
  margin: 0 0 0.45rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.research-card-summary {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.55;
  font-size: 0.9rem;
}

@media (max-width: 1000px) {
  .research-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .research-grid {
    grid-template-columns: 1fr;
  }
}
</style>