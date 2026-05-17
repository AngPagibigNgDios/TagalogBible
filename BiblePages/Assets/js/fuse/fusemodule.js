let fuse;
let searchReady = false;/* -------------------------------------------------
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
}/* -------------------------------------------------
FUSE OPTIONS
-------------------------------------------------- */
const fuseOptions = {
  keys: ['bke', 'eng', 'tag'],
  threshold: 0.4,
  distance: 100,
  findAllMatches: true,
  ignoreLocation: true,
  includeMatches: true,
  minMatchCharLength: 3,
};/* -------------------------------------------------
LOAD BIBLE (with IndexedDB cache via localForage)
-------------------------------------------------- */
async function loadBible() {
  const searchResultsDiv = document.getElementById('searchResults');
  if (searchResultsDiv) {
    searchResultsDiv.innerHTML = '<p style="text-align:center;" class="preparing">Preparing Bible for offline search...</p>';
  }  try {
    console.log('Checking IndexedDB...');
    const savedData = await localforage.getItem('fuseData');    if (savedData && savedData.length) {
      console.log('Restoring Bible from IndexedDB...');
      fuse = new Fuse(savedData, fuseOptions);
      searchReady = true;
      if (searchResultsDiv) searchResultsDiv.innerHTML = '';
      console.log('Search ready from IndexedDB');
      return;
    }    console.log('IndexedDB empty. Fetching JSON...');
    const files = [
      '../Assets/js/fuse/NT01M.json',
      '../Assets/js/fuse/NT02M.json',
      '../Assets/js/fuse/OT01M.json',
      '../Assets/js/fuse/OT02M.json',
      '../Assets/js/fuse/OT03M.json',
      '../Assets/js/fuse/OT04M.json',
      '../Assets/js/fuse/OT05M.json'
    ];    const responses = await Promise.all(
      files.map(url =>
        fetch(url).then(r => {
          if (!r.ok) throw new Error(`HTTP error! status: ${r.status} for file: ${url}`);
          return r.json();
        })
      )
    );    console.log('JSON fetched');
    const rawData = Object.assign({}, ...responses);
    const flat = flattenBible(rawData);    fuse = new Fuse(flat, fuseOptions);
    searchReady = true;
    if (searchResultsDiv) searchResultsDiv.innerHTML = '';
    console.log('Search ready');    localforage.setItem('fuseData', flat)
      .then(() => console.log('IndexedDB saved'))
      .catch(err => console.error('IndexedDB save failed:', err));  } catch (err) {
    console.error('Bible loading error:', err);
    if (searchResultsDiv) {
      searchResultsDiv.innerHTML = `
        <div style="color: red; padding: 20px; text-align: center;">
          <p>Search failed to load.</p>
          <small>${err.message}</small>
        </div>`;
    }
  }
}/* -------------------------------------------------
SEARCH BOX LISTENER
-------------------------------------------------- */
function setupSearchBox() {
  const searchBox = document.getElementById('searchBox');
  if (!searchBox) return;  searchBox.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;    const searchResultsDiv = document.getElementById('searchResults');
    if (!searchReady) {
      if (searchResultsDiv) {
        searchResultsDiv.innerHTML = '<p>Loading search index...</p>';
      }
      return;
    }    const results = fuse.search(this.value);
    let html = '';    if (results.length > 0) {
      html += `<div class="searchHeader">SEARCH RESULTS</div><br/>
      <div class="resultdiglot"><div class="controldiglot" onclick="showEnglishOnly()"> ENGLISH </div>
<div class="controldiglot" onclick="showTagalogOnly()"> TAGALOG </div>
<div class="controldiglot" onclick="showAll()"> DIGLOT </div></div>`;
    }    results.forEach((r, index) => {
      const item = r.item;
      let displayEng = item.eng;
      let displayTag = item.tag;      if (r.matches) {
        r.matches.forEach(match => {
          if (match.key === 'eng') displayEng = highlightMatches(match.value, match.indices);
          if (match.key === 'tag') displayTag = highlightMatches(match.value, match.indices);
        });
      }      html += `
        <div class="FontChanger">
          <div class="FontWeightChanger">
            <table class="nondiglotresizer nondiglotLabel CustomizedTableBG tablemarginremover chaptertable">
              <tr class="TITLETR">
                <td class="tdenglishbible TITLETD TITLETDR">
                  <a href="../${item.tesl}/${item.bookId}-${item.bkl}-chapter-${item.chapterId}.html#verse-${item.v}" style="display:block;width:100%;height:100%;text-decoration:none;color:inherit;">
                    <span class="englishresulttitle">${item.bke} ${item.chapterId} : ${item.v}</span>
                    <span class="TestamentResult">${item.tes}</span>
                  </a>
                </td>
                <td class="tdtagalogbible TITLETDT TITLETDR">
                  <a href="../${item.tesl}/${item.bookId}-${item.bkl}-chapter-${item.chapterId}.html#verse-${item.v}" style="display:block;width:100%;height:100%;text-decoration:none;color:inherit;">
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
                    <span class="verse spantagalogbible" lang="tl">
                      <span class="verseNo verseNoTagalog">${item.v}</span>
                      ${displayTag}
                    </span>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      `;
// Check for 10 first! 
if ((index + 1) % 10 === 0) {
    html += `<div class="closesearch" onclick="closeSearch()">Close Search Result</div>`;
} 
// If it wasn't the 10th, check if it's the 5th
else if ((index + 1) % 15 === 0) {
    html += `<div class="gobacktosearch2">If you can't search again, refresh the page.</div>`;
}      
    });    if (results.length > 0) {
      html += `
        <div class="searchFooter">
          <button onclick="closeSearch()">Close All Results</button>
        </div>`;
    }    if (searchResultsDiv) {
      searchResultsDiv.innerHTML = html || '<p>No results found.</p>';
    }    restoreSettings();
  });
}/* -------------------------------------------------
RESTORE SETTINGS & HIGHLIGHTER
-------------------------------------------------- */
function restoreSettings() {
  const savedMode = localStorage.getItem('bibleMode') || 'both';
  if (typeof applyMode === 'function') applyMode(savedMode);  const savedFont = localStorage.getItem('fontFamilyS') || 'ariF';
  if (typeof applyFont === 'function') applyFont(savedFont);  const savedWeight = localStorage.getItem('fontFamilyWeight') || 'FW500';
  if (typeof applyFontWeight === 'function') applyFontWeight(savedWeight);  const savedSize = localStorage.getItem('bibleFontSize');
  if (savedSize) {
    const size = parseFloat(savedSize);
    document.querySelectorAll('.spanenglishbible, .spantagalogbible').forEach(el => {
      el.style.fontSize = size + 'em';
    });
  }
}function highlightMatches(text, indices) {
  if (!indices || !indices.length) return text;
  const sortedIndices = [...indices].sort((a, b) => a[0] - b[0]);
  let result = '';
  let lastIndex = 0;  sortedIndices.forEach(([start, end]) => {
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
}/* -------------------------------------------------
INIT
-------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  loadBible();
  setupSearchBox();
});
