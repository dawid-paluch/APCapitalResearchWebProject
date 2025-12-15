<template>
  <header class="header">
    <div class="container header-row">
      <!-- Logo + burger -->
      <div class="brand-row">
        <div class="logo">
          <span class="logo-mark">AP</span>
          <div class="logo-text">
            <span class="logo-title">AP Capital Research</span>
            <span class="logo-subtitle">University of Surrey</span>
          </div>
        </div>

        <!-- Burger toggle (mobile only) -->
        <button
          class="nav-toggle"
          :class="{ 'nav-toggle--open': isOpen }"
          type="button"
          @click="isOpen = !isOpen"
          :aria-expanded="isOpen ? 'true' : 'false'"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Navigation -->
      <nav :class="['nav', { 'nav--open': isOpen }]">
        <!-- Home (real link) -->
        <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>


        <!-- Placeholder links for now -->
        <button type="button" class="nav-link nav-link--button" @click="closeMenu">About Us</button>

        <router-link to="/our-team" class="nav-link nav-link--button" @click="closeMenu">Our Team</router-link>

        <!-- Equity Research / Deal of the Week grouped -->
        <div class="nav-group">
          <button type="button" class="nav-link nav-link--group nav-link--button" @click="closeMenu">Equity Research</button>

          <span class="nav-group-separator">/</span>
          
          <button type="button" class="nav-link nav-link--group nav-link--button" @click="closeMenu">Deal of the Week</button>
        </div>

        <button type="button" class="nav-link nav-link--button" @click="closeMenu">Contact Us</button>

        <!-- LinkedIn (real external link) -->
        <a :href="linkedinHref" class="nav-link nav-link--linkedin" target="_blank" rel="noopener" @click="closeMenu">
          LinkedIn
          <span class="linkedin-icon">in</span>
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  homeHref: {
    type: String,
    default: "/",
  },
  linkedinHref: {
    type: String,
    default: "https://www.linkedin.com/company/ap-capital-research/",
  },
})

const isOpen = ref(false)

function closeMenu() {
  isOpen.value = false
}
</script>

<style scoped>
.header {
  background: var(--blue);
  color: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.header-row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0;
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Logo */

.logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.logo-mark {
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  background: var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  color: #111827;
}

.logo-text {
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
}

.logo-title {
  font-size: 0.95rem;
  font-weight: 600;
}

.logo-subtitle {
  opacity: 0.9;
}

/* Burger button */

.nav-toggle {
  display: none;
  background: none;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  flex-direction: column;
  gap: 0.18rem;
}

.nav-toggle span {
  width: 1.4rem;
  height: 2px;
  border-radius: 999px;
  background: #e5e7eb;
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
}

.nav-toggle--open span:nth-child(1) {
  transform: translateY(4px) rotate(45deg);
}

.nav-toggle--open span:nth-child(2) {
  opacity: 0;
}

.nav-toggle--open span:nth-child(3) {
  transform: translateY(-4px) rotate(-45deg);
}

/* Nav */
.nav {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 1.4rem;
}

.nav-link {
  position: relative;
  border: none;
  background: none;
  color: #e5e7eb;
  font-size: 0.8rem;
  padding: 0.2rem 0.3rem;
  cursor: pointer;
  text-decoration: none;
}

/* for button links, remove default styles */
.nav-link--button {
  text-align: left;
}

/* hover underline */
.nav-link:hover {
  color: #ffffff;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0.2rem;
  right: 0.2rem;
  bottom: 0;
  height: 2px;
  background: #ffffff;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.4s ease-out;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

/* Equity Research / Deal of the Week group */

.nav-group {
  display: inline-flex;
  align-items: center;
  gap: 0.15rem;
}

.nav-link--group {
  padding-inline: 0.2rem;
}

.nav-group-separator {
  color: #e5e7eb;
  opacity: 0.7;
}

/* LinkedIn */

.nav-link--linkedin {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.linkedin-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border-radius: 0.15rem;
  background: #0a66c2;
  font-size: 0.7rem;
  font-weight: 700;
  color: #ffffff;
}

/* Desktop layout */
@media (min-width: 901px) {
  .header-row {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .brand-row {
    flex: 0 0 auto;
  }

  .nav {
    display: flex;
    flex-wrap: nowrap;
    flex: 1 1 auto;
    justify-content: flex-end;
    align-items: center;
  }

  .nav-toggle {
    display: none;
  }
}

/* Mobile layout: burger menu */
@media (max-width: 900px) {
  .brand-row {
    width: 100%;
    justify-content: space-between;
  }

  .nav-toggle {
    display: inline-flex;
  }

  .nav {
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.3rem;
    padding-top: 0.35rem;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    max-height: 0;
    opacity: 0;
    transform: scaleY(0.95);
    transform-origin: top;
    visibility: hidden;
    pointer-events: none;
    overflow: hidden;
    transition:
      max-height 0.45s ease-out,
      opacity 0.4s ease-out,
      transform 0.4s ease-out;
  }

  .nav--open {
    max-height: 500px;
    opacity: 1;
    transform: scaleY(1);
    visibility: visible;
    pointer-events: auto;
  }

  .nav-link {
    width: auto;
    padding: 0.35rem 0.1rem;
    text-align: right;
  }

  .nav-group {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .nav-group .nav-link {
    width: auto;
  }

  .nav-link--linkedin {
    width: 100%;
    justify-content: flex-end;
  }
}
</style>