/**
 * SYLVAN - Stays Catalog & Filtering Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  const staysGrid = document.getElementById('stays-grid');
  if (!staysGrid) return;

  const urlParams = new URLSearchParams(window.location.search);
  const destQuery = (urlParams.get('dest') || '').toLowerCase();
  const catQuery = urlParams.get('category') || 'All';

  // State
  let currentCategory = catQuery;
  let maxPrice = 600;
  let selectedCapacity = 'any';
  let searchQuery = destQuery;
  let sortBy = 'popular';
  let activeAmenities = [];

  // DOM Elements
  const searchInput = document.getElementById('filter-search');
  const priceSlider = document.getElementById('price-slider');
  const priceValueLabel = document.getElementById('price-value-label');
  const capacitySelect = document.getElementById('filter-capacity');
  const sortSelect = document.getElementById('filter-sort');
  const staysCountEl = document.getElementById('stays-count-text');
  const resetBtn = document.getElementById('filter-reset-btn');
  const categoryTabs = document.querySelectorAll('.category-filter-btn');
  const amenityCheckboxes = document.querySelectorAll('.amenity-checkbox');

  if (searchInput && destQuery) {
    searchInput.value = destQuery;
  }

  function filterAndRender() {
    let list = [...SYLVAN_DATA.stays];

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(s => 
        s.name.toLowerCase().includes(q) ||
        s.location.toLowerCase().includes(q) ||
        s.region.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (currentCategory && currentCategory !== 'All') {
      list = list.filter(s => s.category.toLowerCase() === currentCategory.toLowerCase());
    }

    // Price filter
    list = list.filter(s => s.price <= maxPrice);

    // Capacity filter
    if (selectedCapacity !== 'any') {
      const cap = parseInt(selectedCapacity, 10);
      list = list.filter(s => s.capacity >= cap);
    }

    // Amenities filter
    if (activeAmenities.length > 0) {
      list = list.filter(s => 
        activeAmenities.every(amenity => s.amenities.includes(amenity))
      );
    }

    // Sorting
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else {
      // Popular (default)
      list.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    // Update count
    if (staysCountEl) {
      staysCountEl.textContent = `Showing ${list.length} of ${SYLVAN_DATA.stays.length} verified countryside stays`;
    }

    // Render cards
    if (list.length === 0) {
      staysGrid.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white dark:bg-[#15221D] rounded-3xl border border-stone-200 dark:border-stone-800 p-8">
          <div class="w-16 h-16 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center mx-auto mb-4 text-emerald-800 dark:text-emerald-400">
            <i data-lucide="compass" class="w-8 h-8"></i>
          </div>
          <h3 class="font-serif text-2xl font-bold mb-2">No Stays Found Matching Criteria</h3>
          <p class="text-stone-600 dark:text-stone-400 max-w-md mx-auto mb-6">Try adjusting your price range, clearing specific amenities, or searching for broader countryside destinations.</p>
          <button id="empty-reset-btn" class="btn-primary">
            <i data-lucide="refresh-cw" class="w-4 h-4"></i> Reset All Filters
          </button>
        </div>
      `;
      document.getElementById('empty-reset-btn')?.addEventListener('click', resetFilters);
    } else {
      staysGrid.innerHTML = list.map(stay => renderStayCard(stay)).join('');
    }

    setupFavoriteButtons();
    if (window.lucide) lucide.createIcons();
  }

  function renderStayCard(stay) {
    const isSaved = SylvanStore.isStaySaved(stay.id);
    return `
      <div class="group bg-white dark:bg-[#15221D] rounded-3xl overflow-hidden border border-stone-200/80 dark:border-stone-800/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
        <!-- Image & Badges -->
        <div class="relative aspect-[4/3] overflow-hidden bg-stone-100 dark:bg-stone-900">
          <img src="${stay.images[0]}" alt="${stay.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
          
          <div class="absolute top-4 left-4 flex flex-col gap-2">
            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-stone-900/90 text-stone-800 dark:text-stone-200 backdrop-blur-md shadow-sm">
              ${stay.category}
            </span>
            ${stay.isSuperhost ? `
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-800 text-white backdrop-blur-md shadow-sm flex items-center gap-1">
                <i data-lucide="award" class="w-3.5 h-3.5"></i> Superhost
              </span>
            ` : ''}
          </div>

          <button class="btn-save-stay absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 dark:bg-stone-900/80 backdrop-blur-md flex items-center justify-center text-stone-600 dark:text-stone-300 hover:text-rose-500 transition-colors shadow-sm" data-stay-id="${stay.id}">
            <i data-lucide="heart" class="w-5 h-5 ${isSaved ? 'text-rose-500 fill-rose-500' : ''}"></i>
          </button>

          <div class="absolute bottom-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-stone-900/80 text-white backdrop-blur-md flex items-center gap-1">
            <i data-lucide="star" class="w-3.5 h-3.5 text-amber-400 fill-amber-400"></i> ${stay.rating.toFixed(2)} (${stay.reviewsCount})
          </div>
        </div>

        <!-- Content -->
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 mb-2">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400"></i>
              <span>${stay.location}</span>
            </div>
            
            <h3 class="font-serif text-xl font-bold mb-2 group-hover:text-emerald-800 dark:group-hover:text-emerald-400 transition-colors">
              <a href="stay-details.html?id=${stay.id}">${stay.name}</a>
            </h3>

            <p class="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 mb-4 leading-relaxed">
              ${stay.tagline}
            </p>

            <!-- Specs -->
            <div class="grid grid-cols-3 gap-2 py-3 border-y border-stone-100 dark:border-stone-800/80 text-xs text-stone-600 dark:text-stone-400 mb-4 text-center">
              <div>
                <span class="font-bold text-stone-800 dark:text-stone-200 block">${stay.capacity}</span>
                <span>Guests</span>
              </div>
              <div>
                <span class="font-bold text-stone-800 dark:text-stone-200 block">${stay.bedrooms}</span>
                <span>Bedrooms</span>
              </div>
              <div>
                <span class="font-bold text-stone-800 dark:text-stone-200 block">${stay.bathrooms}</span>
                <span>Baths</span>
              </div>
            </div>
          </div>

          <!-- Price & CTAs -->
          <div class="flex items-center justify-between pt-2">
            <div>
              <span class="text-xs text-stone-400 line-through mr-1.5">$${stay.originalPrice}</span>
              <span class="font-serif text-2xl font-bold text-emerald-950 dark:text-emerald-300">$${stay.price}</span>
              <span class="text-xs text-stone-500 dark:text-stone-400"> / night</span>
            </div>

            <div class="flex items-center gap-2">
              <a href="stay-details.html?id=${stay.id}" class="px-4 py-2 rounded-full text-xs font-semibold border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 transition-all">
                Details
              </a>
              <a href="booking.html?id=${stay.id}" class="px-4 py-2 rounded-full text-xs font-semibold bg-emerald-800 hover:bg-emerald-900 text-white transition-all shadow-sm">
                Book
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function resetFilters() {
    currentCategory = 'All';
    maxPrice = 600;
    selectedCapacity = 'any';
    searchQuery = '';
    sortBy = 'popular';
    activeAmenities = [];

    if (searchInput) searchInput.value = '';
    if (priceSlider) priceSlider.value = 600;
    if (priceValueLabel) priceValueLabel.textContent = '$600';
    if (capacitySelect) capacitySelect.value = 'any';
    if (sortSelect) sortSelect.value = 'popular';

    categoryTabs.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-category') === 'All');
    });

    amenityCheckboxes.forEach(cb => {
      cb.checked = false;
    });

    filterAndRender();
  }

  // Event Listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      filterAndRender();
    });
  }

  if (priceSlider) {
    priceSlider.addEventListener('input', (e) => {
      maxPrice = parseInt(e.target.value, 10);
      if (priceValueLabel) priceValueLabel.textContent = `$${maxPrice}`;
      filterAndRender();
    });
  }

  if (capacitySelect) {
    capacitySelect.addEventListener('change', (e) => {
      selectedCapacity = e.target.value;
      filterAndRender();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      filterAndRender();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', resetFilters);
  }

  categoryTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryTabs.forEach(b => b.classList.remove('active', 'bg-emerald-800', 'text-white'));
      btn.classList.add('active', 'bg-emerald-800', 'text-white');
      currentCategory = btn.getAttribute('data-category');
      filterAndRender();
    });
  });

  amenityCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      activeAmenities = Array.from(amenityCheckboxes)
        .filter(c => c.checked)
        .map(c => c.value);
      filterAndRender();
    });
  });

  // Initial load
  filterAndRender();
});

