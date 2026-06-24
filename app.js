const defaultLovedOne = {
  name: "Mary",
  pageName: "Mary's Daily Companion",
  giftDomain: "MyDaughterLovesMe.com",
  productDomain: "DaylightDashboard.com",
  pin: "mary",
  locationLine: "You are home with Richard.",
  dailyNote:
    "Everything important is okay today. Your family is helping, Richard is nearby, and you do not need to keep track of everything by yourself.",
  memory:
    "Today we are remembering the way you made ordinary days feel warm: coffee on, music playing, and everyone somehow feeling cared for.",
  focusItems: [
    "Drink some water and take your time.",
    "Look at one favorite photo or message.",
    "Let someone help with one small thing today.",
  ],
  handledItems: [
    "The house is okay.",
    "Groceries and daily needs are being watched over.",
    "Your family knows how to reach you.",
  ],
  checkIns: [
    "Erin checked in recently and loves you very much.",
    "Richard is nearby and helping with today.",
  ],
  upcoming: [
    "Family will keep you posted about plans.",
    "You do not need to remember every detail right now.",
  ],
  homeSnapshot: [
    "There is food in the house.",
    "Richard and family are helping keep an eye on what is needed.",
    "You do not need to solve groceries by yourself today.",
  ],
  whereThingsAre: [
    "Your phone is the best place to check for family messages.",
    "Important household things are being watched over by family.",
    "If something feels hard to find, it is okay to ask Richard or Erin.",
  ],
  trueThings: [
    "You are safe.",
    "You are loved.",
    "You are not alone.",
    "Your family is helping.",
  ],
  comfortMessage:
    "Take a slow breath. You are safe at home. Richard is nearby, Erin loves you, and everything important is okay today.",
};

const app = document.querySelector("#app");
const storageKey = "daylight-dashboard-mary";
let lovedOne = loadLovedOne();

function cloneDefaultContent() {
  return JSON.parse(JSON.stringify(defaultLovedOne));
}

function loadLovedOne() {
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) {
      return cloneDefaultContent();
    }
    return { ...cloneDefaultContent(), ...JSON.parse(saved) };
  } catch {
    return cloneDefaultContent();
  }
}

function saveLovedOne(nextContent) {
  lovedOne = { ...cloneDefaultContent(), ...nextContent };
  window.localStorage.setItem(storageKey, JSON.stringify(lovedOne));
}

function resetLovedOne() {
  lovedOne = cloneDefaultContent();
  window.localStorage.removeItem(storageKey);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderList(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function listToTextarea(items) {
  return items.join("\n");
}

function textareaToList(value) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function isGiftDomain() {
  const host = window.location.hostname.toLowerCase();
  return host.includes("mydaughterlovesme") || window.location.hash === "#mary";
}

function todayLabel() {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());
}

function renderTopbar() {
  return `
    <header class="topbar">
      <a class="brand-lockup" href="./" aria-label="Daylight Dashboard home">
        <span class="mark">D</span>
        <span class="brand-text">
          <strong>Daylight Dashboard</strong>
          <span>Private daily companion pages</span>
        </span>
      </a>
      <nav class="top-actions" aria-label="Primary">
        <a class="button secondary" href="#mary">Mary demo</a>
        <a class="button secondary" href="#admin">Admin</a>
        <a class="button" href="mailto:hello@daylightdashboard.com">Start setup</a>
      </nav>
    </header>
  `;
}

function renderProductHome() {
  app.className = "app-shell";
  app.innerHTML = `
    ${renderTopbar()}
    <section class="home">
      <div class="product-grid">
        <div>
          <p class="eyebrow">For families caring across distance</p>
          <h1>Daylight Dashboard</h1>
          <p class="lead">
            A family companion platform that brings clarity, calm, reassurance,
            memories, and connection into confusing moments.
          </p>
          <div class="hero-actions">
            <a class="button" href="#mary">View Mary’s page</a>
            <a class="button secondary" href="./DOMAIN_SETUP.md">Domain setup notes</a>
          </div>
        </div>

        <aside class="dashboard-preview" aria-label="Daily companion preview">
          <div class="preview-art"></div>
          <div class="preview-body">
            <div class="preview-row">
              <span class="preview-icon">1</span>
              <span class="preview-line"></span>
            </div>
            <div class="preview-row">
              <span class="preview-icon">2</span>
              <span class="preview-line short"></span>
            </div>
            <div class="preview-row">
              <span class="preview-icon">3</span>
              <span class="preview-line"></span>
            </div>
          </div>
        </aside>
      </div>

      <div class="sections">
        <article class="section-panel">
          <h2>One page per loved one</h2>
          <p>Each family can create a calm, personal daily page with the right tone, routines, photos, and reassurance.</p>
        </article>
        <article class="section-panel">
          <h2>Bring your own domain</h2>
          <p>A family-owned URL can point straight to the loved one’s page, like ${escapeHtml(lovedOne.giftDomain)} for ${escapeHtml(lovedOne.name)}.</p>
        </article>
        <article class="section-panel">
          <h2>Built to grow gently</h2>
          <p>This starts with Mary and grows from real use: family updates first, automation later.</p>
        </article>
      </div>
    </section>
  `;
}

function renderGate() {
  app.className = "companion";
  app.innerHTML = `
    <aside class="companion-side">
      <div class="brand-lockup">
        <span class="mark">M</span>
        <span class="brand-text">
          <strong>${lovedOne.pageName}</strong>
          <span>${escapeHtml(lovedOne.giftDomain)}</span>
        </span>
      </div>
      <div>
        <p class="eyebrow">A private family gift</p>
        <h1>Made with love for ${escapeHtml(lovedOne.name)}</h1>
      </div>
      <p class="side-note">
        A calm place for today’s truth, simple reminders, and family love.
      </p>
    </aside>
    <section class="companion-main">
      <form class="private-gate" id="pin-form">
        <p class="eyebrow">Welcome</p>
        <h2>Enter Mary’s family PIN</h2>
        <p>
          This opens Mary’s private family page.
        </p>
        <div class="pin-row">
          <input id="pin" name="pin" type="password" autocomplete="current-password" placeholder="Family PIN" aria-label="Family PIN" />
          <button class="button" type="submit">Open page</button>
        </div>
        <p class="error" id="pin-error" hidden>That PIN did not open the page.</p>
      </form>
    </section>
  `;

  document.querySelector("#pin-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const pin = document.querySelector("#pin").value.trim().toLowerCase();
    if (pin === lovedOne.pin) {
      window.sessionStorage.setItem("daylight-mary-open", "yes");
      renderMaryPage();
      return;
    }
    document.querySelector("#pin-error").hidden = false;
  });
}

function renderMaryPage() {
  app.className = "companion";
  app.innerHTML = `
    <aside class="companion-side">
      <div class="brand-lockup">
        <span class="mark">M</span>
        <span class="brand-text">
          <strong>${lovedOne.pageName}</strong>
          <span>Powered by Daylight Dashboard</span>
        </span>
      </div>
      <div>
        <p class="eyebrow">Today’s light</p>
        <h1>Hello, ${escapeHtml(lovedOne.name)}</h1>
      </div>
      <p class="side-note">
        A page from your daughter, made to bring comfort, reminders, and steady love.
      </p>
      <a class="button comfort-link" href="#comfort">Comfort mode</a>
    </aside>

    <section class="companion-main">
      <div class="daily-layout">
        <header class="welcome-band">
          <h2>Good morning, ${escapeHtml(lovedOne.name)}</h2>
          <span class="date-pill">${todayLabel()}</span>
        </header>

        <div class="daily-grid">
          <article class="daily-card">
            <p class="tiny-label">Today</p>
            <h3>${escapeHtml(lovedOne.locationLine)}</h3>
            <p>${escapeHtml(lovedOne.dailyNote)}</p>
          </article>

          <article class="daily-card reassurance-card">
            <p class="tiny-label">Things that are true</p>
            <h3>You do not need to worry about this today</h3>
            <ul>
              ${renderList(lovedOne.trueThings)}
            </ul>
          </article>

          <article class="daily-card">
            <p class="tiny-label">Memory</p>
            <div class="memory-photo" role="img" aria-label="Warm abstract sunlight memory image"></div>
            <p>${escapeHtml(lovedOne.memory)}</p>
          </article>

          <article class="daily-card">
            <p class="tiny-label">Already handled</p>
            <h3>This is taken care of</h3>
            <ul>
              ${renderList(lovedOne.handledItems)}
            </ul>
          </article>

          <article class="daily-card">
            <p class="tiny-label">Family check-ins</p>
            <h3>Who has checked in recently</h3>
            <ul>
              ${renderList(lovedOne.checkIns)}
            </ul>
          </article>

          <article class="daily-card">
            <p class="tiny-label">Simple plan</p>
            <h3>Three gentle things</h3>
            <ul>
              ${renderList(lovedOne.focusItems)}
            </ul>
          </article>

          <article class="daily-card">
            <p class="tiny-label">Coming up</p>
            <h3>What is next</h3>
            <ul>
              ${renderList(lovedOne.upcoming)}
            </ul>
          </article>

          <article class="daily-card">
            <p class="tiny-label">Home snapshot</p>
            <h3>What is okay at home</h3>
            <ul>
              ${renderList(lovedOne.homeSnapshot)}
            </ul>
          </article>

          <article class="daily-card">
            <p class="tiny-label">Where things are</p>
            <h3>Helpful places</h3>
            <ul>
              ${renderList(lovedOne.whereThingsAre)}
            </ul>
          </article>
        </div>

        <p class="footer-note">
          Your family loves you. Everything important is okay today.
        </p>
      </div>
    </section>
  `;
}

function renderAdminGate() {
  app.className = "app-shell";
  app.innerHTML = `
    ${renderTopbar()}
    <section class="admin-page">
      <form class="private-gate admin-gate" id="admin-pin-form">
        <p class="eyebrow">Family admin</p>
        <h1>Update Mary’s page</h1>
        <p>
          Enter the family PIN to edit today’s calm, Mary-safe dashboard content.
        </p>
        <div class="pin-row">
          <input id="admin-pin" name="pin" type="password" autocomplete="current-password" placeholder="Family PIN" aria-label="Family PIN" />
          <button class="button" type="submit">Open admin</button>
        </div>
        <p class="error" id="admin-pin-error" hidden>That PIN did not open admin.</p>
      </form>
    </section>
  `;

  document.querySelector("#admin-pin-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const pin = document.querySelector("#admin-pin").value.trim().toLowerCase();
    if (pin === lovedOne.pin) {
      window.sessionStorage.setItem("daylight-admin-open", "yes");
      renderAdminPage();
      return;
    }
    document.querySelector("#admin-pin-error").hidden = false;
  });
}

function renderAdminPage(saved = false) {
  app.className = "app-shell";
  app.innerHTML = `
    ${renderTopbar()}
    <section class="admin-page">
      <header class="admin-header">
        <div>
          <p class="eyebrow">Family admin</p>
          <h1>Mary’s daily content</h1>
          <p class="lead">
            Keep language warm, simple, and reassuring. Mary’s view should feel like help, not monitoring.
          </p>
        </div>
        <a class="button secondary" href="#mary">View Mary’s page</a>
      </header>

      <form class="admin-form" id="admin-form">
        ${renderTextInput("name", "Loved one name", lovedOne.name)}
        ${renderTextInput("locationLine", "Where Mary is", lovedOne.locationLine)}
        ${renderTextarea("dailyNote", "Daily reassurance", lovedOne.dailyNote)}
        ${renderTextarea("trueThings", "Things that are true", listToTextarea(lovedOne.trueThings), true)}
        ${renderTextarea("comfortMessage", "Comfort mode message", lovedOne.comfortMessage)}
        ${renderTextarea("handledItems", "Already handled", listToTextarea(lovedOne.handledItems), true)}
        ${renderTextarea("checkIns", "Family check-ins", listToTextarea(lovedOne.checkIns), true)}
        ${renderTextarea("focusItems", "Simple plan", listToTextarea(lovedOne.focusItems), true)}
        ${renderTextarea("upcoming", "Coming up", listToTextarea(lovedOne.upcoming), true)}
        ${renderTextarea("homeSnapshot", "Home / grocery snapshot", listToTextarea(lovedOne.homeSnapshot), true)}
        ${renderTextarea("whereThingsAre", "Where things are", listToTextarea(lovedOne.whereThingsAre), true)}
        ${renderTextarea("memory", "Memory", lovedOne.memory)}

        <div class="admin-actions">
          <button class="button" type="submit">Save updates</button>
          <button class="button secondary" type="button" id="reset-content">Reset defaults</button>
          ${saved ? `<span class="save-note">Saved. Mary’s page is updated in this browser.</span>` : ""}
        </div>
      </form>
    </section>
  `;

  document.querySelector("#admin-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    saveLovedOne({
      name: form.get("name").trim() || defaultLovedOne.name,
      locationLine: form.get("locationLine").trim() || defaultLovedOne.locationLine,
      dailyNote: form.get("dailyNote").trim() || defaultLovedOne.dailyNote,
      memory: form.get("memory").trim() || defaultLovedOne.memory,
      comfortMessage: form.get("comfortMessage").trim() || defaultLovedOne.comfortMessage,
      trueThings: textareaToList(form.get("trueThings")),
      handledItems: textareaToList(form.get("handledItems")),
      checkIns: textareaToList(form.get("checkIns")),
      focusItems: textareaToList(form.get("focusItems")),
      upcoming: textareaToList(form.get("upcoming")),
      homeSnapshot: textareaToList(form.get("homeSnapshot")),
      whereThingsAre: textareaToList(form.get("whereThingsAre")),
    });
    renderAdminPage(true);
  });

  document.querySelector("#reset-content").addEventListener("click", () => {
    resetLovedOne();
    renderAdminPage(true);
  });
}

function renderTextInput(name, label, value) {
  return `
    <label class="field">
      <span>${label}</span>
      <input name="${name}" value="${escapeHtml(value)}" />
    </label>
  `;
}

function renderTextarea(name, label, value, isList = false) {
  return `
    <label class="field">
      <span>${label}${isList ? " <small>one per line</small>" : ""}</span>
      <textarea name="${name}" rows="${isList ? 4 : 5}">${escapeHtml(value)}</textarea>
    </label>
  `;
}

function renderComfortMode() {
  app.className = "comfort-mode";
  app.innerHTML = `
    <section class="comfort-panel">
      <p class="eyebrow">Comfort mode</p>
      <h1>You are safe, ${escapeHtml(lovedOne.name)}</h1>
      <p class="comfort-date">${todayLabel()}</p>
      <p class="comfort-message">${escapeHtml(lovedOne.comfortMessage)}</p>

      <div class="comfort-truths">
        ${lovedOne.trueThings.map((item) => `<p>${escapeHtml(item)}</p>`).join("")}
      </div>

      <div class="comfort-actions">
        <a class="button" href="#mary">Back to today</a>
        <a class="button secondary" href="#admin">Update message</a>
      </div>
    </section>
  `;
}

function route() {
  if (window.location.hash === "#admin") {
    const isOpen = window.sessionStorage.getItem("daylight-admin-open") === "yes";
    if (isOpen) {
      renderAdminPage();
    } else {
      renderAdminGate();
    }
    return;
  }

  if (window.location.hash === "#comfort") {
    renderComfortMode();
    return;
  }

  if (isGiftDomain()) {
    const isOpen = window.sessionStorage.getItem("daylight-mary-open") === "yes";
    if (isOpen) {
      renderMaryPage();
    } else {
      renderGate();
    }
    return;
  }

  renderProductHome();
}

window.addEventListener("hashchange", route);
route();
