document.addEventListener('DOMContentLoaded', function () {  let savedFontSize = localStorage.getItem('bibleFontSize');
  let fontSize = savedFontSize ? parseFloat(savedFontSize) : null;  function applyFontSize() {    document.querySelectorAll('.spanenglishbible').forEach(el => {
      el.style.fontSize = fontSize + 'em';
    });    document.querySelectorAll('.spantagalogbible').forEach(el => {
      el.style.fontSize = fontSize + 'em';
    });  }  window.increaseFont = function () {    if (fontSize === null) fontSize = 1;    fontSize += 0.1;    localStorage.setItem('bibleFontSize', fontSize);    applyFontSize();  };  window.decreaseFont = function () {    if (fontSize === null) fontSize = 1;    fontSize -= 0.05;    if (fontSize < 0.6) fontSize = 0.6;    localStorage.setItem('bibleFontSize', fontSize);    applyFontSize();  };  window.resetFont = function () {    fontSize = null;    localStorage.removeItem('bibleFontSize');    document.querySelectorAll('.spanenglishbible').forEach(el => {
      el.style.fontSize = '';
    });    document.querySelectorAll('.spantagalogbible').forEach(el => {
      el.style.fontSize = '';
    });  };  if (fontSize !== null) {
    applyFontSize();
  }});