/**
 * SYLVAN - Stay Details Interactive Manager
 */

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const stayId = urlParams.get('id') || 'syl-01';

  const stay = SYLVAN_DATA.stays.find(s => s.id === stayId) || SYLVAN_DATA.stays[0];

  // Populate basic text & metadata
  document.title = `${stay.name} - Luxury Countryside Stay | SYLVAN`;
  
  const titleEl = document.getElementById('stay-title');
  if (titleEl) titleEl.textContent = stay.name;

  const breadcrumbStay = document.getElementById('breadcrumb-stay');
  if (breadcrumbStay) breadcrumbStay.textContent = stay.name;

  const categoryBadge = document.getElementById('stay-category-badge');
  if (categoryBadge) categoryBadge.textContent = stay.category;

  const locationEl = document.getElementById('stay-location');
  if (locationEl) locationEl.textContent = stay.location;

  // Real Google Map update for stay surroundings
  const stayMapIframe = document.getElementById('stay-google-map');
  if (stayMapIframe && stay.location) {
    stayMapIframe.src = `https://maps.google.com/maps?q=${encodeURIComponent(stay.location)}&t=&z=12&ie=UTF8&iwloc=&output=embed`;
  }
  const stayMapHeading = document.getElementById('stay-map-heading');
  if (stayMapHeading) stayMapHeading.textContent = `${stay.name} Surroundings`;
  const stayMapSubheading = document.getElementById('stay-map-subheading');
  if (stayMapSubheading) stayMapSubheading.innerHTML = `${stay.location} &bull; Full GPS coordinates & gate codes delivered on booking`;

  const ratingEl = document.getElementById('stay-rating');
  if (ratingEl) ratingEl.textContent = `${stay.rating.toFixed(2)} (${stay.reviewsCount} reviews)`;

  const priceDailyEl = document.getElementById('stay-price-daily');
  if (priceDailyEl) priceDailyEl.textContent = `$${stay.price}`;

  const descEl = document.getElementById('stay-description');
  if (descEl) descEl.textContent = stay.description;

  // Capacity stats
  const capGuests = document.getElementById('stay-cap-guests');
  if (capGuests) capGuests.textContent = `${stay.capacity} Guests`;

  const capBedrooms = document.getElementById('stay-cap-bedrooms');
  if (capBedrooms) capBedrooms.textContent = `${stay.bedrooms} Bedrooms`;

  const capBeds = document.getElementById('stay-cap-beds');
  if (capBeds) capBeds.textContent = `${stay.beds} Beds`;

  const capBaths = document.getElementById('stay-cap-baths');
  if (capBaths) capBaths.textContent = `${stay.bathrooms} Bathrooms`;

  // Gallery Population
  const mainGalleryImg = document.getElementById('main-gallery-image');
  const thumbsContainer = document.getElementById('gallery-thumbnails');
  if (mainGalleryImg && stay.images.length > 0) {
    mainGalleryImg.src = stay.images[0];
    mainGalleryImg.alt = stay.name;
  }

  if (thumbsContainer && stay.images.length > 0) {
    thumbsContainer.innerHTML = stay.images.map((img, idx) => `
      <button class="gallery-thumb-btn relative rounded-2xl overflow-hidden aspect-[4/3] border-2 ${idx === 0 ? 'border-emerald-700' : 'border-transparent'} transition-all hover:opacity-90" data-img-src="${img}" data-idx="${idx}">
        <img src="${img}" alt="${stay.name} angle ${idx + 1}" class="w-full h-full object-cover">
      </button>
    `).join('');

    thumbsContainer.querySelectorAll('.gallery-thumb-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const src = btn.getAttribute('data-img-src');
        if (mainGalleryImg && src) {
          mainGalleryImg.src = src;
        }
        thumbsContainer.querySelectorAll('.gallery-thumb-btn').forEach(b => {
          b.classList.remove('border-emerald-700');
          b.classList.add('border-transparent');
        });
        btn.classList.add('border-emerald-700');
        btn.classList.remove('border-transparent');
      });
    });
  }

  // Highlights list
  const highlightsContainer = document.getElementById('stay-highlights-list');
  if (highlightsContainer && stay.highlights) {
    highlightsContainer.innerHTML = stay.highlights.map(hl => `
      <li class="flex items-start gap-3">
        <div class="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
          <i data-lucide="check" class="w-3.5 h-3.5"></i>
        </div>
        <span class="text-stone-700 dark:text-stone-300 font-medium">${hl}</span>
      </li>
    `).join('');
  }

  // Amenities Grid
  const amenitiesGrid = document.getElementById('stay-amenities-grid');
  if (amenitiesGrid && stay.amenities) {
    const amenityIcons = {
      "Wi-Fi": "wifi",
      "Swimming Pool": "waves",
      "Fireplace": "flame",
      "Kitchen": "utensils",
      "Kitchenette": "utensils",
      "Pet-Friendly": "paw-print",
      "Breakfast Included": "coffee",
      "Free Parking": "car",
      "Air Conditioning": "wind",
      "Hot Tub": "bath",
      "Bathtub": "bath",
      "EV Charger": "zap",
      "Organic Garden Access": "sprout",
      "BBQ Grill": "beef",
      "Sauna": "thermometer",
      "Wine Cellar": "wine",
      "Tennis Court": "trophy",
      "Solar Powered": "sun",
      "Stargazing Deck": "sparkles",
      "Waterfront": "compass",
      "Kayaks Included": "navigation",
      "Boat Included": "anchor"
    };

    amenitiesGrid.innerHTML = stay.amenities.map(am => `
      <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60">
        <div class="w-8 h-8 rounded-xl bg-white dark:bg-stone-700 text-emerald-800 dark:text-emerald-400 flex items-center justify-center shadow-xs">
          <i data-lucide="${amenityIcons[am] || 'check'}" class="w-4 h-4"></i>
        </div>
        <span class="text-sm font-semibold text-stone-800 dark:text-stone-200">${am}</span>
      </div>
    `).join('');
  }

  // House Rules
  const rulesList = document.getElementById('stay-rules-list');
  if (rulesList && stay.houseRules) {
    rulesList.innerHTML = stay.houseRules.map(rule => `
      <li class="flex items-center gap-2.5 text-sm text-stone-600 dark:text-stone-400">
        <i data-lucide="shield-check" class="w-4 h-4 text-emerald-700 shrink-0"></i>
        <span>${rule}</span>
      </li>
    `).join('');
  }

  // Host info
  if (stay.host) {
    const hostAvatar = document.getElementById('host-avatar');
    if (hostAvatar) hostAvatar.src = stay.host.avatar;

    const hostName = document.getElementById('host-name');
    if (hostName) hostName.textContent = stay.host.name;

    const hostRole = document.getElementById('host-role');
    if (hostRole) hostRole.textContent = stay.host.role;

    const hostBio = document.getElementById('host-bio');
    if (hostBio) hostBio.textContent = stay.host.bio;

    const hostRate = document.getElementById('host-response-rate');
    if (hostRate) hostRate.textContent = stay.host.responseRate;

    const hostTime = document.getElementById('host-response-time');
    if (hostTime) hostTime.textContent = stay.host.responseTime;
  }

  // Save Stay button sync
  const saveBtn = document.getElementById('stay-detail-save-btn');
  if (saveBtn) {
    saveBtn.setAttribute('data-stay-id', stay.id);
  }

  // ==========================================
  // Booking Widget Calculation & Date Handling
  // ==========================================
  const checkinInput = document.getElementById('booking-checkin');
  const checkoutInput = document.getElementById('booking-checkout');
  const adultsSelect = document.getElementById('booking-adults');
  const childrenSelect = document.getElementById('booking-children');
  const roomsSelect = document.getElementById('booking-rooms');

  const nightsLabel = document.getElementById('calc-nights-label');
  const baseCostLabel = document.getElementById('calc-base-cost');
  const cleaningFeeLabel = document.getElementById('calc-cleaning-fee');
  const serviceFeeLabel = document.getElementById('calc-service-fee');
  const taxesFeeLabel = document.getElementById('calc-taxes-fee');
  const totalCostLabel = document.getElementById('calc-total-cost');
  const checkAvailBtn = document.getElementById('btn-check-availability');
  const availStatusEl = document.getElementById('availability-status-box');
  const reserveBtn = document.getElementById('btn-reserve-stay');

  // Set default dates: 7 days from now for 4 nights
  const today = new Date();
  const dIn = new Date(today);
  dIn.setDate(today.getDate() + 7);
  const dOut = new Date(today);
  dOut.setDate(today.getDate() + 11);

  const formatDate = (d) => d.toISOString().split('T')[0];

  if (checkinInput && !checkinInput.value) checkinInput.value = formatDate(dIn);
  if (checkoutInput && !checkoutInput.value) checkoutInput.value = formatDate(dOut);

  function calculatePricing() {
    const inDate = new Date(checkinInput.value);
    const outDate = new Date(checkoutInput.value);

    let diffDays = Math.ceil((outDate - inDate) / (1000 * 60 * 60 * 24));
    if (isNaN(diffDays) || diffDays <= 0) {
      diffDays = 1;
    }

    const rooms = parseInt(roomsSelect ? roomsSelect.value : '1', 10) || 1;
    const baseTotal = stay.price * diffDays * rooms;
    const cleaning = 65;
    const serviceFee = Math.round(baseTotal * 0.12);
    const taxes = Math.round(baseTotal * 0.08);
    const grandTotal = baseTotal + cleaning + serviceFee + taxes;

    if (nightsLabel) nightsLabel.textContent = `$${stay.price} x ${diffDays} nights${rooms > 1 ? ` (${rooms} rooms)` : ''}`;
    if (baseCostLabel) baseCostLabel.textContent = `$${baseTotal}`;
    if (cleaningFeeLabel) cleaningFeeLabel.textContent = `$${cleaning}`;
    if (serviceFeeLabel) serviceFeeLabel.textContent = `$${serviceFee}`;
    if (taxesFeeLabel) taxesFeeLabel.textContent = `$${taxes}`;
    if (totalCostLabel) totalCostLabel.textContent = `$${grandTotal}`;

    return { diffDays, grandTotal, rooms };
  }

  // Listeners for calculator
  [checkinInput, checkoutInput, adultsSelect, childrenSelect, roomsSelect].forEach(el => {
    if (el) el.addEventListener('change', calculatePricing);
  });

  // Check availability action
  if (checkAvailBtn && availStatusEl) {
    checkAvailBtn.addEventListener('click', () => {
      checkAvailBtn.innerHTML = `<i data-lucide="loader" class="w-4 h-4 animate-spin"></i> Checking calendar...`;
      if (window.lucide) lucide.createIcons();

      setTimeout(() => {
        checkAvailBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i> Verified Available`;
        availStatusEl.classList.remove('hidden');
        availStatusEl.innerHTML = `
          <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-2xl flex items-center gap-2.5 text-xs text-emerald-900 dark:text-emerald-300">
            <i data-lucide="sparkles" class="w-4 h-4 shrink-0 text-emerald-600"></i>
            <span><strong>Dates are open!</strong> Host Eleanor accepts instant bookings. No waiting for host approval.</span>
          </div>
        `;
        if (window.lucide) lucide.createIcons();
      }, 700);
    });
  }

  // Reserve Now action
  if (reserveBtn) {
    reserveBtn.addEventListener('click', () => {
      const { diffDays } = calculatePricing();
      const inVal = checkinInput.value;
      const outVal = checkoutInput.value;
      const adultsVal = adultsSelect ? adultsSelect.value : '2';
      const childrenVal = childrenSelect ? childrenSelect.value : '0';
      const roomsVal = roomsSelect ? roomsSelect.value : '1';

      const checkoutUrl = `booking.html?id=${stay.id}&in=${inVal}&out=${outVal}&adults=${adultsVal}&children=${childrenVal}&rooms=${roomsVal}`;
      window.location.href = checkoutUrl;
    });
  }

  // Review Form simulator
  const reviewForm = document.getElementById('submit-review-form');
  const reviewsContainer = document.getElementById('stay-reviews-list');
  if (reviewForm && reviewsContainer) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('review-author-name');
      const textInput = document.getElementById('review-author-text');
      const ratingSelect = document.getElementById('review-author-rating');

      if (!nameInput.value || !textInput.value) return;

      const newReviewCard = document.createElement('div');
      newReviewCard.className = 'p-6 bg-white dark:bg-[#15221D] rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm animate-fade-up';
      newReviewCard.innerHTML = `
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm">
              ${nameInput.value.charAt(0).toUpperCase()}
            </div>
            <div>
              <h4 class="font-bold text-sm text-stone-900 dark:text-stone-100">${nameInput.value}</h4>
              <p class="text-xs text-stone-500">Verified Guest · Just now</p>
            </div>
          </div>
          <div class="flex items-center text-amber-400">
            ${Array(parseInt(ratingSelect.value, 10)).fill('<i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>').join('')}
          </div>
        </div>
        <p class="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">${textInput.value}</p>
      `;

      reviewsContainer.prepend(newReviewCard);
      SylvanToast.show('Review Published', 'Thank you for sharing your authentic countryside experience!', 'success');
      reviewForm.reset();
      if (window.lucide) lucide.createIcons();
    });
  }

  // Run initial price calculation
  calculatePricing();

  if (window.lucide) lucide.createIcons();
});

