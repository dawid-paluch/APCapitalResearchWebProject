<template>
  <div class="research-page">
    <section class="category-hero">
      <div class="hero-orb hero-orb-one"></div>
      <div class="hero-orb hero-orb-two"></div>

      <div class="container hero-content">
        <p class="eyebrow">{{ page.eyebrow }}</p>
        <h1>{{ page.title }}</h1>
        <p class="hero-copy">{{ page.description }}</p>

        <div class="hero-actions">
          <router-link to="/" class="btn btn-primary">Back to Homepage</router-link>
          <router-link to="/our-team" class="btn btn-secondary">Meet the Team</router-link>
        </div>
      </div>
    </section>

    <section class="overview-section">
      <div class="container">
        <div class="overview-grid">
          <article v-for="item in page.highlights" :key="item.title" class="overview-card">
            <p class="overview-label">{{ item.label }}</p>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <ResearchSection
      :heading="page.sectionHeading"
      :articles="page.articles"
      section-id="research-archive"
    />
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import ResearchSection from "../components/ResearchSection.vue"

const route = useRoute()

function makePlaceholderArticles(tag, count = 6) {
  return Array.from({ length: count }, (_, index) => ({
    id: `${tag}-${index + 1}`,
    tag,
    title: `Empty Title ${index + 1}`,
    date: "Date Placeholder",
    description: `Blank description ${index + 1}. This is a placeholder for a research article summary. Real text will go here later.`,
    image: "",
  }))
}

const pageMap = {
  "equity-research": {
    eyebrow: "Public Markets",
    title: "Equity Research",
    description: "A dedicated page for future company notes, valuation write-ups, and sector commentary.",
    sectionHeading: "Equity Research Archive",
    highlights: [
      { label: "Coverage", title: "Company Notes", text: "Placeholder space for future bottom-up research coverage." },
      { label: "Format", title: "Valuation Work", text: "A section intended for models, theses, and summary write-ups." },
      { label: "Pipeline", title: "Upcoming Pieces", text: "This layout is ready for future equity publications and updates." },
    ],
    articles: makePlaceholderArticles("Equity"),
  },
  "deal-of-the-week": {
    eyebrow: "Weekly Coverage",
    title: "M&A Deal of the Week",
    description: "A category page for weekly featured transactions and short-form deal commentary.",
    sectionHeading: "Deal of the Week Archive",
    highlights: [
      { label: "Coverage", title: "Weekly Feature", text: "Placeholder area for one highlighted deal each week." },
      { label: "Format", title: "Short Analysis", text: "Future notes can summarise rationale, structure, and market effect." },
      { label: "Pipeline", title: "Future Archive", text: "This page is designed to grow into a rolling series of weekly entries." },
    ],
    articles: makePlaceholderArticles("Deal of the Week"),
  },
  "mergers-acquisitions": {
    eyebrow: "Corporate Finance",
    title: "Mergers & Acquisitions",
    description: "A broader page for transaction trends, sector consolidation themes, and strategic deal analysis.",
    sectionHeading: "Mergers & Acquisitions Archive",
    highlights: [
      { label: "Coverage", title: "Sector Themes", text: "Placeholder space for future market-wide M&A research." },
      { label: "Format", title: "Strategic Commentary", text: "Designed for notes on synergies, structure, and buyer logic." },
      { label: "Pipeline", title: "Transaction Watchlist", text: "Ready for future deal tracking and thematic write-ups." },
    ],
    articles: makePlaceholderArticles("M&A"),
  },
  quant: {
    eyebrow: "Data & Models",
    title: "Quant",
    description: "A category page for data-led research, factor ideas, and future model-based observations.",
    sectionHeading: "Quant Research Archive",
    highlights: [
      { label: "Coverage", title: "Signals", text: "Placeholder space for future factor, signal, and screening research." },
      { label: "Format", title: "Backtests", text: "Built for simple write-ups supported by charts, tables, and observations." },
      { label: "Pipeline", title: "Future Models", text: "Ready for future quant notes and data-led market commentary." },
    ],
    articles: makePlaceholderArticles("Quant"),
  },
}

const page = computed(() => pageMap[route.params.slug] ?? pageMap["equity-research"])
</script>

<style scoped>
.category-hero {
  position: relative;
  overflow: hidden;
  background: var(--gradient-hero);
  color: #fff;
  padding: 6rem 0 5.4rem;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.72);
  margin: 0 0 0.8rem;
}

.category-hero h1 {
  margin: 0;
  font-size: clamp(2.2rem, 5vw, 4rem);
  max-width: 13ch;
}

.hero-copy {
  max-width: 58ch;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.88);
  margin: 1rem 0 1.75rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.hero-orb {
  position: absolute;
  border-radius: 999px;
  opacity: 0.35;
  filter: blur(4px);
}

.hero-orb-one {
  width: 340px;
  height: 340px;
  right: -60px;
  top: -80px;
  background: rgba(198, 161, 63, 0.28);
}

.hero-orb-two {
  width: 260px;
  height: 260px;
  left: -70px;
  bottom: -80px;
  background: rgba(114, 162, 255, 0.24);
}

.overview-section {
  padding: 3rem 0 1rem;
  background: linear-gradient(180deg, #f8fbff 0%, #f1f5fc 100%);
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.overview-card {
  background: var(--gradient-surface);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-md);
  padding: 1.15rem;
  box-shadow: var(--shadow-soft);
}

.overview-label {
  margin: 0 0 0.45rem;
  font-size: 0.72rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--blue-600);
}

.overview-card h3 {
  margin: 0 0 0.5rem;
  color: var(--navy-900);
}

.overview-card p:last-child {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.55;
}

.btn {
  text-decoration: none;
  border-radius: 999px;
  padding: 0.72rem 1.1rem;
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid transparent;
}

.btn-primary {
  background: var(--gradient-accent);
  color: #1c2741;
}

.btn-secondary {
  border-color: rgba(255, 255, 255, 0.4);
  color: #fff;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.08);
}

@media (max-width: 900px) {
  .overview-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .category-hero {
    padding: 5rem 0 4.5rem;
  }
}
</style>