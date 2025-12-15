<template>
  <footer class="footer">
    <div class="container footer-inner">
      <p>AP Capital Research · University of Surrey</p>
      <p>Prototype site for internal discussion. Content subject to change.</p>
      <p>Made by <a href="https://github.com/dawid-paluch" class="underline">Dawid Paluch</a></p>
      <p>© 2024 AP Capital Research</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--blue);
  border-top: 1px solid var(--gold);
}

.footer-inner {
  padding: 1rem 1rem;
  text-align: center;
  font-size: 0.82rem;
  color: var(--surface);
}

.footer-inner p {
    font-size: 0.82rem;
    color: var(--muted);
    margin: 0.4rem 0;
}

.underline {
    color: var(--muted);
    font-size: 0.82rem;
    text-decoration: underline;
}

.underline:hover {
    color: var(--bg);
    text-emphasis: bold;
    text-decoration: none;
}
</style>
