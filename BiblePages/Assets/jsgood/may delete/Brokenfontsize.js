document.addEventListener ('DOMContentLoaded', function () {
  let fontSize = parseFloat (localStorage.getItem ('bibleFontSize')) || 1;

  function applyFontSize () {
    document.querySelectorAll ('.spanenglishbible').forEach (el => {
      el.style.fontSize = 1 * fontSize + 'em';
    });

    document.querySelectorAll ('.spantagalogbible').forEach (el => {
      el.style.fontSize = 1 * fontSize + 'em';
    });
  }

  window.increaseFont = function () {
    fontSize += 0.1;
    localStorage.setItem ('bibleFontSize', fontSize);
    applyFontSize ();
  };

  window.decreaseFont = function () {
    fontSize -= 0.05;
    if (fontSize < 0.6) fontSize = 0.6;
    localStorage.setItem ('bibleFontSize', fontSize);
    applyFontSize ();
  };

  window.resetFont = function () {
    fontSize = 1;
    localStorage.removeItem ('bibleFontSize');

    document.querySelectorAll ('.spanenglishbible').forEach (el => {
      el.style.fontSize = '';
    });

    document.querySelectorAll ('.spantagalogbible').forEach (el => {
      el.style.fontSize = '';
    });
  };

  applyFontSize ();
});
