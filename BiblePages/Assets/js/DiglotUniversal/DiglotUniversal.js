/////////////////////////
//                     //
//  HEADER DITO      //
//                     //
/////////////////////////




class DiglotHeader extends HTMLElement {
  connectedCallback () {
    // 1. Set the HTML structure
    this.innerHTML = `
    
      <div id="header" class="headerblue">
        <div id="headerLink">
        <a href="../../index.html" class="HomeURLheader" title="English-Tagalog Bible Home Page">Tagalog English Bible Journal</a>
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






/////////////////////////
//                     //
//  DIGLOT END NOTE     //
//                     //
/////////////////////////





class DiglotNote extends HTMLElement {
  connectedCallback () {
    // 1. Set the HTML structure
    this.innerHTML = `
      


<div class="nothinglastsBUTTHEWORDOFGOD"><div class="LoveOfGodFlex">

<img alt="Book Image" class="verticalimageindexNOTE nothinglasts shadow2" id="image1080" src="../Assets/images/PersonalBlog/HDT/LoveOfGodHD400.webp" />
<img alt="Book Image" class="verticalimageindexNOTE nothinglasts shadow2" id="image4k" src="../Assets/images//PersonalBlog/4KT/LoveOfGod4K800.webp" />
<img alt="Book Image" class="horizontalimageindexNOTE nothinglasts" id="himageHoriz" src="../Assets/images//PersonalBlog/800/LoveOfGod200.webp" />


<p class="ChapterN1 czlF FW700 N1"> The love of GOD is the center of it all.</p>


<p class="ChapterN1 czlF FW600 N2">Nothing lasts, but the word of God.</p>


<p class="ChapterN2 litf FW400 N3 MG10">God is the word, and God's words will last. And on Earth Jesus is the Word of God who feeds us Knowledge of God's Love for All of Us.</p>


<p class="ChapterN2 litf FW400 N3 MG10">No one knows the better the God Father than the Begotten Son. Ask Jesus to make God Father known to you, and you be known.</p>


<p class="ChapterN2 lorF FW400 N3 MG50">
<b>John 3 : 16</b><br>
 For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.<br></p>

<p class="ChapterN2 lorF FW400 N3"><b>Juan 3 : 16</b><br>
Sapagka't gayon na lamang ang pagsinta ng Dios sa sanglibutan, na ibinigay niya ang kaniyang bugtong na Anak, upang ang sinomang sa kaniya'y sumampalataya ay huwag mapahamak, kundi magkaroon ng buhay na walang hanggan.</p>


                
                
</div></div>

  `;

  }
}


customElements.define('diglot-note', DiglotNote);






/////////////////////////
//                     //
//  NAVIGATION ALL JS  //
//                     //
/////////////////////////







class DiglotNavigation extends HTMLElement {
   connectedCallback() {

      this.innerHTML = `
<div id="navigationall">
         <div id="btnPrev">Previous</div>
         <div id="btnToggle">Disable Arrow Keys</div>
         <div id="btnNext">Next</div>
   </div>
         <div class="back-to-top">
            <img class="scrollup" src="scrollup.svg">
         </div>

      `;

      // =========================
      // ELEMENTS INSIDE COMPONENT
      // =========================

      const btnPrev = this.querySelector('#btnPrev');
      const btnNext = this.querySelector('#btnNext');
      const btnToggle = this.querySelector('#btnToggle');
      const backToTop = this.querySelector('.back-to-top');

      // =========================
      // SCROLL TO TOP
      // =========================

      backToTop.onclick = function () {
         window.scrollTo({
            top: 0,
            behavior: 'smooth'
         });
      };

      // =========================
      // SETTINGS
      // =========================

      const STORAGE_KEY = 'arrowNavEnabled';

      let arrowNavEnabled = localStorage.getItem(STORAGE_KEY);

      arrowNavEnabled =
         arrowNavEnabled === null
            ? true
            : (arrowNavEnabled === 'true');

      // =========================
      // LINKS
      // =========================

      const prevLink = document.getElementById('LinkToPrev');
      const nextLink = document.getElementById('LinkToNext');

      // =========================
      // BUTTON LABEL
      // =========================

      btnToggle.textContent =
         arrowNavEnabled
            ? 'Disable Arrow Keys'
            : 'Enable Arrow Keys';

      // =========================
      // BUTTON EVENTS
      // =========================

      btnPrev.onclick = function () {
         if (prevLink?.href) {
            window.location.href = prevLink.href;
         }
      };

      btnNext.onclick = function () {
         if (nextLink?.href) {
            window.location.href = nextLink.href;
         }
      };

      btnToggle.onclick = function () {

         arrowNavEnabled = !arrowNavEnabled;

         localStorage.setItem(
            STORAGE_KEY,
            arrowNavEnabled
         );

         btnToggle.textContent =
            arrowNavEnabled
               ? 'Disable Arrow Keys'
               : 'Enable Arrow Keys';
      };

      // =========================
      // SWIPE NAVIGATION
      // =========================

      let touchstartX = 0;
      let touchendX = 0;

      const minSwipeDistance = 70;

      document.addEventListener(
         'touchstart',
         e => {
            touchstartX =
               e.changedTouches[0].screenX;
         },
         { passive: true }
      );

      document.addEventListener(
         'touchend',
         e => {
            touchendX =
               e.changedTouches[0].screenX;

            handleGesture();
         },
         { passive: true }
      );

      function handleGesture() {

         const distance =
            touchendX - touchstartX;

         if (distance > minSwipeDistance) {

            if (prevLink?.href) {
               window.location.href =
                  prevLink.href;
            }
         }

         if (distance < -minSwipeDistance) {

            if (nextLink?.href) {
               window.location.href =
                  nextLink.href;
            }
         }
      }

      // =========================
      // KEYBOARD NAVIGATION
      // =========================

      document.addEventListener(
         'keydown',
         function (e) {

            if (!arrowNavEnabled) return;

            if (
               e.ctrlKey ||
               e.shiftKey ||
               e.altKey ||
               e.metaKey
            ) return;

            const active =
               document.activeElement;

            if (
               active &&
               (
                  active.tagName === 'INPUT' ||
                  active.tagName === 'TEXTAREA'
               )
            ) return;

            if (e.key === 'ArrowLeft') {

               if (prevLink?.href) {
                  window.location.href =
                     prevLink.href;
               }
            }

            if (e.key === 'ArrowRight') {

               if (nextLink?.href) {
                  window.location.href =
                     nextLink.href;
               }
            }
         }
      );
   }
}

customElements.define(
   'diglot-navigation',
   DiglotNavigation
);





/////////////////////////
//                     //
//  BIBLE JOURNAL KO    //
//                     //
/////////////////////////





class DiglotPostButton extends HTMLElement {
connectedCallback () {
// 1. Set the HTML structure
this.innerHTML = `

<div id="MenuContainerMirrored">

  <div id="biblejournalpostsholder">

    <div class="remainhere">
      <hr class="lefthrliner" />
      <span class="diglotnav">
        BIBLE JOURNALS
      </span>
      <br />
      <span class="bibleduo">
        Bible and Life Lessons
      </span>
      <hr />
    </div>

    <hr class="lefthrliner" />
    <span class="diglotnav">
      BIBLE JOURNALS
    </span>
    <br />
    <span class="bibleduo">
      Bible and Life Lessons
    </span>
    <hr />

    <div class="books" id="divOLDbg">
      <a href="../OldTestament/01-genesis.html">
        <div class="biblejournalposts">
          <span class="journalnumber">Bible Journal - 1</span>
          <br />
          <span class="journaltitle">
            The Golden Gift of God is HIS LOVE.
          </span>
        </div>
      </a>
    </div>
    <div class="books" id="divOLDbg">
      <a href="../OldTestament/01-genesis.html">
        <div class="biblejournalposts">
          <span class="journalnumber">Bible Journal - 2</span>
          <br />
          <span class="journaltitle">
            If angels and demons are afraid of God, then we humans should be too, in correct way.
          </span>
        </div>
      </a>
    </div>
    <div class="books" id="divOLDbg">
      <a href="../OldTestament/01-genesis.html">
        <div class="biblejournalposts">
          <span class="journalnumber">Bible Journal - 3</span>
          <br />
          <span class="journaltitle">
            SHOCKING! God Adonai's Vineyard destroyed. And nothing left.
          </span>
        </div>
      </a>
    </div>
    <div class="books" id="divOLDbg">
      <a href="../OldTestament/01-genesis.html">
        <div class="biblejournalposts">
          <span class="journalnumber">Bible Journal - 4</span>
          <br />
          <span class="journaltitle">
            There's no real enemy, than satan and his fallen angels.
          </span>
        </div>
      </a>
    </div>

  </div>

  <div class="OtherMenu" id="more-links">

    <a href="../BridgePassages/bible-passages.html">
      <div class="OtherLinks">
        Popular Passages
      </div>
    </a>

    <a href="../DailyDevotion/index.html">
      <div class="OtherLinks tr2">
        <span class="tr2">Daily Devotion</span>
      </div>
    </a>

    <a href="../BridgePassages/bridge-to-life.html">
      <div class="OtherLinks">
        <span class="tr3"></span>
        The Bridge to Life
      </div>
    </a>

    <a href="http://facebook.com/authorizedbible">
      <div class="OtherLinks">
        <span class="tr5">
          Facebook Page of<br />
          EnglishTagalogBible.Com</span>
      </div>
    </a>

    <a href="http://philnavs.org">
      <div class="OtherLinks">
        <span class="tr5" style="display:inline;">This website is</span><br /><span class="tr5" style="display:inLine;">a ministry of the </span><br><span style="display:inLine;" class="navigatorslink">NAVIGATORS</span><br>
        <span class="tr8" style="color:maroon; text-adivgn:center !important;">PhilNavs.Org</span>
      </div>
    </a>

  </div>

</div>

`;
}
}

customElements.define ('diglot-post-button', DiglotPostButton);