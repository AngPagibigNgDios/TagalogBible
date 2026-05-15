/////////////////////////
//                     //
//  HEADER DITO      //
//                     //
/////////////////////////


class DiglotHeaderIndex extends HTMLElement {
   connectedCallback() {
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
      this.updateHeaderDisplay();

      // 3. (Optional) Listen for hash changes so it updates without refreshing
      window.addEventListener('hashchange', () => this.updateHeaderDisplay());
   }

   updateHeaderDisplay() {
      const displayLink = this.querySelector('#display-title2');
      if (!displayLink) return;

      let hash = decodeURIComponent(window.location.hash);
      let verseDisplay = '';

      if (hash.includes('#verse-')) {
         let content = hash.split('#verse-')[1];
         if (content) {
            // Split by comma or space
            let parts = content.trim().split(/[,\s]+/).filter(Boolean);

            // IMPROVED SORTING: 
            // We look at the FIRST number if it's a range (like 8-11)
            parts.sort((a, b) => {
               let numA = parseInt(a.split('-')[0], 10);
               let numB = parseInt(b.split('-')[0], 10);
               return numA - numB;
            });

            // Formatting the display
            let cleanParts = parts.map(p => {
               // If it's a range like 8-11, make it 8 — 11
               if (p.includes('-')) {
                  return p.replace('-', ' — ');
               }
               return p;
            });

            verseDisplay = ' : ' + cleanParts.join(', ');
         }
      }

      let title = typeof baseChapterTitle !== 'undefined' ?
         baseChapterTitle :
         document.title;

      // Always sanitize (this is the real fix)
      title = title.replace(/\s*:\s*\d+([—\-\s,]\d+)*/g, '').trim();
      // Update browser tab
      document.title = title + verseDisplay;

      // Update the bar on the page
      displayLink.innerHTML = `${title}${verseDisplay}`;
   }
}

customElements.define('diglot-header-index', DiglotHeaderIndex);


class DiglotHeader extends HTMLElement {
   connectedCallback() {
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
      this.updateHeaderDisplay();

      // 3. (Optional) Listen for hash changes so it updates without refreshing
      window.addEventListener('hashchange', () => this.updateHeaderDisplay());
   }

   updateHeaderDisplay() {
      const displayLink = this.querySelector('#display-title2');
      if (!displayLink) return;

      let hash = decodeURIComponent(window.location.hash);
      let verseDisplay = '';

      if (hash.includes('#verse-')) {
         let content = hash.split('#verse-')[1];
         if (content) {
            // Split by comma or space
            let parts = content.trim().split(/[,\s]+/).filter(Boolean);

            // IMPROVED SORTING: 
            // We look at the FIRST number if it's a range (like 8-11)
            parts.sort((a, b) => {
               let numA = parseInt(a.split('-')[0], 10);
               let numB = parseInt(b.split('-')[0], 10);
               return numA - numB;
            });

            // Formatting the display
            let cleanParts = parts.map(p => {
               // If it's a range like 8-11, make it 8 — 11
               if (p.includes('-')) {
                  return p.replace('-', ' — ');
               }
               return p;
            });

            verseDisplay = ' : ' + cleanParts.join(', ');
         }
      }

      let title = typeof baseChapterTitle !== 'undefined' ?
         baseChapterTitle :
         document.title;

      // Always sanitize (this is the real fix)
      title = title.replace(/\s*:\s*\d+([—\-\s,]\d+)*/g, '').trim();
      // Update browser tab
      document.title = title + verseDisplay;

      // Update the bar on the page
      displayLink.innerHTML = `${title}${verseDisplay}`;
   }
}



customElements.define('diglot-header', DiglotHeader);


/////////////////////////
//                     //
//  DIGLOT END NOTE     //
//                     //
/////////////////////////


class DiglotNote extends HTMLElement {
   connectedCallback() {
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
         arrowNavEnabled === null ?
         true :
         (arrowNavEnabled === 'true');

      // =========================
      // LINKS
      // =========================

      const prevLink = document.getElementById('LinkToPrev');
      const nextLink = document.getElementById('LinkToNext');

      // =========================
      // BUTTON LABEL
      // =========================

      btnToggle.textContent =
         arrowNavEnabled ?
         'Disable Arrow Keys' :
         'Enable Arrow Keys';

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
            arrowNavEnabled ?
            'Disable Arrow Keys' :
            'Enable Arrow Keys';
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
         }, {
            passive: true
         }
      );

      document.addEventListener(
         'touchend',
         e => {
            touchendX =
               e.changedTouches[0].screenX;

            handleGesture();
         }, {
            passive: true
         }
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


class JoinerDiglotPostA extends HTMLElement {
   connectedCallback() {
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

customElements.define('joiner-diglot-post-a', JoinerDiglotPostA);


class JoinerDiglotPostB extends HTMLElement {
   connectedCallback() {
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

customElements.define('joiner-diglot-post-b', JoinerDiglotPostB);


class DiglotPostButton extends HTMLElement {
   connectedCallback() {
      // 1. Set the HTML structure
      this.innerHTML = `


<joiner-diglot-post-a id="separatedivider"></joiner-diglot-post-a>

<joiner-diglot-post-b id="joinerdivider"></joiner-diglot-post-b>



`;
   }
}

customElements.define('diglot-post-button', DiglotPostButton);


/////////////////////////
//                     //
//  UNIVERSAL MENU     //
//                     //
/////////////////////////


class DiglotMenuFocused extends HTMLElement {
   connectedCallback() {
      // 1. Set the HTML structure
      this.innerHTML = `
      


<div id="MenuContainer">

<div class="BibleChaptersMenu" id="book-links">
<div class="remainhere"><hr class="lefthrliner"/>
<span class="diglotnav">
   DIGLOT
  </span>
<br/>
<span class="bibleduo">
 KJV - Ang Biblia
  </span>
  <hr/>
  </div>

<hr class="lefthrliner"/>
<span class="diglotnav">
   DIGLOT
  </span>
<br/>
<span class="bibleduo">
 KJV - Ang Biblia
  </span>
<hr/>

<div id="OLDTB"><br/>
<span class="LCOldTestament">
<sub>OLD TESTAMENT</sub>
<br/>
<b>LUMANG TIPAN</b><br/><br/>
  </span></div>

<div class="books" id="divOLDbg">
            <a href="../OldTestament/01-genesis.html"><div class="BMONTgenesis divgenesis"><span class="english englishLabel">Genesis</span><br/><span class="tagalogleft tagalogLabel">Genesis</span></div></a>
            <a href="../OldTestament/02-exodus.html"><div class="BMONTexodus divexodus"><span class="english englishLabel">Exodus</span><br/><span class="tagalogleft tagalogLabel">Exodo</span></div></a>
            <a href="../OldTestament/03-leviticus.html"><div class="BMONTleviticus divleviticus"><span class="english englishLabel">Leviticus</span><br/><span class="tagalogleft tagalogLabel">Levitico</span></div></a>
            <a href="../OldTestament/04-numbers.html"><div class="BMONTnumbers divnumbers"><span class="english englishLabel">Numbers</span><br/><span class="tagalogleft tagalogLabel">Mga Bilang</span></div></a>
            <a href="../OldTestament/05-deuteronomy.html"><div class="BMONTdeuteronomy divdeuteronomy"><span class="english englishLabel">Deuteronomy</span><br/><span class="tagalogleft tagalogLabel">Deuteronomio</span></div></a>
            <a href="../OldTestament/06-joshua.html"><div class="BMONTjoshua divjoshua"><span class="english englishLabel">Joshua</span><br/><span class="tagalogleft tagalogLabel">Josue</span></div></a>
            <a href="../OldTestament/07-judges.html"><div class="BMONTjudges divjudges"><span class="english englishLabel">Judges</span><br/><span class="tagalogleft tagalogLabel">Mga Hukom</span></div></a>
            <a href="../OldTestament/08-ruth.html"><div class="BMONTruth divruth"><span class="english englishLabel">Ruth</span><br/><span class="tagalogleft tagalogLabel">Ruth</span></div></a>
            <a href="../OldTestament/09-1st-samuel.html"><div class="BMONT1samuel div1samuel"><span class="english englishLabel">1 Samuel</span><br/><span class="tagalogleft tagalogLabel">1 Samuel</span></div></a>
            <a href="../OldTestament/10-2nd-samuel.html"><div class="BMONT2samuel div2samuel"><span class="english englishLabel">2 Samuel</span><br/><span class="tagalogleft tagalogLabel">2 Samuel</span></div></a>
            <a href="../OldTestament/11-1st-kings.html"><div class="BMONT1kings div1kings"><span class="english englishLabel">1 Kings</span><br/><span class="tagalogleft tagalogLabel">1 Mga Hari</span></div></a>
            <a href="../OldTestament/12-2nd-kings.html"><div class="BMONT2kings div2kings"><span class="english englishLabel">2 Kings</span><br/><span class="tagalogleft tagalogLabel">2 Mga Hari</span></div></a>
            <a href="../OldTestament/13-1st-chronicles.html"><div class="BMONT1chronicles div1chronicles"><span class="english englishLabel">1 Chronicles</span><br/><span class="tagalogleft tagalogLabel">1 Mga Cronica</span></div></a>
            <a href="../OldTestament/14-2nd-chronicles.html"><div class="BMONT2chronicles div2chronicles"><span class="english englishLabel">2 Chronicles</span><br/><span class="tagalogleft tagalogLabel">2 Mga Cronica</span></div></a>
            <a href="../OldTestament/15-ezra.html"><div class="BMONTezra divezra"><span class="english englishLabel">Ezra</span><br/><span class="tagalogleft tagalogLabel">Ezra</span></div></a>
            <a href="../OldTestament/16-nehemiah.html"><div class="BMONTnehemiah divnehemiah"><span class="english englishLabel">Nehemiah</span><br/><span class="tagalogleft tagalogLabel">Nehemias</span></div></a>
            <a href="../OldTestament/17-esther.html"><div class="BMONTesther divesther"><span class="english englishLabel">Esther</span><br/><span class="tagalogleft tagalogLabel">Ester</span></div></a>
            <a href="../OldTestament/18-job.html"><div class="BMONTjob divjob"><span class="english englishLabel">Job</span><br/><span class="tagalogleft tagalogLabel">Job</span></div></a>
            <a href="../OldTestament/19-psalms.html"><div class="BMONTpsalms divpsalms"><span class="english englishLabel">Psalms</span><br/><span class="tagalogleft tagalogLabel">Mga Awit</span></div></a>
            <a href="../OldTestament/20-proverbs.html"><div class="BMONTproverbs divproverbs"><span class="english englishLabel">Proverbs</span><br/><span class="tagalogleft tagalogLabel">Kawikaan</span></div></a>
            <a href="../OldTestament/21-ecclesiastes.html"><div class="BMONTecclesiastes divecclesiastes"><span class="english englishLabel">Ecclesiastes</span><br/><span class="tagalogleft tagalogLabel">Eclesiastes</span></div></a>
            <a href="../OldTestament/22-song-of-solomon.html"><div class="BMONTsongofsolomon divsongofsolomon"><span class="english englishLabel">Song of Solomon</span><br/><span class="tagalogleft tagalogLabel">Awit ng Mga Awit</span></div></a>
            <a href="../OldTestament/23-isaiah.html"><div class="BMONTisaiah divisaiah"><span class="english englishLabel">Isaiah</span><br/><span class="tagalogleft tagalogLabel">Isaias</span></div></a>
            <a href="../OldTestament/24-jeremiah.html"><div class="BMONTjeremiah divjeremiah"><span class="english englishLabel">Jeremiah</span><br/><span class="tagalogleft tagalogLabel">Jeremias</span></div></a>
            <a href="../OldTestament/25-lamentations.html"><div class="BMONTlamentations divlamentations"><span class="english englishLabel">Lamentations</span><br/><span class="tagalogleft tagalogLabel">Mga Panaghoy</span></div></a>
            <a href="../OldTestament/26-ezekiel.html"><div class="BMONTezekiel divezekiel"><span class="english englishLabel">Ezekiel</span><br/><span class="tagalogleft tagalogLabel">Ezekiel</span></div></a>
            <a href="../OldTestament/27-daniel.html"><div class="BMONTdaniel divdaniel"><span class="english englishLabel">Daniel</span><br/><span class="tagalogleft tagalogLabel">Daniel</span></div></a>
            <a href="../OldTestament/28-hosea.html"><div class="BMONThosea divhosea"><span class="english englishLabel">Hosea</span><br/><span class="tagalogleft tagalogLabel">Oseas</span></div></a>
            <a href="../OldTestament/29-joel.html"><div class="BMONTjoel divjoel"><span class="english englishLabel">Joel</span><br/><span class="tagalogleft tagalogLabel">Joel</span></div></a>
            <a href="../OldTestament/30-amos.html"><div class="BMONTamos divamos"><span class="english englishLabel">Amos</span><br/><span class="tagalogleft tagalogLabel">Amos</span></div></a>
            <a href="../OldTestament/31-obadiah.html"><div class="BMONTobadiah divobadiah"><span class="english englishLabel">Obadiah</span><br/><span class="tagalogleft tagalogLabel">Obadias</span></div></a>
            <a href="../OldTestament/32-jonah.html"><div class="BMONTjonah divjonah"><span class="english englishLabel">Jonah</span><br/><span class="tagalogleft tagalogLabel">Jonas</span></div></a>
            <a href="../OldTestament/33-micah.html"><div class="BMONTmicah divmicah"><span class="english englishLabel">Micah</span><br/><span class="tagalogleft tagalogLabel">Mikas</span></div></a>
            <a href="../OldTestament/34-nahum.html"><div class="BMONTnahum divnahum"><span class="english englishLabel">Nahum</span><br/><span class="tagalogleft tagalogLabel">Naum</span></div></a>
            <a href="../OldTestament/35-habakkuk.html"><div class="BMONThabakkuk divhabakkuk"><span class="english englishLabel">Habakkuk</span><br/><span class="tagalogleft tagalogLabel">Habacuc</span></div></a>
            <a href="../OldTestament/36-zephaniah.html"><div class="BMONTzephaniah divzephaniah"><span class="english englishLabel">Zephaniah</span><br/><span class="tagalogleft tagalogLabel">Sofonias</span></div></a>
            <a href="../OldTestament/37-haggai.html"><div class="BMONThaggai divhaggai"><span class="english englishLabel">Haggai</span><br/><span class="tagalogleft tagalogLabel">Ageo</span></div></a>
            <a href="../OldTestament/38-zechariah.html"><div class="BMONTzechariah divzechariah"><span class="english englishLabel">Zechariah</span><br/><span class="tagalogleft tagalogLabel">Zacarias</span></div></a>
            <a href="../OldTestament/39-malachi.html"><div class="BMONTmalachi divmalachi"><span class="english englishLabel">Malachi</span><br/><span class="tagalogleft tagalogLabel">Malakias</span></div></a>
      
</div>
<div id="NEWTB">
<br/>
<span class="LCNewTestament"><sub>NEW TESTAMENT</sub><br><b>BAGONG TIPAN</b><br/><br/></span></div>

<div class="books" id="divNEWbg">
              <a href="../NewTestament/40-matthew.html"><div class="BMONTmatthew divmatthew"><span class="english englishLabel">Matthew</span><br/><span class="tagalogleft tagalogLabel">Mateo</span></div></a>
            <a href="../NewTestament/41-mark.html"><div class="BMONTmark divmark"><span class="english englishLabel">Mark</span><br/><span class="tagalogleft tagalogLabel">Marcos</span></div></a>
            <a href="../NewTestament/42-luke.html"><div class="BMONTluke divluke"><span class="english englishLabel">Luke</span><br/><span class="tagalogleft tagalogLabel">Lucas</span></div></a>
            <a href="../NewTestament/43-john.html"><div class="BMONTjohn divjohn"><span class="english englishLabel">John</span><br/><span class="tagalogleft tagalogLabel">Juan</span></div></a>
            <a href="../NewTestament/44-acts.html"><div class="BMONTacts divacts"><span class="english englishLabel">Acts</span><br/><span class="tagalogleft tagalogLabel">Mga Gawa</span></div></a>
            <a href="../NewTestament/45-romans.html"><div class="BMONTromans divromans"><span class="english englishLabel">Romans</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Roma</span></div></a>
            <a href="../NewTestament/46-1st-corinthians.html"><div class="BMONT1corinthians div1corinthians"><span class="english englishLabel">1 Corinthians</span><br/><span class="tagalogleft tagalogLabel">1 Mga Taga Corinto</span></div></a>
            <a href="../NewTestament/47-2nd-corinthians.html"><div class="BMONT2corinthians div2corinthians"><span class="english englishLabel">2 Corinthians</span><br/><span class="tagalogleft tagalogLabel">2 Mga Taga Corinto</span></div></a>
            <a href="../NewTestament/48-galatians.html"><div class="BMONTgalatians divgalatians"><span class="english englishLabel">Galatians</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Galacia</span></div></a>
            <a href="../NewTestament/49-ephesians.html"><div class="BMONTephesians divephesians"><span class="english englishLabel">Ephesians</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Efeso</span></div></a>
            <a href="../NewTestament/50-philippians.html"><div class="BMONTphilippians divPhillippians"><span class="english englishLabel">Phillippians</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Filipos</span></div></a>
            <a href="../NewTestament/51-colossians.html"><div class="BMONTcolossians divcolossians"><span class="english englishLabel">Colossians</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Colosas</span></div></a>
            <a href="../NewTestament/52-1st-thessalonians.html"><div class="BMONT1thessalonians div1thessalonians"><span class="english englishLabel">1 Thessalonians</span><br/><span class="tagalogleft tagalogLabel">1 Mga Taga Tesalonica</span></div></a>
            <a href="../NewTestament/53-2nd-thessalonians.html"><div class="BMONT2thessalonians div2thessalonians"><span class="english englishLabel">2 Thessalonians</span><br/><span class="tagalogleft tagalogLabel">2 Mga Taga Tesalonica</span></div></a>
            <a href="../NewTestament/54-1st-timothy.html"><div class="BMONT1timothy div1timothy"><span class="english englishLabel">1 Timothy</span><br/><span class="tagalogleft tagalogLabel">1 Timoteo</span></div></a>
            <a href="../NewTestament/55-2nd-timothy.html"><div class="BMONT2timothy div2timothy"><span class="english englishLabel">2 Timothy</span><br/><span class="tagalogleft tagalogLabel">2 Timoteo</span></div></a>
            <a href="../NewTestament/56-titus.html"><div class="BMONTtitus divtitus"><span class="english englishLabel">Titus</span><br/><span class="tagalogleft tagalogLabel">Tito</span></div></a>
            <a href="../NewTestament/57-philemon.html"><div class="BMONTphilemon divphilemon"><span class="english englishLabel">Philemon</span><br/><span class="tagalogleft tagalogLabel">Filemon</span></div></a>
            <a href="../NewTestament/58-hebrews.html"><div class="BMONThebrews divhebrews"><span class="english englishLabel">Hebrews</span><br/><span class="tagalogleft tagalogLabel">Mga Hebreo</span></div></a>
            <a href="../NewTestament/59-james.html"><div class="BMONTjames divjames"><span class="english englishLabel">James</span><br/><span class="tagalogleft tagalogLabel">Santiago</span></div></a>
            <a href="../NewTestament/60-1st-peter.html"><div class="BMONT1peter div1peter"><span class="english englishLabel">1 Peter</span><br/><span class="tagalogleft tagalogLabel">1 Pedro</span></div></a>
            <a href="../NewTestament/61-2nd-peter.html"><div class="BMONT2peter div2peter"><span class="english englishLabel">2 Peter</span><br/><span class="tagalogleft tagalogLabel">2 Pedro</span></div></a>
            <a href="../NewTestament/62-1st-john.html"><div class="BMONT1john div1john"><span class="english englishLabel">1 John</span><br/><span class="tagalogleft tagalogLabel">1 Juan</span></div></a>
            <a href="../NewTestament/63-2nd-john.html"><div class="BMONT2john div2john"><span class="english englishLabel">2 John</span><br/><span class="tagalogleft tagalogLabel">2 Juan</span></div></a>
            <a href="../NewTestament/64-3rd-john.html"><div class="BMONT3john div3john"><span class="english englishLabel">3 John</span><br/><span class="tagalogleft tagalogLabel">3 Juan</span></div></a>
            <a href="../NewTestament/65-jude.html"><div class="BMONTjude divjude"><span class="english englishLabel">Jude</span><br/><span class="tagalogleft tagalogLabel">Judas</span></div></a>
            <a href="../NewTestament/66-revelation.html"><div class="BMONTrevelation divrevelation"><span class="english englishLabel">Revelation</span><br/><span class="tagalogleft tagalogLabel">Pahayag</span></div></a>
      
</div>
<br>
<hr class="lefthrLiner"/>

</br>
</div>
<div class="OtherMenu" id="more-links">
   <div class="controlheader">CONTROL PANEL</div>
   <div class="versehighlight">
      Type Range or Random or Both. Press Enter<br/>
      <hr style="width:100%;">
      <strong>VERSE HIGHLIGHT</strong>
   </div>
   <div class="controls-row input-row">
      <input id="verseInput" placeholder="1-10, 2,5,9, Press Enter" type="text"/>
   </div>
   <div class="copybuttons">
      <div class="dualplacement">
         <div class="controldiglot diglot2" onclick="copyEnglish()">COPY ENGLISH</div>
         <div class="controldiglot diglot2" onclick="copyTagalog()">COPY TAGALOG</div>
      </div>
      <div class="soloplacement">
         <div class="controldiglot diglot2" onclick="copyBoth()">COPY DIGLOT</div>
      </div>
   </div>
   <div class="controlheader marginhere">TEXT SIZE</div>
   <div class="copybuttons marginhere">
      <div class="dualplacement">
         <div class="textresizerButton resizebutton" onclick="decreaseFont()"> SMALLER TEXT </div>
         <div class="textresizerButton resizebutton" onclick="increaseFont()"> BIGGER TEXT </div>
      </div>
      <div class="soloplacement">
         <div class="textresizerButton resizebutton2" onclick="resetFont()"> RESET SIZE</div>
      </div>
   </div>
   <div class="controlheader marginhere">SHOW / HIDE BIBLE</div>
   <div class="copybuttons marginhere">
      <div class="dualplacement">
         <div class="controldiglot" onclick="showEnglishOnly()"> ENGLISH </div>
         <div class="controldiglot" onclick="showTagalogOnly()"> TAGALOG </div>
      </div>
      <div class="soloplacement">
         <div class="controldiglot" onclick="showAll()"> DIGLOT </div>
      </div>
   </div>
   <div class="controlheader marginhere">CHOOSE FONT</div>
   <div class="dualplacement">
      <div class="fontchoiceButton litF changedcolor" onclick="LiterataSF()">LITERATA<br />Serif</div>
      <div class="fontchoiceButton lorF changedcolor" onclick="LoraSF()">LORA <br />Serif </div>
   </div>
   <div class="dualplacement">
      <div class="fontchoiceButton  elaF changedcolor" onclick="GelasioSF()"> GELASIO <br /> Serif </div>
      <div class="fontchoiceButton  opsF changedcolor" onclick="OpenSS()"> OPEN <br /> Sans-Serif </div>
   </div>
   <div class="dualplacement">
      <div class="fontchoiceButton  indF changedcolor" onclick="InterSS()"> INTER <br /> Sans-Serif </div>
      <div class="fontchoiceButton lexF changedcolor" onclick="LexendSS()"> LEXEND <br /> Sans-Serif </div>
   </div>
   <div class="dualplacement">
      <div class="fontchoiceButton  pbsF changedcolor" onclick="PublicSS()"> PUBLIC <br /> Sans-Serif </div>
      <div class="fontchoiceButton  ariF changedcolor" onclick="ArimoSS()"> ARIMO <br /> Sans-Serif </div>
   </div>

    <div class="controlheader marginhere">FONT THICKNESS</div>

   <div class="dualplacement">
      <div class="fontweightButton FW350" onclick="FW350FF()">Weight <br />350</div>
      <div class="fontweightButton FW400" onclick="FW400FF()">Weight <br />400</div>
   </div>
   <div class="dualplacement">
      <div class="fontweightButton FW500" onclick="FW500FF()">Weight <br />500</div>
      <div class="fontweightButton FW600" onclick="FW600FF()">Weight <br />600</div>
   </div>
   <div class="dualplacement">
      <div class="fontweightButton FW700" onclick="FW700FF()">Weight <br />700</div>
      <div class="fontweightButton FW800" onclick="FW800FF()">Weight <br />800</div>
   </div>


</div>



        `;
      setTimeout(() => {
         // 1. Collect style tags and find the dynamic class
         const styles = document.head.querySelectorAll('style');
         let activeClass = null;

         for (const style of styles) {
            const match = style.textContent.match(/\.BMONT[a-z0-9]+/i);
            if (match) {
               activeClass = match[0].substring(1);
               break; // Optimization: stop searching once found
            }
         }

         if (!activeClass) return;

         // 2. Find and scroll the element
         const activeBook = this.querySelector(`.${activeClass}`);

         if (activeBook) {
            activeBook.scrollIntoView({
               block: 'center',
               behavior: 'auto'
            });
         }
      }, 1000);
   }
}

customElements.define('diglot-menu-focused', DiglotMenuFocused);


class DiglotMenu extends HTMLElement {
   connectedCallback() {
      // 1. Set the HTML structure
      this.innerHTML = `
      


<div id="MenuContainer">

<div class="BibleChaptersMenu" id="book-links">
<div class="remainhere"><hr class="lefthrliner"/>
<span class="diglotnav">
   DIGLOT
  </span>
<br/>
<span class="bibleduo">
 KJV - Ang Biblia
  </span>
  <hr/>
  </div>

<hr class="lefthrliner"/>
<span class="diglotnav">
   DIGLOT
  </span>
<br/>
<span class="bibleduo">
 KJV - Ang Biblia
  </span>
<hr/>

<div id="OLDTB"><br/>
<span class="LCOldTestament">
<sub>OLD TESTAMENT</sub>
<br/>
<b>LUMANG TIPAN</b><br/><br/>
  </span></div>

<div class="books" id="divOLDbg">
           <a href="../OldTestament/01-genesis.html"><div class="BMONTgenesis divgenesis"><span class="english englishLabel">Genesis</span><br/><span class="tagalogleft tagalogLabel">Genesis</span></div></a>
            <a href="../OldTestament/02-exodus.html"><div class="BMONTexodus divexodus"><span class="english englishLabel">Exodus</span><br/><span class="tagalogleft tagalogLabel">Exodo</span></div></a>
            <a href="../OldTestament/03-leviticus.html"><div class="BMONTleviticus divleviticus"><span class="english englishLabel">Leviticus</span><br/><span class="tagalogleft tagalogLabel">Levitico</span></div></a>
            <a href="../OldTestament/04-numbers.html"><div class="BMONTnumbers divnumbers"><span class="english englishLabel">Numbers</span><br/><span class="tagalogleft tagalogLabel">Mga Bilang</span></div></a>
            <a href="../OldTestament/05-deuteronomy.html"><div class="BMONTdeuteronomy divdeuteronomy"><span class="english englishLabel">Deuteronomy</span><br/><span class="tagalogleft tagalogLabel">Deuteronomio</span></div></a>
            <a href="../OldTestament/06-joshua.html"><div class="BMONTjoshua divjoshua"><span class="english englishLabel">Joshua</span><br/><span class="tagalogleft tagalogLabel">Josue</span></div></a>
            <a href="../OldTestament/07-judges.html"><div class="BMONTjudges divjudges"><span class="english englishLabel">Judges</span><br/><span class="tagalogleft tagalogLabel">Mga Hukom</span></div></a>
            <a href="../OldTestament/08-ruth.html"><div class="BMONTruth divruth"><span class="english englishLabel">Ruth</span><br/><span class="tagalogleft tagalogLabel">Ruth</span></div></a>
            <a href="../OldTestament/09-1st-samuel.html"><div class="BMONT1samuel div1samuel"><span class="english englishLabel">1 Samuel</span><br/><span class="tagalogleft tagalogLabel">1 Samuel</span></div></a>
            <a href="../OldTestament/10-2nd-samuel.html"><div class="BMONT2samuel div2samuel"><span class="english englishLabel">2 Samuel</span><br/><span class="tagalogleft tagalogLabel">2 Samuel</span></div></a>
            <a href="../OldTestament/11-1st-kings.html"><div class="BMONT1kings div1kings"><span class="english englishLabel">1 Kings</span><br/><span class="tagalogleft tagalogLabel">1 Mga Hari</span></div></a>
            <a href="../OldTestament/12-2nd-kings.html"><div class="BMONT2kings div2kings"><span class="english englishLabel">2 Kings</span><br/><span class="tagalogleft tagalogLabel">2 Mga Hari</span></div></a>
            <a href="../OldTestament/13-1st-chronicles.html"><div class="BMONT1chronicles div1chronicles"><span class="english englishLabel">1 Chronicles</span><br/><span class="tagalogleft tagalogLabel">1 Mga Cronica</span></div></a>
            <a href="../OldTestament/14-2nd-chronicles.html"><div class="BMONT2chronicles div2chronicles"><span class="english englishLabel">2 Chronicles</span><br/><span class="tagalogleft tagalogLabel">2 Mga Cronica</span></div></a>
            <a href="../OldTestament/15-ezra.html"><div class="BMONTezra divezra"><span class="english englishLabel">Ezra</span><br/><span class="tagalogleft tagalogLabel">Ezra</span></div></a>
            <a href="../OldTestament/16-nehemiah.html"><div class="BMONTnehemiah divnehemiah"><span class="english englishLabel">Nehemiah</span><br/><span class="tagalogleft tagalogLabel">Nehemias</span></div></a>
            <a href="../OldTestament/17-esther.html"><div class="BMONTesther divesther"><span class="english englishLabel">Esther</span><br/><span class="tagalogleft tagalogLabel">Ester</span></div></a>
            <a href="../OldTestament/18-job.html"><div class="BMONTjob divjob"><span class="english englishLabel">Job</span><br/><span class="tagalogleft tagalogLabel">Job</span></div></a>
            <a href="../OldTestament/19-psalms.html"><div class="BMONTpsalms divpsalms"><span class="english englishLabel">Psalms</span><br/><span class="tagalogleft tagalogLabel">Mga Awit</span></div></a>
            <a href="../OldTestament/20-proverbs.html"><div class="BMONTproverbs divproverbs"><span class="english englishLabel">Proverbs</span><br/><span class="tagalogleft tagalogLabel">Kawikaan</span></div></a>
            <a href="../OldTestament/21-ecclesiastes.html"><div class="BMONTecclesiastes divecclesiastes"><span class="english englishLabel">Ecclesiastes</span><br/><span class="tagalogleft tagalogLabel">Eclesiastes</span></div></a>
            <a href="../OldTestament/22-song-of-solomon.html"><div class="BMONTsongofsolomon divsongofsolomon"><span class="english englishLabel">Song of Solomon</span><br/><span class="tagalogleft tagalogLabel">Awit ng Mga Awit</span></div></a>
            <a href="../OldTestament/23-isaiah.html"><div class="BMONTisaiah divisaiah"><span class="english englishLabel">Isaiah</span><br/><span class="tagalogleft tagalogLabel">Isaias</span></div></a>
            <a href="../OldTestament/24-jeremiah.html"><div class="BMONTjeremiah divjeremiah"><span class="english englishLabel">Jeremiah</span><br/><span class="tagalogleft tagalogLabel">Jeremias</span></div></a>
            <a href="../OldTestament/25-lamentations.html"><div class="BMONTlamentations divlamentations"><span class="english englishLabel">Lamentations</span><br/><span class="tagalogleft tagalogLabel">Mga Panaghoy</span></div></a>
            <a href="../OldTestament/26-ezekiel.html"><div class="BMONTezekiel divezekiel"><span class="english englishLabel">Ezekiel</span><br/><span class="tagalogleft tagalogLabel">Ezekiel</span></div></a>
            <a href="../OldTestament/27-daniel.html"><div class="BMONTdaniel divdaniel"><span class="english englishLabel">Daniel</span><br/><span class="tagalogleft tagalogLabel">Daniel</span></div></a>
            <a href="../OldTestament/28-hosea.html"><div class="BMONThosea divhosea"><span class="english englishLabel">Hosea</span><br/><span class="tagalogleft tagalogLabel">Oseas</span></div></a>
            <a href="../OldTestament/29-joel.html"><div class="BMONTjoel divjoel"><span class="english englishLabel">Joel</span><br/><span class="tagalogleft tagalogLabel">Joel</span></div></a>
            <a href="../OldTestament/30-amos.html"><div class="BMONTamos divamos"><span class="english englishLabel">Amos</span><br/><span class="tagalogleft tagalogLabel">Amos</span></div></a>
            <a href="../OldTestament/31-obadiah.html"><div class="BMONTobadiah divobadiah"><span class="english englishLabel">Obadiah</span><br/><span class="tagalogleft tagalogLabel">Obadias</span></div></a>
            <a href="../OldTestament/32-jonah.html"><div class="BMONTjonah divjonah"><span class="english englishLabel">Jonah</span><br/><span class="tagalogleft tagalogLabel">Jonas</span></div></a>
            <a href="../OldTestament/33-micah.html"><div class="BMONTmicah divmicah"><span class="english englishLabel">Micah</span><br/><span class="tagalogleft tagalogLabel">Mikas</span></div></a>
            <a href="../OldTestament/34-nahum.html"><div class="BMONTnahum divnahum"><span class="english englishLabel">Nahum</span><br/><span class="tagalogleft tagalogLabel">Naum</span></div></a>
            <a href="../OldTestament/35-habakkuk.html"><div class="BMONThabakkuk divhabakkuk"><span class="english englishLabel">Habakkuk</span><br/><span class="tagalogleft tagalogLabel">Habacuc</span></div></a>
            <a href="../OldTestament/36-zephaniah.html"><div class="BMONTzephaniah divzephaniah"><span class="english englishLabel">Zephaniah</span><br/><span class="tagalogleft tagalogLabel">Sofonias</span></div></a>
            <a href="../OldTestament/37-haggai.html"><div class="BMONThaggai divhaggai"><span class="english englishLabel">Haggai</span><br/><span class="tagalogleft tagalogLabel">Ageo</span></div></a>
            <a href="../OldTestament/38-zechariah.html"><div class="BMONTzechariah divzechariah"><span class="english englishLabel">Zechariah</span><br/><span class="tagalogleft tagalogLabel">Zacarias</span></div></a>
            <a href="../OldTestament/39-malachi.html"><div class="BMONTmalachi divmalachi"><span class="english englishLabel">Malachi</span><br/><span class="tagalogleft tagalogLabel">Malakias</span></div></a>
      
</div>
<div id="NEWTB">
<br/>
<span class="LCNewTestament"><sub>NEW TESTAMENT</sub><br><b>BAGONG TIPAN</b><br/><br/></span></div>

<div class="books" id="divNEWbg">
              <a href="../NewTestament/40-matthew.html"><div class="BMONTmatthew divmatthew"><span class="english englishLabel">Matthew</span><br/><span class="tagalogleft tagalogLabel">Mateo</span></div></a>
            <a href="../NewTestament/41-mark.html"><div class="BMONTmark divmark"><span class="english englishLabel">Mark</span><br/><span class="tagalogleft tagalogLabel">Marcos</span></div></a>
            <a href="../NewTestament/42-luke.html"><div class="BMONTluke divluke"><span class="english englishLabel">Luke</span><br/><span class="tagalogleft tagalogLabel">Lucas</span></div></a>
            <a href="../NewTestament/43-john.html"><div class="BMONTjohn divjohn"><span class="english englishLabel">John</span><br/><span class="tagalogleft tagalogLabel">Juan</span></div></a>
            <a href="../NewTestament/44-acts.html"><div class="BMONTacts divacts"><span class="english englishLabel">Acts</span><br/><span class="tagalogleft tagalogLabel">Mga Gawa</span></div></a>
            <a href="../NewTestament/45-romans.html"><div class="BMONTromans divromans"><span class="english englishLabel">Romans</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Roma</span></div></a>
            <a href="../NewTestament/46-1st-corinthians.html"><div class="BMONT1corinthians div1corinthians"><span class="english englishLabel">1 Corinthians</span><br/><span class="tagalogleft tagalogLabel">1 Mga Taga Corinto</span></div></a>
            <a href="../NewTestament/47-2nd-corinthians.html"><div class="BMONT2corinthians div2corinthians"><span class="english englishLabel">2 Corinthians</span><br/><span class="tagalogleft tagalogLabel">2 Mga Taga Corinto</span></div></a>
            <a href="../NewTestament/48-galatians.html"><div class="BMONTgalatians divgalatians"><span class="english englishLabel">Galatians</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Galacia</span></div></a>
            <a href="../NewTestament/49-ephesians.html"><div class="BMONTephesians divephesians"><span class="english englishLabel">Ephesians</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Efeso</span></div></a>
            <a href="../NewTestament/50-philippians.html"><div class="BMONTphilippians divPhillippians"><span class="english englishLabel">Phillippians</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Filipos</span></div></a>
            <a href="../NewTestament/51-colossians.html"><div class="BMONTcolossians divcolossians"><span class="english englishLabel">Colossians</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Colosas</span></div></a>
            <a href="../NewTestament/52-1st-thessalonians.html"><div class="BMONT1thessalonians div1thessalonians"><span class="english englishLabel">1 Thessalonians</span><br/><span class="tagalogleft tagalogLabel">1 Mga Taga Tesalonica</span></div></a>
            <a href="../NewTestament/53-2nd-thessalonians.html"><div class="BMONT2thessalonians div2thessalonians"><span class="english englishLabel">2 Thessalonians</span><br/><span class="tagalogleft tagalogLabel">2 Mga Taga Tesalonica</span></div></a>
            <a href="../NewTestament/54-1st-timothy.html"><div class="BMONT1timothy div1timothy"><span class="english englishLabel">1 Timothy</span><br/><span class="tagalogleft tagalogLabel">1 Timoteo</span></div></a>
            <a href="../NewTestament/55-2nd-timothy.html"><div class="BMONT2timothy div2timothy"><span class="english englishLabel">2 Timothy</span><br/><span class="tagalogleft tagalogLabel">2 Timoteo</span></div></a>
            <a href="../NewTestament/56-titus.html"><div class="BMONTtitus divtitus"><span class="english englishLabel">Titus</span><br/><span class="tagalogleft tagalogLabel">Tito</span></div></a>
            <a href="../NewTestament/57-philemon.html"><div class="BMONTphilemon divphilemon"><span class="english englishLabel">Philemon</span><br/><span class="tagalogleft tagalogLabel">Filemon</span></div></a>
            <a href="../NewTestament/58-hebrews.html"><div class="BMONThebrews divhebrews"><span class="english englishLabel">Hebrews</span><br/><span class="tagalogleft tagalogLabel">Mga Hebreo</span></div></a>
            <a href="../NewTestament/59-james.html"><div class="BMONTjames divjames"><span class="english englishLabel">James</span><br/><span class="tagalogleft tagalogLabel">Santiago</span></div></a>
            <a href="../NewTestament/60-1st-peter.html"><div class="BMONT1peter div1peter"><span class="english englishLabel">1 Peter</span><br/><span class="tagalogleft tagalogLabel">1 Pedro</span></div></a>
            <a href="../NewTestament/61-2nd-peter.html"><div class="BMONT2peter div2peter"><span class="english englishLabel">2 Peter</span><br/><span class="tagalogleft tagalogLabel">2 Pedro</span></div></a>
            <a href="../NewTestament/62-1st-john.html"><div class="BMONT1john div1john"><span class="english englishLabel">1 John</span><br/><span class="tagalogleft tagalogLabel">1 Juan</span></div></a>
            <a href="../NewTestament/63-2nd-john.html"><div class="BMONT2john div2john"><span class="english englishLabel">2 John</span><br/><span class="tagalogleft tagalogLabel">2 Juan</span></div></a>
            <a href="../NewTestament/64-3rd-john.html"><div class="BMONT3john div3john"><span class="english englishLabel">3 John</span><br/><span class="tagalogleft tagalogLabel">3 Juan</span></div></a>
            <a href="../NewTestament/65-jude.html"><div class="BMONTjude divjude"><span class="english englishLabel">Jude</span><br/><span class="tagalogleft tagalogLabel">Judas</span></div></a>
            <a href="../NewTestament/66-revelation.html"><div class="BMONTrevelation divrevelation"><span class="english englishLabel">Revelation</span><br/><span class="tagalogleft tagalogLabel">Pahayag</span></div></a>
      
</div>
<br>
<hr class="lefthrLiner"/>

</br>
</div>

<div class="OtherMenu" id="more-links">





                        <div class="openingpagesearch">
                          
                        <input type="text" id="searchBox" placeholder="Search Bible and Press Enter.">
  </div>

         

                
     

     


</div>

        `;
      setTimeout(() => {
         // 1. Collect style tags and find the dynamic class
         const styles = document.head.querySelectorAll('style');
         let activeClass = null;

         for (const style of styles) {
            const match = style.textContent.match(/\.BMONT[a-z0-9]+/i);
            if (match) {
               activeClass = match[0].substring(1);
               break; // Optimization: stop searching once found
            }
         }

         if (!activeClass) return;

         // 2. Find and scroll the element
         const activeBook = this.querySelector(`.${activeClass}`);

         if (activeBook) {
            activeBook.scrollIntoView({
               block: 'center',
               behavior: 'smooth'
            });
         }
      }, 50);
   }
}

customElements.define('diglot-menu', DiglotMenu);


class DiglotMenuIndex extends HTMLElement {
   connectedCallback() {
      // 1. Set the HTML structure
      this.innerHTML = `



<div id="MenuContainer">

<div class="BibleChaptersMenu" id="book-links">
<div class="remainhere"><hr class="lefthrliner"/>
<span class="diglotnav">
   DIGLOT
  </span>
<br/>
<span class="bibleduo">
 KJV - Ang Biblia
  </span>
  <hr/>
  </div>

<hr class="lefthrliner"/>
<span class="diglotnav">
   DIGLOT
  </span>
<br/>
<span class="bibleduo">
 KJV - Ang Biblia
  </span>
<hr/>

<div id="OLDTB"><br/>
<span class="LCOldTestament">
<sub>OLD TESTAMENT</sub>
<br/>
<b>LUMANG TIPAN</b><br/><br/>
  </span></div>

<div class="books" id="divOLDbg">
            <a href="BiblePages/OldTestament/01-genesis.html"><div class="BMONTgenesis divgenesis"><span class="english englishLabel">Genesis</span><br/><span class="tagalogleft tagalogLabel">Genesis</span></div></a>
            <a href="BiblePages/OldTestament/02-exodus.html"><div class="BMONTexodus divexodus"><span class="english englishLabel">Exodus</span><br/><span class="tagalogleft tagalogLabel">Exodo</span></div></a>
            <a href="BiblePages/OldTestament/03-leviticus.html"><div class="BMONTleviticus divleviticus"><span class="english englishLabel">Leviticus</span><br/><span class="tagalogleft tagalogLabel">Levitico</span></div></a>
            <a href="BiblePages/OldTestament/04-numbers.html"><div class="BMONTnumbers divnumbers"><span class="english englishLabel">Numbers</span><br/><span class="tagalogleft tagalogLabel">Mga Bilang</span></div></a>
            <a href="BiblePages/OldTestament/05-deuteronomy.html"><div class="BMONTdeuteronomy divdeuteronomy"><span class="english englishLabel">Deuteronomy</span><br/><span class="tagalogleft tagalogLabel">Deuteronomio</span></div></a>
            <a href="BiblePages/OldTestament/06-joshua.html"><div class="BMONTjoshua divjoshua"><span class="english englishLabel">Joshua</span><br/><span class="tagalogleft tagalogLabel">Josue</span></div></a>
            <a href="BiblePages/OldTestament/07-judges.html"><div class="BMONTjudges divjudges"><span class="english englishLabel">Judges</span><br/><span class="tagalogleft tagalogLabel">Mga Hukom</span></div></a>
            <a href="BiblePages/OldTestament/08-ruth.html"><div class="BMONTruth divruth"><span class="english englishLabel">Ruth</span><br/><span class="tagalogleft tagalogLabel">Ruth</span></div></a>
            <a href="BiblePages/OldTestament/09-1st-samuel.html"><div class="BMONT1samuel div1samuel"><span class="english englishLabel">1 Samuel</span><br/><span class="tagalogleft tagalogLabel">1 Samuel</span></div></a>
            <a href="BiblePages/OldTestament/10-2nd-samuel.html"><div class="BMONT2samuel div2samuel"><span class="english englishLabel">2 Samuel</span><br/><span class="tagalogleft tagalogLabel">2 Samuel</span></div></a>
            <a href="BiblePages/OldTestament/11-1st-kings.html"><div class="BMONT1kings div1kings"><span class="english englishLabel">1 Kings</span><br/><span class="tagalogleft tagalogLabel">1 Mga Hari</span></div></a>
            <a href="BiblePages/OldTestament/12-2nd-kings.html"><div class="BMONT2kings div2kings"><span class="english englishLabel">2 Kings</span><br/><span class="tagalogleft tagalogLabel">2 Mga Hari</span></div></a>
            <a href="BiblePages/OldTestament/13-1st-chronicles.html"><div class="BMONT1chronicles div1chronicles"><span class="english englishLabel">1 Chronicles</span><br/><span class="tagalogleft tagalogLabel">1 Mga Cronica</span></div></a>
            <a href="BiblePages/OldTestament/14-2nd-chronicles.html"><div class="BMONT2chronicles div2chronicles"><span class="english englishLabel">2 Chronicles</span><br/><span class="tagalogleft tagalogLabel">2 Mga Cronica</span></div></a>
            <a href="BiblePages/OldTestament/15-ezra.html"><div class="BMONTezra divezra"><span class="english englishLabel">Ezra</span><br/><span class="tagalogleft tagalogLabel">Ezra</span></div></a>
            <a href="BiblePages/OldTestament/16-nehemiah.html"><div class="BMONTnehemiah divnehemiah"><span class="english englishLabel">Nehemiah</span><br/><span class="tagalogleft tagalogLabel">Nehemias</span></div></a>
            <a href="BiblePages/OldTestament/17-esther.html"><div class="BMONTesther divesther"><span class="english englishLabel">Esther</span><br/><span class="tagalogleft tagalogLabel">Ester</span></div></a>
            <a href="BiblePages/OldTestament/18-job.html"><div class="BMONTjob divjob"><span class="english englishLabel">Job</span><br/><span class="tagalogleft tagalogLabel">Job</span></div></a>
            <a href="BiblePages/OldTestament/19-psalms.html"><div class="BMONTpsalms divpsalms"><span class="english englishLabel">Psalms</span><br/><span class="tagalogleft tagalogLabel">Mga Awit</span></div></a>
            <a href="BiblePages/OldTestament/20-proverbs.html"><div class="BMONTproverbs divproverbs"><span class="english englishLabel">Proverbs</span><br/><span class="tagalogleft tagalogLabel">Kawikaan</span></div></a>
            <a href="BiblePages/OldTestament/21-ecclesiastes.html"><div class="BMONTecclesiastes divecclesiastes"><span class="english englishLabel">Ecclesiastes</span><br/><span class="tagalogleft tagalogLabel">Eclesiastes</span></div></a>
            <a href="BiblePages/OldTestament/22-song-of-solomon.html"><div class="BMONTsongofsolomon divsongofsolomon"><span class="english englishLabel">Song of Solomon</span><br/><span class="tagalogleft tagalogLabel">Awit ng Mga Awit</span></div></a>
            <a href="BiblePages/OldTestament/23-isaiah.html"><div class="BMONTisaiah divisaiah"><span class="english englishLabel">Isaiah</span><br/><span class="tagalogleft tagalogLabel">Isaias</span></div></a>
            <a href="BiblePages/OldTestament/24-jeremiah.html"><div class="BMONTjeremiah divjeremiah"><span class="english englishLabel">Jeremiah</span><br/><span class="tagalogleft tagalogLabel">Jeremias</span></div></a>
            <a href="BiblePages/OldTestament/25-lamentations.html"><div class="BMONTlamentations divlamentations"><span class="english englishLabel">Lamentations</span><br/><span class="tagalogleft tagalogLabel">Mga Panaghoy</span></div></a>
            <a href="BiblePages/OldTestament/26-ezekiel.html"><div class="BMONTezekiel divezekiel"><span class="english englishLabel">Ezekiel</span><br/><span class="tagalogleft tagalogLabel">Ezekiel</span></div></a>
            <a href="BiblePages/OldTestament/27-daniel.html"><div class="BMONTdaniel divdaniel"><span class="english englishLabel">Daniel</span><br/><span class="tagalogleft tagalogLabel">Daniel</span></div></a>
            <a href="BiblePages/OldTestament/28-hosea.html"><div class="BMONThosea divhosea"><span class="english englishLabel">Hosea</span><br/><span class="tagalogleft tagalogLabel">Oseas</span></div></a>
            <a href="BiblePages/OldTestament/29-joel.html"><div class="BMONTjoel divjoel"><span class="english englishLabel">Joel</span><br/><span class="tagalogleft tagalogLabel">Joel</span></div></a>
            <a href="BiblePages/OldTestament/30-amos.html"><div class="BMONTamos divamos"><span class="english englishLabel">Amos</span><br/><span class="tagalogleft tagalogLabel">Amos</span></div></a>
            <a href="BiblePages/OldTestament/31-obadiah.html"><div class="BMONTobadiah divobadiah"><span class="english englishLabel">Obadiah</span><br/><span class="tagalogleft tagalogLabel">Obadias</span></div></a>
            <a href="BiblePages/OldTestament/32-jonah.html"><div class="BMONTjonah divjonah"><span class="english englishLabel">Jonah</span><br/><span class="tagalogleft tagalogLabel">Jonas</span></div></a>
            <a href="BiblePages/OldTestament/33-micah.html"><div class="BMONTmicah divmicah"><span class="english englishLabel">Micah</span><br/><span class="tagalogleft tagalogLabel">Mikas</span></div></a>
            <a href="BiblePages/OldTestament/34-nahum.html"><div class="BMONTnahum divnahum"><span class="english englishLabel">Nahum</span><br/><span class="tagalogleft tagalogLabel">Naum</span></div></a>
            <a href="BiblePages/OldTestament/35-habakkuk.html"><div class="BMONThabakkuk divhabakkuk"><span class="english englishLabel">Habakkuk</span><br/><span class="tagalogleft tagalogLabel">Habacuc</span></div></a>
            <a href="BiblePages/OldTestament/36-zephaniah.html"><div class="BMONTzephaniah divzephaniah"><span class="english englishLabel">Zephaniah</span><br/><span class="tagalogleft tagalogLabel">Sofonias</span></div></a>
            <a href="BiblePages/OldTestament/37-haggai.html"><div class="BMONThaggai divhaggai"><span class="english englishLabel">Haggai</span><br/><span class="tagalogleft tagalogLabel">Ageo</span></div></a>
            <a href="BiblePages/OldTestament/38-zechariah.html"><div class="BMONTzechariah divzechariah"><span class="english englishLabel">Zechariah</span><br/><span class="tagalogleft tagalogLabel">Zacarias</span></div></a>
            <a href="BiblePages/OldTestament/39-malachi.html"><div class="BMONTmalachi divmalachi"><span class="english englishLabel">Malachi</span><br/><span class="tagalogleft tagalogLabel">Malakias</span></div></a>
      
</div>
<div id="NEWTB">
<br/>
<span class="LCNewTestament"><sub>NEW TESTAMENT</sub><br><b>BAGONG TIPAN</b><br/><br/></span></div>

<div class="books" id="divNEWbg">
              <a href="BiblePages/NewTestament/40-matthew.html"><div class="BMONTmatthew divmatthew"><span class="english englishLabel">Matthew</span><br/><span class="tagalogleft tagalogLabel">Mateo</span></div></a>
            <a href="BiblePages/NewTestament/41-mark.html"><div class="BMONTmark divmark"><span class="english englishLabel">Mark</span><br/><span class="tagalogleft tagalogLabel">Marcos</span></div></a>
            <a href="BiblePages/NewTestament/42-luke.html"><div class="BMONTluke divluke"><span class="english englishLabel">Luke</span><br/><span class="tagalogleft tagalogLabel">Lucas</span></div></a>
            <a href="BiblePages/NewTestament/43-john.html"><div class="BMONTjohn divjohn"><span class="english englishLabel">John</span><br/><span class="tagalogleft tagalogLabel">Juan</span></div></a>
            <a href="BiblePages/NewTestament/44-acts.html"><div class="BMONTacts divacts"><span class="english englishLabel">Acts</span><br/><span class="tagalogleft tagalogLabel">Mga Gawa</span></div></a>
            <a href="BiblePages/NewTestament/45-romans.html"><div class="BMONTromans divromans"><span class="english englishLabel">Romans</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Roma</span></div></a>
            <a href="BiblePages/NewTestament/46-1st-corinthians.html"><div class="BMONT1corinthians div1corinthians"><span class="english englishLabel">1 Corinthians</span><br/><span class="tagalogleft tagalogLabel">1 Mga Taga Corinto</span></div></a>
            <a href="BiblePages/NewTestament/47-2nd-corinthians.html"><div class="BMONT2corinthians div2corinthians"><span class="english englishLabel">2 Corinthians</span><br/><span class="tagalogleft tagalogLabel">2 Mga Taga Corinto</span></div></a>
            <a href="BiblePages/NewTestament/48-galatians.html"><div class="BMONTgalatians divgalatians"><span class="english englishLabel">Galatians</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Galacia</span></div></a>
            <a href="BiblePages/NewTestament/49-ephesians.html"><div class="BMONTephesians divephesians"><span class="english englishLabel">Ephesians</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Efeso</span></div></a>
            <a href="BiblePages/NewTestament/50-philippians.html"><div class="BMONTphilippians divPhillippians"><span class="english englishLabel">Phillippians</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Filipos</span></div></a>
            <a href="BiblePages/NewTestament/51-colossians.html"><div class="BMONTcolossians divcolossians"><span class="english englishLabel">Colossians</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Colosas</span></div></a>
            <a href="BiblePages/NewTestament/52-1st-thessalonians.html"><div class="BMONT1thessalonians div1thessalonians"><span class="english englishLabel">1 Thessalonians</span><br/><span class="tagalogleft tagalogLabel">1 Mga Taga Tesalonica</span></div></a>
            <a href="BiblePages/NewTestament/53-2nd-thessalonians.html"><div class="BMONT2thessalonians div2thessalonians"><span class="english englishLabel">2 Thessalonians</span><br/><span class="tagalogleft tagalogLabel">2 Mga Taga Tesalonica</span></div></a>
            <a href="BiblePages/NewTestament/54-1st-timothy.html"><div class="BMONT1timothy div1timothy"><span class="english englishLabel">1 Timothy</span><br/><span class="tagalogleft tagalogLabel">1 Timoteo</span></div></a>
            <a href="BiblePages/NewTestament/55-2nd-timothy.html"><div class="BMONT2timothy div2timothy"><span class="english englishLabel">2 Timothy</span><br/><span class="tagalogleft tagalogLabel">2 Timoteo</span></div></a>
            <a href="BiblePages/NewTestament/56-titus.html"><div class="BMONTtitus divtitus"><span class="english englishLabel">Titus</span><br/><span class="tagalogleft tagalogLabel">Tito</span></div></a>
            <a href="BiblePages/NewTestament/57-philemon.html"><div class="BMONTphilemon divphilemon"><span class="english englishLabel">Philemon</span><br/><span class="tagalogleft tagalogLabel">Filemon</span></div></a>
            <a href="BiblePages/NewTestament/58-hebrews.html"><div class="BMONThebrews divhebrews"><span class="english englishLabel">Hebrews</span><br/><span class="tagalogleft tagalogLabel">Mga Hebreo</span></div></a>
            <a href="BiblePages/NewTestament/59-james.html"><div class="BMONTjames divjames"><span class="english englishLabel">James</span><br/><span class="tagalogleft tagalogLabel">Santiago</span></div></a>
            <a href="BiblePages/NewTestament/60-1st-peter.html"><div class="BMONT1peter div1peter"><span class="english englishLabel">1 Peter</span><br/><span class="tagalogleft tagalogLabel">1 Pedro</span></div></a>
            <a href="BiblePages/NewTestament/61-2nd-peter.html"><div class="BMONT2peter div2peter"><span class="english englishLabel">2 Peter</span><br/><span class="tagalogleft tagalogLabel">2 Pedro</span></div></a>
            <a href="BiblePages/NewTestament/62-1st-john.html"><div class="BMONT1john div1john"><span class="english englishLabel">1 John</span><br/><span class="tagalogleft tagalogLabel">1 Juan</span></div></a>
            <a href="BiblePages/NewTestament/63-2nd-john.html"><div class="BMONT2john div2john"><span class="english englishLabel">2 John</span><br/><span class="tagalogleft tagalogLabel">2 Juan</span></div></a>
            <a href="BiblePages/NewTestament/64-3rd-john.html"><div class="BMONT3john div3john"><span class="english englishLabel">3 John</span><br/><span class="tagalogleft tagalogLabel">3 Juan</span></div></a>
            <a href="BiblePages/NewTestament/65-jude.html"><div class="BMONTjude divjude"><span class="english englishLabel">Jude</span><br/><span class="tagalogleft tagalogLabel">Judas</span></div></a>
            <a href="BiblePages/NewTestament/66-revelation.html"><div class="BMONTrevelation divrevelation"><span class="english englishLabel">Revelation</span><br/><span class="tagalogleft tagalogLabel">Pahayag</span></div></a>
      
</div>
<br>
<hr class="lefthrLiner"/>

</br>
</div>

  <div class="OtherMenu" id="more-links">

    SHARE THIS ON TWITTER.
    SHARE ON FACEBOOK.
  </div>
             


         

                      

               


</div>

  `;
      setTimeout(() => {
         // 1. Collect style tags and find the dynamic class
         const styles = document.head.querySelectorAll('style');
         let activeClass = null;

         for (const style of styles) {
            const match = style.textContent.match(/\.BMONT[a-z0-9]+/i);
            if (match) {
               activeClass = match[0].substring(1);
               break; // Optimization: stop searching once found
            }
         }

         if (!activeClass) return;

         // 2. Find and scroll the element
         const activeBook = this.querySelector(`.${activeClass}`);

         if (activeBook) {
            activeBook.scrollIntoView({
               block: 'center',
               behavior: 'smooth'
            });
         }
      }, 50);
   }
}

customElements.define('diglot-menu-index', DiglotMenuIndex);


class JoinerDiglotPostAIndex extends HTMLElement {
   connectedCallback() {
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
      <a href="BiblePages/OldTestament/01-genesis.html">
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
      <a href="BiblePages/OldTestament/01-genesis.html">
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
      <a href="BiblePages/OldTestament/01-genesis.html">
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
      <a href="BiblePages/OldTestament/01-genesis.html">
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




  

    <a href="BiblePages/BridgePassages/bible-passages.html">
      <div class="OtherLinks">
        Popular Passages
      </div>
    </a>

    <a href="BiblePages/DailyDevotion/index.html">
      <div class="OtherLinks tr2">
        <span class="tr2">Daily Devotion</span>
      </div>
    </a>

    <a href="BiblePages/BridgePassages/bridge-to-life.html">
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

customElements.define('joiner-diglot-post-a-index', JoinerDiglotPostAIndex);


class JoinerDiglotPostBIndex extends HTMLElement {
   connectedCallback() {
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
      <a href="BiblePages/OldTestament/01-genesis.html">
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
      <a href="BiblePages/OldTestament/01-genesis.html">
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
      <a href="BiblePages/OldTestament/01-genesis.html">
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
      <a href="BiblePages/OldTestament/01-genesis.html">
        <div class="biblejournalposts">
          <span class="journalnumber">Bible Journal - 4</span>
          <br />
          <span class="journaltitle">
            There's no real enemy, than satan and his fallen angels.
          </span>
        </div>
      </a>
    </div>

 

    <a href="BiblePages/BridgePassages/bible-passages.html">
      <div class="OtherLinks">
        Popular Passages
      </div>
    </a>

    <a href="BiblePages/DailyDevotion/index.html">
      <div class="OtherLinks tr2">
        <span class="tr2">Daily Devotion</span>
      </div>
    </a>

    <a href="BiblePages/BridgePassages/bridge-to-life.html">
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

customElements.define('joiner-diglot-post-b-index', JoinerDiglotPostBIndex);


class DiglotPostButtonIndex extends HTMLElement {
   connectedCallback() {
      // 1. Set the HTML structure
      this.innerHTML = `


<joiner-diglot-post-a-index id="separatedivider"></joiner-diglot-post-a-index>

<joiner-diglot-post-b-index id="joinerdivider"></joiner-diglot-post-b-index>



`;
   }
}

customElements.define('diglot-post-button-index', DiglotPostButtonIndex);










class DiglotFooter extends HTMLElement {
   connectedCallback() {
      // 1. Set the HTML structure
      this.innerHTML = `
      

      <div class="diglotfooterdiv">   <br/><input type="text" id="searchBox" placeholder="Search Bible and Press Enter.">
        
      <br/><br/>Site Map Contact Us</div>


  `;

   }
}


customElements.define('diglot-footer', DiglotFooter);



class DiglotFooterIndex extends HTMLElement {
   connectedCallback() {
      // 1. Set the HTML structure
      this.innerHTML = `
      

      <div class="diglotfooterdiv" style="text-align:center;">  
      <br/><br/>Site Map Contact Us</div>


  `;

   }
}


customElements.define('diglot-footer-index', DiglotFooterIndex);

class DiglotSearchBar extends HTMLElement {
   connectedCallback() {
      // 1. Set the HTML structure
      this.innerHTML = `
      <div id="modulesearch">
   <input type="text" id="searchBox" placeholder="Search Bible and Press Enter.">
   </div>

      `;

   }
}


customElements.define('diglot-search-bar', DiglotSearchBar);


