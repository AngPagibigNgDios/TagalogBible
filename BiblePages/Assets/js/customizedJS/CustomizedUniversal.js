/////////////////////////
//                     //
//  CUSTOMIZED BG      //
//                     //
/////////////////////////



(function () {
    const html = document.documentElement;

    const defaultColor = '#3b2a1a';

    const bgType =
        localStorage.getItem('bgType') || 'image';

    const bgStyle =
        localStorage.getItem('bgStylePreference') || 'repeat';

    const bgColor =
        localStorage.getItem('bgColor') || defaultColor;

    const customBG =
        localStorage.getItem('customBG');

    // =========================
    // APPLY BACKGROUND
    // =========================

    if (bgType === 'color') {
        html.style.backgroundImage = 'none';
        html.style.backgroundColor = bgColor;
    } else {

        // Let CSS handle default background
        if (customBG) {
            html.style.backgroundImage = `url(${customBG})`;
            html.style.backgroundAttachment = 'fixed';
        }

        if (bgStyle === 'cover') {
            html.style.backgroundRepeat = 'no-repeat';
            html.style.backgroundSize = 'cover';

        } else if (bgStyle === 'contain') {
            html.style.backgroundRepeat = 'no-repeat';
            html.style.backgroundSize = 'contain';
            html.style.backgroundPosition = 'center';

        } else {
            html.style.backgroundRepeat = 'repeat';
            html.style.backgroundSize = 'auto';
        }
    }

    // =========================
    // UI SYNCHRONIZATION
    // =========================

    document.addEventListener('DOMContentLoaded', () => {

        const modeEl = document.getElementById('bgMode');
        const styleEl = document.getElementById('bgStyle');
        const colorEl = document.getElementById('bgColor');

        if (modeEl) modeEl.value = bgType;
        if (styleEl) styleEl.value = bgStyle;
        if (colorEl) colorEl.value = bgColor;

    });

})();








/////////////////////////
//                     //
//  BIBLE LANGUAGE     //
//                     //
/////////////////////////







const bibleBooksTL = {
  Genesis: 'Genesis',
  Exodus: 'Exodo',
  Leviticus: 'Levitico',
  Numbers: 'Mga Bilang',
  Deuteronomy: 'Deuteronomio',
  Joshua: 'Josue',
  Judges: 'Mga Hukom',
  Ruth: 'Ruth',
  '1 Samuel': '1 Samuel',
  '2 Samuel': '2 Samuel',
  '1 Kings': '1 Mga Hari',
  '2 Kings': '2 Mga Hari',
  '1 Chronicles': '1 Mga Cronica',
  '2 Chronicles': '2 Mga Cronica',
  Ezra: 'Ezra',
  Nehemiah: 'Nehemias',
  Esther: 'Ester',
  Job: 'Job',
  Psalms: 'Mga Awit',
  Proverbs: 'Kawikaan',
  Ecclesiastes: 'Eclesiastes',
  'Song of Solomon': 'Awit ni Solomon',
  Isaiah: 'Isaias',
  Jeremiah: 'Jeremias',
  Lamentations: 'Mga Panaghoy',
  Ezekiel: 'Ezekiel',
  Daniel: 'Daniel',
  Hosea: 'Oseas',
  Joel: 'Joel',
  Amos: 'Amos',
  Obadiah: 'Obadias',
  Jonah: 'Jonas',
  Micah: 'Mikas',
  Nahum: 'Naum',
  Habakkuk: 'Habacuc',
  Zephaniah: 'Sofonias',
  Haggai: 'Ageo',
  Zechariah: 'Zacarias',
  Malachi: 'Malakias',
  Matthew: 'Mateo',
  Mark: 'Marcos',
  Luke: 'Lucas',
  John: 'Juan',
  Acts: 'Mga Gawa',
  Romans: 'Mga Taga Roma',
  '1 Corinthians': '1 Mga Taga Corinto',
  '2 Corinthians': '2 Mga Taga Corinto',
  Galatians: 'Mga Taga Galacia',
  Ephesians: 'Mga Taga Efeso',
  Philippians: 'Mga Taga Filipos',
  Colossians: 'Mga Taga Colosas',
  '1 Thessalonians': '1 Mga Taga Tesalonica',
  '2 Thessalonians': '2 Mga Taga Tesalonica',
  '1 Timothy': '1 Timoteo',
  '2 Timothy': '2 Timoteo',
  Titus: 'Tito',
  Philemon: 'Filemon',
  Hebrews: 'Mga Hebreo',
  James: 'Santiago',
  '1 Peter': '1 Pedro',
  '2 Peter': '2 Pedro',
  '1 John': '1 Juan',
  '2 John': '2 Juan',
  '3 John': '3 Juan',
  Jude: 'Judas',
  Revelation: 'Pahayag',
};

// 1. Function to clean the title and update the header div instantly
function refreshHeaderDisplay () {
  const inputField = document.getElementById ('verseInput');
  const displayDiv = document.getElementById ('display-title2');
  if (!inputField || !displayDiv) return;

  let rawInput = inputField.value.trim ();

  // Update the URL hash
  if (rawInput) {
    window.location.hash = 'verse-' + rawInput;
  } else {
    history.replaceState (null, null, ' ');
  }

  // Get the base title from the document (removing any old verse string)
  let baseTitle = document.title.split (' :')[0].trim ();

  // Format the verse string for display
  let cleanInput = decodeURIComponent (rawInput)
    .replace (/[,\s]+/g, ',\u00A0')
    .replace (/-/g, '\u00A0\u2014\u00A0');

  let verseDisplay = rawInput ? `\u00A0\u00A0:\u00A0\u00A0${cleanInput}` : '';

  // Update Browser Tab
  document.title = baseTitle + (rawInput ? ' : ' + rawInput : '');

  // Update the Div
  displayDiv.innerHTML = `${baseTitle}${verseDisplay}`;
}

// 2. Click Listener for verse links (vlink) AND clicking the rows
document.addEventListener ('click', function (e) {
  const vlink = e.target.closest ('.vlink');
  const row = e.target.closest ("tr[id^='verse-']");
  const inputField = document.getElementById ('verseInput');

  if (vlink && inputField) {
    const verseNum = vlink.getAttribute ('href').split ('#verse-')[1];
    inputField.value = decodeURIComponent (verseNum);
    applyVerseHighlight ();
    refreshHeaderDisplay ();
  } else if (row && inputField) {
    const verseNum = row.id.replace ('verse-', '');
    inputField.value = verseNum;
    applyVerseHighlight ();
    refreshHeaderDisplay ();
  }
});

// 3. Combined Load logic
window.onload = function () {
  const input = document.getElementById ('verseInput');
  const hash = window.location.hash;

  if (input && hash.includes ('#verse-')) {
    input.value = decodeURIComponent (hash.replace ('#verse-', ''));
    applyVerseHighlight ();
  }

  if (input) {
    input.addEventListener ('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault ();
        applyVerseHighlight ();
        refreshHeaderDisplay ();
      }
    });
  }

  refreshHeaderDisplay (); // Initial draw

  if (typeof updateSidebarLanguage === 'function') {
    updateSidebarLanguage ('both');
  }
};













///////////////////////////
//                       //
//HIGHLIGHT JS AND VERSE //
//                       //
///////////////////////////








let verseLanguageMode = 'both'; // display mode
let copyMode = 'both'; // copy mode

// ---------------------------
// HELPER: Get Title
// ---------------------------
function getCleanCitation () {
  var fullTitle = document.title || '';
  var cleanTitle = fullTitle
    .replace (/EnglishTagalogBible\.Com\s*—\s*/gi, '')
    .trim ();
  return cleanTitle;
}

// ---------------------------
// HELPER: Sort & Format Range (e.g., 1, 5, 9-11)
// ---------------------------
function getSortedRangeString (highlightedRows) {
  const nums = highlightedRows.map (row =>
    parseInt (row.id.replace ('verse-', ''), 10)
  );
  if (nums.length === 0) return '';

  let result = [];
  let start = nums[0];
  let end = nums[0];

  for (let i = 1; i <= nums.length; i++) {
    if (i < nums.length && nums[i] === end + 1) {
      end = nums[i];
    } else {
      result.push (start === end ? start : `${start}-${end}`);
      if (i < nums.length) {
        start = nums[i];
        end = nums[i];
      }
    }
  }
  return result.join (', ');
}

// ---------------------------
// HELPER: Parse Title into components
// ---------------------------
function getParsedTitle () {
  let fullTitle = getCleanCitation ().trim ();

  let data = {
    engBook: '',
    tlBook: '',
    chapter: ''
  };

  // Matches:
  // (Mateo) Matthew 1
  // (Exodo) Exodus 4
  const match = fullTitle.match (/^\((.*?)\)\s*(.*?)\s+(\d+)$/);

  if (match) {
    data.tlBook = match[1].trim ();
    data.engBook = match[2].trim ();
    data.chapter = match[3].trim ();
  }

  return data;
}
// ---------------------------
// CORE FUNCTIONS: Highlight & Clear
// ---------------------------
function clearHighlights () {
  document.querySelectorAll ('tr').forEach (tr => {
    tr.classList.remove ('highlight-verse');
    const eng = tr.querySelector ('.tdenglishbible');
    const tl = tr.querySelector ('.tdtagalogbible');
    if (eng) eng.style.display = '';
    if (tl) tl.style.display = '';
  });
}

function applyVerseHighlight () {
  clearHighlights ();
  const inputField = document.getElementById ('verseInput');
  if (!inputField) return;
  const input = inputField.value.trim ();
  if (!input) return;

  let targets = [];
  let parts = input.split (/[,\s]+/);

  parts.forEach (part => {
    part = part.trim ();
    if (!part) return;
    if (part.includes ('-')) {
      let [start, end] = part.split ('-').map (n => parseInt (n.trim (), 10));
      if (!isNaN (start) && !isNaN (end)) {
        let actualStart = Math.min (start, end);
        let actualEnd = Math.max (start, end);
        for (let i = actualStart; i <= actualEnd; i++)
          targets.push (i);
      }
    } else {
      let num = parseInt (part, 10);
      if (!isNaN (num)) targets.push (num);
    }
  });

  targets = [...new Set (targets)];
  let firstMatch = null;

  targets.forEach (num => {
    const row = document.getElementById ('verse-' + num);
    if (row) {
      row.classList.add ('highlight-verse');
      const eng = row.querySelector ('.tdenglishbible');
      const tl = row.querySelector ('.tdtagalogbible');
      if (verseLanguageMode === 'english' && tl) tl.style.display = 'none';
      if (verseLanguageMode === 'tagalog' && eng) eng.style.display = 'none';
      if (!firstMatch) firstMatch = row;
    }
  });

  if (firstMatch)
    firstMatch.scrollIntoView ({behavior: 'smooth', block: 'center'});
}

// ---------------------------
// COPY FUNCTIONS
// ---------------------------
async function performCopy (text, label) {
  try {
    await navigator.clipboard.writeText (text);
    alert (label + ' COPIED!');
  } catch (err) {
    console.error ('Copy failed', err);
  }
}

function copyEnglish () {
  const highlightedRows = Array.from (
    document.querySelectorAll ('tr.highlight-verse')
  );
  if (highlightedRows.length === 0) return alert ('No verses highlighted!');

  highlightedRows.sort (
    (a, b) =>
      parseInt (a.id.replace ('verse-', ''), 10) -
      parseInt (b.id.replace ('verse-', ''), 10)
  );

  const info = getParsedTitle ();
  const sortedRanges = getSortedRangeString (highlightedRows);
  const cleanTitle = `${info.engBook} ${info.chapter} : ${sortedRanges}`;

  let output = [cleanTitle];
  highlightedRows.forEach (row => {
    const verseNo = row.id.replace ('verse-', '');
    let text = row
      .querySelector ('.tdenglishbible')
      .innerText.trim ()
      .replace (/^\d+\s*/, '');
    output.push (`${verseNo} ${text}`);
  });

  performCopy (output.join ('\n\n'), 'ENGLISH');
}

function copyTagalog () {
  const highlightedRows = Array.from (
    document.querySelectorAll ('tr.highlight-verse')
  );
  if (highlightedRows.length === 0) return alert ('No verses highlighted!');

  highlightedRows.sort (
    (a, b) =>
      parseInt (a.id.replace ('verse-', ''), 10) -
      parseInt (b.id.replace ('verse-', ''), 10)
  );

  const info = getParsedTitle ();
  const sortedRanges = getSortedRangeString (highlightedRows);
  const cleanTitle = `${info.tlBook} ${info.chapter} : ${sortedRanges}`;

  let output = [cleanTitle];
  highlightedRows.forEach (row => {
    const verseNo = row.id.replace ('verse-', '');
    let text = row
      .querySelector ('.tdtagalogbible')
      .innerText.trim ()
      .replace (/^\d+\s*/, '');
    output.push (`${verseNo} ${text}`);
  });

  performCopy (output.join ('\n\n'), 'TAGALOG');
}

function copyBoth () {
  const highlightedRows = Array.from (
    document.querySelectorAll ('tr.highlight-verse')
  );
  if (highlightedRows.length === 0) return alert ('No verses highlighted!');

  highlightedRows.sort (
    (a, b) =>
      parseInt (a.id.replace ('verse-', ''), 10) -
      parseInt (b.id.replace ('verse-', ''), 10)
  );

  const info = getParsedTitle ();
  const sortedRanges = getSortedRangeString (highlightedRows);

  let tagalogLines = [`${info.tlBook} ${info.chapter} : ${sortedRanges}`];
  let englishLines = [`${info.engBook} ${info.chapter} : ${sortedRanges}`];

  highlightedRows.forEach (row => {
    const verseNo = row.id.replace ('verse-', '');
    let engText = row
      .querySelector ('.tdenglishbible')
      .innerText.trim ()
      .replace (/^\d+\s*/, '');
    let tlText = row
      .querySelector ('.tdtagalogbible')
      .innerText.trim ()
      .replace (/^\d+\s*/, '');
    englishLines.push (`${verseNo} ${engText}`);
    tagalogLines.push (`${verseNo} ${tlText}`);
  });

  const finalOutput = [
    tagalogLines.join ('\n'),
    '',
    englishLines.join ('\n'),
  ].join ('\n');
  performCopy (finalOutput, 'TAGALOG & ENGLISH');
}

// ---------------------------
// LISTENERS & INITIALIZE
// ---------------------------
document.addEventListener ('click', function (e) {
  const vlink = e.target.closest ('.vlink');
  const row = e.target.closest ("tr[id^='verse-']");
  const inputField = document.getElementById ('verseInput');

  if ((vlink || row) && inputField) {
    if (vlink) e.preventDefault ();
    const verseNum = vlink
      ? vlink.getAttribute ('href').split ('#verse-')[1]
      : row.id.replace ('verse-', '');

    inputField.value = decodeURIComponent (verseNum);
    history.replaceState (null, null, '#verse-' + verseNum);

    // ADD THIS LINE to ensure the highlights trigger correctly
    applyVerseHighlight ();
  }
});

function syncFromHash () {
  const input = document.getElementById('verseInput');
  if (!input) return;

  const hash = decodeURIComponent(window.location.hash);

  if (hash.startsWith('#verse-')) {
    const value = hash.replace('#verse-', '');

    // avoid unnecessary re-run
    if (input.value !== value) {
      input.value = value;
      applyVerseHighlight();
    }
  }
}

window.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('verseInput');

  if (input) {
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();

        // keep URL in sync
        history.replaceState(null, null, '#verse-' + input.value.trim());

        applyVerseHighlight();
      }
    });
  }

  // ✅ use shared function
  syncFromHash();
});
