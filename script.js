document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav');
  const overlay = document.getElementById('navOverlay');

  function openMenu() {
    hamburger.classList.add('open');
    nav.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  // スクロール後にスティッキーCTAを表示
  const stickyCta = document.querySelector('.sticky-cta');
  const fvHero = document.querySelector('.fv-hero');
  if (stickyCta && fvHero) {
    const showCta = () => {
      const fvBottom = fvHero.getBoundingClientRect().bottom;
      if (fvBottom < 0) {
        stickyCta.classList.add('visible');
      } else {
        stickyCta.classList.remove('visible');
      }
    };
    window.addEventListener('scroll', showCta, { passive: true });
  }

  // FAQアコーディオン（全ページ共通）
  const faqStyle = document.createElement('style');
  faqStyle.textContent = '.faq-q{cursor:pointer;user-select:none;}.faq-q::after{content:"+";float:right;font-weight:300;font-size:1.15rem;color:var(--text-light);margin-left:8px;transition:transform .2s;}.faq-q.faq-q-open::after{content:"−";}';
  document.head.appendChild(faqStyle);

  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if (!q || !a) return;
    a.hidden = true;
    q.addEventListener('click', () => {
      const isOpen = !a.hidden;
      a.hidden = isOpen;
      q.classList.toggle('faq-q-open', !isOpen);
    });
  });
});
