// ===============================
// HIDE SHOW BIBLE, DIGLOT TAGALOG ENGLISH DITO.
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
// FONT SIZE CHANGE DITO
// ===============================

document.addEventListener('DOMContentLoaded', function () {

  let savedFontSize = localStorage.getItem('bibleFontSize');
  let fontSize = savedFontSize ? parseFloat(savedFontSize) : null;

  function applyFontSize() {

    document.querySelectorAll('.spanenglishbible').forEach(el => {
      el.style.fontSize = fontSize + 'em';
    });

    document.querySelectorAll('.spantagalogbible').forEach(el => {
      el.style.fontSize = fontSize + 'em';
    });

  }

  window.increaseFont = function () {

    if (fontSize === null) fontSize = 1;

    fontSize += 0.1;

    localStorage.setItem('bibleFontSize', fontSize);

    applyFontSize();

  };

  window.decreaseFont = function () {

    if (fontSize === null) fontSize = 1;

    fontSize -= 0.05;

    if (fontSize < 0.6) fontSize = 0.6;

    localStorage.setItem('bibleFontSize', fontSize);

    applyFontSize();

  };

  window.resetFont = function () {

    fontSize = null;

    localStorage.removeItem('bibleFontSize');

    document.querySelectorAll('.spanenglishbible').forEach(el => {
      el.style.fontSize = '';
    });

    document.querySelectorAll('.spantagalogbible').forEach(el => {
      el.style.fontSize = '';
    });

  };

  if (fontSize !== null) {
    applyFontSize();
  }

});




// ===============================
// FONT STYLE DITO
//


function applyFont(fontClass) {

  // SAVE
  localStorage.setItem('fontFamilyS', fontClass);

  // MAIN CONTAINER
  const container = document.getElementById('FontChanger');

  // REMOVE ALL FONT CLASSES
  container.classList.remove(
    'litF',
    'lorF',
    'elaF',
    'opsF',
    'indF',
    'lexF',
    'pbsF',
    'ariF'
  );

  // ADD SELECTED FONT
  container.classList.add(fontClass);
}


// ===============================
// BUTTON FUNCTIONS
// ===============================

function LiterataSF() {
  applyFont('litF');
}

function LoraSF() {
  applyFont('lorF');
}

function GelasioSF() {
  applyFont('elaF');
}

function OpenSS() {
  applyFont('opsF');
}

function InterSS() {
  applyFont('indF');
}

function LexendSS() {
  applyFont('lexF');
}

function PublicSS() {
  applyFont('pbsF');
}

function ArimoSS() {
  applyFont('ariF');
}


// ===============================
// AUTO RESTORE
// ===============================

document.addEventListener('DOMContentLoaded', function () {

  const saved =
    localStorage.getItem('fontFamilyS') || 'ariF';

  applyFont(saved);

});











// ===============================
// FONT WEIGHT DITO
// ===============================
// ===============================
// FONT WEIGHT
// ===============================

function applyFontWeight(fontWeight) {

  // SAVE
  localStorage.setItem('fontFamilyWeight', fontWeight);

  // CONTAINER
  const container =
    document.getElementById('FontWeightChanger');

  // REMOVE OLD
  container.classList.remove(
    'FW200',
    'FW300',
    'FW350',
    'FW400',
    'FW450',
    'FW500',
    'FW550',
    'FW600',
    'FW650',
    'FW700',
    'FW800',
    'FW900'
  );

  // ADD NEW
  container.classList.add(fontWeight);
}


// ===============================
// BUTTONS
// ===============================

function FW600FF() {
  applyFontWeight('FW600');
}

function FW550FF() {
  applyFontWeight('FW550');
}

function FW500FF() {
  applyFontWeight('FW500');
}

function FW450FF() {
  applyFontWeight('FW450');
}

function FW400FF() {
  applyFontWeight('FW400');
}

function FW350FF() {
  applyFontWeight('FW350');
}


// ===============================
// AUTO RESTORE
// ===============================

document.addEventListener('DOMContentLoaded', function () {

  const saved =
    localStorage.getItem('fontFamilyWeight')
    || 'FW400';

  applyFontWeight(saved);

});


