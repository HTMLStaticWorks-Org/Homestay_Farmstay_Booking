/**
 * SYLVAN - Gallery Masonry & Fullscreen Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  const galleryGrid = document.getElementById('gallery-masonry-grid');
  if (!galleryGrid) return;

  let currentCategory = 'All';
  let activeIndex = 0;
  let currentFilteredList = [...SYLVAN_DATA.galleryItems];

  const filterButtons = document.querySelectorAll('.gallery-category-btn');
  const lightboxModal = document.getElementById('gallery-lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-active-img');
  const lightboxTitle = document.getElementById('lightbox-caption-title');
  const lightboxDesc = document.getElementById('lightbox-caption-desc');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.getElementById('lightbox-close-btn');
  const lightboxPrev = document.getElementById('lightbox-prev-btn');
  const lightboxNext = document.getElementById('lightbox-next-btn');

  function renderGallery() {
    if (currentCategory === 'All') {
      currentFilteredList = [...SYLVAN_DATA.galleryItems];
    } else {
      currentFilteredList = SYLVAN_DATA.galleryItems.filter(item => 
        item.category.toLowerCase() === currentCategory.toLowerCase()
      );
    }

    galleryGrid.innerHTML = currentFilteredList.map((item, idx) => `
      <div class="gallery-item group relative overflow-hidden rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800/80 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3] w-full" data-index="${idx}">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        
        <!-- Hover Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-800/90 text-white backdrop-blur-md w-fit mb-2">
            ${item.category}
          </span>
          <h3 class="font-serif text-base sm:text-lg font-bold leading-snug">${item.title}</h3>
          <p class="text-xs text-stone-300 flex items-center gap-1 mt-1">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-400"></i> ${item.location}
          </p>
          <div class="mt-3 flex items-center text-xs font-semibold text-amber-300 gap-1.5">
            <span>View Photo</span>
            <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click handlers to open lightbox
    galleryGrid.querySelectorAll('.gallery-item').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-index'), 10);
        openLightbox(idx);
      });
    });

    if (window.lucide) lucide.createIcons();
  }

  function openLightbox(index) {
    if (!lightboxModal) return;
    activeIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = currentFilteredList[activeIndex];
    if (!item) return;

    if (lightboxImg) {
      lightboxImg.src = item.image;
      lightboxImg.alt = item.title;
    }
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxDesc) lightboxDesc.textContent = `${item.description} — ${item.location}`;
    if (lightboxCounter) lightboxCounter.textContent = `${activeIndex + 1} of ${currentFilteredList.length}`;
  }

  function showNext() {
    activeIndex = (activeIndex + 1) % currentFilteredList.length;
    updateLightboxContent();
  }

  function showPrev() {
    activeIndex = (activeIndex - 1 + currentFilteredList.length) % currentFilteredList.length;
    updateLightboxContent();
  }

  // Filter Buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-emerald-800', 'text-white', 'shadow-sm');
        b.classList.add('bg-white', 'dark:bg-[#15221D]', 'text-stone-700', 'dark:text-stone-300');
      });
      btn.classList.add('bg-emerald-800', 'text-white', 'shadow-sm');
      btn.classList.remove('bg-white', 'dark:bg-[#15221D]', 'text-stone-700', 'dark:text-stone-300');

      currentCategory = btn.getAttribute('data-category');
      renderGallery();
    });
  });

  // Lightbox controls
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNext);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  renderGallery();
});

