<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-grid">
        <section class="footer-block footer-block--brand" aria-label="About Surrey Capital Research">
          <p class="footer-brand">Surrey Capital Research · University of Surrey</p>
          <p class="footer-description">
            Student-run research society exploring equities, corporate finance, and quantitative markets.
          </p>
        </section>

        <section class="footer-block footer-block--join" aria-label="Join us">
          <h3 class="footer-heading">Join Us</h3>
          <p class="footer-join-text">Follow our latest research and get involved with upcoming society initiatives.</p>
          <a
            class="join-cta"
            href="https://www.linkedin.com/company/ap-capital-research/"
            target="_blank"
            rel="noopener"
          >
            Get Involved
          </a>
        </section>

        <section class="footer-block" aria-label="Social links">
          <h3 class="footer-heading">Connect</h3>
          <div class="social-links">
            <a href="https://www.linkedin.com/company/ap-capital-research/" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </section>
      </div>

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
  padding: 2.2rem 0 1.4rem;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.88rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 0.75fr;
  gap: 1.5rem;
  align-items: start;
}

.footer-block {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-brand {
  color: #fff;
  font-weight: 600;
  margin: 0;
}


.footer-description {
  margin: 0;
  max-width: 34ch;
  line-height: 1.55;
}

.footer-heading {
  margin: 0;
  color: #fff;
  font-size: 0.88rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.footer-join-text {
  margin: 0;
  line-height: 1.55;
  max-width: 36ch;
}

.join-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: 9.5rem;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(233, 216, 166, 0.75);
  background: rgba(233, 216, 166, 0.1);
  color: var(--gold-300);
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.join-cta:hover {
  background: rgba(233, 216, 166, 0.2);
  color: #fff;
  transform: translateY(-1px);
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.social-links a {
  color: var(--gold-300);
  text-decoration: none;
  border: 1px solid rgba(233, 216, 166, 0.55);
  border-radius: 999px;
  padding: 0.38rem 0.8rem;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.social-links a:hover {
  background: rgba(233, 216, 166, 0.18);
  color: #fff;
}

.footer-meta {
  margin: 1.4rem 0 0;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.67);
  text-align: center;
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .footer-inner {
    padding: 1.9rem 0 1.35rem;
  }

  .footer-meta {
    text-align: left;
  }
}
</style>