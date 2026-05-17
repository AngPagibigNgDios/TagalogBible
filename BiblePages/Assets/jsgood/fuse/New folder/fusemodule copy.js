import Fuse from './fuse.min.js';let fuse;// 1. Load the JSON data
fetch('BiblePages/Assets/js/fuse/diglotkjvbiblia.json')
  .then(response => response.json())
  .then(data => {
    console.log("Search index loaded!");
    fuse = new Fuse(data, {
      keys: ['bke', 'eng', 'tag'], // Focusing on text for better results
      threshold: 0.3,
      distance: 80,
      ignoreLocation: true
    });
  })
  .catch(err => console.error("Could not load JSON:", err));// 2. Listen for the "Enter" key
document.getElementById('searchBox').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (!fuse) {
      console.log("Search not ready yet...");
      return;
    }    const results = fuse.search(this.value);
    let html = '';    // 3. Displaying the results
    results.forEach(result => {
      const item = result.item;
      html += `
        <div style="margin-bottom: 20px; padding: 10px; border-bottom: 1px solid #ccc;">
          <a href="BiblePages/${item.tesl}/${item.bn}-${item.bkl}-chapter-${item.chp}.html#verse-${item.v}" style="font-weight: bold; font-size: 1.2em;">
            ${item.tes}<br/> (${item.bkt}) ${item.bke} ${item.chp}:${item.v}
          </a>
          <p style="margin-top: 5px;">${item.eng}</p>
          <p style="color: #666; font-style: italic;">${item.tag}</p>
        </div>
      `;
    });    document.getElementById('searchResults').innerHTML = html || '<p>No results found.</p>';
  }
});
import Fuse from './fuse.min.js';let fuse;/* -------------------------------------------------
1. LOAD JSON
-------------------------------------------------- */
fetch('BiblePages/Assets/js/fuse/diglotkjvbiblia.json')
  .then(res => res.json())
  .then(rawData => {    console.log("Search index loaded!");    /* -------------------------------------------------
    2. FLATTEN DATA (IMPORTANT PART YOU WERE MISSING)
    -------------------------------------------------- */    const data = [];    Object.keys(rawData).forEach(bookId => {
      const book = rawData[bookId];      Object.keys(book.chapters).forEach(chapterId => {
        const verses = book.chapters[chapterId];        verses.forEach(verse => {
          data.push({
            bookId: bookId,          // <-- THIS replaces bn
            tes: book.tes,
            tesl: book.tesl,
            bke: book.bke,
            bkt: book.bkt,
            bkl: book.bkl,
            chp: chapterId,
            v: verse.v,
            eng: verse.eng,
            tag: verse.tag
          });
        });
      });
    });    /* -------------------------------------------------
    3. CREATE SEARCH ENGINE
    -------------------------------------------------- */
    fuse = new Fuse(data, {
      keys: ['bke', 'eng', 'tag'],
      threshold: 0.3,
      distance: 80,
      ignoreLocation: true
    });  })
  .catch(err => console.error("Could not load JSON:", err));
/* -------------------------------------------------
4. SEARCH INPUT
-------------------------------------------------- */
document.getElementById('searchBox').addEventListener('keydown', function (e) {  if (e.key !== 'Enter') return;  if (!fuse) {
    console.log("Search not ready yet...");
    return;
  }  const results = fuse.search(this.value);  let html = '';  /* -------------------------------------------------
  5. RENDER RESULTS
  -------------------------------------------------- */
  results.forEach(r => {
    const item = r.item;    html += `
      <div style="margin-bottom: 20px; padding: 10px; border-bottom: 1px solid #ccc;">        <a href="BiblePages/${item.tesl}/${item.bookId}-${item.bkl}-chapter-${item.chp}.html#verse-${item.v}"
           style="font-weight: bold; font-size: 1.2em;">          ${item.tes}<br/>
          (${item.bkt}) ${item.bke} ${item.chp}:${item.v}        </a>        <p style="margin-top: 5px;">${item.eng}</p>
        <p style="color: #666; font-style: italic;">${item.tag}</p>      </div>
    `;
  });  document.getElementById('searchResults').innerHTML =
    html || '<p>No results found.</p>';
});