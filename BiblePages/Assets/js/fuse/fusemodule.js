let fuse;
let searchReady = false;

/* -------------------------------------------------
HELPER: FLATTEN JSON
-------------------------------------------------- */
function flattenBible(rawData) {

  const result = [];

  Object.keys(rawData).forEach(bookId => {

    const book = rawData[bookId];

    Object.keys(book.chapters).forEach(chapterId => {

      const verses = book.chapters[chapterId];

      verses.forEach(verse => {

        result.push({
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
FUSE OPTIONS
-------------------------------------------------- */
const fuseOptions = {
  keys: ['bke', 'eng', 'tag'],
  threshold: 0.2,
  distance: 100,
  findAllMatches: false,
  ignoreLocation: true,
  includeMatches: true,
  minMatchCharLength: 3,
};

/* -------------------------------------------------
LOAD BIBLE
-------------------------------------------------- */
async function loadBible() {

  try {

    console.log('Checking IndexedDB...');

    /* ---------------------------------------------
    TRY RESTORE FROM INDEXEDDB
    --------------------------------------------- */
    const savedData = await localforage.getItem('fuseData');

    if (savedData && savedData.length) {

      console.log('Restoring Bible from IndexedDB...');

      fuse = new Fuse(savedData, fuseOptions);

      searchReady = true;

      console.log('Search ready from IndexedDB');

      return;
    }

    /* ---------------------------------------------
    FETCH JSON FILES
    --------------------------------------------- */
    console.log('IndexedDB empty. Fetching JSON...');

    const files = [
      '/BiblePages/Assets/js/fuse/NT01M.json',
      '/BiblePages/Assets/js/fuse/NT02M.json',
      '/BiblePages/Assets/js/fuse/OT01M.json',
      '/BiblePages/Assets/js/fuse/OT02M.json',
      '/BiblePages/Assets/js/fuse/OT03M.json',
      '/BiblePages/Assets/js/fuse/OT04M.json',
      '/BiblePages/Assets/js/fuse/OT05M.json'
    ];

    const responses = await Promise.all(
      files.map(url =>
        fetch(url).then(r => r.json())
      )
    );

    console.log('JSON fetched');

    const rawData = Object.assign({}, ...responses);

    console.log('Flattening Bible...');

    const flat = flattenBible(rawData);

    console.log('Flatten complete');

    console.log('Building Fuse...');

    fuse = new Fuse(flat, fuseOptions);

    console.log('Fuse build complete');

    searchReady = true;

    console.log('Search ready');

    /* ---------------------------------------------
    SAVE CACHE IN BACKGROUND
    --------------------------------------------- */
    localforage.setItem('fuseData', flat)
      .then(() => {

        console.log('IndexedDB saved');

      })
      .catch(err => {

        console.error('IndexedDB save failed:', err);

      });

  } catch (err) {

    console.error('Bible loading error:', err);

    document.getElementById('searchResults').innerHTML =
      '<p>Search failed to load.</p>';

  }

}
/* -------------------------------------------------
START LOADING
-------------------------------------------------- */
loadBible();

/* -------------------------------------------------
SEARCH BOX
-------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('searchBox').addEventListener('keydown', function (e) {

    if (e.key !== 'Enter') return;

    /* ---------------------------------------------
    WAIT UNTIL SEARCH READY
    --------------------------------------------- */
    if (!searchReady) {

      document.getElementById('searchResults').innerHTML =
        '<p>Loading search index...</p>';

      return;
    }

    const results = fuse.search(this.value);

    let html = '';

    if (results.length > 0) {
      html += `<div class="searchHeader">SEARCH RESULTS</div>`;
    }

    results.forEach((r, index) => {

      const item = r.item;

      let displayEng = item.eng;
      let displayTag = item.tag;

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

      html += `
        <div class="FontChanger">
          <div class="FontWeightChanger">

            <table class="nondiglotresizer nondiglotLabel CustomizedTableBG"
                   style="margin-bottom:1%;">

              <tr class="TITLETR">

                <td class="tdenglishbible TITLETD TITLETDR">

                  <a href="BiblePages/${item.tesl}/${item.bookId}-${item.bkl}-chapter-${item.chapterId}.html#verse-${item.v}"
                     style="display:block;width:100%;height:100%;text-decoration:none;color:inherit;">

                    <span class="englishresulttitle">
                      ${item.bke} ${item.chapterId} : ${item.v}
                    </span>

                    <span class="TestamentResult">
                      ${item.tes}
                    </span>

                  </a>

                </td>

                <td class="tdtagalogbible TITLETDT TITLETDR">

                  <a href="BiblePages/${item.tesl}/${item.bookId}-${item.bkl}-chapter-${item.chapterId}.html#verse-${item.v}"
                     style="display:block;width:100%;height:100%;text-decoration:none;color:inherit;">

                    <span class="tagalogresulttitle">
                      ${item.bkt} ${item.chapterId} : ${item.v}
                    </span>

                    <span class="TestamentResult">
                      ${item.test}
                    </span>

                  </a>

                </td>

              </tr>

              <tr id="verse-${item.v}" class="verse">

                <td class="tdenglishbible">

                  <span class="verse spanenglishbible">

                    <span class="verseNo verseNoEnglishBible">
                      ${item.v}
                    </span>

                    ${displayEng}

                  </span>

                </td>

                <td class="tdtagalogbible">

                  <div class="bgseparatortagalog">

                    <span class="verse spantagalogbible">

                      <span class="verseNo verseNoTagalog">
                        ${item.v}
                      </span>

                      ${displayTag}

                    </span>

                  </div>

                </td>

              </tr>

            </table>

          </div>
        </div>
      `;

    });

    if (results.length > 0) {

      html += `
        <div class="searchFooter">
          <button onclick="closeSearch()">
            Close All Results
          </button>
        </div>
      `;
    }

    document.getElementById('searchResults').innerHTML =
      html || '<p>No results found.</p>';

    restoreSettings();

  });

});

/* -------------------------------------------------
RESTORE SETTINGS & HIGHLIGHTER (Unchanged)
-------------------------------------------------- */
function restoreSettings() {
  const savedMode = localStorage.getItem('bibleMode') || 'both';
  if (typeof applyMode === 'function') applyMode(savedMode);

  const savedFont = localStorage.getItem('fontFamilyS') || 'ariF';
  if (typeof applyFont === 'function') applyFont(savedFont);

  const savedWeight = localStorage.getItem('fontFamilyWeight') || 'FW500';
  if (typeof applyFontWeight === 'function') applyFontWeight(savedWeight);

  const savedSize = localStorage.getItem('bibleFontSize');
  if (savedSize) {
    const size = parseFloat(savedSize);
    document.querySelectorAll('.spanenglishbible, .spantagalogbible').forEach(el => {
      el.style.fontSize = size + 'em';
    });
  }
}

function highlightMatches(text, indices) {
  if (!indices || !indices.length) return text;
  const sortedIndices = [...indices].sort((a, b) => a[0] - b[0]);
  let result = '';
  let lastIndex = 0;

  sortedIndices.forEach(([start, end]) => {
    const matchText = text.slice(start, end + 1);
    const beforeChar = start === 0 ? ' ' : text[start - 1];
    const afterChar = end === text.length - 1 ? ' ' : text[end + 1];
    if (/\W/.test(beforeChar) && /\W/.test(afterChar)) {
      result += text.slice(lastIndex, start);
      result += `<mark>${matchText}</mark>`;
      lastIndex = end + 1;
    }
  });
  result += text.slice(lastIndex);
  return result;
}