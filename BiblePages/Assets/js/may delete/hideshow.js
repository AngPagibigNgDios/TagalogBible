// ===============================
// DIGLOT MODE (PERSISTENT)
// ===============================

function applyMode (mode) {
  // SAVE MODE FOR ALL PAGES
  localStorage.setItem ('bibleMode', mode);

  // TEXT VISIBILITY CONTROL
  document.querySelectorAll ('.tdenglishbible').forEach (td => {
    td.style.display = mode === 'tagalog' ? 'none' : '';
  });

  document.querySelectorAll ('.tdtagalogbible').forEach (td => {
    td.style.display = mode === 'english' ? 'none' : '';
  });

  const engList = document.querySelectorAll ('.englishLabel');
  const tagList = document.querySelectorAll ('.tagalogLabel');
  const nonDiglot = document.querySelectorAll ('.nondiglotLabel');

  if (mode === 'both') {
    // REVERSE
    engList.forEach (el => {
      el.classList.add ('diglotboth');
      el.classList.remove ('tagalogleft');
    });

    tagList.forEach (el => {
      el.classList.remove ('english');
      el.classList.add ('tagalogleft');
    });

    nonDiglot.forEach (el => {
      el.classList.remove ('diglotcutwidth');
      el.classList.add ('diglotfullwidth');
    });
  }

  if (mode === 'english') {
    // REVERSE
    engList.forEach (el => {
      el.classList.remove ('english');
      el.classList.remove ('diglotboth');
      el.classList.add ('tagalogleft');
    });

    tagList.forEach (el => {
      el.classList.remove ('tagalogleft');
      el.classList.add ('english');
    });

    nonDiglot.forEach (el => {
      el.classList.remove ('diglotfullwidth');
      el.classList.add ('diglotcutwidth');
    });
  }

  if (mode === 'tagalog') {
    // NORMAL (DIGLOT + TAGALOG ONLY)
    engList.forEach (el => {
      el.classList.remove ('tagalogleft');
      el.classList.remove ('diglotboth');
      el.classList.add ('english');
    });

    tagList.forEach (el => {
      el.classList.remove ('english');
      el.classList.add ('tagalogleft');
    });
    nonDiglot.forEach (el => {
      el.classList.remove ('diglotfullwidth');
      el.classList.add ('diglotcutwidth');
    });
  }

  // SIDEBAR UPDATE
updateSidebarLanguage (mode); 
}

// BUTTON FUNCTIONS
function showAll () {
  applyMode ('both');
}

function showEnglishOnly () {
  applyMode ('english');
}

function showTagalogOnly () {
  applyMode ('tagalog');
}

// ===============================
// AUTO RESTORE ON EVERY PAGE
// ===============================
document.addEventListener ('DOMContentLoaded', function () {
  let savedMode = localStorage.getItem ('bibleMode') || 'both';
  applyMode (savedMode);
});

// ===============================
// SIDEBAR LANGUAGE TOGGLE
// ===============================
