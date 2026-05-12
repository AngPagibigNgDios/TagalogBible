(function () {
  let arrowNavEnabled = true;

  const prevLink = document.getElementById('LinkToPrev');
  const nextLink = document.getElementById('LinkToNext');

  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnToggle = document.getElementById('btnToggle');

  // --- BUTTON CLICK HANDLERS ---
  btnPrev.onclick = function () {
    if (prevLink && prevLink.href) {
      window.location.href = prevLink.href;
    }
  };

  btnNext.onclick = function () {
    if (nextLink && nextLink.href) {
      window.location.href = nextLink.href;
    }
  };

  btnToggle.onclick = function () {
    arrowNavEnabled = !arrowNavEnabled;
    btnToggle.textContent = arrowNavEnabled
      ? "Disable Arrow Keys"
      : "Enable Arrow Keys";
  };

  // --- KEYBOARD NAVIGATION ---
  document.addEventListener('keydown', function (e) {
    if (!arrowNavEnabled) return;

    // Ignore if user is using modifier keys
    if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return;

    // Ignore if typing/selecting in input/textarea
    const active = document.activeElement;
    if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) return;

    // LEFT ARROW → Previous
    if (e.key === 'ArrowLeft') {
      if (prevLink && prevLink.href) {
        window.location.href = prevLink.href;
      }
    }

    // RIGHT ARROW → Next
    if (e.key === 'ArrowRight') {
      if (nextLink && nextLink.href) {
        window.location.href = nextLink.href;
      }
    }
  });
})();