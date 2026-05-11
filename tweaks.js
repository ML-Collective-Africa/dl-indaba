// Type-pair tweaks. Self-contained; no React, no Babel.
(function () {
  const DEFAULTS = /*EDITMODE-BEGIN*/{
    "typeset": "editorial"
  }/*EDITMODE-END*/;

  const PAIRS = [
    { id: "editorial", label: "Editorial", serif: "Source Serif 4", sans: "Inter", note: "Source Serif 4 + Inter" },
    { id: "journal",   label: "Journal",   serif: "EB Garamond",    sans: "IBM Plex Sans", note: "EB Garamond + IBM Plex" },
    { id: "modern",    label: "Modern",    serif: "Newsreader",      sans: "Inter Tight", note: "Newsreader + Inter Tight" }
  ];

  // Inject all fonts upfront so previews are instant.
  const fontHref = "https://fonts.googleapis.com/css2"
    + "?family=Source+Serif+4:ital,opsz,wght@0,8..60,300..600;1,8..60,400"
    + "&family=Inter:wght@400;500;600"
    + "&family=EB+Garamond:ital,wght@0,400;0,500;1,400"
    + "&family=IBM+Plex+Sans:wght@400;500;600"
    + "&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400"
    + "&family=Inter+Tight:wght@400;500;600"
    + "&family=JetBrains+Mono:wght@400;500"
    + "&display=swap";
  if (!document.querySelector(`link[href="${fontHref}"]`)) {
    const l = document.createElement("link"); l.rel = "stylesheet"; l.href = fontHref;
    document.head.appendChild(l);
  }

  const state = { typeset: localStorage.getItem("ws_typeset") || DEFAULTS.typeset };
  function apply() {
    document.documentElement.setAttribute("data-typeset", state.typeset);
  }
  apply();

  // ---- Tweaks panel ----
  let panel = null;
  function buildPanel() {
    if (panel) return panel;
    panel = document.createElement("div");
    panel.id = "tweaks-panel";
    panel.innerHTML = `
      <style>
        #tweaks-panel {
          position: fixed;
          right: 24px; bottom: 24px;
          width: 280px;
          background: #FFFDF8;
          border: 1px solid #1B1814;
          color: #1B1814;
          font-family: Inter, system-ui, sans-serif;
          font-size: 13px;
          z-index: 200;
          box-shadow: 0 24px 48px -16px rgba(27,24,20,0.18), 0 4px 12px -4px rgba(27,24,20,0.08);
        }
        #tweaks-panel header {
          display: flex; justify-content: space-between; align-items: center;
          padding: 12px 14px;
          border-bottom: 1px solid #D4CDC0;
        }
        #tweaks-panel header .label {
          font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #5A544D;
          display: flex; align-items: center; gap: 8px;
        }
        #tweaks-panel header .label::before {
          content: ""; width: 5px; height: 5px; border-radius: 50%; background: #5B3CB8;
        }
        #tweaks-panel header button {
          background: transparent; border: 0; padding: 4px 6px;
          color: #5A544D; font-size: 14px;
        }
        #tweaks-panel header button:hover { color: #1B1814; }
        #tweaks-panel .body { padding: 14px; }
        #tweaks-panel .body h5 {
          margin: 0 0 8px;
          font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
          color: #5A544D; font-weight: 500;
        }
        #tweaks-panel .opt {
          display: flex; align-items: baseline; justify-content: space-between;
          gap: 12px;
          padding: 10px 12px;
          border: 1px solid #D4CDC0;
          background: #F4EFE6;
          margin-bottom: 6px;
          cursor: pointer;
          transition: border-color .15s, background .15s;
        }
        #tweaks-panel .opt:hover { border-color: #1B1814; }
        #tweaks-panel .opt.active { border-color: #5B3CB8; background: #EFE7FA; }
        #tweaks-panel .opt .name {
          font-family: var(--name-serif, "Source Serif 4"), Georgia, serif;
          font-size: 18px; line-height: 1; letter-spacing: -0.01em;
        }
        #tweaks-panel .opt .meta {
          font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: #5A544D;
          font-family: "JetBrains Mono", ui-monospace, monospace;
        }
      </style>
      <header>
        <span class="label">Tweaks</span>
        <button id="tweaks-close" aria-label="Close">×</button>
      </header>
      <div class="body">
        <h5>Type pairing</h5>
        <div id="tweaks-pairs"></div>
      </div>
    `;
    document.body.appendChild(panel);
    panel.querySelector("#tweaks-close").addEventListener("click", () => {
      hide();
      window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*");
    });
    const wrap = panel.querySelector("#tweaks-pairs");
    PAIRS.forEach(p => {
      const opt = document.createElement("div");
      opt.className = "opt" + (state.typeset === p.id ? " active" : "");
      opt.dataset.id = p.id;
      opt.style.setProperty("--name-serif", p.serif);
      opt.innerHTML = `
        <span class="name" style="font-family:'${p.serif}', Georgia, serif;">${p.label}</span>
        <span class="meta">${p.note}</span>
      `;
      opt.addEventListener("click", () => {
        state.typeset = p.id;
        localStorage.setItem("ws_typeset", p.id);
        apply();
        wrap.querySelectorAll(".opt").forEach(o => o.classList.toggle("active", o.dataset.id === p.id));
        window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { typeset: p.id } }, "*");
      });
      wrap.appendChild(opt);
    });
    return panel;
  }
  function show() { buildPanel().style.display = ""; }
  function hide() { if (panel) panel.style.display = "none"; }

  window.addEventListener("message", (e) => {
    const d = e.data || {};
    if (d.type === "__activate_edit_mode") show();
    if (d.type === "__deactivate_edit_mode") hide();
  });
  window.parent.postMessage({ type: "__edit_mode_available" }, "*");
})();
