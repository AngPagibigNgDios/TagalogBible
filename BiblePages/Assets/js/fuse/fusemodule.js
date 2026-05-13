import Fuse from '/BiblePages/Assets/js/fuse/fuse.min.js';

let fuse;

/* -------------------------------------------------
HELPER: FLATTEN JSON
-------------------------------------------------- */
function flattenBible (rawData) {
  const result = [];

  Object.keys (rawData).forEach (bookId => {
    const book = rawData[bookId];

    Object.keys (book.chapters).forEach (chapterId => {
      const verses = book.chapters[chapterId];

      verses.forEach (verse => {
        result.push ({
          bookId,
          chapterId,
          v: verse.v,
          eng: verse.eng,
          tag: verse.tag,
          tes: book.tes,
          test: book.test,
          tesl: book.tesl,
          bke: book.bke,
          bkt: book.bkt,
          bkl: book.bkl,
        });
      });
    });
  });

  return result;
}

/* -------------------------------------------------
1. LOAD EVERYTHING SEQUENTIALLY (NO Promise.all)
-------------------------------------------------- */
async function loadBible () {
  const nt01 = await fetch ('/BiblePages/Assets/js/fuse/NT01M.json').then (r =>
    r.json ()
  );
  const nt02 = await fetch ('/BiblePages/Assets/js/fuse/NT02M.json').then (r =>
    r.json ()
  );

  const ot01 = await fetch ('/BiblePages/Assets/js/fuse/OT01M.json').then (r =>
    r.json ()
  );
  const ot02 = await fetch ('/BiblePages/Assets/js/fuse/OT02M.json').then (r =>
    r.json ()
  );
  const ot03 = await fetch ('/BiblePages/Assets/js/fuse/OT03M.json').then (r =>
    r.json ()
  );
  const ot04 = await fetch ('/BiblePages/Assets/js/fuse/OT04M.json').then (r =>
    r.json ()
  );
  const ot05 = await fetch ('/BiblePages/Assets/js/fuse/OT05M.json').then (r =>
    r.json ()
  );

  /* -------------------------------------------------
  2. MERGE EVERYTHING
  -------------------------------------------------- */
  const rawData = {
    ...nt01,
    ...nt02,
    ...ot01,
    ...ot02,
    ...ot03,
    ...ot04,
    ...ot05,
  };

  console.log ('All Bible data loaded');

  /* -------------------------------------------------
  3. BUILD FUSE INDEX
  -------------------------------------------------- */
  const flat = flattenBible (rawData);

  fuse = new Fuse (flat, {
    keys: ['bke', 'eng', 'tag'],
    threshold: 0.2,
    distance: 100,
    findAllMatches: false,
    ignoreLocation: true,
    includeMatches: true,
    tokenize: true, 
    minMatchCharLength: 3,
  });

  console.log ('Search ready');
}

/* START LOADING IMMEDIATELY */
loadBible ();
document.getElementById('searchBox').addEventListener('keydown', function (e) {
  if (e.key !== 'Enter') return;

  if (!fuse) {
    console.log('Search not ready yet...');
    return;
  }

  const results = fuse.search(this.value);

  let html = '';

  if (results.length > 0) {
  html += `<div class="searchHeader">SEARCH RESULTS</div>`;
}

  results.forEach((r, index) => {
    const item = r.item;


    // 1. DEFAULT STRINGS
    let displayEng = item.eng;
    let displayTag = item.tag;

    // 2. APPLY HIGHLIGHTS IF MATCHES EXIST
    if (r.matches) {
      r.matches.forEach(match => {
        if (match.key === 'eng') {
          displayEng = highlightMatches(match.value, match.indices);
        }
        if (match.key === 'tag') {
          displayTag = highlightMatches(match.value, match.indices);
        }
      });
    }

    // 3. BUILD HTML for this row
    let rowHtml = `
      <div class="FontChanger">
        <div class="FontWeightChanger">
          <table class="nondiglotresizer nondiglotLabel CustomizedTableBG" id="chapter" style="margin-bottom:1%;">
            <tr class="TITLETR">
              <td class="tdenglishbible TITLETD TITLETDR"> 
                <a href="BiblePages/${item.tesl}/${item.bookId}-${item.bkl}-chapter-${item.chapterId}.html#verse-${item.v}" style="display:block;width:100%;height:100%;text-decoration:none;color:inherit;">
                  <span class="englishresulttitle">${item.bke} ${item.chapterId} : ${item.v}</span>
                  <span class="TestamentResult">${item.tes}</span>
                </a>
              </td>
              <td class="tdtagalogbible TITLETDT TITLETDR"> 
                <a href="BiblePages/${item.tesl}/${item.bookId}-${item.bkl}-chapter-${item.chapterId}.html#verse-${item.v}" style="display:block;width:100%;height:100%;text-decoration:none;color:inherit;">
                  <span class="tagalogresulttitle">${item.bkt} ${item.chapterId} : ${item.v}</span>
                  <span class="TestamentResult">${item.test}</span>
                </a>
              </td> 
            </tr>
            <tr id="verse-${item.v}" class="verse">
              <td class="tdenglishbible">
                <span class="verse spanenglishbible">
                  <span class="verseNo verseNoEnglishBible">${item.v}</span>
                  ${displayEng}
                </span>
              </td>
              <td class="tdtagalogbible">
                <div class="bgseparatortagalog">
                  <span class="verse spantagalogbible">
                    <span class="verseNo verseNoTagalog">${item.v}</span> ${displayTag}
                  </span>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    `;

    // append the row
    html += rowHtml;

  
     
// Check for 10 first! 
 if ((index + 1) % 10 === 0) {
    html += `<div id="closeBtn" onclick="closeSearch()">Close Search</div>`;
} 
// 10th, check if it's the 5th
else if ((index + 1) % 5 === 0) {
    html += `<div class="gobacktosearch" onclick="gobackToSearchBar()">Go Back To Search</div>`;
}


  });

  if (results.length > 0) {
  html += `<div class="searchFooter">
             <button onclick="closeSearch()">Close All Results</button>
           </div>`;
  }
  
  

  // Inject the HTML
  document.getElementById('searchResults').innerHTML = html || '<p>No results found.</p>';

  // 4. RE-APPLY CUSTOMIZATIONS
  restoreSettings();
});



// Inside your search input event listener
/* -------------------------------------------------
RESTORE SETTINGS FUNCTION
-------------------------------------------------- */
function restoreSettings() {
  // Restore Language Mode (English/Tagalog/Both)
  const savedMode = localStorage.getItem('bibleMode') || 'both';
  if (typeof applyMode === 'function') applyMode(savedMode);

  // Restore Font Family
  const savedFont = localStorage.getItem('fontFamilyS') || 'ariF';
  if (typeof applyFont === 'function') applyFont(savedFont);

  // Restore Font Weight
  const savedWeight = localStorage.getItem('fontFamilyWeight') || 'FW500';
  if (typeof applyFontWeight === 'function') applyFontWeight(savedWeight);

  // Restore Font Size
  const savedSize = localStorage.getItem('bibleFontSize');
  if (savedSize) {
    const size = parseFloat(savedSize);
    document.querySelectorAll('.spanenglishbible, .spantagalogbible').forEach(el => {
      el.style.fontSize = size + 'em';
    });
  }
}
/* -------------------------------------------------
HIGHLIGHTER FUNCTION (Place this outside the listener)
-------------------------------------------------- */
function highlightMatches(text, indices) {
  if (!indices || !indices.length) return text;

  const sortedIndices = [...indices].sort((a, b) => a[0] - b[0]);

  let result = '';
  let lastIndex = 0;

  sortedIndices.forEach(([start, end]) => {
    const matchText = text.slice(start, end + 1);

    // Check word boundaries: start of string or non-word char before, and end of string or non-word char after
    const beforeChar = start === 0 ? ' ' : text[start - 1];
    const afterChar = end === text.length - 1 ? ' ' : text[end + 1];

    const isWordBoundary =
      /\W/.test(beforeChar) && /\W/.test(afterChar);

    if (!isWordBoundary) {
      // skip highlighting if it's just a fuzzy fragment inside a word
      return;
    }

    result += text.slice(lastIndex, start);
    result += `<mark>${matchText}</mark>`;
    lastIndex = end + 1;
  });

  result += text.slice(lastIndex);
  return result;
}

