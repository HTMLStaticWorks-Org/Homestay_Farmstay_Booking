/**
 * SYLVAN - Guest Dashboard Controller
 * Multi-view sidebar navigation, booking operations, favorites, profile, and invoices
 */

document.addEventListener('DOMContentLoaded', () => {
  const dashboardRoot = document.getElementById('dashboard-wrapper');
  if (!dashboardRoot) return;

  // Active User State
  let currentUser = SylvanStore.getUser();

  // Tab switching logic
  const navLinks = document.querySelectorAll('.dash-nav-link');
  const viewPanels = document.querySelectorAll('.dash-view-panel');
  const pageTitleEl = document.getElementById('dash-header-title');

  const tabTitles = {
    'overview': 'Dashboard Overview',
    'explore': 'Explore Countryside Stays',
    'bookings': 'My Bookings & Reservations',
    'upcoming': 'Upcoming Trips',
    'past': 'Past Reservations & History',
    'saved': 'Saved Properties',
    'payments': 'Payments & Invoices',
    'profile': 'Profile & Security Settings',
    'support': 'Help & Concierge Support'
  };

  function switchTab(tabId) {
    if (!tabTitles[tabId]) tabId = 'overview';

    // Update nav links
    navLinks.forEach(link => {
      const linkTab = link.getAttribute('data-tab');
      if (linkTab === tabId) {
        link.classList.add('bg-emerald-800', 'text-white', 'shadow-sm');
        link.classList.remove('text-stone-600', 'dark:text-stone-400', 'hover:bg-stone-100', 'dark:hover:bg-stone-800/80');
      } else {
        link.classList.remove('bg-emerald-800', 'text-white', 'shadow-sm');
        link.classList.add('text-stone-600', 'dark:text-stone-400', 'hover:bg-stone-100', 'dark:hover:bg-stone-800/80');
      }
    });

    // Update panels
    viewPanels.forEach(panel => {
      if (panel.id === `dash-panel-${tabId}`) {
        panel.classList.remove('hidden');
        panel.classList.add('animate-fade-up');
      } else {
        panel.classList.add('hidden');
      }
    });

    // Update title
    if (pageTitleEl) pageTitleEl.textContent = tabTitles[tabId];

    // Close mobile sidebar if open
    const sidebar = document.getElementById('dash-sidebar');
    if (sidebar && window.innerWidth < 1024) {
      sidebar.classList.add('-translate-x-full');
    }

    // Refresh tab-specific data
    if (tabId === 'overview') renderOverview();
    if (tabId === 'explore') renderExploreStays();
    if (tabId === 'bookings') renderBookingsTable('all');
    if (tabId === 'upcoming') renderUpcomingTrips();
    if (tabId === 'past') renderPastTrips();
    if (tabId === 'saved') renderSavedProperties();
    if (tabId === 'payments') renderPayments();
    if (tabId === 'profile') populateProfileFields();

    window.location.hash = tabId;
    if (window.lucide) lucide.createIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Handle Tab Click
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = link.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  // Mobile sidebar drawer
  const sidebarToggle = document.getElementById('dash-sidebar-toggle');
  const sidebar = document.getElementById('dash-sidebar');
  const sidebarClose = document.getElementById('dash-sidebar-close');

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
    });
  }
  if (sidebarClose && sidebar) {
    sidebarClose.addEventListener('click', () => {
      sidebar.classList.add('-translate-x-full');
    });
  }

  // ==========================================
  // VIEW: Overview
  // ==========================================
  function renderOverview() {
    const bookings = SylvanStore.getBookings();
    const savedIds = SylvanStore.getSavedStayIds();
    const upcoming = bookings.filter(b => b.status === 'Confirmed' && b.isUpcoming);
    const completed = bookings.filter(b => b.status === 'Completed');

    // Stats
    const totalBookingsEl = document.getElementById('stat-total-bookings');
    if (totalBookingsEl) totalBookingsEl.textContent = bookings.length;

    const upcomingCountEl = document.getElementById('stat-upcoming-trips');
    if (upcomingCountEl) upcomingCountEl.textContent = upcoming.length;

    const completedCountEl = document.getElementById('stat-completed-stays');
    if (completedCountEl) completedCountEl.textContent = completed.length;

    const savedCountEl = document.getElementById('stat-saved-properties');
    if (savedCountEl) savedCountEl.textContent = savedIds.length;

    // Next upcoming trip card
    const nextTripBox = document.getElementById('overview-next-trip-card');
    if (nextTripBox) {
      if (upcoming.length > 0) {
        const next = upcoming[0];
        nextTripBox.innerHTML = `
          <div class="relative bg-gradient-to-r from-emerald-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 overflow-hidden shadow-xl">
            <div class="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
              <img src="${next.stayImage}" alt="" class="w-full h-full object-cover">
            </div>
            <div class="relative z-10 max-w-xl">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-emerald-200 text-xs font-semibold mb-4">
                <i data-lucide="compass" class="w-3.5 h-3.5"></i> Next Countryside Escape
              </div>
              <h3 class="font-serif text-2xl sm:text-3xl font-bold mb-2">${next.stayName}</h3>
              <p class="text-emerald-200 text-sm mb-4 flex items-center gap-2">
                <i data-lucide="map-pin" class="w-4 h-4"></i> ${next.location}
              </p>
              
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-emerald-800/80 text-xs text-emerald-100 mb-6">
                <div>
                  <span class="text-emerald-300 block text-[11px]">Check-In</span>
                  <span class="font-bold text-sm text-white">${next.checkIn}</span>
                </div>
                <div>
                  <span class="text-emerald-300 block text-[11px]">Check-Out</span>
                  <span class="font-bold text-sm text-white">${next.checkOut}</span>
                </div>
                <div>
                  <span class="text-emerald-300 block text-[11px]">Duration</span>
                  <span class="font-bold text-sm text-white">${next.nights} Nights</span>
                </div>
                <div>
                  <span class="text-emerald-300 block text-[11px]">Status</span>
                  <span class="font-bold text-sm text-emerald-400 flex items-center gap-1">
                    <i data-lucide="check-circle" class="w-3 h-3"></i> Confirmed
                  </span>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row sm:items-center gap-3">
                <button class="btn-amber text-xs px-5 py-2.5 justify-center" onclick="window.showTripPassModal('${next.id}')">
                  <i data-lucide="ticket" class="w-4 h-4"></i> View Trip Pass & Guide
                </button>
                <button class="px-4 py-2.5 rounded-full border border-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition-all inline-flex items-center justify-center gap-1.5" onclick="window.showInvoiceModal('${next.id}')">
                  <i data-lucide="receipt" class="w-4 h-4"></i> <span>Invoice</span>
                </button>
              </div>
            </div>
          </div>
        `;
      } else {
        nextTripBox.innerHTML = `
          <div class="bg-stone-50 dark:bg-stone-800/50 rounded-3xl p-8 text-center border border-dashed border-stone-300 dark:border-stone-700">
            <div class="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center mx-auto mb-3">
              <i data-lucide="calendar" class="w-6 h-6"></i>
            </div>
            <h4 class="font-serif text-lg font-bold mb-1">No Upcoming Trips Planned</h4>
            <p class="text-xs text-stone-500 dark:text-stone-400 mb-4">Discover tranquil farmhouses, timber cottages, and apple orchards for your next weekend.</p>
            <button class="btn-primary text-xs" onclick="document.querySelector('[data-tab=\\'explore\\']')?.click()">
              <i data-lucide="compass" class="w-4 h-4"></i> Explore Available Stays
            </button>
          </div>
        `;
      }
    }

    // Recent Activity Table
    const recentTable = document.getElementById('overview-recent-bookings');
    if (recentTable) {
      recentTable.innerHTML = bookings.slice(0, 4).map(b => `
        <tr class="border-b border-stone-100 dark:border-stone-800 hover:bg-stone-50/50 dark:hover:bg-stone-800/30 transition-colors">
          <td class="py-4 px-4 font-mono text-xs font-bold text-stone-700 dark:text-stone-300 whitespace-nowrap text-start">#${b.id}</td>
          <td class="py-4 px-4 min-w-[200px] text-start">
            <div class="flex items-center gap-3">
              <img src="${b.stayImage}" alt="" class="w-10 h-10 rounded-xl object-cover shrink-0">
              <div class="min-w-0">
                <span class="font-bold text-xs text-stone-900 dark:text-stone-100 block leading-snug">${b.stayName}</span>
                <span class="text-[11px] text-stone-500 block leading-tight mt-0.5">${b.location}</span>
              </div>
            </div>
          </td>
          <td class="py-4 px-4 text-xs text-stone-600 dark:text-stone-400 whitespace-nowrap text-start">${b.checkIn}</td>
          <td class="py-4 px-4 text-xs font-bold text-stone-900 dark:text-stone-100 whitespace-nowrap text-start">$${b.totalPrice.toFixed(2)}</td>
          <td class="py-4 px-4 whitespace-nowrap text-start">
            ${renderStatusBadge(b.status)}
          </td>
          <td class="py-4 px-4 text-end whitespace-nowrap">
            <button class="text-xs text-emerald-800 dark:text-emerald-400 hover:underline font-semibold" onclick="window.showInvoiceModal('${b.id}')">
              View
            </button>
          </td>
        </tr>
      `).join('');
    }
  }

  // Status badge helper
  function renderStatusBadge(status) {
    if (status === 'Confirmed') {
      return `<span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">Confirmed</span>`;
    } else if (status === 'Completed') {
      return `<span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300">Completed</span>`;
    } else if (status === 'Cancelled') {
      return `<span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300">Cancelled</span>`;
    } else {
      return `<span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">Pending</span>`;
    }
  }

  // ==========================================
  // VIEW: Explore Stays
  // ==========================================
  function renderExploreStays() {
    const grid = document.getElementById('dash-explore-grid');
    if (!grid) return;

    grid.innerHTML = SYLVAN_DATA.stays.slice(0, 6).map(stay => `
      <div class="bg-white dark:bg-[#15221D] rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col justify-between">
        <div class="relative aspect-[16/10] overflow-hidden">
          <img src="${stay.images[0]}" alt="${stay.name}" class="w-full h-full object-cover">
          <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 dark:bg-stone-900/90 text-stone-800 dark:text-stone-200 backdrop-blur-md">
            ${stay.category}
          </span>
          <span class="absolute bottom-3 right-3 px-2 py-0.5 rounded-full text-[11px] font-bold bg-stone-900/80 text-white backdrop-blur-md flex items-center gap-1">
            <i data-lucide="star" class="w-3 h-3 text-amber-400 fill-amber-400"></i> ${stay.rating}
          </span>
        </div>
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <span class="text-[11px] text-stone-500 flex items-center gap-1 mb-1">
              <i data-lucide="map-pin" class="w-3 h-3"></i> ${stay.location}
            </span>
            <h4 class="font-serif font-bold text-base text-stone-900 dark:text-stone-100 mb-2">${stay.name}</h4>
          </div>
          <div class="flex items-center justify-between pt-3 border-t border-stone-100 dark:border-stone-800">
            <div>
              <span class="font-serif text-lg font-bold text-emerald-950 dark:text-emerald-300">$${stay.price}</span>
              <span class="text-[11px] text-stone-500"> / night</span>
            </div>
            <a href="booking.html?id=${stay.id}" class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-800 hover:bg-emerald-900 text-white transition-all shadow-xs">
              Book Stay
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // ==========================================
  // VIEW: My Bookings
  // ==========================================
  function renderBookingsTable(filterStatus = 'all') {
    const listContainer = document.getElementById('dash-bookings-table-body');
    if (!listContainer) return;

    let bookings = SylvanStore.getBookings();
    if (filterStatus !== 'all') {
      bookings = bookings.filter(b => b.status.toLowerCase() === filterStatus.toLowerCase());
    }

    if (bookings.length === 0) {
      listContainer.innerHTML = `
        <tr>
          <td colspan="6" class="py-12 text-center text-stone-500 text-xs">
            No reservations found under this filter.
          </td>
        </tr>
      `;
      return;
    }

    listContainer.innerHTML = bookings.map(b => `
      <tr class="border-b border-stone-100 dark:border-stone-800 hover:bg-stone-50/50 dark:hover:bg-stone-800/30 transition-colors">
        <td class="py-4 px-4 font-mono text-xs font-bold text-stone-700 dark:text-stone-300 whitespace-nowrap text-start">#${b.id}</td>
        <td class="py-4 px-4 min-w-[220px] text-start">
          <div class="flex items-center gap-3">
            <img src="${b.stayImage}" alt="" class="w-12 h-12 rounded-xl object-cover shrink-0">
            <div class="min-w-0">
              <span class="font-bold text-sm text-stone-900 dark:text-stone-100 block leading-snug">${b.stayName}</span>
              <span class="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                <i data-lucide="map-pin" class="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0"></i> ${b.location}
              </span>
            </div>
          </div>
        </td>
        <td class="py-4 px-4 text-xs text-stone-600 dark:text-stone-400 whitespace-nowrap min-w-[170px] text-start">
          <span class="block font-semibold text-stone-800 dark:text-stone-200">${b.checkIn} &rarr; ${b.checkOut}</span>
          <span class="text-[11px] text-stone-500 mt-0.5 block">${b.nights} Nights · ${b.guests.adults} Adults${b.guests.children ? `, ${b.guests.children} Children` : ''}</span>
        </td>
        <td class="py-4 px-4 text-xs font-bold text-stone-900 dark:text-stone-100 whitespace-nowrap text-start">
          $${b.totalPrice.toFixed(2)}
          <span class="block text-[11px] font-normal text-stone-500 mt-0.5">${b.paymentMethod}</span>
        </td>
        <td class="py-4 px-4 whitespace-nowrap text-start">
          ${renderStatusBadge(b.status)}
        </td>
        <td class="py-4 px-4 text-end space-x-2 whitespace-nowrap">
          <button class="px-3 py-1.5 rounded-full text-xs font-semibold bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-700 dark:text-stone-300 transition-all" onclick="window.showInvoiceModal('${b.id}')">
            Receipt
          </button>
          ${b.status === 'Confirmed' && b.isUpcoming ? `
            <button class="px-3 py-1.5 rounded-full text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-all" onclick="window.cancelTripAction('${b.id}')">
              Cancel
            </button>
          ` : ''}
        </td>
      </tr>
    `).join('');
  }

  // Filter Bookings Tab buttons
  document.querySelectorAll('.booking-filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.booking-filter-pill').forEach(b => {
        b.classList.remove('bg-emerald-800', 'text-white');
        b.classList.add('bg-stone-100', 'dark:bg-stone-800', 'text-stone-600', 'dark:text-stone-300');
      });
      btn.classList.add('bg-emerald-800', 'text-white');
      btn.classList.remove('bg-stone-100', 'dark:bg-stone-800', 'text-stone-600', 'dark:text-stone-300');

      const filter = btn.getAttribute('data-status-filter');
      renderBookingsTable(filter);
      if (window.lucide) lucide.createIcons();
    });
  });

  // ==========================================
  // VIEW: Upcoming Trips
  // ==========================================
  function renderUpcomingTrips() {
    const container = document.getElementById('dash-upcoming-trips-container');
    if (!container) return;

    const upcoming = SylvanStore.getBookings().filter(b => b.status === 'Confirmed' && b.isUpcoming);
    if (upcoming.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white dark:bg-[#15221D] rounded-3xl border border-stone-200 dark:border-stone-800 p-8">
          <i data-lucide="sun" class="w-12 h-12 text-amber-500 mx-auto mb-3"></i>
          <h4 class="font-serif text-xl font-bold mb-2">No Upcoming Stays Reserved</h4>
          <p class="text-xs text-stone-500 max-w-sm mx-auto mb-6">Plan a peaceful retreat to the Cotswolds, Vermont apple orchards, or Tuscan vineyards.</p>
          <a href="stays.html" class="btn-primary text-xs">Browse Countryside Stays</a>
        </div>
      `;
      return;
    }

    container.innerHTML = upcoming.map(b => `
      <div class="bg-white dark:bg-[#15221D] rounded-3xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-md flex flex-col md:flex-row">
        <div class="md:w-2/5 relative min-h-[200px] overflow-hidden">
          <img src="${b.stayImage}" alt="${b.stayName}" class="w-full h-full object-cover">
          <span class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-800 text-white shadow-sm flex items-center gap-1.5">
            <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> Confirmed Pass
          </span>
        </div>
        <div class="p-6 md:w-3/5 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs text-stone-500 mb-2">
              <span class="font-mono font-bold text-emerald-800 dark:text-emerald-400">#${b.id}</span>
              <span>Booked on ${b.bookedOn}</span>
            </div>
            <h3 class="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-1">${b.stayName}</h3>
            <p class="text-xs text-stone-600 dark:text-stone-400 flex items-center gap-1.5 mb-4">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-emerald-700"></i> ${b.location}
            </p>

            <div class="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-700/60 text-xs mb-4">
              <div>
                <span class="text-stone-400 text-[11px] block">Check-in</span>
                <span class="font-bold text-stone-800 dark:text-stone-200">${b.checkIn}</span>
              </div>
              <div>
                <span class="text-stone-400 text-[11px] block">Check-out</span>
                <span class="font-bold text-stone-800 dark:text-stone-200">${b.checkOut}</span>
              </div>
              <div>
                <span class="text-stone-400 text-[11px] block">Guests</span>
                <span class="font-bold text-stone-800 dark:text-stone-200">${b.guests.adults} Adults${b.guests.children ? `, ${b.guests.children} Children` : ''}</span>
              </div>
            </div>

            <div class="text-xs text-stone-600 dark:text-stone-400 mb-6 space-y-1">
              <p><strong>Host Contact:</strong> ${b.hostContact}</p>
              <p><strong>Total Paid:</strong> $${b.totalPrice.toFixed(2)} via ${b.paymentMethod}</p>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3 pt-3 border-t border-stone-100 dark:border-stone-800">
            <button class="btn-primary text-xs px-4 py-2" onclick="window.showTripPassModal('${b.id}')">
              <i data-lucide="file-text" class="w-3.5 h-3.5"></i> Trip Pass
            </button>
            <button class="px-4 py-2 rounded-full border border-stone-200 dark:border-stone-700 text-xs font-semibold hover:bg-stone-100 dark:hover:bg-stone-800 transition-all" onclick="window.showInvoiceModal('${b.id}')">
              <i data-lucide="printer" class="w-3.5 h-3.5 inline mr-1"></i> Receipt
            </button>
            <button class="text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline ml-auto" onclick="window.cancelTripAction('${b.id}')">
              Request Cancellation
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // ==========================================
  // VIEW: Past Reservations
  // ==========================================
  function renderPastTrips() {
    const container = document.getElementById('dash-past-trips-container');
    if (!container) return;

    const past = SylvanStore.getBookings().filter(b => b.status === 'Completed');
    if (past.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center text-stone-500 text-xs">
          No past reservations recorded yet.
        </div>
      `;
      return;
    }

    container.innerHTML = past.map(b => `
      <div class="bg-white dark:bg-[#15221D] rounded-2xl p-5 border border-stone-200 dark:border-stone-800 shadow-xs flex items-center justify-between">
        <div class="flex items-center gap-4">
          <img src="${b.stayImage}" alt="" class="w-16 h-16 rounded-xl object-cover shrink-0">
          <div>
            <span class="text-[11px] font-mono text-stone-400">Completed · #${b.id}</span>
            <h4 class="font-serif font-bold text-base text-stone-900 dark:text-stone-100">${b.stayName}</h4>
            <p class="text-xs text-stone-500">${b.checkIn} to ${b.checkOut} · Total: $${b.totalPrice.toFixed(2)}</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <a href="stay-details.html?id=${b.stayId}" class="px-3 py-1.5 rounded-full text-xs font-semibold border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all">
            Review Stay
          </a>
          <a href="booking.html?id=${b.stayId}" class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-800 hover:bg-emerald-900 text-white transition-all shadow-xs">
            Re-Book
          </a>
        </div>
      </div>
    `).join('');
  }

  // ==========================================
  // VIEW: Saved Properties
  // ==========================================
  function renderSavedProperties() {
    const container = document.getElementById('dash-saved-properties-grid');
    if (!container) return;

    const savedIds = SylvanStore.getSavedStayIds();
    const savedStays = SYLVAN_DATA.stays.filter(s => savedIds.includes(s.id));

    if (savedStays.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white dark:bg-[#15221D] rounded-3xl border border-stone-200 dark:border-stone-800 p-8">
          <i data-lucide="heart" class="w-12 h-12 text-stone-400 mx-auto mb-3"></i>
          <h4 class="font-serif text-xl font-bold mb-2">No Saved Properties Yet</h4>
          <p class="text-xs text-stone-500 max-w-sm mx-auto mb-6">Click the heart icon on any stay to bookmark your favorite country retreats.</p>
          <a href="stays.html" class="btn-primary text-xs">Explore Stays</a>
        </div>
      `;
      return;
    }

    container.innerHTML = savedStays.map(stay => `
      <div class="bg-white dark:bg-[#15221D] rounded-3xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col justify-between">
        <div class="relative aspect-[4/3] overflow-hidden">
          <img src="${stay.images[0]}" alt="${stay.name}" class="w-full h-full object-cover">
          <button class="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 dark:bg-stone-900/90 flex items-center justify-center text-rose-500 hover:scale-110 transition-transform shadow-xs" onclick="window.removeSavedStayAction('${stay.id}')">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
          <span class="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-stone-900/80 text-white backdrop-blur-md">
            ${stay.category}
          </span>
        </div>
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <span class="text-xs text-stone-500 flex items-center gap-1 mb-1">
              <i data-lucide="map-pin" class="w-3 h-3 text-emerald-700"></i> ${stay.location}
            </span>
            <h4 class="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 mb-2">
              <a href="stay-details.html?id=${stay.id}" class="hover:underline">${stay.name}</a>
            </h4>
          </div>
          <div class="flex items-center justify-between pt-3 border-t border-stone-100 dark:border-stone-800">
            <div>
              <span class="font-serif text-xl font-bold text-emerald-950 dark:text-emerald-300">$${stay.price}</span>
              <span class="text-xs text-stone-500"> / night</span>
            </div>
            <a href="booking.html?id=${stay.id}" class="btn-primary text-xs px-4 py-2">
              Book Stay
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // ==========================================
  // VIEW: Payments & Transactions
  // ==========================================
  function renderPayments() {
    const bookings = SylvanStore.getBookings();
    const totalSpent = bookings.filter(b => b.status !== 'Cancelled').reduce((acc, cur) => acc + cur.totalPrice, 0);
    const refundedTotal = bookings.filter(b => b.status === 'Cancelled').reduce((acc, cur) => acc + cur.totalPrice, 0);

    const spentEl = document.getElementById('stat-total-spent');
    if (spentEl) spentEl.textContent = `$${totalSpent.toFixed(2)}`;

    const refundedEl = document.getElementById('stat-refunded-amount');
    if (refundedEl) refundedEl.textContent = `$${refundedTotal.toFixed(2)}`;

    const ledger = document.getElementById('dash-transactions-body');
    if (ledger) {
      ledger.innerHTML = bookings.map(b => `
        <tr class="border-b border-stone-100 dark:border-stone-800 hover:bg-stone-50/50 dark:hover:bg-stone-800/30 transition-colors">
          <td class="py-4 px-4 font-mono text-xs text-stone-700 dark:text-stone-300">TXN-${b.id}</td>
          <td class="py-4 px-4 text-xs text-stone-600 dark:text-stone-400">${b.bookedOn}</td>
          <td class="py-4 px-4 text-xs font-bold text-stone-900 dark:text-stone-100">${b.stayName}</td>
          <td class="py-4 px-4 text-xs text-stone-600 dark:text-stone-400">${b.paymentMethod}</td>
          <td class="py-4 px-4 text-xs font-bold text-stone-900 dark:text-stone-100">$${b.totalPrice.toFixed(2)}</td>
          <td class="py-4 px-4">
            <span class="px-2.5 py-1 rounded-full text-[11px] font-semibold ${b.paymentStatus === 'Paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-700'}">
              ${b.paymentStatus}
            </span>
          </td>
          <td class="py-4 px-4 text-right">
            <button class="text-xs text-emerald-800 dark:text-emerald-400 font-semibold hover:underline" onclick="window.showInvoiceModal('${b.id}')">
              Download Invoice
            </button>
          </td>
        </tr>
      `).join('');
    }
  }

  // ==========================================
  // VIEW: Profile Settings
  // ==========================================
  function populateProfileFields() {
    currentUser = SylvanStore.getUser();

    const nameIn = document.getElementById('profile-name-input');
    const emailIn = document.getElementById('profile-email-input');
    const phoneIn = document.getElementById('profile-phone-input');
    const addressIn = document.getElementById('profile-address-input');
    const avatarImg = document.getElementById('profile-avatar-preview');

    if (nameIn) nameIn.value = currentUser.name || '';
    if (emailIn) emailIn.value = currentUser.email || '';
    if (phoneIn) phoneIn.value = currentUser.phone || '';
    if (addressIn) addressIn.value = currentUser.address || '';
    if (avatarImg) avatarImg.src = currentUser.avatar || '';

    // Update greeting
    const greetName = document.getElementById('dash-user-name');
    if (greetName) greetName.textContent = currentUser.name;
  }

  const profileForm = document.getElementById('dash-profile-form');
  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      currentUser.name = document.getElementById('profile-name-input')?.value || currentUser.name;
      currentUser.email = document.getElementById('profile-email-input')?.value || currentUser.email;
      currentUser.phone = document.getElementById('profile-phone-input')?.value || currentUser.phone;
      currentUser.address = document.getElementById('profile-address-input')?.value || currentUser.address;

      SylvanStore.saveUser(currentUser);
      populateProfileFields();
      SylvanToast.show('Profile Updated', 'Your profile details have been saved successfully.', 'success');
    });
  }

  const passwordForm = document.getElementById('dash-password-form');
  if (passwordForm) {
    passwordForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const current = document.getElementById('pwd-current')?.value;
      const newP = document.getElementById('pwd-new')?.value;
      const confirmP = document.getElementById('pwd-confirm')?.value;

      if (newP !== confirmP) {
        SylvanToast.show('Password Mismatch', 'New password and confirmation do not match.', 'error');
        return;
      }
      passwordForm.reset();
      SylvanToast.show('Password Changed', 'Your account credentials have been securely updated.', 'success');
    });
  }

  // ==========================================
  // GLOBAL MODAL ACTIONS
  // ==========================================
  window.cancelTripAction = function(bookingId) {
    if (confirm(`Are you sure you want to cancel reservation #${bookingId}? A refund will be initiated per host policy.`)) {
      SylvanStore.cancelBooking(bookingId);
      SylvanToast.show('Reservation Cancelled', `Booking #${bookingId} has been cancelled. Refund processing initiated.`, 'info');
      renderOverview();
      renderBookingsTable('all');
      renderUpcomingTrips();
      renderPayments();
      if (window.lucide) lucide.createIcons();
    }
  };

  window.removeSavedStayAction = function(stayId) {
    SylvanStore.toggleSaveStay(stayId);
    SylvanToast.show('Removed', 'Stay removed from saved collection.', 'info');
    renderSavedProperties();
    if (window.lucide) lucide.createIcons();
  };

  window.showInvoiceModal = function(bookingId) {
    const booking = SylvanStore.getBookings().find(b => b.id === bookingId);
    if (!booking) return;

    const modal = document.getElementById('invoice-receipt-modal');
    if (!modal) return;

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    document.getElementById('inv-ref-number').textContent = `#${booking.id}`;
    document.getElementById('inv-date').textContent = booking.bookedOn;
    document.getElementById('inv-stay-title').textContent = booking.stayName;
    document.getElementById('inv-stay-location').textContent = booking.location;
    document.getElementById('inv-dates').textContent = `${booking.checkIn} to ${booking.checkOut} (${booking.nights} nights)`;
    document.getElementById('inv-guests').textContent = `${booking.guests.adults} Adults${booking.guests.children ? `, ${booking.guests.children} Children` : ''}`;
    document.getElementById('inv-payment-method').textContent = booking.paymentMethod;
    document.getElementById('inv-total-paid').textContent = `$${booking.totalPrice.toFixed(2)}`;
    document.getElementById('inv-guest-name').textContent = currentUser.name;
    document.getElementById('inv-guest-email').textContent = currentUser.email;

    if (window.lucide) lucide.createIcons();
  };

  window.closeInvoiceModal = function() {
    const modal = document.getElementById('invoice-receipt-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };

  window.showTripPassModal = function(bookingId) {
    const booking = SylvanStore.getBookings().find(b => b.id === bookingId);
    if (!booking) return;

    const modal = document.getElementById('trip-pass-modal');
    if (!modal) return;

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    document.getElementById('pass-booking-ref').textContent = `#${booking.id}`;
    document.getElementById('pass-stay-title').textContent = booking.stayName;
    document.getElementById('pass-stay-location').textContent = booking.location;
    document.getElementById('pass-checkin-time').textContent = `${booking.checkIn} (3:00 PM)`;
    document.getElementById('pass-checkout-time').textContent = `${booking.checkOut} (11:00 AM)`;
    document.getElementById('pass-host-contact').textContent = booking.hostContact;
    document.getElementById('pass-stay-img').src = booking.stayImage;

    if (window.lucide) lucide.createIcons();
  };

  window.closeTripPassModal = function() {
    const modal = document.getElementById('trip-pass-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };

  // Support Ticket Form simulator
  const supportForm = document.getElementById('dash-support-form');
  if (supportForm) {
    supportForm.addEventListener('submit', (e) => {
      e.preventDefault();
      supportForm.reset();
      SylvanToast.show('Ticket Submitted', 'Our countryside hospitality concierge will respond within 2 hours.', 'success');
    });
  }

  // Logout action - immediate redirect to home page
  document.querySelectorAll('.btn-dash-logout').forEach(btn => {
    btn.addEventListener('click', (e) => {
      try {
        localStorage.removeItem('sylvan_user');
        sessionStorage.clear();
      } catch (err) {}
      window.location.href = 'index.html';
    });
  });

  // Check initial hash or default to overview
  const initialHash = window.location.hash.replace('#', '') || 'overview';
  switchTab(initialHash);
});

