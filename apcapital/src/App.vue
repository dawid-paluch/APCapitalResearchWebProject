<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=network_node,show_chart" />
  <div class="page">
    <!-- PAGE HEADER -->
    <AppHeader home-href="/"/>

    <main>
      <!-- HERO -->
      <section id="hero" class="section hero">
        <div class="container">
          <h1>AP Capital Research</h1>
          <p class="section-kicker">Student-led investment research</p>
        </div>
      </section>

      <!-- WELCOME-->
      <section id="welcome" class="section">
        <div class="container">
          <div class="welcome-header">
            <h2 class="welcome-title">Welcome to our Community</h2>
          </div>
          <div class="welcome-content-grid">
            <div>
              <div class="welcome-sections-header">
                <div class="welcome-span">
                  <span class="material-symbols-outlined welcome-icon">network_node</span>
                </div>
                <h3>Learn. Invest. Network.</h3>
              </div>
              <p> Join a student-led society focused on practical investment research.</p>
            </div>
            
            <div>
              <div class="welcome-sections-header">
                <div class="welcome-span">
                  <span class="material-symbols-outlined welcome-icon">show_chart</span>
                </div>
                <h3>Public Markets · Macro &amp; Credit · Quant &amp; Data</h3>
              </div>
              <p>Explore diverse investment strategies and market insights.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ABOUT -->
      <section id="about" class="section">
        <div class="container">
          <div class="section-header">
            <p class="section-kicker">About</p>
            <h2 class="section-title">What is AP Capital Research?</h2>
          </div>
          <p class="section-text">
            Lightweight prototype website for the proposed AP Capital Research society at the
            University of Surrey. Content, structure and branding here are placeholders and can be
            replaced by the Directors later.
            AP Capital Research is a student investment and markets society concept for the
            University of Surrey. The idea is to give students a simple, practical way to learn
            about public markets, macro and quantitative investing. This text is a placeholder for
            the official description.
          </p>
        </div>
      </section>
      
    <!-- PREVIOUS WEEKLY REPORTS SECTION -->
      <ResearchSection 
        heading="M&A Deals of the Week"
        :articles="researchArticles"
      />

    <!-- PREVIOUS EQUITY RESEARCH REPORTS SECTION -->
      <ResearchSection 
        heading="Equity Research"
        :articles="researchArticles"
      />

      <!-- JOIN -->
      <section id="join" class="section">
        <div class="container grid join-grid">
          <div>
            <div class="section-header">
              <p class="section-kicker">Join</p>
              <h2 class="section-title">Register your interest</h2>
            </div>
            <p class="section-text">
              This simple form is only for demonstration and does not submit data. In the final
              version it could be connected to a Surrey Students' Union page, a mailing list, or an
              internal application form.
            </p>
          </div>

          <button type="button" style="border: 0;">
            <span class="btn btn-primary btn-block">Register Interest</span>
          </button>
        </div>
      </section>
    </main>

    <!-- PAGE FOOTER -->
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from "./components/Header.vue"
import AppFooter from "./components/Footer.vue"
import ResearchSection from "./components/ResearchSection.vue"

const links = [
  { id: "about", label: "About" },
  { id: "divisions", label: "Divisions" },
  { id: "join", label: "Join" },
];

const researchArticles = [
  {
    id: 1,
    image: "",
    title: "Empty Title 1",
    date: "10 December 2025",
    description:
      "Blank description 1. This is a placeholder for a research article summary. Real text will go here later.",
  },
  {
    id: 2,
    image: "",
    title: "Empty Title 2",
    date: "5 December 2025",
    description:
      "Blank description 2. This is a placeholder for a research article summary. Real text will go here later.",
  },
  {
    id: 3,
    image: "",
    title: "Empty Title 3",
    date: "30 November 2025",
    description:
      "Blank description 3. This is a placeholder for a research article summary. Real text will go here later.",
  },
]
</script>

<style>
:root {
  /* Tweak this to change hero height */
  --hero-height: 40vh;

  /* Core colours */
  --blue: #00205b;
  --gold: #b49400;
  --bg: #f5f5f5;
  --surface: #ffffff;
  --text: #111827;
  --muted: #4b5563;
  --border: #abb7ce;
  --dark: #333538;
  --black: #1d1d1d;

  /* Layout */
  --max-width: 80em;
  --radius-sm: 0.4rem;
  --radius-md: 0.6rem;
  --radius-lg: 0.8rem;
}

/* BASIC SETTING OF STYLING */

*,
*::before,
*::after {
  box-sizing: border-box;
  border: 0;
  padding: 0;
  margin: 0;
  font-size: medium;
  text-decoration: none;
  list-style: none;
  outline: none;
  vertical-align: baseline;
}

html,
body {
  height: 100%;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
}

.page {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}





/* LAYOUT & CONTAINERS */

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1rem;
}

main {
  flex: 1;
}




/* GENERIC SECTIONS */

.section {
  background: var(--surface);
  border-top: 1px solid var(--border);
}

.section .container {
  padding: 3.75rem 1rem;
}

.section-header {
  margin-bottom: 0.8rem;
}

.section-kicker {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.7rem;
  color: var(--muted);
  margin: 0 0 0.35rem;
}

.section-title {
  margin: 0 0 0.3rem;
  font-size: 1.5rem;
  color: var(--blue);
}

.section-text {
  margin: 0;
  font-size: 0.92rem;
  color: var(--muted);
  line-height: 1.5;
}

/* HERO SECTION */

.hero {
  /* main control for height */
  min-height: var(--hero-height);
  height: 100vh;
  display: flex;
  align-items: center;
  background: var(--gold);
}

.hero h1 {
  margin: 0.2rem 0 0.7rem;
  font-size: clamp(2.6rem, 3vw + 2rem, 3rem);
  color: var(--black);
}

/* WELCOME SECTION */
.welcome-header {
  text-align: center;
}

.welcome-title {
  color: var(--blue);
  font-size: 2.8rem;
}

.welcome-content-grid {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1.2rem;
  margin-top: 1rem;
}

.welcome-content-grid div {
  text-align: center;
  max-width: 15rem;
  margin: 0 auto;
}

.welcome-sections-header {
  min-height: 10rem;
}

.welcome-span {
  display: flex;
  justify-content: center;
}

.material-symbols-outlined.welcome-icon {
  font-size: 4rem;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 0.7em;
}

/* BUTTONS */

.btn {
  border-radius: 999px;
  border: 1px solid transparent;
  padding: 0.55rem 1.3rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Used as the basic primary button appearance */
.btn-primary {
  background: var(--blue);
  border-color: var(--blue);
  color: #ffffff;
}

.btn-primary:hover {
  filter: brightness(1.05);
}

button span.btn {
  display: flexbox;
  width: 50%;
  height: 3rem;
  margin-top: 10%;
}

/* GRID & CARDS */

.grid {
  display: grid;
}

/* JOIN SECTION */

.join-grid {
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
}

/* RESPONSIVE ADJUSTMENTS */

@media (max-width: 900px) {
  .header-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .join-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 0.3rem;
  }

  .hero .container {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

</style>
