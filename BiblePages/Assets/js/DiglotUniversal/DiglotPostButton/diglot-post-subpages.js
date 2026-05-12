class DiglotPostButton extends HTMLElement {
  connectedCallback () {
    // 1. Set the HTML structure
    this.innerHTML = `
      


<div id="MenuContainerMirrored">


    <div id="biblejournalpostsholder">

    <div class="remainhere"><hr class="lefthrliner"/>
    <span class="diglotnav">
    BIBLE JOURNALS
    </span>
    <br/>
    <span class="bibleduo">
    Bible and Life Lessons
    </span>
    <hr/>
    </div>

    <hr class="lefthrliner"/>
    <span class="diglotnav">
    BIBLE JOURNALS
    </span>
    <br/>
    <span class="bibleduo">
    Bible and Life Lessons
    </span>
    <hr/>


                <div class="books" id="divOLDbg">
                        <a href="../OldTestament/01-genesis.html">
                            <div class="biblejournalposts">
                                <span class="journalnumber">Bible Journal - 1</span>
                                <br/>
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
                                <br/>
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
                                <br/>
                                <span class="journaltitle">
                                The Golden Gift of God is HIS LOVE.
                                </span>
                            </div>
                        </a>                 
                </div>
                <div class="books" id="divOLDbg">
                        <a href="../OldTestament/01-genesis.html">
                            <div class="biblejournalposts">
                                <span class="journalnumber">Bible Journal - 4</span>
                                <br/>
                                <span class="journaltitle">
                                SHOCKING! God Adonai's Vineyard destroyed. And nothing left.
                                </span>
                            </div>
                        </a>                 
                </div>
                <div class="books" id="divOLDbg">
                        <a href="../OldTestament/01-genesis.html">
                            <div class="biblejournalposts">
                                <span class="journalnumber">Bible Journal - 5</span>
                                <br/>
                                <span class="journaltitle">
                                SHOCKING! GOD ADONAI'S VINEYARD FELL. And nothing left.
                                </span>
                            </div>
                        </a>                 
                </div>

    </div>


        <div id="combinedcontrols">


                                
                    <div id="controls displaynoneMenu">
                        <div class="controls-row">
                            <div class="control-btn" onclick="showEnglishOnly()"> English </div>
                            <div class="control-btn" onclick="showTagalogOnly()"> Tagalog </div>
                            <div class="control-btn" onclick="showAll()"> Diglot </div>
                        </div>
                        
                        <div class="control-group">
                                <div class="mini-btn" onclick="decreaseFont()"> SMALLER TEXT </div>
                                <div class="mini-btn" onclick="resetFont()"> RESET </div>
                                <div class="mini-btn" onclick="increaseFont()"> BIGGER TEXT </div>
                        </div>
                       
                        <div class="search controls-row">
                            <form id="searchPassage" method="get" action="http://englishtagalogbible.com/search.php">

                            </form>
              
                        </div>
                        <div class="controls-row input-row">
                            <input id="verseInput" placeholder="Enter Verse Highlight, like 1-10, 2,5,6, 5-8,Press Enter" type="text"/>
                        </div>
                        <div class="controls-row">
                            <div class="control-btn" onclick="copyEnglish()"> Copy English </div>
                            <div class="control-btn" onclick="copyTagalog()"> Copy Tagalog </div>
                            <div class="control-btn" onclick="copyBoth()"> Copy Diglot </div>
                        </div>
                    </div>


            </div>


                        <combinedpostbutton></combindedpostbutton>


  </div>
        `;
  }
}

customElements.define ('diglot-post-button', DiglotPostButton);
