import Fuse from './fuse.min.js';

let fuse;

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
          tesl: book.tesl,
          bke: book.bke,
          bkt: book.bkt,
          bkl: book.bkl
        });
      });
    });
  });

  return result;
}

/* -------------------------------------------------
1. LOAD EVERYTHING SEQUENTIALLY (NO Promise.all)
-------------------------------------------------- */
async function loadBible() {

  const nt01 = await fetch('BiblePages/Assets/js/fuse/NT01M.json').then(r => r.json());
  const nt02 = await fetch('BiblePages/Assets/js/fuse/NT02M.json').then(r => r.json());

  const ot01 = await fetch('BiblePages/Assets/js/fuse/OT01M.json').then(r => r.json());
  const ot02 = await fetch('BiblePages/Assets/js/fuse/OT02M.json').then(r => r.json());
  const ot03 = await fetch('BiblePages/Assets/js/fuse/OT03M.json').then(r => r.json());
  const ot04 = await fetch('BiblePages/Assets/js/fuse/OT04M.json').then(r => r.json());
  const ot05 = await fetch('BiblePages/Assets/js/fuse/OT05M.json').then(r => r.json());

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
    ...ot05
  };

  console.log("All Bible data loaded");

  /* -------------------------------------------------
  3. BUILD FUSE INDEX
  -------------------------------------------------- */
  const flat = flattenBible(rawData);

  fuse = new Fuse(flat, {
    keys: ['bke', 'eng', 'tag'],
    threshold: 0.2,
    distance: 100,
    ignoreLocation: true,
      includeMatches: true 
  });

  console.log("Search ready");
}

/* START LOADING IMMEDIATELY */
loadBible();






document.getElementById('searchBox').addEventListener('keydown', function (e) {

  if (e.key !== 'Enter') return;

  if (!fuse) {
    console.log("Search not ready yet...");
    return;
  }

  const results = fuse.search(this.value);

  let html = '';

  /* -------------------------------------------------
  5. RENDER RESULTS
-------------------------------------------------- */
  results.forEach(r => {
    const item = r.item;

    html += `
      <div style="margin-bottom: 20px; padding: 10px; border-bottom: 1px solid #ccc;">

        <a href="BiblePages/${item.tesl}/${item.bookId}-${item.bkl}-chapter-${item.chapterId}.html#verse-${item.v}"
           style="font-weight: bold; font-size: 1.2em;">

          ${item.tes}<br/>
          (${item.bkt}) ${item.bke} ${item.chapterId}:${item.v}

        </a>

        <p style="margin-top: 5px;">${item.eng}</p>
        <p style="color: #666; font-style: italic;">${item.tag}</p>

      </div>
    `;
  });

  document.getElementById('searchResults').innerHTML =
    html || '<p>No results found.</p>';
});