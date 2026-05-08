// ===============================
// DIGLOT MODE (PERSISTENT)
// ===============================
document.addEventListener ('DOMContentLoaded', function () {
  let pageWidth = parseFloat (localStorage.getItem ('bibleFontSize')) || 1;

  function applyPageWidth () {
    document.querySelectorAll ('.innertube').forEach (el => {
      el.style.width = 1 * width + '%';
    });

    document.querySelectorAll ('#contentcolumn').forEach (el => {
      el.style.width = 1 * width + '%';
    });
  }

  window.increaseWidth = function () {
    fontSize += 0.1;
    localStorage.setItem ('bibleFontSize', fontSize);
    applyFontSize ();
  };

  window.decreaseWidth = function () {
    fontSize -= 0.05;
    if (fontSize < 0.6) fontSize = 0.6;
    localStorage.setItem ('bibleFontSize', fontSize);
    applyFontSize ();
  };


  applyPageWidth ();
});