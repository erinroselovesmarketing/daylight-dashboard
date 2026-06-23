const lovedOne = {
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
  trueThings: [
    "You are safe.",
    "You are loved.",
    "You are not alone.",
    "Your family is helping.",
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
          <p>A family-owned URL can point straight to the loved one’s page, like ${lovedOne.giftDomain} for ${lovedOne.name}.</p>
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
          <span>${lovedOne.giftDomain}</span>
        </span>
      </div>
      <div>
        <p class="eyebrow">A private family gift</p>
        <h1>Made with love for ${lovedOne.name}</h1>
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
        <h1>Hello, ${lovedOne.name}</h1>
      </div>
      <p class="side-note">
        A page from your daughter, made to bring comfort, reminders, and steady love.
      </p>
    </aside>

    <section class="companion-main">
      <div class="daily-layout">
        <header class="welcome-band">
          <h2>Good morning, ${lovedOne.name}</h2>
          <span class="date-pill">${todayLabel()}</span>
        </header>

        <div class="daily-grid">
          <article class="daily-card">
            <p class="tiny-label">Today</p>
            <h3>${lovedOne.locationLine}</h3>
            <p>${lovedOne.dailyNote}</p>
          </article>

          <article class="daily-card reassurance-card">
            <p class="tiny-label">Things that are true</p>
            <h3>You do not need to worry about this today</h3>
            <ul>
              ${lovedOne.trueThings.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </article>

          <article class="daily-card">
            <p class="tiny-label">Memory</p>
            <div class="memory-photo" role="img" aria-label="Warm abstract sunlight memory image"></div>
            <p>${lovedOne.memory}</p>
          </article>

          <article class="daily-card">
            <p class="tiny-label">Already handled</p>
            <h3>This is taken care of</h3>
            <ul>
              ${lovedOne.handledItems.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </article>

          <article class="daily-card">
            <p class="tiny-label">Family check-ins</p>
            <h3>Who has checked in recently</h3>
            <ul>
              ${lovedOne.checkIns.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </article>

          <article class="daily-card">
            <p class="tiny-label">Simple plan</p>
            <h3>Three gentle things</h3>
            <ul>
              ${lovedOne.focusItems.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </article>

          <article class="daily-card">
            <p class="tiny-label">Coming up</p>
            <h3>What is next</h3>
            <ul>
              ${lovedOne.upcoming.map((item) => `<li>${item}</li>`).join("")}
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
