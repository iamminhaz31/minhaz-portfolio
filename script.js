const SOCIAL_LINKS = {
  github: "https://github.com/iamminhaz31",
  linkedin: "https://www.linkedin.com/in/minhajul-islam-tanjil/",
  email: "minhajultanjil143@gmail.com"
};

const EDUCATION = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    org: "Green University of Bangladesh",
    period: "2022 – September 2026",
    detail:
      "Completed a degree in Computer Science and Engineering, with academic work in programming, databases, software development, and machine learning. Conducted research on audio-visual deepfake detection."
  }
];

// Check these two. Change them to your real roles if they are not correct.
const EXPERIENCE = [
  {
    role: "Web Development Instructor",
    org: "Coaching Centers (Multiple)",
    period: "2023 – Present",
    detail: "Taught HTML, CSS, JavaScript, and full-stack fundamentals, guiding students through real project builds."
  },
  {
    role: "Freelance Full-Stack Developer",
    org: "Self-employed",
    period: "2022 – Present",
    detail: "Designed and built client websites end-to-end — UI, backend, and deployment."
  }
];

const ACHIEVEMENTS = [
  {
    title: "Top 3 — Integrated Design Project, 2025",
    detail:
      "MoneyBag was recognized among the top three projects in the IDP course at Green University of Bangladesh. Received the award from the Vice-Chancellor and Dean."
  },
  {
    title: "1st Place — Science & Technology Fair, 2017",
    detail:
      "Secured first place in the Mechanical group of the Science Project competition at the Inter-School/College Science & Technology Fair, organized by EUSCIAN Science & Technology Club."
  }
];

/* ============================================================
   Rendering + interaction logic
   ============================================================ */

const SOCIAL_ICONS = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.35 1.08 2.92.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.35 4.68-4.58 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V21h3.38V8.5zM5.25 3a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94zM21 21v-6.87c0-3.28-1.75-4.8-4.08-4.8-1.88 0-2.72 1.03-3.19 1.76V8.5H10.4c.04.9 0 12.5 0 12.5h3.33v-6.98c0-.37.03-.75.14-1.02.3-.75 1-1.53 2.17-1.53 1.53 0 2.14 1.16 2.14 2.87V21H21z"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

function socialHref(key, value){
  return key === "email" ? `mailto:${value}` : value;
}

function renderSocialLinks(){
  document.querySelectorAll('#socialRow, #footerSocial').forEach(row => {
    row.innerHTML = Object.entries(SOCIAL_LINKS)
      .filter(([key]) => SOCIAL_ICONS[key])
      .map(([key, value]) => `
        <a href="${socialHref(key, value)}" class="social-icon" target="${key === 'email' ? '_self' : '_blank'}" rel="noopener" aria-label="${key}">
          ${SOCIAL_ICONS[key]}
        </a>`).join('');
  });
}

function renderProjects(){
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card reveal">
      <div class="browser-frame">
        <div class="browser-bar">
          <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
          <span class="browser-url">${p.url}</span>
        </div>
        <div class="browser-screen">
          <img src="${p.image}" alt="${p.name} website preview" class="project-preview" loading="lazy">
        </div>
      </div>
      <div class="project-info">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <ul class="tag-row">${p.tags.map(t => `<li>${t}</li>`).join('')}</ul>
        <div class="project-links">
          <a href="project.html?id=${p.id}" class="link-arrow">View Details</a>
          <a href="${p.liveLink}" class="link-arrow" target="_blank" rel="noopener">Live Site</a>
          <a href="${p.sourceLink}" class="link-arrow" target="_blank" rel="noopener">Source</a>
        </div>
      </div>
    </article>
  `).join('');
}

function renderTimeline(){
  const track = document.getElementById('timelineTrack');
  if (!track) return;
  const items = [
    ...EDUCATION.map(e => ({ type: 'education', title: e.degree, org: e.org, period: e.period, detail: e.detail })),
    ...EXPERIENCE.map(e => ({ type: 'experience', title: e.role, org: e.org, period: e.period, detail: e.detail }))
  ];
  track.innerHTML = items.map(item => `
    <div class="timeline-item type-${item.type}">
      <span class="timeline-type">${item.type === 'education' ? 'Education' : 'Experience'}</span>
      <h4>${item.title}</h4>
      <p class="timeline-org">${item.org}</p>
      <span class="timeline-period">${item.period}</span>
      <p class="timeline-detail">${item.detail}</p>
    </div>
  `).join('');
}

const TROPHY_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Z" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 5H4a1 1 0 0 0-1 1c0 2.5 1.5 4.3 4 4.8M17 5h3a1 1 0 0 1 1 1c0 2.5-1.5 4.3-4 4.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function renderAchievements(){
  const grid = document.getElementById('achievementsGrid');
  if (!grid) return;
  grid.innerHTML = ACHIEVEMENTS.map(a => `
    <div class="achievement-card tilt-card">
      <div class="achievement-icon">${TROPHY_ICON}</div>
      <div>
        <h4>${a.title}</h4>
        <p>${a.detail}</p>
      </div>
    </div>
  `).join('');
}

renderSocialLinks();
renderProjects();
renderTimeline();
renderAchievements();

document.getElementById('year').textContent = new Date().getFullYear();

// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

function closeMobileMenu() {
  navLinks.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navLinks.classList.contains('open')) {
    closeMobileMenu();
    navToggle.focus();
  }
});

window.matchMedia('(min-width: 901px)').addEventListener('change', (event) => {
  if (event.matches) closeMobileMenu();
});

// ===== Scroll progress + navbar shrink =====
const navbar = document.getElementById('navbar');
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = `${(scrollTop / docHeight) * 100}%`;
  navbar.classList.toggle('scrolled', scrollTop > 40);
}, { passive: true });

// ===== Active nav link on scroll =====
const sections = ['top', 'about', 'services', 'projects', 'contact']
  .map(id => document.getElementById(id))
  .filter(Boolean);

const navLinkEls = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinkEls.forEach(link => {
        link.classList.toggle('active', link.dataset.section === entry.target.id);
      });
    }
  });
}, { rootMargin: '-45% 0px -45% 0px' });

sections.forEach(sec => sectionObserver.observe(sec));

// ===== Scroll reveal =====
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function observeReveals() {
  const elements = document.querySelectorAll(".reveal");

  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });

  elements.forEach((element) => {
    const parent = element.parentElement;
    const siblings = parent
      ? Array.from(parent.children).filter((child) => child.classList.contains("reveal"))
      : [];
    const index = Math.max(0, siblings.indexOf(element));
    element.style.setProperty("--reveal-delay", `${Math.min(index, 3) * 80}ms`);
    revealObserver.observe(element);
  });
}

observeReveals();

// ===== Skill bar fill on scroll =====
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('filled');
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.bar').forEach(el => barObserver.observe(el));

// ===== Timeline dot pulse on scroll =====
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      timelineObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('.timeline-item').forEach(el => timelineObserver.observe(el));

// ===== 3D tilt effect =====
function addTilt(el, strength = 10){
  if (reducedMotion.matches) return;
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'perspective(600px) rotateY(0) rotateX(0)';
  });
}
const photoTilt = document.getElementById('photoTilt');
if (photoTilt) addTilt(photoTilt, 8);
document.querySelectorAll('.tilt-card').forEach(card => addTilt(card, 6));

// ===== Stat count-up on scroll =====
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const duration = 1400;
    const start = performance.now();

    function tick(now){
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    statObserver.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-number').forEach(el => statObserver.observe(el));

// ===== Hero glow follows cursor =====
const hero = document.querySelector('.hero');
const heroGlow = document.getElementById('heroGlow');
if (hero && heroGlow && !reducedMotion.matches) {
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    heroGlow.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    heroGlow.style.setProperty('--my', `${e.clientY - rect.top}px`);
  });
}

// ===== Magnetic buttons =====
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.3}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

// ===== Terminal typewriter =====
const typewriterEl = document.getElementById('typewriter');
const CODE_LINES = [
  "const developer = {",
  "  name: 'Minhajul Islam Tanjil',",
  "  role: 'Full-Stack Developer',",
  "  stack: ['React', 'Next.js', 'TypeScript'],",
  "  available: true",
  "};"
];

async function typeTerminal(){
  if (!typewriterEl) return;
  if (reducedMotion.matches) {
    typewriterEl.textContent = CODE_LINES.join('\n');
    return;
  }
  for (let l = 0; l < CODE_LINES.length; l++) {
    const before = CODE_LINES.slice(0, l).join('\n') + (l > 0 ? '\n' : '');
    for (let i = 0; i <= CODE_LINES[l].length; i++) {
      typewriterEl.textContent = before + CODE_LINES[l].slice(0, i);
      await new Promise(r => setTimeout(r, 18));
    }
  }
}
typeTerminal();

// ===== Contact form (Formspree) =====
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const submitBtn = form.querySelector('.form-submit');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    status.textContent = 'Please fill in every field before sending.';
    status.style.color = 'var(--danger)';
    return;
  }

  const name = document.getElementById('name').value.trim();
  const originalBtnText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  status.textContent = '';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.textContent = `Thanks, ${name.split(' ')[0]}! Your message has been sent — I'll get back to you soon.`;
      status.style.color = 'var(--success)';
      form.reset();
    } else {
      status.textContent = 'Something went wrong sending your message. Please try again or email me directly.';
      status.style.color = 'var(--danger)';
    }
  } catch (err) {
    status.textContent = 'Network error — please check your connection and try again.';
    status.style.color = 'var(--danger)';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  }
});