class DiglotHeader extends HTMLElement {
  connectedCallback () {
    // 1. Set the HTML structure
    this.innerHTML = `
    
      <div id="header" class="headerblue">
        <div id="headerLink">
        <a href="../../../../index.html" class="HomeURLheader" title="English-Tagalog Bible Home Page">English Tagalog Bible Journal</a>
        </div>
        <div id="hrdivider"><hr class="title-divider"></div>
        <div id="headerVerse">
            <span id="display-title2"></span>
        </div>
      </div>
      
    `;

    // DITO ANG END NG INNER HTML

    // SA BABA LAHAT NG JAVA SCRIPT

    // 2. Call your logic directly
    this.updateHeaderDisplay ();

    // 3. (Optional) Listen for hash changes so it updates without refreshing
    window.addEventListener ('hashchange', () => this.updateHeaderDisplay ());
  }

  updateHeaderDisplay () {
    const displayLink = this.querySelector ('#display-title2');
    if (!displayLink) return;

    // 1. Get the raw hash (e.g., #verse-1 7 22 4 33-35 14)
    let hash = decodeURIComponent (window.location.hash);
    let verseDisplay = '';

    if (hash.includes ('#verse-')) {
      let content = hash.split ('#verse-')[1];
      if (content) {
        // 2. Break the input into an array (splitting by spaces and commas)
        let parts = content.trim ().split (/[,\s]+/).filter (Boolean);

        // 3. SORT the parts numerically
        // This ensures 4 comes before 7, even if you typed 7 first.
        parts.sort ((a, b) => parseInt (a, 10) - parseInt (b, 10));

        // 4. Clean up the parts for display
        // This changes "-" to " — " (your preferred style)
        let cleanContent = parts.map (p => p.replace ('-', ' — ')).join (', ');
        verseDisplay = ' : ' + cleanContent;
      }
    }

    // Ensure baseChapterTitle is defined globally or passed in
    const title = typeof baseChapterTitle !== 'undefined'
      ? baseChapterTitle
      : document.title;

    document.title = title + verseDisplay;

    // 6. Update the Page Header (displayLink)&nbsp;&nbsp;&nbsp;
    const spacing = '';
    //ORIGINAL DASH, PINALITAN KO NG STRAIGHT LINE PARA MAGANDA — |
    const dash = '';
    displayLink.innerHTML = `${spacing}${dash}${spacing}${title}${verseDisplay}`;
  }
}

customElements.define ('diglot-header', DiglotHeader);