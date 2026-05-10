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

    <a href="../../Others/pages/bible-passages.html">
      <div class="OtherLinks">
        Popular Passages
      </div>
    </a>

    <a href="../../Others/pages/daily-devotion/index.html">
      <div class="OtherLinks tr2">
        <span class="tr2">Daily Devotion</span>
      </div>
    </a>

    <a href="../../Others/pages/bridge-to-life.html">
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