const bibleControls = `
<script>
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>
<div id="controls">
    <div class="controls-row">
        <div class="control-btn" onclick="showEnglishOnly()"> English </div>
        <div class="control-btn" onclick="showTagalogOnly()"> Tagalog </div>
        <div class="control-btn" onclick="showAll()"> Diglot </div>
        <div class="control-group">
            <div class="mini-btn" onclick="decreaseFont()"> SMALLER TEXT </div>
            <div class="mini-btn" onclick="resetFont()"> RESET </div>
            <div class="mini-btn" onclick="increaseFont()"> BIGGER TEXT </div>
        </div>
    </div>
    <div class="search controls-row">
        <form id="searchPassage" method="get" action="http://englishtagalogbible.com/search.php">
            <input type="text" id="qry" name="qry" 
                onfocus="this.value=(this.value=='Search the Bible') ? '' : this.value;" 
                value="Search the Bible" 
                onblur="this.value=(this.value=='') ? 'Search the Bible' : this.value;" />
        </form>
        <div class="controls-row">
            <div class="back-to-top control-btn" onclick="scrollToTop()"> GO UP </div>
        </div>
    </div>
    <div class="controls-row input-row">
        <input id="verseInput" placeholder="Enter Verse Highlight, like 1-10, 2,5,6, 5-8,10,14-15, Press Enter" type="text"/>
    </div>
    <div class="controls-row">
        <div class="control-btn" onclick="copyEnglish()"> Copy English </div>
        <div class="control-btn" onclick="copyTagalog()"> Copy Tagalog </div>
        <div class="control-btn" onclick="copyBoth()"> Copy Diglot </div>
    </div>
</div>
`;

document.write (bibleControls);
