class DiglotHeader extends HTMLElement {
  connectedCallback () {
    // 1. Set the HTML structure
    this.innerHTML = `
    
      <div id="header" class="headermaroon">
        <div id="headerLink">
        <a href="index.html" class="HomeURLheader" title="English-Tagalog Bible Home Page">Tagalog English Bible Journal</a>
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

    let hash = decodeURIComponent (window.location.hash);
    let verseDisplay = '';

    if (hash.includes ('#verse-')) {
        let content = hash.split ('#verse-')[1];
        if (content) {
            // Split by comma or space
            let parts = content.trim ().split (/[,\s]+/).filter (Boolean);

            // IMPROVED SORTING: 
            // We look at the FIRST number if it's a range (like 8-11)
            parts.sort ((a, b) => {
                let numA = parseInt(a.split('-')[0], 10);
                let numB = parseInt(b.split('-')[0], 10);
                return numA - numB;
            });

            // Formatting the display
            let cleanParts = parts.map (p => {
                // If it's a range like 8-11, make it 8 — 11
                if (p.includes('-')) {
                    return p.replace('-', ' — ');
                }
                return p;
            });
            
            verseDisplay = ' : ' + cleanParts.join (', ');
        }
    }

let title = typeof baseChapterTitle !== 'undefined'
  ? baseChapterTitle
  : document.title;

// Always sanitize (this is the real fix)
title = title.replace(/\s*:\s*\d+([—\-\s,]\d+)*/g, '').trim();
    // Update browser tab
    document.title = title + verseDisplay;

    // Update the bar on the page
    displayLink.innerHTML = `${title}${verseDisplay}`;
}
}

customElements.define ('diglot-header', DiglotHeader);
