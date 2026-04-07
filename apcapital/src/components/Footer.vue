<template>
  <footer class="footer">
    <div class="container footer-inner">
      <p class="footer-brand">Surrey Capital Research · University of Surrey</p>
      <p>Student-run research society exploring equities, corporate finance, and quantitative markets.</p>
      <p>
        Connect on
        <a href="https://www.linkedin.com/company/ap-capital-research/" target="_blank" rel="noopener">LinkedIn</a>
      </p>
      <p class="footer-meta">© 2026 Surrey Capital Research · Prototype website</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(180deg, #08152f 0%, #0d2147 100%);
  border-top: 1px solid rgba(233, 216, 166, 0.35);
}

.footer-inner {
  padding: 2rem 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.88rem;
}

.footer-brand {
  color: #fff;
  font-weight: 600;
}

.footer-inner p {
  margin: 0.45rem 0;
}

a {
  color: var(--gold-300);
  text-decoration: underline;
}

.footer-meta {
  margin-top: 0.8rem;
  color: rgba(255, 255, 255, 0.67);
}
</style>