window.WS_META = {
  pages: [
    { href: "index.html",      label: "Home",       num: "" },
    { href: "schedule.html",   label: "Schedule",   num: "" },
    { href: "speakers.html",   label: "Speakers",   num: "" },
    { href: "organizers.html", label: "Organizers", num: "" },
    { href: "sponsors.html",   label: "Sponsors",   num: "" }
  ]
};

function renderChrome(activeHref) {
  const m = window.WS_META;
  const navItems = m.pages.map(p => `
    <li><a href="${p.href}" class="${p.href === activeHref ? "active" : ""}">
      <span class="num">${p.num}</span><span>${p.label}</span>
    </a></li>
  `).join("");
  document.getElementById("chrome").innerHTML = `
    <header class="masthead">
      <div class="masthead-inner">
        <div class="brand-cluster">
          <a href="index.html"><img src="assets/mlc-logo.png" alt="ML Collective" /></a>
          <span class="x">×</span>
          <a href="https://deeplearningindaba.com" target="_blank" rel="noopener"><img src="assets/indaba-logo.png" alt="Deep Learning Indaba" class="indaba" /></a>
          <span class="meta-mini">Indaba 2026</span>
        </div>
        <a href="mailto:contact@mlcollective.org" class="masthead-contact" style="font-family:var(--font-mono);font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">Contact →</a>
      </div>
    </header>
    <nav class="primary"><ul>${navItems}</ul></nav>
  `;
}

function renderFooter() {
  document.getElementById("footer").innerHTML = `
    <section class="cta">
      <div class="cta-inner">
        <div class="cta-left">
          <h2>Join <em>ML Collective</em> to get started with your research career.</h2>
          <a href="https://mlcollective.org" class="btn" target="_blank" rel="noopener">Join the community <span class="arrow">→</span></a>
        </div>
        <div class="cta-right">
          <p class="cta-social-label">Follow us on our socials</p>
          <div class="cta-socials">
            <a href="https://x.com/ml_collective" target="_blank" rel="noopener" aria-label="X (Twitter)">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/ml-collective" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    <footer class="site">
      <div class="colophon">
        <span>Whose Intelligence? · A workshop · Deep Learning Indaba 2026</span>
        <span>Hosted by ML Collective</span>
      </div>
    </footer>
  `;
}
