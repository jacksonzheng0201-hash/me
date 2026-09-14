const body = document.body;
const menuToggle = document.getElementById('menu-toggle');
const siteNav = document.getElementById('site-nav');
const debugToggle = document.getElementById('debug-toggle');
const debugClose = document.getElementById('debug-close');
const debugPanel = document.getElementById('debug-panel');
const debugPanelGrid = document.getElementById('debug-panel-grid');
const currentYear = document.getElementById('current-year');
const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
const heroVisual = document.querySelector('.hero-visual');
const revealItems = document.querySelectorAll('.reveal');
const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');
const emptyState = document.getElementById('empty-state');

body.classList.add('js-ready');
currentYear.textContent = new Date().getFullYear();

function closeMenu() {
  siteNav.classList.remove('is-open');
  menuToggle.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
  body.classList.remove('menu-open');
}

menuToggle.addEventListener('click', () => {
  const open = !siteNav.classList.contains('is-open');
  siteNav.classList.toggle('is-open', open);
  menuToggle.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  body.classList.toggle('menu-open', open);
});

siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

function updateDebugPanel() {
  const currentSection = window.location.hash || '#top';
  const projectCount = document.querySelectorAll('.project-card').length;
  const externalLinks = document.querySelectorAll('a[target="_blank"]').length;
  debugPanelGrid.innerHTML = `
    <span>PAGE</span><strong>JACKSON / PORTFOLIO</strong>
    <span>STATUS</span><strong>READY</strong>
    <span>VIEWPORT</span><strong>${window.innerWidth} x ${window.innerHeight}</strong>
    <span>SECTION</span><strong>${currentSection}</strong>
    <span>PROJECTS</span><strong>${projectCount}</strong>
    <span>EXTERNAL LINKS</span><strong>${externalLinks}</strong>
    <span>LOADED</span><strong>${Math.round(performance.now())} MS</strong>
  `;
}

function setDebug(open) {
  debugPanel.classList.toggle('is-hidden', !open);
  debugToggle.setAttribute('aria-expanded', String(open));
  if (open) updateDebugPanel();
}

debugToggle.addEventListener('click', () => {
  setDebug(debugPanel.classList.contains('is-hidden'));
});
debugClose.addEventListener('click', () => setDebug(false));
window.addEventListener('resize', () => {
  if (!debugPanel.classList.contains('is-hidden')) updateDebugPanel();
});
window.addEventListener('hashchange', () => {
  if (!debugPanel.classList.contains('is-hidden')) updateDebugPanel();
});
window.addEventListener('keydown', (event) => {
  if (event.code === 'KeyW') {
    event.preventDefault();
    setDebug(debugPanel.classList.contains('is-hidden'));
  }
  if (event.code === 'Escape') setDebug(false);
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: .12 });

revealItems.forEach((item) => revealObserver.observe(item));

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    let visible = 0;
    projectCards.forEach((card) => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-filtered-out', !show);
      if (show) visible += 1;
    });
    emptyState.classList.toggle('is-visible', visible === 0);
  });
});

if (heroVisual && window.matchMedia('(pointer: fine)').matches) {
  heroVisual.addEventListener('pointermove', (event) => {
    const bounds = heroVisual.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width * 2 - 1;
    const y = (event.clientY - bounds.top) / bounds.height * 2 - 1;
    heroVisual.style.setProperty('--pointer-x', x.toFixed(2));
    heroVisual.style.setProperty('--pointer-y', y.toFixed(2));
  });
  heroVisual.addEventListener('pointerleave', () => {
    heroVisual.style.setProperty('--pointer-x', '0');
    heroVisual.style.setProperty('--pointer-y', '0');
  });
}

copyButton.addEventListener('click', async () => {
  const email = copyButton.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = 'Copied';
  } catch {
    copyStatus.textContent = email;
  }
  window.setTimeout(() => { copyStatus.textContent = ''; }, 2200);
});

const sectionLinks = [...siteNav.querySelectorAll('a')];
const sections = sectionLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
const activeSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    sectionLinks.forEach((link) => link.classList.toggle('is-current', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
sections.forEach((section) => activeSectionObserver.observe(section));
