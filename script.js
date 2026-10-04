document.querySelectorAll('a[href^="#"]:not(#aboutOpen)').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const aboutOpen = document.querySelector('#aboutOpen');
const aboutModal = document.querySelector('#aboutModal');
const aboutClose = document.querySelector('#aboutClose');

function setAboutModal(open) {
  if (!aboutModal) return;
  aboutModal.classList.toggle('is-open', open);
  aboutModal.setAttribute('aria-hidden', String(!open));
  document.body.style.overflow = open ? 'hidden' : '';
}

aboutOpen?.addEventListener('click', (event) => {
  event.preventDefault();
  setAboutModal(true);
});
aboutClose?.addEventListener('click', () => setAboutModal(false));
aboutModal?.addEventListener('click', (event) => {
  if (event.target === aboutModal) setAboutModal(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setAboutModal(false);
});
