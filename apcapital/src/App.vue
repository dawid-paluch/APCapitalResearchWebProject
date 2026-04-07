<template>
  <div class="page-shell">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
</script>

<style>
:root {
  --navy-900: #071632;
  --navy-800: #0f2752;
  --blue-600: #2f58a7;
  --gold-500: #c6a13f;
  --gold-300: #e9d8a6;
  --page-bg: #f3f6fb;
  --surface: #ffffff;
  --surface-muted: #f8f9fc;
  --text-main: #10203d;
  --text-muted: #52607d;
  --border-soft: #d8e0ef;
  --shadow-soft: 0 12px 32px rgba(7, 22, 50, 0.08);
  --shadow-card: 0 18px 36px rgba(8, 20, 44, 0.14);
  --gradient-hero: linear-gradient(130deg, #081a39 0%, #14346f 45%, #2a54a1 100%);
  --gradient-accent: linear-gradient(120deg, rgba(198, 161, 63, 0.95) 0%, rgba(233, 216, 166, 0.78) 100%);
  --gradient-surface: linear-gradient(180deg, rgba(255, 255, 255, 0.97) 0%, rgba(248, 250, 255, 0.96) 100%);
  --radius-md: 14px;
  --radius-lg: 20px;
  --max-width: 1120px;
}

* {
  box-sizing: border-box;
}

html,
body,
#app {
  margin: 0;
  min-height: 100%;
}

body {
  font-family: "Inter", "Segoe UI", system-ui, sans-serif;
  background: var(--page-bg);
  color: var(--text-main);
}

a {
  color: inherit;
}

.page-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.container {
  width: min(var(--max-width), calc(100% - 2rem));
  margin: 0 auto;
}
</style>