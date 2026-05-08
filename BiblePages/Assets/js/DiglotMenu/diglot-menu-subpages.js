class DiglotMenu extends HTMLElement {
  connectedCallback () {
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
            <a href="../../../OldTestament/01-genesis.html"><div class="BMONTgenesis divgenesis"><span class="english englishLabel">Genesis</span><br/><span class="tagalogleft tagalogLabel">Genesis</span></div></a>
            <a href="../../../OldTestament/02-exodus.html"><div class="BMONTexodus divexodus"><span class="english englishLabel">Exodus</span><br/><span class="tagalogleft tagalogLabel">Exodo</span></div></a>
            <a href="../../../OldTestament/03-leviticus.html"><div class="BMONTleviticus divleviticus"><span class="english englishLabel">Leviticus</span><br/><span class="tagalogleft tagalogLabel">Levitico</span></div></a>
            <a href="../../../OldTestament/04-numbers.html"><div class="BMONTnumbers divnumbers"><span class="english englishLabel">Numbers</span><br/><span class="tagalogleft tagalogLabel">Mga Bilang</span></div></a>
            <a href="../../../OldTestament/05-deuteronomy.html"><div class="BMONTdeuteronomy divdeuteronomy"><span class="english englishLabel">Deuteronomy</span><br/><span class="tagalogleft tagalogLabel">Deuteronomio</span></div></a>
            <a href="../../../OldTestament/06-joshua.html"><div class="BMONTjoshua divjoshua"><span class="english englishLabel">Joshua</span><br/><span class="tagalogleft tagalogLabel">Josue</span></div></a>
            <a href="../../../OldTestament/07-judges.html"><div class="BMONTjudges divjudges"><span class="english englishLabel">Judges</span><br/><span class="tagalogleft tagalogLabel">Mga Hukom</span></div></a>
            <a href="../../../OldTestament/08-ruth.html"><div class="BMONTruth divruth"><span class="english englishLabel">Ruth</span><br/><span class="tagalogleft tagalogLabel">Ruth</span></div></a>
            <a href="../../../OldTestament/09-1st-samuel.html"><div class="BMONT1samuel div1samuel"><span class="english englishLabel">1 Samuel</span><br/><span class="tagalogleft tagalogLabel">1 Samuel</span></div></a>
            <a href="../../../OldTestament/10-2nd-samuel.html"><div class="BMONT2samuel div2samuel"><span class="english englishLabel">2 Samuel</span><br/><span class="tagalogleft tagalogLabel">2 Samuel</span></div></a>
            <a href="../../../OldTestament/11-1st-kings.html"><div class="BMONT1kings div1kings"><span class="english englishLabel">1 Kings</span><br/><span class="tagalogleft tagalogLabel">1 Mga Hari</span></div></a>
            <a href="../../../OldTestament/12-2nd-kings.html"><div class="BMONT2kings div2kings"><span class="english englishLabel">2 Kings</span><br/><span class="tagalogleft tagalogLabel">2 Mga Hari</span></div></a>
            <a href="../../../OldTestament/13-1st-chronicles.html"><div class="BMONT1chronicles div1chronicles"><span class="english englishLabel">1 Chronicles</span><br/><span class="tagalogleft tagalogLabel">1 Mga Cronica</span></div></a>
            <a href="../../../OldTestament/14-2nd-chronicles.html"><div class="BMONT2chronicles div2chronicles"><span class="english englishLabel">2 Chronicles</span><br/><span class="tagalogleft tagalogLabel">2 Mga Cronica</span></div></a>
            <a href="../../../OldTestament/15-ezra.html"><div class="BMONTezra divezra"><span class="english englishLabel">Ezra</span><br/><span class="tagalogleft tagalogLabel">Ezra</span></div></a>
            <a href="../../../OldTestament/16-nehemiah.html"><div class="BMONTnehemiah divnehemiah"><span class="english englishLabel">Nehemiah</span><br/><span class="tagalogleft tagalogLabel">Nehemias</span></div></a>
            <a href="../../../OldTestament/17-esther.html"><div class="BMONTesther divesther"><span class="english englishLabel">Esther</span><br/><span class="tagalogleft tagalogLabel">Ester</span></div></a>
            <a href="../../../OldTestament/18-job.html"><div class="BMONTjob divjob"><span class="english englishLabel">Job</span><br/><span class="tagalogleft tagalogLabel">Job</span></div></a>
            <a href="../../../OldTestament/19-psalms.html"><div class="BMONTpsalms divpsalms"><span class="english englishLabel">Psalms</span><br/><span class="tagalogleft tagalogLabel">Mga Awit</span></div></a>
            <a href="../../../OldTestament/20-proverbs.html"><div class="BMONTproverbs divproverbs"><span class="english englishLabel">Proverbs</span><br/><span class="tagalogleft tagalogLabel">Kawikaan</span></div></a>
            <a href="../../../OldTestament/21-ecclesiastes.html"><div class="BMONTecclesiastes divecclesiastes"><span class="english englishLabel">Ecclesiastes</span><br/><span class="tagalogleft tagalogLabel">Eclesiastes</span></div></a>
            <a href="../../../OldTestament/22-song-solomon.html"><div class="BMONTsongofsolomon divsongofsolomon"><span class="english englishLabel">Song of Solomon</span><br/><span class="tagalogleft tagalogLabel">Awit ni Solomon</span></div></a>
            <a href="../../../OldTestament/23-isaiah.html"><div class="BMONTisaiah divisaiah"><span class="english englishLabel">Isaiah</span><br/><span class="tagalogleft tagalogLabel">Isaias</span></div></a>
            <a href="../../../OldTestament/24-jeremiah.html"><div class="BMONTjeremiah divjeremiah"><span class="english englishLabel">Jeremiah</span><br/><span class="tagalogleft tagalogLabel">Jeremias</span></div></a>
            <a href="../../../OldTestament/25-lamentations.html"><div class="BMONTlamentations divlamentations"><span class="english englishLabel">Lamentations</span><br/><span class="tagalogleft tagalogLabel">Mga Panaghoy</span></div></a>
            <a href="../../../OldTestament/26-ezekiel.html"><div class="BMONTezekiel divezekiel"><span class="english englishLabel">Ezekiel</span><br/><span class="tagalogleft tagalogLabel">Ezekiel</span></div></a>
            <a href="../../../OldTestament/27-daniel.html"><div class="BMONTdaniel divdaniel"><span class="english englishLabel">Daniel</span><br/><span class="tagalogleft tagalogLabel">Daniel</span></div></a>
            <a href="../../../OldTestament/28-hosea.html"><div class="BMONThosea divhosea"><span class="english englishLabel">Hosea</span><br/><span class="tagalogleft tagalogLabel">Oseas</span></div></a>
            <a href="../../../OldTestament/29-joel.html"><div class="BMONTjoel divjoel"><span class="english englishLabel">Joel</span><br/><span class="tagalogleft tagalogLabel">Joel</span></div></a>
            <a href="../../../OldTestament/30-amos.html"><div class="BMONTamos divamos"><span class="english englishLabel">Amos</span><br/><span class="tagalogleft tagalogLabel">Amos</span></div></a>
            <a href="../../../OldTestament/31-obadiah.html"><div class="BMONTobadiah divobadiah"><span class="english englishLabel">Obadiah</span><br/><span class="tagalogleft tagalogLabel">Obadias</span></div></a>
            <a href="../../../OldTestament/32-jonah.html"><div class="BMONTjonah divjonah"><span class="english englishLabel">Jonah</span><br/><span class="tagalogleft tagalogLabel">Jonas</span></div></a>
            <a href="../../../OldTestament/33-micah.html"><div class="BMONTmicah divmicah"><span class="english englishLabel">Micah</span><br/><span class="tagalogleft tagalogLabel">Mikas</span></div></a>
            <a href="../../../OldTestament/34-nahum.html"><div class="BMONTnahum divnahum"><span class="english englishLabel">Nahum</span><br/><span class="tagalogleft tagalogLabel">Naum</span></div></a>
            <a href="../../../OldTestament/35-habakkuk.html"><div class="BMONThabakkuk divhabakkuk"><span class="english englishLabel">Habakkuk</span><br/><span class="tagalogleft tagalogLabel">Habacuc</span></div></a>
            <a href="../../../OldTestament/36-zephaniah.html"><div class="BMONTzephaniah divzephaniah"><span class="english englishLabel">Zephaniah</span><br/><span class="tagalogleft tagalogLabel">Sofonias</span></div></a>
            <a href="../../../OldTestament/37-haggai.html"><div class="BMONThaggai divhaggai"><span class="english englishLabel">Haggai</span><br/><span class="tagalogleft tagalogLabel">Ageo</span></div></a>
            <a href="../../../OldTestament/38-zechariah.html"><div class="BMONTzechariah divzechariah"><span class="english englishLabel">Zechariah</span><br/><span class="tagalogleft tagalogLabel">Zacarias</span></div></a>
            <a href="../../../OldTestament/39-malachi.html"><div class="BMONTmalachi divmalachi"><span class="english englishLabel">Malachi</span><br/><span class="tagalogleft tagalogLabel">Malakias</span></div></a>
      
</div>
<div id="NEWTB">
<br/>
<span class="LCNewTestament"><sub>NEW TESTAMENT</sub><br><b>BAGONG TIPAN</b><br/><br/></span></div>

<div class="books" id="divNEWbg">
              <a href="../../../NewTestament/40-matthew.html"><div class="BMONTmatthew divmatthew"><span class="english englishLabel">Matthew</span><br/><span class="tagalogleft tagalogLabel">Mateo</span></div></a>
            <a href="../../../NewTestament/41-mark.html"><div class="BMONTmark divmark"><span class="english englishLabel">Mark</span><br/><span class="tagalogleft tagalogLabel">Marcos</span></div></a>
            <a href="../../../NewTestament/42-luke.html"><div class="BMONTluke divluke"><span class="english englishLabel">Luke</span><br/><span class="tagalogleft tagalogLabel">Lucas</span></div></a>
            <a href="../../../NewTestament/43-john.html"><div class="BMONTjohn divjohn"><span class="english englishLabel">John</span><br/><span class="tagalogleft tagalogLabel">Juan</span></div></a>
            <a href="../../../NewTestament/44-acts.html"><div class="BMONTacts divacts"><span class="english englishLabel">Acts</span><br/><span class="tagalogleft tagalogLabel">Mga Gawa</span></div></a>
            <a href="../../../NewTestament/45-romans.html"><div class="BMONTromans divromans"><span class="english englishLabel">Romans</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Roma</span></div></a>
            <a href="../../../NewTestament/46-1st-corinthians.html"><div class="BMONT1corinthians div1corinthians"><span class="english englishLabel">1 Corinthians</span><br/><span class="tagalogleft tagalogLabel">1 Mga Taga Corinto</span></div></a>
            <a href="../../../NewTestament/47-2nd-corinthians.html"><div class="BMONT2corinthians div2corinthians"><span class="english englishLabel">2 Corinthians</span><br/><span class="tagalogleft tagalogLabel">2 Mga Taga Corinto</span></div></a>
            <a href="../../../NewTestament/48-galatians.html"><div class="BMONTgalatians divgalatians"><span class="english englishLabel">Galatians</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Galacia</span></div></a>
            <a href="../../../NewTestament/49-ephesians.html"><div class="BMONTephesians divephesians"><span class="english englishLabel">Ephesians</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Efeso</span></div></a>
            <a href="../../../NewTestament/50-philippians.html"><div class="BMONTphilippians divPhillippians"><span class="english englishLabel">Phillippians</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Filipos</span></div></a>
            <a href="../../../NewTestament/51-colossians.html"><div class="BMONTcolossians divcolossians"><span class="english englishLabel">Colossians</span><br/><span class="tagalogleft tagalogLabel">Mga Taga Colosas</span></div></a>
            <a href="../../../NewTestament/52-1st-thessalonians.html"><div class="BMONT1thessalonians div1thessalonians"><span class="english englishLabel">1 Thessalonians</span><br/><span class="tagalogleft tagalogLabel">1 Mga Taga Tesalonica</span></div></a>
            <a href="../../../NewTestament/53-2nd-thessalonians.html"><div class="BMONT2thessalonians div2thessalonians"><span class="english englishLabel">2 Thessalonians</span><br/><span class="tagalogleft tagalogLabel">2 Mga Taga Tesalonica</span></div></a>
            <a href="../../../NewTestament/54-1st-timothy.html"><div class="BMONT1timothy div1timothy"><span class="english englishLabel">1 Timothy</span><br/><span class="tagalogleft tagalogLabel">1 Timoteo</span></div></a>
            <a href="../../../NewTestament/55-2nd-timothy.html"><div class="BMONT2timothy div2timothy"><span class="english englishLabel">2 Timothy</span><br/><span class="tagalogleft tagalogLabel">2 Timoteo</span></div></a>
            <a href="../../../NewTestament/56-titus.html"><div class="BMONTtitus divtitus"><span class="english englishLabel">Titus</span><br/><span class="tagalogleft tagalogLabel">Tito</span></div></a>
            <a href="../../../NewTestament/57-philemon.html"><div class="BMONTphilemon divphilemon"><span class="english englishLabel">Philemon</span><br/><span class="tagalogleft tagalogLabel">Filemon</span></div></a>
            <a href="../../../NewTestament/58-hebrews.html"><div class="BMONThebrews divhebrews"><span class="english englishLabel">Hebrews</span><br/><span class="tagalogleft tagalogLabel">Mga Hebreo</span></div></a>
            <a href="../../../NewTestament/59-james.html"><div class="BMONTjames divjames"><span class="english englishLabel">James</span><br/><span class="tagalogleft tagalogLabel">Santiago</span></div></a>
            <a href="../../../NewTestament/60-1st-peter.html"><div class="BMONT1peter div1peter"><span class="english englishLabel">1 Pedro</span><br/><span class="tagalogleft tagalogLabel">1 Pedro</span></div></a>
            <a href="../../../NewTestament/61-2nd-peter.html"><div class="BMONT2peter div2peter"><span class="english englishLabel">2 Pedro</span><br/><span class="tagalogleft tagalogLabel">2 Pedro</span></div></a>
            <a href="../../../NewTestament/62-1st-john.html"><div class="BMONT1john div1john"><span class="english englishLabel">1 John</span><br/><span class="tagalogleft tagalogLabel">1 Juan</span></div></a>
            <a href="../../../NewTestament/63-2nd-john.html"><div class="BMONT2john div2john"><span class="english englishLabel">2 John</span><br/><span class="tagalogleft tagalogLabel">2 Juan</span></div></a>
            <a href="../../../NewTestament/64-3rd-john.html"><div class="BMONT3john div3john"><span class="english englishLabel">3 John</span><br/><span class="tagalogleft tagalogLabel">3 Juan</span></div></a>
            <a href="../../../NewTestament/65-jude.html"><div class="BMONTjude divjude"><span class="english englishLabel">Jude</span><br/><span class="tagalogleft tagalogLabel">Judas</span></div></a>
            <a href="../../../NewTestament/66-revelation.html"><div class="BMONTrevelation divrevelation"><span class="english englishLabel">Revelation</span><br/><span class="tagalogleft tagalogLabel">Pahayag</span></div></a>
      
</div>
<br>
<hr class="lefthrLiner"/>

</br>
</div>

<div class="OtherMenu" id="more-links">


<a href="../../../Others/pages/bible-passages.html"><div class="OtherLinks">
Popular Passages
</div>
</a>


<a href="../../../Others/pages/daily-devotion/index.html">
<div class="OtherLinks tr2">
<span class="tr2">Daily Devotion</span></div>
</a>


<a href="../../../Others/pages/bridge-to-life.html">
<div class="OtherLinks">
<span class="tr3"></span>
The Bridge to Life</div></a>

<a href="http://facebook.com/authorizedbible">
<div class="OtherLinks">
<span class="tr5">
Facebook Page of<br/>
EnglishTagalogBible.Com</span>
</div></a>

<a href="http://philnavs.org">
<div class="OtherLinks">
<span class="tr5" style="display:inline;">This website is</span><br/><span class="tr5" style="display:inLine;">a ministry of the </span><br><span style="display:inLine;"class="navigatorslink">NAVIGATORS</span><br>
<span class="tr8" style="color:maroon; text-adivgn:center !important;">PhilNavs.Org</span>
</div></a>

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
}, 1000);
  }
}

customElements.define('diglot-menu', DiglotMenu);