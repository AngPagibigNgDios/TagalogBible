(function () {
  const STORAGE_KEY = 'arrowNavEnabled';  // --- LOAD STATE ---
  let arrowNavEnabled = localStorage.getItem(STORAGE_KEY);
  arrowNavEnabled = arrowNavEnabled === null ? true : (arrowNavEnabled === 'true');  const prevLink = document.getElementById('LinkToPrev');
  const nextLink = document.getElementById('LinkToNext');  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnToggle = document.getElementById('btnToggle');  // --- INITIAL BUTTON LABEL ---
  if (btnToggle) {
    btnToggle.textContent = arrowNavEnabled ? "Disable Arrow Keys" : "Enable Arrow Keys";
  }  // --- BUTTON CLICK HANDLERS ---
  if (btnPrev) {
    btnPrev.onclick = function () {
      if (prevLink && prevLink.href) window.location.href = prevLink.href;
    };
  }  if (btnNext) {
    btnNext.onclick = function () {
      if (nextLink && nextLink.href) window.location.href = nextLink.href;
    };
  }  if (btnToggle) {
    btnToggle.onclick = function () {
      arrowNavEnabled = !arrowNavEnabled;
      localStorage.setItem(STORAGE_KEY, arrowNavEnabled);
      btnToggle.textContent = arrowNavEnabled ? "Disable Arrow Keys" : "Enable Arrow Keys";
    };
  }  // --- SWIPE NAVIGATION (Always Enabled) ---
  let touchstartX = 0;
  let touchendX = 0;  // Minimum distance (in pixels) to be considered a swipe
  const minSwipeDistance = 70;   document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
  }, { passive: true });  document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleGesture();
  }, { passive: true });  function handleGesture() {
    const distance = touchendX - touchstartX;
    
    // Swipe Right (Go to Previous)
    if (distance > minSwipeDistance) {
      if (prevLink && prevLink.href) {
        window.location.href = prevLink.href;
      }
    }
    
    // Swipe Left (Go to Next)
    if (distance < -minSwipeDistance) {
      if (nextLink && nextLink.href) {
        window.location.href = nextLink.href;
      }
    }
  }  // --- KEYBOARD NAVIGATION ---
  document.addEventListener('keydown', function (e) {
    if (!arrowNavEnabled) return;
    if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return;    const active = document.activeElement;
    if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) return;    if (e.key === 'ArrowLeft') {
      if (prevLink && prevLink.href) window.location.href = prevLink.href;
    }    if (e.key === 'ArrowRight') {
      if (nextLink && nextLink.href) window.location.href = nextLink.href;
    }
  });
})();