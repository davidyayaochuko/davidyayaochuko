import { archive, essays, products, profile, social, teaching, timeline } from "./content.js";
import { skills } from "./skills.js";

const app = document.querySelector("#app");
const progress = document.querySelector("#progress");
const navToggle = document.querySelector(".nav-toggle");

let writingFilter = "all";
let clockTimer = 0;

const filters = ["All", "Products", "Teaching", "Archive"];

function pathOf() {
  const path = location.pathname.replace(/\/+$/, "") || "/";
  return path;
}

function readingMinutes(essay) {
  const words = essay.body
    .map((block) => (block.p || block.h || "").replace(/<[^>]+>/g, ""))
    .join(" ")
    .trim()
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function lagosNow() {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(new Date());
}

function item(entry) {
  const tags = (entry.tags || [])
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");
  return `
    <article class="item reveal">
      <div class="num">${entry.num}</div>
      <div>
        <div class="year">${entry.year}</div>
        <h3>${entry.name}</h3>
        <p>${entry.body}</p>
        ${tags ? `<div class="tags">${tags}</div>` : ""}
        <p class="visit"><a href="${entry.href}" target="_blank" rel="noreferrer">${entry.label}</a></p>
      </div>
    </article>`;
}

function piece(entry, href) {
  const external = href.startsWith("http");
  return `
    <a class="piece reveal" href="${href}" ${external ? 'target="_blank" rel="noreferrer"' : ""}>
      <div>
        <h3>${entry.title}</h3>
        <p>${entry.dek}</p>
      </div>
      <div class="piece-meta">
        <span>${entry.date}</span>
        ${entry.source ? `<span>${entry.source}</span>` : ""}
      </div>
    </a>`;
}

function home() {
  return {
    title: "David Ochuko Yaya — CTO & technical co-founder",
    html: `
      <div class="wrap wide">
        <header class="hero">
          <div>
            <p class="kicker">Lagos · <time data-clock>${lagosNow()}</time> · ${profile.role}</p>
            <h1>I build hard products and keep them standing.</h1>
            <p class="lede">
              I own technology direction and engineering delivery at Netan Technologies.
              The same judgment shows up in three products people can use — statement intelligence,
              a trust-first marketplace, and market-to-doorstep commerce — and in the rooms where I teach cloud and DevOps.
            </p>
            <div class="meta-row">
              <span>Netan Technologies</span>
              <span>Spendprofile · Bidoro · Ojarun</span>
              <span>Open to Founding CTO / Head of Engineering</span>
            </div>
          </div>
          <figure class="portrait">
            <img src="/portrait.jpg?v=2" alt="David Ochuko Yaya" width="1024" height="965" />
            <figcaption>David Ochuko Yaya · Lagos</figcaption>
          </figure>
        </header>

        <section class="block skills-block" id="skills">
          <p class="kicker">skills.md</p>
          <h2>The stack I actually run.</h2>
          <p class="sub">Clouds, platforms, and the unglamorous tools that keep a product standing.</p>
          <div class="skills" aria-label="Tools and platforms">
            ${skills.map((skill) => `
              <div class="skill reveal">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="${skill.path}"/></svg>
                <span>${skill.name}</span>
              </div>`).join("")}
          </div>
        </section>

        <section class="roles" aria-label="How I work">
          <article class="role reveal">
            <div class="num">01</div>
            <h2>The engineer</h2>
            <p>Nine years from frontline IT into multi-cloud platforms. Kubernetes, Terraform, and the unglamorous work of uptime, cost, and least privilege.</p>
          </article>
          <article class="role reveal">
            <div class="num">02</div>
            <h2>The founder</h2>
            <p>Technical co-founder on products with a real constraint: honest numbers, safe trade, or a market run you should not have to make yourself.</p>
          </article>
          <article class="role reveal">
            <div class="num">03</div>
            <h2>The mentor</h2>
            <p>I teach the path I walked. Cloud and DevOps cohorts at Thrive Africa and MEQuest, and a community I built so people can get unstuck together.</p>
          </article>
        </section>

        <section class="block" id="work">
          <h2>Three products in market</h2>
          <p class="sub">Each one is a constraint, not a feature list.</p>
          ${products.map(item).join("")}
        </section>

        <section class="block" id="teaching">
          <h2>Where I teach</h2>
          <p class="sub">Mentorship is part of the job, not a side hobby.</p>
          ${teaching.map(item).join("")}
        </section>

        <section class="block" id="notes">
          <h2>Selected writing</h2>
          <p class="sub">Notes on trust, platforms, and the decisions behind the products.</p>
          <div class="writing-list">
            ${essays.map((essay) => piece({ ...essay, dek: essay.homeDek }, `/writing/${essay.slug}`)).join("")}
          </div>
          <p class="more"><a href="/writing">All writing</a></p>
        </section>

        <section class="block" id="path">
          <h2>The path</h2>
          <p class="sub">Operator first. Then the platforms. Then the products.</p>
          <ul class="timeline">
            ${timeline.map((row) => `
              <li class="reveal">
                <div class="year">${row.year}</div>
                <div>
                  <strong>${row.title}</strong>
                  <div class="where">${row.where}</div>
                </div>
              </li>`).join("")}
          </ul>
        </section>

        <section class="talk" id="talk">
          <h2>Let’s talk.</h2>
          <p>I’m the CTO at Netan, and I still sit with students who are opening a cloud console for the first time. If you are building something that has to be trusted — or you want a founding technology lead — write to me.</p>
          <p>
            <a href="mailto:${profile.email}">${profile.email}</a>
            <button class="copy" type="button" data-copy="${profile.email}">Copy</button>
            <br />${profile.place} · remote-friendly
          </p>
          <div class="links">
            ${social.map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
          </div>
        </section>
      </div>`,
  };
}

function writingIndex() {
  const local = essays.filter((essay) => writingFilter === "all" || writingFilter === essay.topic.toLowerCase());
  const saved = archive.filter((essay) => writingFilter === "all" || writingFilter === "archive");
  const rows = [
    ...local.map((essay) => piece(essay, `/writing/${essay.slug}`)),
    ...saved.map((essay) => piece(essay, essay.href)),
  ].join("");

  return {
    title: "Writing — David Ochuko Yaya",
    html: `
      <div class="wrap">
        <p class="kicker">Writing</p>
        <h1>Notes on trust, platforms, and shipping.</h1>
        <p class="lede">Longer pieces on the products I am building and the habits I teach. Shorter DevOps essays still live on Medium.</p>
        <div class="filters" role="tablist" aria-label="Filter writing">
          ${filters.map((name) => {
            const id = name.toLowerCase();
            const selected = (writingFilter === "all" ? "all" : writingFilter) === id;
            return `<button type="button" role="tab" data-filter="${id}" aria-selected="${selected}">${name}</button>`;
          }).join("")}
        </div>
        <div class="writing-list">
          ${rows || `<p class="empty">Nothing in this shelf yet.</p>`}
        </div>
      </div>`,
  };
}

function essayPage(essay) {
  const index = essays.findIndex((item) => item.slug === essay.slug);
  const next = essays[(index + 1) % essays.length];
  return {
    title: `${essay.title} — David Ochuko Yaya`,
    html: `
      <article class="essay">
        <p class="kicker">${essay.kicker}</p>
        <h1>${essay.title}</h1>
        <p class="by">${essay.date} · ${profile.name} · ${readingMinutes(essay)} min read</p>
        ${essay.body.map((block) => block.h ? `<h2>${block.h}</h2>` : `<p>${block.p}</p>`).join("")}
        <div class="essay-nav">
          <a href="/writing">All writing</a>
          <a href="/writing/${next.slug}">Next · ${next.title}</a>
        </div>
      </article>`,
  };
}

function missing() {
  return {
    title: "Not found — David Ochuko Yaya",
    html: `
      <div class="wrap">
        <p class="kicker">404</p>
        <h1>That page is not here.</h1>
        <p class="lede"><a href="/">Back home</a> · <a href="/writing">Writing</a></p>
      </div>`,
  };
}

function viewFor(path) {
  if (path === "/") return home();
  if (path === "/writing") return writingIndex();
  const essay = essays.find((item) => path === `/writing/${item.slug}`);
  if (essay) return essayPage(essay);
  return missing();
}

function setNav(path) {
  const hash = location.hash.replace("#", "");
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const key = link.dataset.nav;
    let current = false;
    if (path.startsWith("/writing")) current = key === "writing";
    else if (path === "/" && (hash === "work" || hash === "teaching" || hash === "skills" || hash === "talk")) current = key === hash;
    if (current) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function spy() {
  if (pathOf() !== "/") return;
  const sections = ["skills", "work", "teaching", "talk"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const line = 120;
  let active = "";
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= line) active = section.id;
  }
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const key = link.dataset.nav;
    if (key === "writing") {
      link.removeAttribute("aria-current");
      return;
    }
    if (key === active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function reveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((node) => node.classList.add("in"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.12 });
  nodes.forEach((node) => {
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) node.classList.add("in");
    else observer.observe(node);
  });
}

function render({ scroll = true } = {}) {
  const path = pathOf();
  const view = viewFor(path);
  document.title = view.title;
  app.innerHTML = view.html;
  app.dataset.view = path.startsWith("/writing/") ? "essay" : path === "/writing" ? "writing" : "home";
  setNav(path);
  closeMenu();
  const target = path === "/" ? document.querySelector(location.hash) : null;
  if (target) {
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "instant", block: "start" });
      spy();
    });
  } else if (scroll) {
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  reveal();
  tickProgress();
}

function go(url, { replace = false } = {}) {
  const next = new URL(url, location.origin);
  const same = next.pathname === location.pathname && next.hash === location.hash;
  if (same && next.hash) {
    document.querySelector(next.hash)?.scrollIntoView({ behavior: "instant", block: "start" });
    spy();
    return;
  }
  if (replace) history.replaceState({}, "", next);
  else history.pushState({}, "", next);
  render();
}

function closeMenu() {
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.textContent = "Menu";
}

function tickProgress() {
  const essay = app.dataset.view === "essay";
  progress.hidden = !essay;
  if (!essay) {
    progress.style.width = "0";
    return;
  }
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = height > 0 ? window.scrollY / height : 0;
  progress.style.width = `${Math.min(1, Math.max(0, ratio)) * 100}%`;
}

document.addEventListener("click", (event) => {
  const filter = event.target.closest("[data-filter]");
  if (filter) {
    writingFilter = filter.dataset.filter;
    render({ scroll: false });
    document.querySelector(`[data-filter="${writingFilter}"]`)?.focus();
    return;
  }

  const copy = event.target.closest("[data-copy]");
  if (copy) {
    const value = copy.dataset.copy;
    navigator.clipboard.writeText(value).then(() => {
      const previous = copy.textContent;
      copy.textContent = "Copied";
      window.setTimeout(() => {
        copy.textContent = previous;
      }, 1600);
    }).catch(() => {
      copy.textContent = value;
    });
    return;
  }

  const link = event.target.closest("a[href]");
  if (!link) return;
  const href = link.getAttribute("href");
  if (!href || href.startsWith("http") || href.startsWith("mailto:") || link.target === "_blank") return;
  event.preventDefault();
  go(href);
});

navToggle.addEventListener("click", () => {
  const open = !document.body.classList.contains("nav-open");
  document.body.classList.toggle("nav-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.textContent = open ? "Close" : "Menu";
});

window.addEventListener("popstate", () => render());
window.addEventListener("scroll", () => {
  spy();
  tickProgress();
}, { passive: true });

history.scrollRestoration = "manual";
render();
clockTimer = window.setInterval(() => {
  const clock = document.querySelector("[data-clock]");
  if (clock) clock.textContent = lagosNow();
}, 30000);
