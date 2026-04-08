<template>
  <div class="homepage">
    <section class="hero">
      <div class="ambient ambient-one"></div>
      <div class="ambient ambient-two"></div>
      <div class="container hero-content">
        <div class="hero-layout" :class="{ 'hero-layout--with-image': heroImageSrc }">
          <img v-if="heroImageSrc" :src="heroImageSrc" :alt="heroImageAlt" class="hero-image" />

          <div class="hero-text">
            <p class="eyebrow">Student Finance Society</p>
            <h1>Surrey Capital Research</h1>
            <p class="hero-copy">
              A student-led platform for equity, M&amp;A, and quant research with practical weekly insights.
            </p>
            <div class="hero-actions">
              <a href="#featured-reports" class="btn btn-primary">Read Latest Research</a>
              <router-link to="/our-team" class="btn btn-secondary">Meet the Team</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="what-we-do" class="section">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow section-eyebrow">Divisions</p>
          <h2>What we do</h2>
        </div>

        <div class="division-grid">
          <article v-for="division in divisions" :key="division.title" class="division-card">
            <p class="division-tag">{{ division.tag }}</p>
            <h3>{{ division.title }}</h3>
            <p>{{ division.description }}</p>
            <router-link :to="division.to" class="division-link">Open page</router-link>
          </article>
        </div>
      </div>
    </section>

    <section class="stats-strip">
      <div class="container stats-grid">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <section id="featured-reports" class="section section-soft">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow section-eyebrow">Research Output</p>
          <h2>Featured publications</h2>
        </div>
      </div>

      <ResearchSection heading="M&A Deal of the Week" :articles="dealOfWeekArticles" section-id="deal-of-week" />
      <ResearchSection heading="Equity Research" :articles="equityArticles" section-id="equity-research" />
      <ResearchSection heading="Mergers & Acquisitions" :articles="maArticles" section-id="ma-research" />
      <ResearchSection heading="Quant" :articles="quantArticles" section-id="quant-research" />
    </section>
  </div>
</template>

<script setup>
import ResearchSection from "../components/ResearchSection.vue"
import heroImage from "../assets/logo4.png"

const heroImageSrc = heroImage
const heroImageAlt = "Surrey Capital Research Visual"

function makePlaceholderArticles(tag, count = 3) {
  return Array.from({ length: count }, (_, index) => ({
    id: `${tag}-${index + 1}`,
    tag,
    title: `Empty Title ${index + 1}`,
    date: "Date Placeholder",
    description: `Blank description ${index + 1}. This is a placeholder for a research article summary. Real text will go here later.`,
    image: "",
  }))
}

const divisions = [
  {
    tag: "Public Markets",
    title: "Equity Research",
    description: "Bottom-up company analysis pages and future published notes.",
    to: "/research/equity-research",
  },
  {
    tag: "Weekly Coverage",
    title: "M&A Deal of the Week",
    description: "A dedicated page for weekly transaction commentary and updates.",
    to: "/research/deal-of-the-week",
  },
  {
    tag: "Corporate Finance",
    title: "Mergers & Acquisitions",
    description: "A category page for broader dealmaking research and sector themes.",
    to: "/research/mergers-acquisitions",
  },
  {
    tag: "Data & Models",
    title: "Quant",
    description: "A research page for model-driven ideas, signals, and data-led notes.",
    to: "/research/quant",
  },
]

const stats = [
  { value: "40+", label: "Reports" },
  { value: "4", label: "Divisions" },
  { value: "65", label: "Members" },
  { value: "Weekly", label: "Insights" },
]

const dealOfWeekArticles = makePlaceholderArticles("Deal of the Week")
const equityArticles = makePlaceholderArticles("Equity")
const maArticles = makePlaceholderArticles("M&A")
const quantArticles = makePlaceholderArticles("Quant")
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background: var(--gradient-hero);
  color: #fff;
  padding: 6.5rem 0 6rem;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-layout {
  display: block;
}

.hero-layout--with-image {
  display: grid;
  grid-template-columns: minmax(220px, 340px) minmax(0, 1fr);
  align-items: center;
  gap: 1.5rem;
}

.hero-image {
  width: 100%;
  max-width: 340px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(233, 216, 166, 0.4);
  box-shadow: var(--shadow-card);
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.72);
  margin: 0 0 0.8rem;
}

.section-eyebrow {
  color: var(--text-muted);
}

.hero h1 {
  font-size: clamp(2.3rem, 5vw, 4.2rem);
  margin: 0;
  max-width: 12ch;
}

.hero-copy {
  max-width: 55ch;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.88);
  margin: 1rem 0 1.8rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.ambient {
  position: absolute;
  border-radius: 999px;
  filter: blur(4px);
  opacity: 0.45;
  animation: drift 12s ease-in-out infinite alternate;
}

.ambient-one {
  width: 360px;
  height: 360px;
  background: rgba(198, 161, 63, 0.3);
  top: -120px;
  right: -40px;
}

.ambient-two {
  width: 320px;
  height: 320px;
  background: rgba(114, 162, 255, 0.27);
  left: -100px;
  bottom: -130px;
  animation-duration: 15s;
}

@keyframes drift {
  from {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(14px);
  }
}

.section {
  padding: 4.5rem 0;
}

.section-soft {
  padding-top: 3rem;
  background: linear-gradient(180deg, #f8fbff 0%, #f1f5fc 100%);
}

.section-header h2 {
  color: var(--navy-800);
  margin: 0;
  font-size: clamp(1.6rem, 2.5vw, 2.2rem);
}

.division-grid {
  margin-top: 1.4rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.division-card {
  background: var(--gradient-surface);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-md);
  padding: 1.2rem;
  box-shadow: var(--shadow-soft);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
}

.division-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
}

.division-tag {
  font-size: 0.72rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--blue-600);
  margin: 0 0 0.5rem;
}

.division-card h3 {
  margin: 0 0 0.5rem;
  color: var(--navy-900);
}

.division-card p {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.55;
}

.division-link {
  margin-top: 1rem;
  align-self: flex-start;
  text-decoration: none;
  border-radius: 999px;
  padding: 0.62rem 0.95rem;
  font-weight: 600;
  font-size: 0.88rem;
  background: var(--navy-900);
  color: #fff;
}

.division-link:hover {
  background: var(--blue-600);
}

.stats-strip {
  background: var(--navy-900);
  color: #fff;
  border-top: 1px solid rgba(233, 216, 166, 0.2);
  border-bottom: 1px solid rgba(233, 216, 166, 0.2);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1.4rem 0;
}

.stat-item {
  text-align: center;
}

.stat-item strong {
  display: block;
  font-size: 1.55rem;
  color: var(--gold-300);
}

.stat-item span {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.88rem;
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

@media (max-width: 980px) {
  .hero-layout--with-image {
    grid-template-columns: 1fr;
  }

  .hero-image {
    max-width: 290px;
  }

  .division-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 5rem 0 4.5rem;
  }

  .section {
    padding: 3.5rem 0;
  }

  .division-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>