/**
 * SYLVAN - Booking & Multi-Step Checkout Flow
 */

document.addEventListener('DOMContentLoaded', () => {
  const wizardContainer = document.getElementById('booking-wizard');
  if (!wizardContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const stayId = urlParams.get('id') || 'syl-01';
  const stay = SYLVAN_DATA.stays.find(s => s.id === stayId) || SYLVAN_DATA.stays[0];

  // Wizard state
  let currentStep = 1;
  const totalSteps = 5;

  let bookingState = {
    stayId: stay.id,
    stayName: stay.name,
    stayImage: stay.images[0],
    location: stay.location,
    checkIn: urlParams.get('in') || '2026-11-20',
    checkOut: urlParams.get('out') || '2026-11-24',
    adults: parseInt(urlParams.get('adults') || '2', 10),
    children: parseInt(urlParams.get('children') || '0', 10),
    rooms: parseInt(urlParams.get('rooms') || '1', 10),
    nights: 4,
    guestInfo: {
      firstName: 'Julian',
      lastName: 'Sterling',
      email: 'julian.sterling@example.com',
      phone: '+1 (802) 555-0194',
      specialRequests: ''
    },
    addOns: {
      breakfastHamper: false,
      orchardTasting: false,
      firewoodBundle: false
    },
    discountPercent: 0,
    discountCode: '',
    paymentMethod: 'card',
    paymentDetails: {},
    confirmedBookingId: ''
  };

  // Populate Stay Info Card in Sidebar & Step 1
  function populateStayOverview() {
    document.querySelectorAll('.checkout-stay-title').forEach(el => el.textContent = stay.name);
    document.querySelectorAll('.checkout-stay-location').forEach(el => el.textContent = stay.location);
    document.querySelectorAll('.checkout-stay-img').forEach(el => {
      el.src = stay.images[0];
      el.alt = stay.name;
    });
    document.querySelectorAll('.checkout-stay-price').forEach(el => el.textContent = `$${stay.price}`);
    document.querySelectorAll('.checkout-stay-rating').forEach(el => el.textContent = `${stay.rating.toFixed(2)} (${stay.reviewsCount} reviews)`);
  }

  function calculateNights() {
    const inD = new Date(bookingState.checkIn);
    const outD = new Date(bookingState.checkOut);
    let diff = Math.ceil((outD - inD) / (1000 * 60 * 60 * 24));
    if (isNaN(diff) || diff < 1) diff = 1;
    bookingState.nights = diff;
    return diff;
  }

  function calculateTotals() {
    const nights = calculateNights();
    const baseCost = stay.price * nights * bookingState.rooms;
    const cleaningFee = 65;
    const serviceFee = Math.round(baseCost * 0.12);
    const taxes = Math.round(baseCost * 0.08);

    let addOnsTotal = 0;
    if (bookingState.addOns.breakfastHamper) addOnsTotal += 45;
    if (bookingState.addOns.orchardTasting) addOnsTotal += 60;
    if (bookingState.addOns.firewoodBundle) addOnsTotal += 25;

    let subTotalWithExtras = baseCost + cleaningFee + serviceFee + taxes + addOnsTotal;
    let discountAmount = 0;
    if (bookingState.discountPercent > 0) {
      discountAmount = Math.round(subTotalWithExtras * (bookingState.discountPercent / 100));
    }
    const finalTotal = subTotalWithExtras - discountAmount;

    // Update UI elements
    const nightsEl = document.getElementById('summary-nights');
    if (nightsEl) nightsEl.textContent = `${nights} Nights`;

    const baseEl = document.getElementById('summary-base-rate');
    if (baseEl) baseEl.textContent = `$${baseCost}`;

    const cleanEl = document.getElementById('summary-cleaning');
    if (cleanEl) cleanEl.textContent = `$${cleaningFee}`;

    const serviceEl = document.getElementById('summary-service');
    if (serviceEl) serviceEl.textContent = `$${serviceFee}`;

    const taxesEl = document.getElementById('summary-taxes');
    if (taxesEl) taxesEl.textContent = `$${taxes}`;

    const extrasRow = document.getElementById('summary-extras-row');
    const extrasAmountEl = document.getElementById('summary-extras-amount');
    if (extrasRow && extrasAmountEl) {
      if (addOnsTotal > 0) {
        extrasRow.classList.remove('hidden');
        extrasAmountEl.textContent = `+$${addOnsTotal}`;
      } else {
        extrasRow.classList.add('hidden');
      }
    }

    const discountRow = document.getElementById('summary-discount-row');
    const discountAmountEl = document.getElementById('summary-discount-amount');
    if (discountRow && discountAmountEl) {
      if (discountAmount > 0) {
        discountRow.classList.remove('hidden');
        discountAmountEl.textContent = `-$${discountAmount} (${bookingState.discountCode})`;
      } else {
        discountRow.classList.add('hidden');
      }
    }

    const totalEl = document.getElementById('summary-final-total');
    if (totalEl) totalEl.textContent = `$${finalTotal.toFixed(2)}`;

    return { nights, baseCost, cleaningFee, serviceFee, taxes, addOnsTotal, discountAmount, finalTotal };
  }

  function updateStepUI() {
    // Hide all step panels
    document.querySelectorAll('.step-panel').forEach(p => p.classList.add('hidden'));
    
    // Show current step panel
    const currentPanel = document.getElementById(`step-${currentStep}-panel`);
    if (currentPanel) {
      currentPanel.classList.remove('hidden');
      currentPanel.classList.add('animate-fade-up');
    }

    // Update step indicator tabs
    document.querySelectorAll('.wizard-step-indicator').forEach(ind => {
      const stepNum = parseInt(ind.getAttribute('data-step'), 10);
      const circle = ind.querySelector('.step-circle');
      const text = ind.querySelector('.step-label');

      if (stepNum < currentStep) {
        // Completed
        ind.classList.remove('opacity-40');
        circle.className = 'step-circle w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-xs shadow-sm';
        circle.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i>`;
      } else if (stepNum === currentStep) {
        // Active
        ind.classList.remove('opacity-40');
        circle.className = 'step-circle w-8 h-8 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center font-bold text-xs shadow-md ring-4 ring-amber-500/20';
        circle.textContent = stepNum;
      } else {
        // Upcoming
        ind.classList.add('opacity-40');
        circle.className = 'step-circle w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 flex items-center justify-center font-bold text-xs';
        circle.textContent = stepNum;
      }
    });

    if (window.lucide) lucide.createIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Next / Previous Step navigation
  function goToStep(step) {
    if (step < 1 || step > totalSteps) return;

    // Validation before moving forward
    if (step === 2 && currentStep === 1) {
      // Validate dates
      calculateNights();
    } else if (step === 3 && currentStep === 2) {
      const fname = document.getElementById('guest-fname')?.value;
      const lname = document.getElementById('guest-lname')?.value;
      const email = document.getElementById('guest-email')?.value;
      const phone = document.getElementById('guest-phone')?.value;

      if (!fname || !lname || !email || !phone) {
        SylvanToast.show('Missing Information', 'Please complete all required guest fields before continuing.', 'error');
        return;
      }

      bookingState.guestInfo.firstName = fname;
      bookingState.guestInfo.lastName = lname;
      bookingState.guestInfo.email = email;
      bookingState.guestInfo.phone = phone;
      bookingState.guestInfo.specialRequests = document.getElementById('guest-requests')?.value || '';
    } else if (step === 4 && currentStep === 3) {
      // Step 3 reviewed
    } else if (step === 5 && currentStep === 4) {
      // Payment simulated processing
      const agreeTerms = document.getElementById('agree-terms')?.checked;
      if (!agreeTerms) {
        SylvanToast.show('Terms Required', 'Please accept the countryside host agreement and cancellation policy.', 'error');
        return;
      }

      // Simulate payment processing
      const payBtn = document.getElementById('btn-confirm-payment');
      if (payBtn) {
        payBtn.disabled = true;
        payBtn.innerHTML = `<i data-lucide="loader" class="w-4 h-4 animate-spin"></i> Securing Reservation...`;
        if (window.lucide) lucide.createIcons();
      }

      setTimeout(() => {
        finalizeBooking();
      }, 1200);
      return;
    }

    currentStep = step;
    calculateTotals();
    updateStepUI();
  }

  function finalizeBooking() {
    const { nights, finalTotal } = calculateTotals();
    const generatedId = `SYL-${Math.floor(10000 + Math.random() * 90000)}`;
    bookingState.confirmedBookingId = generatedId;

    const newBookingRecord = {
      id: generatedId,
      stayId: stay.id,
      stayName: stay.name,
      stayImage: stay.images[0],
      location: stay.location,
      checkIn: bookingState.checkIn,
      checkOut: bookingState.checkOut,
      nights: nights,
      guests: { adults: bookingState.adults, children: bookingState.children },
      totalPrice: finalTotal,
      status: "Confirmed",
      paymentStatus: "Paid",
      paymentMethod: bookingState.paymentMethod === 'card' ? 'Credit Card (ending 4242)' : (bookingState.paymentMethod === 'upi' ? 'UPI Instant Transfer' : 'Net Banking'),
      bookedOn: new Date().toISOString().split('T')[0],
      hostContact: stay.host ? `${stay.host.name} (Direct Host Message)` : 'Host Concierge',
      isUpcoming: true
    };

    SylvanStore.addBooking(newBookingRecord);

    // Update Confirmation screen UI
    const confRefEl = document.getElementById('conf-booking-ref');
    if (confRefEl) confRefEl.textContent = `#${generatedId}`;

    const confStayEl = document.getElementById('conf-stay-name');
    if (confStayEl) confStayEl.textContent = stay.name;

    const confDatesEl = document.getElementById('conf-dates');
    if (confDatesEl) confDatesEl.textContent = `${bookingState.checkIn} to ${bookingState.checkOut} (${nights} nights)`;

    const confGuestsEl = document.getElementById('conf-guests');
    if (confGuestsEl) confGuestsEl.textContent = `${bookingState.adults} Adults${bookingState.children ? `, ${bookingState.children} Children` : ''}`;

    const confTotalEl = document.getElementById('conf-total-paid');
    if (confTotalEl) confTotalEl.textContent = `$${finalTotal.toFixed(2)}`;

    const confGuestNameEl = document.getElementById('conf-guest-name');
    if (confGuestNameEl) confGuestNameEl.textContent = `${bookingState.guestInfo.firstName} ${bookingState.guestInfo.lastName}`;

    const confEmailEl = document.getElementById('conf-guest-email');
    if (confEmailEl) confEmailEl.textContent = bookingState.guestInfo.email;

    currentStep = 5;
    updateStepUI();
    SylvanToast.show('Reservation Confirmed!', `Your booking #${generatedId} is saved to your Guest Dashboard.`, 'success');
  }

  // Setup Event Handlers
  document.querySelectorAll('[data-next-step]').forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(currentStep + 1);
    });
  });

  document.querySelectorAll('[data-prev-step]').forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(currentStep - 1);
    });
  });

  // Step 1 inline inputs
  const step1In = document.getElementById('step1-checkin');
  const step1Out = document.getElementById('step1-checkout');
  const step1Adults = document.getElementById('step1-adults');
  const step1Children = document.getElementById('step1-children');

  if (step1In) {
    step1In.value = bookingState.checkIn;
    step1In.addEventListener('change', (e) => {
      bookingState.checkIn = e.target.value;
      calculateTotals();
    });
  }
  if (step1Out) {
    step1Out.value = bookingState.checkOut;
    step1Out.addEventListener('change', (e) => {
      bookingState.checkOut = e.target.value;
      calculateTotals();
    });
  }
  if (step1Adults) {
    step1Adults.value = bookingState.adults;
    step1Adults.addEventListener('change', (e) => {
      bookingState.adults = parseInt(e.target.value, 10);
      calculateTotals();
    });
  }
  if (step1Children) {
    step1Children.value = bookingState.children;
    step1Children.addEventListener('change', (e) => {
      bookingState.children = parseInt(e.target.value, 10);
      calculateTotals();
    });
  }

  // Add-ons checkboxes
  document.querySelectorAll('.addon-checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      const addonKey = cb.getAttribute('data-addon');
      if (addonKey && bookingState.addOns.hasOwnProperty(addonKey)) {
        bookingState.addOns[addonKey] = cb.checked;
        calculateTotals();
      }
    });
  });

  // Coupon promo code
  const couponForm = document.getElementById('coupon-form');
  const couponInput = document.getElementById('coupon-input');
  if (couponForm && couponInput) {
    couponForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = couponInput.value.trim().toUpperCase();
      if (code === 'NATURE10' || code === 'COUNTRYSIDE10') {
        bookingState.discountPercent = 10;
        bookingState.discountCode = code;
        calculateTotals();
        SylvanToast.show('Promo Code Applied', '10% Countryside Welcome Discount has been deducted!', 'success');
      } else if (code === 'VERDANT20') {
        bookingState.discountPercent = 20;
        bookingState.discountCode = code;
        calculateTotals();
        SylvanToast.show('VIP Promo Applied', '20% Countryside Patron Discount has been deducted!', 'success');
      } else {
        SylvanToast.show('Invalid Code', 'Try "NATURE10" for 10% off your countryside getaway.', 'error');
      }
    });
  }

  // Payment Method Switching Tabs
  document.querySelectorAll('.payment-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const method = btn.getAttribute('data-method');
      bookingState.paymentMethod = method;

      document.querySelectorAll('.payment-tab-btn').forEach(b => {
        b.classList.remove('border-emerald-800', 'bg-emerald-50/50', 'dark:bg-emerald-950/30', 'text-emerald-900', 'dark:text-emerald-300');
        b.classList.add('border-stone-200', 'dark:border-stone-700');
      });
      btn.classList.add('border-emerald-800', 'bg-emerald-50/50', 'dark:bg-emerald-950/30', 'text-emerald-900', 'dark:text-emerald-300');
      btn.classList.remove('border-stone-200', 'dark:border-stone-700');

      document.querySelectorAll('.payment-panel').forEach(p => p.classList.add('hidden'));
      const activePanel = document.getElementById(`payment-${method}-panel`);
      if (activePanel) activePanel.classList.remove('hidden');
    });
  });

  // Credit card preview formatting
  const cardNumberInput = document.getElementById('card-number-input');
  if (cardNumberInput) {
    cardNumberInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      let matches = v.match(/\d{4,16}/g);
      let match = (matches && matches[0]) || '';
      let parts = [];
      for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
      }
      if (parts.length) {
        e.target.value = parts.join(' ');
      }
      const previewEl = document.getElementById('card-preview-number');
      if (previewEl) previewEl.textContent = e.target.value || '•••• •••• •••• 4242';
    });
  }

  // Print Receipt Button in Confirmation
  const printBtn = document.getElementById('btn-print-receipt');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Initial setup
  populateStayOverview();
  calculateTotals();
  updateStepUI();
});

