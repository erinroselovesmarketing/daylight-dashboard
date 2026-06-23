const lovedOne = {
  name: "Mary",
  pageName: "Mary's Daily Companion",
  giftDomain: "MyDaughterLovesMe.com",
  productDomain: "DaylightDashboard.com",
  pin: "mary",
  dailyNote:
    "Good morning, Mom. This is your gentle place for the day: a little love, a little orientation, and a reminder that you are deeply cherished.",
  memory:
    "Today we are remembering the way you made ordinary days feel warm: coffee on, music playing, and everyone somehow feeling cared for.",
  focusItems: [
    "Drink some water and take your time.",
    "Look at one favorite photo or message.",
    "Let someone help with one small thing today.",
  ],
};

const app = document.querySelector("#app");

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
            A private daily page for someone you love, built around reassurance,
            memories, routines, photos, and simple next steps.
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
          <p>Each family can create a calm, personal daily companion page with its own tone, routines, and memories.</p>
        </article>
        <article class="section-panel">
          <h2>Bring your own domain</h2>
          <p>A family-owned URL can point straight to the loved one’s page, like ${lovedOne.giftDomain} for ${lovedOne.name}.</p>
        </article>
        <article class="section-panel">
          <h2>Built to grow gently</h2>
          <p>This starts as a private gift and can grow into accounts, caregiver tools, photos, and secure family access.</p>
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
          <span>${lovedOne.giftDomain}</span>
        </span>
      </div>
      <div>
        <p class="eyebrow">A private family gift</p>
        <h1>Made with love for ${lovedOne.name}</h1>
      </div>
      <p class="side-note">
        This first version is a gentle private-feeling page. For real privacy,
        the next build should use secure account login.
      </p>
    </aside>
    <section class="companion-main">
      <form class="private-gate" id="pin-form">
        <p class="eyebrow">Welcome</p>
        <h2>Enter Mary’s family PIN</h2>
        <p>
          This keeps the page feeling tucked away while we finish the fuller
          Daylight Dashboard account system.
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
        <h1>Hello, ${lovedOne.name}</h1>
      </div>
      <p class="side-note">
        A page from your daughter, made to bring comfort, reminders, and little sparks of joy.
      </p>
    </aside>

    <section class="companion-main">
      <div class="daily-layout">
        <header class="welcome-band">
          <h2>Your companion for today</h2>
          <span class="date-pill">${todayLabel()}</span>
        </header>

        <div class="daily-grid">
          <article class="daily-card">
            <p class="tiny-label">Morning note</p>
            <h3>Start here</h3>
            <p>${lovedOne.dailyNote}</p>
          </article>

          <article class="daily-card">
            <p class="tiny-label">Memory</p>
            <div class="memory-photo" role="img" aria-label="Warm abstract sunlight memory image"></div>
            <p>${lovedOne.memory}</p>
          </article>

          <article class="daily-card">
            <p class="tiny-label">Gentle reminders</p>
            <h3>Three small things</h3>
            <ul>
              ${lovedOne.focusItems.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </article>

          <article class="daily-card">
            <p class="tiny-label">Family message</p>
            <h3>You are loved</h3>
            <p>
              This page exists because you matter. Someone who loves you wanted
              you to have a place that feels steady, familiar, and yours.
            </p>
          </article>
        </div>

        <p class="footer-note">
          Prototype note: this page is ready for Vercel as a first gift version.
          The next version should move Mary’s content and access controls into a secure backend.
        </p>
      </div>
    </section>
  `;
}

function route() {
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
