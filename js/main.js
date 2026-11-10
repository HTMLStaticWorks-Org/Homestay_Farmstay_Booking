/**
 * SYLVAN - Luxury Countryside & Farmstay Booking Platform
 * Core Framework & Shared Interactivity
 */

// Toast notification helper
const SylvanToast = {
  show: function(title, message, type = 'success') {
    let container = document.getElementById('sylvan-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'sylvan-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'sylvan-toast';
    
    let iconName = 'check-circle';
    let iconColor = 'text-emerald-500';
    if (type === 'error') {
      iconName = 'alert-triangle';
      iconColor = 'text-rose-500';
    } else if (type === 'info') {
      iconName = 'info';
      iconColor = 'text-amber-500';
    }

    toast.innerHTML = `
      <div class="mt-0.5 ${iconColor}">
        <i data-lucide="${iconName}" class="w-5 h-5"></i>
      </div>
      <div class="flex-1">
        <h4 class="font-semibold text-sm">${title}</h4>
        <p class="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">${message}</p>
      </div>
      <button class="text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors" onclick="this.parentElement.remove()">
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>
    `;

    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(12px)';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
};

// Theme Toggle (Light / Dark)
const SylvanTheme = {
  init: function() {
    const savedTheme = localStorage.getItem('sylvan_theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    this.apply(savedTheme);

    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        const newTheme = isDark ? 'light' : 'dark';
        this.apply(newTheme);
        SylvanToast.show(
          newTheme === 'dark' ? 'Dark Mode Activated' : 'Light Mode Activated',
          `Interface set to ${newTheme} nature palette.`,
          'info'
        );
      });
    });
  },

  apply: function(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('sylvan_theme', 'dark');
      this.updateIcons(true);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('sylvan_theme', 'light');
      this.updateIcons(false);
    }
  },

  updateIcons: function(isDark) {
    document.querySelectorAll('.theme-icon-sun').forEach(el => {
      el.style.display = isDark ? 'block' : 'none';
    });
    document.querySelectorAll('.theme-icon-moon').forEach(el => {
      el.style.display = isDark ? 'none' : 'block';
    });
  }
};

// RTL Layout Toggle
const SylvanRTL = {
  init: function() {
    const savedRTL = localStorage.getItem('sylvan_rtl') === 'true';
    this.apply(savedRTL);

    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
        const newRTL = !isRTL;
        this.apply(newRTL);
        SylvanToast.show(
          newRTL ? 'RTL Mode Enabled' : 'LTR Mode Enabled',
          `Layout adjusted to ${newRTL ? 'Right-to-Left' : 'Left-to-Right'} reading.`,
          'info'
        );
      });
    });
  },

  apply: function(isRTL) {
    if (isRTL) {
      document.documentElement.setAttribute('dir', 'rtl');
      localStorage.setItem('sylvan_rtl', 'true');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      localStorage.setItem('sylvan_rtl', 'false');
    }
    document.querySelectorAll('.rtl-status-indicator').forEach(el => {
      el.textContent = isRTL ? 'LTR' : 'RTL';
    });
    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      btn.setAttribute('title', isRTL ? 'Switch to Left-to-Right (LTR)' : 'Switch to Right-to-Left (RTL)');
      btn.setAttribute('aria-label', isRTL ? 'Switch to Left-to-Right (LTR)' : 'Switch to Right-to-Left (RTL)');
      if (isRTL) {
        btn.classList.add('text-emerald-700', 'dark:text-emerald-400', 'bg-emerald-50', 'dark:bg-emerald-950/60');
      } else {
        btn.classList.remove('text-emerald-700', 'dark:text-emerald-400', 'bg-emerald-50', 'dark:bg-emerald-950/60');
      }
    });
  }
};

// Sticky Header & Mobile Drawer
const SylvanNavigation = {
  init: function() {
    const header = document.querySelector('header');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
          header.classList.add('shadow-md');
          header.classList.add('bg-cream/95');
          header.classList.add('dark:bg-[#0F1714]/95');
        } else {
          header.classList.remove('shadow-md');
        }
      });
    }

    // Mobile Hamburger
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerClose = document.getElementById('mobile-drawer-close');

    const closeDrawer = () => {
      const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
      mobileDrawer?.querySelector('.drawer-content')?.classList.add(isRtl ? '-translate-x-full' : 'translate-x-full');
      document.body.classList.remove('drawer-open', 'overflow-hidden');
      setTimeout(() => mobileDrawer?.classList.add('hidden'), 300);
    };

    if (menuToggle && mobileDrawer) {
      menuToggle.addEventListener('click', () => {
        mobileDrawer.classList.remove('hidden');
        document.body.classList.add('drawer-open', 'overflow-hidden');
        if (window.lucide) lucide.createIcons();
        setTimeout(() => {
          mobileDrawer.querySelector('.drawer-content')?.classList.remove('translate-x-full', '-translate-x-full');
        }, 10);
      });
    }

    if (drawerClose && mobileDrawer) {
      drawerClose.addEventListener('click', closeDrawer);
    }

    if (mobileDrawer) {
      mobileDrawer.addEventListener('click', (e) => {
        if (e.target === mobileDrawer) {
          closeDrawer();
        }
      });
    }

    this.highlightActiveMenu();
  },

  highlightActiveMenu: function() {
    let page = window.location.pathname.split('/').pop().split('?')[0].split('#')[0] || 'index.html';
    if (!page || page === '') page = 'index.html';
    if (page === 'stay-details.html') page = 'stays.html';

    // Desktop Navbar active link
    document.querySelectorAll('header nav a, header nav button').forEach(el => {
      const href = el.getAttribute('href');
      if (href && (href === page || (page === 'index.html' && href === './'))) {
        el.classList.add('nav-link-active', 'text-forest', 'dark:text-emerald-300', 'font-bold');
        const parentGroup = el.closest('.relative.group');
        if (parentGroup) {
          parentGroup.querySelector('button')?.classList.add('nav-link-active', 'text-forest', 'dark:text-emerald-300', 'font-bold');
        }
      }
    });

    // If on index.html or home-2.html, ensure the Home dropdown button is marked active
    if (page === 'index.html' || page === 'home-2.html') {
      const homeBtn = document.querySelector('header nav .relative.group button');
      if (homeBtn) {
        homeBtn.classList.add('nav-link-active', 'text-forest', 'dark:text-emerald-300', 'font-bold');
      }
    }

    // Mobile Drawer active link
    document.querySelectorAll('#mobile-drawer nav a').forEach(el => {
      const href = el.getAttribute('href');
      if (href && (href === page || (page === 'index.html' && href === './'))) {
        el.classList.add('drawer-link-active', 'text-forest', 'dark:text-emerald-300', 'font-bold');
      }
    });
  }
};

// Global Favorite Save Toggles
function setupFavoriteButtons() {
  document.querySelectorAll('.btn-save-stay').forEach(btn => {
    const stayId = btn.getAttribute('data-stay-id');
    if (!stayId) return;

    const updateState = () => {
      const isSaved = SylvanStore.isStaySaved(stayId);
      const icon = btn.querySelector('i');
      if (isSaved) {
        btn.classList.add('text-rose-500');
        if (icon) icon.setAttribute('data-lucide', 'heart');
        btn.classList.add('fill-rose-500');
      } else {
        btn.classList.remove('text-rose-500', 'fill-rose-500');
        if (icon) icon.setAttribute('data-lucide', 'heart');
      }
      if (window.lucide) lucide.createIcons();
    };

    updateState();

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const updated = SylvanStore.toggleSaveStay(stayId);
      const isNowSaved = updated.includes(stayId);
      updateState();
      SylvanToast.show(
        isNowSaved ? 'Saved to Favorites' : 'Removed from Favorites',
        isNowSaved ? 'You can view this property anytime in your Guest Dashboard.' : 'Property removed from your saved list.',
        isNowSaved ? 'success' : 'info'
      );
    });
  });
}

// Global Newsletter handler
function setupNewsletterForms() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        SylvanToast.show(
          'Welcome to the Countryside Journal',
          `We've sent a confirmation to ${input.value}. Enjoy seasonal getaway guides and exclusive host perks.`,
          'success'
        );
        input.value = '';
      }
    });
  });
}

// Global Search Form Handler
function setupGlobalSearchBars() {
  document.querySelectorAll('.sylvan-search-bar').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const destination = form.querySelector('[name="destination"]')?.value || '';
      const checkin = form.querySelector('[name="checkin"]')?.value || '';
      const checkout = form.querySelector('[name="checkout"]')?.value || '';
      const guests = form.querySelector('[name="guests"]')?.value || '2';

      const params = new URLSearchParams();
      if (destination) params.set('dest', destination);
      if (checkin) params.set('in', checkin);
      if (checkout) params.set('out', checkout);
      if (guests) params.set('guests', guests);

      window.location.href = `stays.html?${params.toString()}`;
    });
  });
}

// Floating Back to Top Handler
const SylvanBackToTop = {
  init: function() {
    let btn = document.getElementById('back-to-top-btn');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'back-to-top-btn';
      btn.setAttribute('aria-label', 'Back to top');
      btn.setAttribute('title', 'Back to top');
      btn.innerHTML = `
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      `;
      document.body.appendChild(btn);
    }

    const checkScroll = () => {
      if (window.scrollY > 280) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();

    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Also handle in-page back-to-top links
    document.querySelectorAll('.scroll-to-top, a[href="#top"]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    });
  }
};

// Section Scroll-Reveal & Animation Engine
const SylvanSectionAnimator = {
  init: function() {
    const animatedElements = document.querySelectorAll('[data-scroll-anim], section, .section-animate');

    // If IntersectionObserver is unavailable, immediately reveal all
    if (!('IntersectionObserver' in window)) {
      animatedElements.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    // Top section reveal immediate on load so hero is never blank
    const topSection = document.querySelector('section');
    if (topSection) {
      topSection.classList.add('is-revealed');
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Smooth staggered delay propagation for internal cards
          const cards = entry.target.querySelectorAll('.stagger-item, .tilt-card, .editorial-left, .editorial-right, .feature-box, .testimonial-card, .split-left, .split-right, .dest-card, .luxury-card, .exp-card, .pkg-card, .quote-box, .pillar-card, .host-card, .stat-item, .cat-pill, .act-card, .land-card, .rec-stay-card, .contact-info-card, .faq-card, .grid > div, .grid > a');
          cards.forEach((child, idx) => {
            child.style.transitionDelay = `${(idx % 6) * 0.1}s`;
          });
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    // Observe all sections and animated components
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  }
};

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  SylvanTheme.init();
  SylvanRTL.init();
  SylvanNavigation.init();
  SylvanBackToTop.init();
  SylvanSectionAnimator.init();
  setupFavoriteButtons();
  setupNewsletterForms();
  setupGlobalSearchBars();

  if (window.lucide) {
    lucide.createIcons();
  }
});

