<template>
  <header class="header">
    <div class="container header-row">
      <router-link to="/" class="logo" @click="closeMenu">
        <span class="logo-mark">SR</span>
        <span class="logo-text">
          <strong>Surrey Capital Research</strong>
          <small>University of Surrey</small>
        </span>
      </router-link>

      <button
        class="nav-toggle"
        :class="{ 'nav-toggle--open': isOpen }"
        type="button"
        aria-label="Toggle navigation"
        :aria-expanded="isOpen"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav :class="['nav', { 'nav--open': isOpen }]">
        <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>
        <router-link :to="{ path: '/', hash: '#what-we-do' }" class="nav-link" @click="closeMenu">What We Do</router-link>
        <router-link to="/our-team" class="nav-link" @click="closeMenu">Our Team</router-link>

        <div
          class="nav-dropdown"
          :class="{ 'nav-dropdown--open': isResearchMenuOpen }"
          @mouseenter="openDesktopResearch"
          @mouseleave="closeDesktopResearch"
        >
          <button
            class="nav-link nav-dropdown-trigger"
            type="button"
            aria-label="Open research pages"
            @click="toggleResearchMobile"
            @focus="openDesktopResearch"
          >
            Research
            <span class="caret">▾</span>
          </button>

          <div class="dropdown-menu">
            <router-link to="/research/equity-research" class="dropdown-link" @click="closeMenu">Equity Research</router-link>
            <router-link to="/research/deal-of-the-week" class="dropdown-link" @click="closeMenu">M&amp;A Deal of the Week</router-link>
            <router-link to="/research/mergers-acquisitions" class="dropdown-link" @click="closeMenu">Mergers &amp; Acquisitions</router-link>
            <router-link to="/research/quant" class="dropdown-link" @click="closeMenu">Quant</router-link>
          </div>
        </div>

        <a :href="linkedinHref" class="nav-link linkedin" target="_blank" rel="noopener" @click="closeMenu">
          LinkedIn
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from "vue"

defineProps({
  linkedinHref: {
    type: String,
    default: "https://www.linkedin.com/company/ap-capital-research/",
  },
})

const isOpen = ref(false)
const mobileResearchOpen = ref(false)
const desktopResearchOpen = ref(false)

const isResearchMenuOpen = computed(() => mobileResearchOpen.value || desktopResearchOpen.value)

function isMobile() {
  return typeof window !== "undefined" && window.innerWidth <= 900
}

function closeMenu() {
  isOpen.value = false
  mobileResearchOpen.value = false
  desktopResearchOpen.value = false
}

function toggleMenu() {
  isOpen.value = !isOpen.value
  if (!isOpen.value) {
    mobileResearchOpen.value = false
  }
}

function toggleResearchMobile() {
  if (isMobile()) {
    mobileResearchOpen.value = !mobileResearchOpen.value
  }
}

function openDesktopResearch() {
  if (!isMobile()) {
    desktopResearchOpen.value = true
  }
}

function closeDesktopResearch() {
  if (!isMobile()) {
    desktopResearchOpen.value = false
  }
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
  background: linear-gradient(160deg, rgba(7, 22, 50, 0.95), rgba(10, 34, 79, 0.92));
  border-bottom: 1px solid rgba(233, 216, 166, 0.22);
}

.header-row {
  display: flex;
  align-items: center;
  min-height: 78px;
  gap: 1rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #fff;
}

.logo-mark {
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 999px;
  background: var(--gradient-accent);
  color: #1b2438;
  display: grid;
  place-items: center;
  font-weight: 800;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.logo-text small {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.72rem;
}

.nav {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.88);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.55rem 0.75rem;
  border-radius: 999px;
  border: 1px solid transparent;
  background: transparent;
  cursor: pointer;
}

.nav-link:hover {
  color: #fff;
  border-color: rgba(233, 216, 166, 0.35);
  background: rgba(255, 255, 255, 0.05);
}

.nav-dropdown {
  position: relative;
  padding-bottom: 0.3rem;
  margin-bottom: -0.3rem;
}

.nav-dropdown-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.caret {
  font-size: 0.7rem;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% - 0.05rem);
  left: 0;
  min-width: 240px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid var(--border-soft);
  box-shadow: var(--shadow-card);
  padding: 0.45rem;
  opacity: 0;
  transform: translateY(6px);
  pointer-events: none;
  transition: all 0.2s ease;
}

.nav-dropdown--open .dropdown-menu {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.dropdown-link {
  display: block;
  padding: 0.55rem 0.65rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-main);
  font-size: 0.86rem;
}

.dropdown-link:hover {
  background: var(--surface-muted);
  color: var(--navy-800);
}

.linkedin {
  border-color: rgba(233, 216, 166, 0.45);
}

.nav-toggle {
  display: none;
  margin-left: auto;
  background: transparent;
  border: 0;
}

.nav-toggle span {
  display: block;
  width: 1.5rem;
  height: 2px;
  margin: 4px 0;
  background: #fff;
  transition: 0.2s;
}

.nav-toggle--open span:nth-child(1) {
  transform: rotate(45deg) translateY(8px);
}

.nav-toggle--open span:nth-child(2) {
  opacity: 0;
}

.nav-toggle--open span:nth-child(3) {
  transform: rotate(-45deg) translateY(-8px);
}

@media (max-width: 900px) {
  .header-row {
    flex-wrap: wrap;
    padding: 0.6rem 0;
  }

  .nav-toggle {
    display: block;
  }

  .nav {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all 0.25s ease;
    margin-top: 0;
  }

  .nav--open {
    max-height: 520px;
    opacity: 1;
    margin-top: 0.5rem;
  }

  .nav-link {
    border-radius: 10px;
    text-align: left;
  }

  .nav-dropdown {
    width: 100%;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .dropdown-menu {
    position: static;
    margin-top: 0.35rem;
    box-shadow: none;
    border-radius: 10px;
    border-color: rgba(216, 224, 239, 0.7);
    max-height: 0;
    overflow: hidden;
    padding: 0 0.45rem;
    transform: none;
    opacity: 1;
    pointer-events: auto;
  }

  .nav-dropdown--open .dropdown-menu {
    max-height: 260px;
    padding: 0.45rem;
  }
}
</style>