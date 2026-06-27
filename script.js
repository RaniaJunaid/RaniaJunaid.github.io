// ============================================================
//  SCRIPT.JS — Interactivity, rendering, animations
//  All content is driven by data.js — don't edit this file
//  unless you're changing functionality, not content.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  const d = portfolioData;

  // ── Populate personal info ──────────────────────────────
  document.title = `${d.personal.name} — Portfolio`;
  document.getElementById('heroName').textContent      = d.personal.name;
  document.getElementById('heroTagline').textContent   = d.personal.tagline;
  document.getElementById('footerName').textContent    = d.personal.name;
  document.getElementById('footerYear').textContent    = new Date().getFullYear();
  document.getElementById('emailDisplay').textContent  = d.personal.email;

  // CV links
  const cvLinks = [
    document.getElementById('cvNavBtn'),
    document.getElementById('aboutCvBtn'),
    document.getElementById('cvMobileBtn'),
  ];
  cvLinks.forEach(el => { if (el) el.href = d.personal.cvLink; });

  // Contact links
  document.getElementById('emailLink').href    = `mailto:${d.personal.email}`;
  document.getElementById('githubLink').href   = d.personal.github;
  document.getElementById('linkedinLink').href = d.personal.linkedin;
  document.getElementById('leetcodeLink').href = d.personal.leetcode;


  // ── Render Skills ───────────────────────────────────────
  const skillsGrid = document.getElementById('skillsGrid');

  function renderSkills(filter) {
    skillsGrid.innerHTML = '';
    d.skills.forEach(skill => {
      const el = document.createElement('div');
      el.className = 'skill-tag reveal';
      el.textContent = skill.name;
      if (filter !== 'All' && skill.category !== filter) {
        el.classList.add('hidden');
      }
      skillsGrid.appendChild(el);
    });
    triggerReveal();
  }

  renderSkills('All');

  document.getElementById('skillsFilter').addEventListener('click', e => {
    if (!e.target.classList.contains('filter-btn')) return;
    document.querySelectorAll('#skillsFilter .filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    renderSkills(e.target.dataset.filter);
  });

  // ── Render Projects ─────────────────────────────────────
  const projectsGrid = document.getElementById('projectsGrid');

  function renderProjects(filter) {
    projectsGrid.innerHTML = '';
    d.projects.forEach(p => {
      if (filter !== 'All' && p.category !== filter) return;

      const card = document.createElement('div');
      card.className = 'project-card reveal';

      card.innerHTML = `
        <div class="project-header">
          <div class="project-title">${p.title}</div>
          <div class="project-category-badge">${p.category}</div>
        </div>
        <p class="project-desc">${p.description}</p>
        <div class="project-tech">
          ${p.tech.map(t => `<span class="tech-chip">${t}</span>`).join('')}
        </div>
        <a class="project-github" href="${p.github}" target="_blank" rel="noopener">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
            0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7
            3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236
            1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332
            -5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176
            0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138
            3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176
            .765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81
            1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57
            C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
          </svg>
          View on GitHub
        </a>
      `;
      projectsGrid.appendChild(card);
    });
    triggerReveal();
  }

  renderProjects('All');

  document.getElementById('projectFilter').addEventListener('click', e => {
    if (!e.target.classList.contains('filter-btn')) return;
    document.querySelectorAll('#projectFilter .filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    renderProjects(e.target.dataset.filter);
  });

  // ── Scroll Reveal ───────────────────────────────────────
  function triggerReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }

  triggerReveal();

  // ── Active nav on scroll ────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const navbar   = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    // Scrolled state
    navbar.classList.toggle('scrolled', window.scrollY > 20);

    // Active link
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });

  // ── Theme Toggle ────────────────────────────────────────
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon   = themeToggle.querySelector('.theme-icon');
  const savedTheme  = localStorage.getItem('portfolio-theme') || 'dark';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeIcon.textContent = theme === 'dark' ? '☀' : '☾';
    localStorage.setItem('portfolio-theme', theme);
  }

  applyTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });

  // ── Mobile Menu ─────────────────────────────────────────
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  // ── Stagger reveal on load ──────────────────────────────
  document.querySelectorAll('#hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 200 + i * 130);
  });
});