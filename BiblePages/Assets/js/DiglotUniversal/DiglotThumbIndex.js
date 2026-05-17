class DiglotThumbMenu extends HTMLElement {
	connectedCallback() {

		this.innerHTML = `
                      <div id="biblemenuanimation">
                        <div class="testamentsholderthumb">
                            <div class="topspacer">
                            </div>

                      
                            <a href="searchbible.html"><div id="searchhere"><span class="searchside">SEARCH THE ENTIRE BIBLE WITH SEARCH PAGE</span><img src="BiblePages/Assets/images/journal/search.svg" class="searchright" style="min-width: 20px; max-width:200px; min-height: 20px; max-height:200px; height:auto; width:70%;"></div></a>

                            <div class="menuheader">
                              TESTAMENTS
                            </div>
                            <div class="newoldholder">
                              <div id="oldrowINNER" class="oldrow">
                                  <div id="bkegenesis" class="NewTestamentbke">
                                    <span class="newlanguage">Genesis</span>
                                    <span class="newsublanguage">(Genesis)</span>
                                  </div>
                                  <div id="bkegenesischaptersResult" class="chapterResult"></div>
                                  <div id="bkegenesisverseResult" class="verseResult"></div>
                                  <div id="bkeexodus" class="NewTestamentbke">
                                    <span class="newlanguage">Exodus</span>
                                    <span class="newsublanguage">(Exodo)</span>
                                  </div>
                                  <div id="bkeexoduschaptersResult" class="chapterResult"></div>
                                  <div id="bkeexodusverseResult" class="verseResult"></div>
                                  <div id="bkeleviticus" class="NewTestamentbke">
                                    <span class="newlanguage">Leviticus</span>
                                    <span class="newsublanguage">(Levitico)</span>
                                  </div>
                                  <div id="bkeleviticuschaptersResult" class="chapterResult"></div>
                                  <div id="bkeleviticusverseResult" class="verseResult"></div>
                                  <div id="bkenumbers" class="NewTestamentbke">
                                    <span class="newlanguage">Numbers</span>
                                    <span class="newsublanguage">(Mga Bilang)</span>
                                  </div>
                                  <div id="bkenumberschaptersResult" class="chapterResult"></div>
                                  <div id="bkenumbersverseResult" class="verseResult"></div>
                                  <div id="bkedeuteronomy" class="NewTestamentbke">
                                    <span class="newlanguage">Deuteronomy</span>
                                    <span class="newsublanguage">(Deuteronomio)</span>
                                  </div>
                                  <div id="bkedeuteronomychaptersResult" class="chapterResult"></div>
                                  <div id="bkedeuteronomyverseResult" class="verseResult"></div>
                                  <div id="bkejoshua" class="NewTestamentbke">
                                    <span class="newlanguage">Joshua</span>
                                    <span class="newsublanguage">(Josue)</span>
                                  </div>
                                  <div id="bkejoshuachaptersResult" class="chapterResult"></div>
                                  <div id="bkejoshuaverseResult" class="verseResult"></div>
                                  <div id="bkejudges" class="NewTestamentbke">
                                    <span class="newlanguage">Judges</span>
                                    <span class="newsublanguage">(Mga Hukom)</span>
                                  </div>
                                  <div id="bkejudgeschaptersResult" class="chapterResult"></div>
                                  <div id="bkejudgesverseResult" class="verseResult"></div>
                                  <div id="bkeruth" class="NewTestamentbke">
                                    <span class="newlanguage">Ruth</span>
                                    <span class="newsublanguage">(Ruth)</span>
                                  </div>
                                  <div id="bkeruthchaptersResult" class="chapterResult"></div>
                                  <div id="bkeruthverseResult" class="verseResult"></div>
                                  <div id="bke1st-samuel" class="NewTestamentbke">
                                    <span class="newlanguage">1 Samuel</span>
                                    <span class="newsublanguage">(1 Samuel)</span>
                                  </div>
                                  <div id="bke1st-samuelchaptersResult" class="chapterResult"></div>
                                  <div id="bke1st-samuelverseResult" class="verseResult"></div>
                                  <div id="bke2nd-samuel" class="NewTestamentbke">
                                    <span class="newlanguage">2 Samuel</span>
                                    <span class="newsublanguage">(2 Samuel)</span>
                                  </div>
                                  <div id="bke2nd-samuelchaptersResult" class="chapterResult"></div>
                                  <div id="bke2nd-samuelverseResult" class="verseResult"></div>
                                  <div id="bke1st-kings" class="NewTestamentbke">
                                    <span class="newlanguage">1 Kings</span>
                                    <span class="newsublanguage">(1 Mga Hari)</span>
                                  </div>
                                  <div id="bke1st-kingschaptersResult" class="chapterResult"></div>
                                  <div id="bke1st-kingsverseResult" class="verseResult"></div>
                                  <div id="bke2nd-kings" class="NewTestamentbke">
                                    <span class="newlanguage">2 Kings</span>
                                    <span class="newsublanguage">(2 Mga Hari)</span>
                                  </div>
                                  <div id="bke2nd-kingschaptersResult" class="chapterResult"></div>
                                  <div id="bke2nd-kingsverseResult" class="verseResult"></div>
                                  <div id="bke1st-chronicles" class="NewTestamentbke">
                                    <span class="newlanguage">1 Chronicles</span>
                                    <span class="newsublanguage">(1 Mga Cronica)</span>
                                  </div>
                                  <div id="bke1st-chronicleschaptersResult" class="chapterResult"></div>
                                  <div id="bke1st-chroniclesverseResult" class="verseResult"></div>
                                  <div id="bke2nd-chronicles" class="NewTestamentbke">
                                    <span class="newlanguage">2 Chronicles</span>
                                    <span class="newsublanguage">(2 Mga Cronica)</span>
                                  </div>
                                  <div id="bke2nd-chronicleschaptersResult" class="chapterResult"></div>
                                  <div id="bke2nd-chroniclesverseResult" class="verseResult"></div>
                                  <div id="bkeezra" class="NewTestamentbke">
                                    <span class="newlanguage">Ezra</span>
                                    <span class="newsublanguage">(Ezra)</span>
                                  </div>
                                  <div id="bkeezrachaptersResult" class="chapterResult"></div>
                                  <div id="bkeezraverseResult" class="verseResult"></div>
                                  <div id="bkenehemiah" class="NewTestamentbke">
                                    <span class="newlanguage">Nehemiah</span>
                                    <span class="newsublanguage">(Nehemias)</span>
                                  </div>
                                  <div id="bkenehemiahchaptersResult" class="chapterResult"></div>
                                  <div id="bkenehemiahverseResult" class="verseResult"></div>
                                  <div id="bkeesther" class="NewTestamentbke">
                                    <span class="newlanguage">Esther</span>
                                    <span class="newsublanguage">(Ester)</span>
                                  </div>
                                  <div id="bkeestherchaptersResult" class="chapterResult"></div>
                                  <div id="bkeestherverseResult" class="verseResult"></div>
                                  <div id="bkejob" class="NewTestamentbke">
                                    <span class="newlanguage">Job</span>
                                    <span class="newsublanguage">(Job)</span>
                                  </div>
                                  <div id="bkejobchaptersResult" class="chapterResult"></div>
                                  <div id="bkejobverseResult" class="verseResult"></div>
                                  <div id="bkepsalms" class="NewTestamentbke">
                                    <span class="newlanguage">Psalms</span>
                                    <span class="newsublanguage">(Mga Awit)</span>
                                  </div>
                                  <div id="bkepsalmschaptersResult" class="chapterResult"></div>
                                  <div id="bkepsalmsverseResult" class="verseResult"></div>
                                  <div id="bkeproverbs" class="NewTestamentbke">
                                    <span class="newlanguage">Proverbs</span>
                                    <span class="newsublanguage">(Kawikaan)</span>
                                  </div>
                                  <div id="bkeproverbschaptersResult" class="chapterResult"></div>
                                  <div id="bkeproverbsverseResult" class="verseResult"></div>
                                  <div id="bkeecclesiastes" class="NewTestamentbke">
                                    <span class="newlanguage">Ecclesiastes</span>
                                    <span class="newsublanguage">(Eclesiastes)</span>
                                  </div>
                                  <div id="bkeecclesiasteschaptersResult" class="chapterResult"></div>
                                  <div id="bkeecclesiastesverseResult" class="verseResult"></div>
                                  <div id="bkesong-of-solomon" class="NewTestamentbke">
                                    <span class="newlanguage">Song of Solomon</span>
                                    <span class="newsublanguage">(Awit ng Mga Awit)</span>
                                  </div>
                                  <div id="bkesong-of-solomonchaptersResult" class="chapterResult"></div>
                                  <div id="bkesong-of-solomonverseResult" class="verseResult"></div>
                                  <div id="bkeisaiah" class="NewTestamentbke">
                                    <span class="newlanguage">Isaiah</span>
                                    <span class="newsublanguage">(Isaias)</span>
                                  </div>
                                  <div id="bkeisaiahchaptersResult" class="chapterResult"></div>
                                  <div id="bkeisaiahverseResult" class="verseResult"></div>
                                  <div id="bkejeremiah" class="NewTestamentbke">
                                    <span class="newlanguage">Jeremiah</span>
                                    <span class="newsublanguage">(Jeremias)</span>
                                  </div>
                                  <div id="bkejeremiahchaptersResult" class="chapterResult"></div>
                                  <div id="bkejeremiahverseResult" class="verseResult"></div>
                                  <div id="bkelamentations" class="NewTestamentbke">
                                    <span class="newlanguage">Lamentations</span>
                                    <span class="newsublanguage">(Mga Panaghoy)</span>
                                  </div>
                                  <div id="bkelamentationschaptersResult" class="chapterResult"></div>
                                  <div id="bkelamentationsverseResult" class="verseResult"></div>
                                  <div id="bkeezekiel" class="NewTestamentbke">
                                    <span class="newlanguage">Ezekiel</span>
                                    <span class="newsublanguage">(Ezekiel)</span>
                                  </div>
                                  <div id="bkeezekielchaptersResult" class="chapterResult"></div>
                                  <div id="bkeezekielverseResult" class="verseResult"></div>
                                  <div id="bkedaniel" class="NewTestamentbke">
                                    <span class="newlanguage">Daniel</span>
                                    <span class="newsublanguage">(Daniel)</span>
                                  </div>
                                  <div id="bkedanielchaptersResult" class="chapterResult"></div>
                                  <div id="bkedanielverseResult" class="verseResult"></div>
                                  <div id="bkehosea" class="NewTestamentbke">
                                    <span class="newlanguage">Hosea</span>
                                    <span class="newsublanguage">(Oseas)</span>
                                  </div>
                                  <div id="bkehoseachaptersResult" class="chapterResult"></div>
                                  <div id="bkehoseaverseResult" class="verseResult"></div>
                                  <div id="bkejoel" class="NewTestamentbke">
                                    <span class="newlanguage">Joel</span>
                                    <span class="newsublanguage">(Joel)</span>
                                  </div>
                                  <div id="bkejoelchaptersResult" class="chapterResult"></div>
                                  <div id="bkejoelverseResult" class="verseResult"></div>
                                  <div id="bkeamos" class="NewTestamentbke">
                                    <span class="newlanguage">Amos</span>
                                    <span class="newsublanguage">(Amos)</span>
                                  </div>
                                  <div id="bkeamoschaptersResult" class="chapterResult"></div>
                                  <div id="bkeamosverseResult" class="verseResult"></div>
                                  <div id="bkeobadiah" class="NewTestamentbke">
                                    <span class="newlanguage">Obadiah</span>
                                    <span class="newsublanguage">(Obadias)</span>
                                  </div>
                                  <div id="bkeobadiahchaptersResult" class="chapterResult"></div>
                                  <div id="bkeobadiahverseResult" class="verseResult"></div>
                                  <div id="bkejonah" class="NewTestamentbke">
                                    <span class="newlanguage">Jonah</span>
                                    <span class="newsublanguage">(Jonas)</span>
                                  </div>
                                  <div id="bkejonahchaptersResult" class="chapterResult"></div>
                                  <div id="bkejonahverseResult" class="verseResult"></div>
                                  <div id="bkemicah" class="NewTestamentbke">
                                    <span class="newlanguage">Micah</span>
                                    <span class="newsublanguage">(Mikas)</span>
                                  </div>
                                  <div id="bkemicahchaptersResult" class="chapterResult"></div>
                                  <div id="bkemicahverseResult" class="verseResult"></div>
                                  <div id="bkenahum" class="NewTestamentbke">
                                    <span class="newlanguage">Nahum</span>
                                    <span class="newsublanguage">(Naum)</span>
                                  </div>
                                  <div id="bkenahumchaptersResult" class="chapterResult"></div>
                                  <div id="bkenahumverseResult" class="verseResult"></div>
                                  <div id="bkehabakkuk" class="NewTestamentbke">
                                    <span class="newlanguage">Habakkuk</span>
                                    <span class="newsublanguage">(Habacuc)</span>
                                  </div>
                                  <div id="bkehabakkukchaptersResult" class="chapterResult"></div>
                                  <div id="bkehabakkukverseResult" class="verseResult"></div>
                                  <div id="bkezephaniah" class="NewTestamentbke">
                                    <span class="newlanguage">Zephaniah</span>
                                    <span class="newsublanguage">(Sofonias)</span>
                                  </div>
                                  <div id="bkezephaniahchaptersResult" class="chapterResult"></div>
                                  <div id="bkezephaniahverseResult" class="verseResult"></div>
                                  <div id="bkeHaggai" class="NewTestamentbke">
                                    <span class="newlanguage">Haggai</span>
                                    <span class="newsublanguage">(Ageo)</span>
                                  </div>
                                  <div id="bkeHaggaichaptersResult" class="chapterResult"></div>
                                  <div id="bkeHaggaiverseResult" class="verseResult"></div>
                                  <div id="bkezechariah" class="NewTestamentbke">
                                    <span class="newlanguage">Zechariah</span>
                                    <span class="newsublanguage">(Zacarias)</span>
                                  </div>
                                  <div id="bkezechariahchaptersResult" class="chapterResult"></div>
                                  <div id="bkezechariahverseResult" class="verseResult"></div>
                                  <div id="bkemalachi" class="NewTestamentbke">
                                    <span class="newlanguage">Malachi</span>
                                    <span class="newsublanguage">(Malakias)</span>
                                  </div>
                                  <div id="bkemalachichaptersResult" class="chapterResult"></div>
                                  <div id="bkemalachiverseResult" class="verseResult"></div>
                                  <div id="bkematthew" class="NewTestamentbke">
                                    <span class="newlanguage">Matthew</span>
                                    <span class="newsublanguage">(Mateo)</span>
                                  </div>
                                  <div id="bkematthewchaptersResult" class="chapterResult"></div>
                                  <div id="bkematthewverseResult" class="verseResult"></div>
                                  <div id="bkemark" class="NewTestamentbke">
                                    <span class="newlanguage">Mark</span>
                                    <span class="newsublanguage">(Marcos)</span>
                                  </div>
                                  <div id="bkemarkchaptersResult" class="chapterResult"></div>
                                  <div id="bkemarkverseResult" class="verseResult"></div>
                                  <div id="bkeluke" class="NewTestamentbke">
                                    <span class="newlanguage">Luke</span>
                                    <span class="newsublanguage">(Lucas)</span>
                                  </div>
                                  <div id="bkelukechaptersResult" class="chapterResult"></div>
                                  <div id="bkelukeverseResult" class="verseResult"></div>
                                  <div id="bkejohn" class="NewTestamentbke">
                                    <span class="newlanguage">John</span>
                                    <span class="newsublanguage">(Juan)</span>
                                  </div>
                                  <div id="bkejohnchaptersResult" class="chapterResult"></div>
                                  <div id="bkejohnverseResult" class="verseResult"></div>
                                  <div id="bkeacts" class="NewTestamentbke">
                                    <span class="newlanguage">Acts</span>
                                    <span class="newsublanguage">(Mga Gawa)</span>
                                  </div>
                                  <div id="bkeactschaptersResult" class="chapterResult"></div>
                                  <div id="bkeactsverseResult" class="verseResult"></div>
                                  <div id="bkeromans" class="NewTestamentbke">
                                    <span class="newlanguage">Romans</span>
                                    <span class="newsublanguage">(Mga Taga Roma)</span>
                                  </div>
                                  <div id="bkeromanschaptersResult" class="chapterResult"></div>
                                  <div id="bkeromansverseResult" class="verseResult"></div>
                                  <div id="bke1st-corinthians" class="NewTestamentbke">
                                    <span class="newlanguage">1st Corinthians</span>
                                    <span class="newsublanguage">(1 Mga Taga Corinto)</span>
                                  </div>
                                  <div id="bke1st-corinthianschaptersResult" class="chapterResult"></div>
                                  <div id="bke1st-corinthiansverseResult" class="verseResult"></div>
                                  <div id="bke2nd-corinthians" class="NewTestamentbke">
                                    <span class="newlanguage">2nd Corinthians</span>
                                    <span class="newsublanguage">(2 Mga Taga Corinto)</span>
                                  </div>
                                  <div id="bke2nd-corinthianschaptersResult" class="chapterResult"></div>
                                  <div id="bke2nd-corinthiansverseResult" class="verseResult"></div>
                                  <div id="bkegalatians" class="NewTestamentbke">
                                    <span class="newlanguage">Galatians</span>
                                    <span class="newsublanguage">(2 Mga Taga Galacia)</span>
                                  </div>
                                  <div id="bkegalatianschaptersResult" class="chapterResult"></div>
                                  <div id="bkegalatiansverseResult" class="verseResult"></div>
                                  <div id="bkeephesians" class="NewTestamentbke">
                                    <span class="newlanguage">Ephesians</span>
                                    <span class="newsublanguage">(Mga Taga Efeso)</span>
                                  </div>
                                  <div id="bkeephesianschaptersResult" class="chapterResult"></div>
                                  <div id="bkeephesiansverseResult" class="verseResult"></div>
                                  <div id="bkephilippians" class="NewTestamentbke">
                                    <span class="newlanguage">Philippians</span>
                                    <span class="newsublanguage">(Mga Taga Filipos)</span>
                                  </div>
                                  <div id="bkephilippianschaptersResult" class="chapterResult"></div>
                                  <div id="bkephilippiansverseResult" class="verseResult"></div>
                                  <div id="bkecolossians" class="NewTestamentbke">
                                    <span class="newlanguage">Colossians</span>
                                    <span class="newsublanguage">(Mga Taga Colosas)</span>
                                  </div>
                                  <div id="bkecolossianschaptersResult" class="chapterResult"></div>
                                  <div id="bkecolossiansverseResult" class="verseResult"></div>
                                  <div id="bke1st-thessalonians" class="NewTestamentbke">
                                    <span class="newlanguage">1st Thessalonians</span>
                                    <span class="newsublanguage">(1 Mga Taga Tesalonica)</span>
                                  </div>
                                  <div id="bke1st-thessalonianschaptersResult" class="chapterResult"></div>
                                  <div id="bke1st-thessaloniansverseResult" class="verseResult"></div>
                                  <div id="bke2nd-thessalonians" class="NewTestamentbke">
                                    <span class="newlanguage">2nd Thessalonians</span>
                                    <span class="newsublanguage">(2 Mga Taga Tesalonica)</span>
                                  </div>
                                  <div id="bke2nd-thessalonianschaptersResult" class="chapterResult"></div>
                                  <div id="bke2nd-thessaloniansverseResult" class="verseResult"></div>
                                  <div id="bke1st-timothy" class="NewTestamentbke">
                                    <span class="newlanguage">1st Timothy</span>
                                    <span class="newsublanguage">(1 Kay Timoteo)</span>
                                  </div>
                                  <div id="bke1st-timothychaptersResult" class="chapterResult"></div>
                                  <div id="bke1st-timothyverseResult" class="verseResult"></div>
                                  <div id="bke2nd-timothy" class="NewTestamentbke">
                                    <span class="newlanguage">2nd Timothy</span>
                                    <span class="newsublanguage">(2 Kay Timoteo)</span>
                                  </div>
                                  <div id="bke2nd-timothychaptersResult" class="chapterResult"></div>
                                  <div id="bke2nd-timothyverseResult" class="verseResult"></div>
                                  <div id="bketitus" class="NewTestamentbke">
                                    <span class="newlanguage">Titus</span>
                                    <span class="newsublanguage">(Kay Tito)</span>
                                  </div>
                                  <div id="bketituschaptersResult" class="chapterResult"></div>
                                  <div id="bketitusverseResult" class="verseResult"></div>
                                  <div id="bkephilemon" class="NewTestamentbke">
                                    <span class="newlanguage">Philemon</span>
                                    <span class="newsublanguage">(Filemon)</span>
                                  </div>
                                  <div id="bkephilemonchaptersResult" class="chapterResult"></div>
                                  <div id="bkephilemonverseResult" class="verseResult"></div>
                                  <div id="bkehebrews" class="NewTestamentbke">
                                    <span class="newlanguage">Hebrews</span>
                                    <span class="newsublanguage">(Mga Hebreo)</span>
                                  </div>
                                  <div id="bkehebrewschaptersResult" class="chapterResult"></div>
                                  <div id="bkehebrewsverseResult" class="verseResult"></div>
                                  <div id="bkejames" class="NewTestamentbke">
                                    <span class="newlanguage">James</span>
                                    <span class="newsublanguage">(Santiago)</span>
                                  </div>
                                  <div id="bkejameschaptersResult" class="chapterResult"></div>
                                  <div id="bkejamesverseResult" class="verseResult"></div>
                                  <div id="bke1st-peter" class="NewTestamentbke">
                                    <span class="newlanguage">1 Peter</span>
                                    <span class="newsublanguage">(1 Pedro)</span>
                                  </div>
                                  <div id="bke1st-peterchaptersResult" class="chapterResult"></div>
                                  <div id="bke1st-peterverseResult" class="verseResult"></div>
                                  <div id="bke2nd-peter" class="NewTestamentbke">
                                    <span class="newlanguage">2 Peter</span>
                                    <span class="newsublanguage">(2 Pedro)</span>
                                  </div>
                                  <div id="bke2nd-peterchaptersResult" class="chapterResult"></div>
                                  <div id="bke2nd-peterverseResult" class="verseResult"></div>
                                  <div id="bke1st-john" class="NewTestamentbke">
                                    <span class="newlanguage">1 John</span>
                                    <span class="newsublanguage">(1 Juan)</span>
                                  </div>
                                  <div id="bke1st-johnchaptersResult" class="chapterResult"></div>
                                  <div id="bke1st-johnverseResult" class="verseResult"></div>
                                  <div id="bke2nd-john" class="NewTestamentbke">
                                    <span class="newlanguage">2 John</span>
                                    <span class="newsublanguage">(2 Juan)</span>
                                  </div>
                                  <div id="bke2nd-johnchaptersResult" class="chapterResult"></div>
                                  <div id="bke2nd-johnverseResult" class="verseResult"></div>
                                  <div id="bke3rd-john" class="NewTestamentbke">
                                    <span class="newlanguage">3 John</span>
                                    <span class="newsublanguage">(3 Juan)</span>
                                  </div>
                                  <div id="bke3rd-johnchaptersResult" class="chapterResult"></div>
                                  <div id="bke3rd-johnverseResult" class="verseResult"></div>
                                  <div id="bkejude" class="NewTestamentbke">
                                    <span class="newlanguage">Jude</span>
                                    <span class="newsublanguage">(Judas)</span>
                                  </div>
                                  <div id="bkejudechaptersResult" class="chapterResult"></div>
                                  <div id="bkejudeverseResult" class="verseResult"></div>
                                  <div id="bkerevelation" class="NewTestamentbke">
                                    <span class="newlanguage">Revelation</span>
                                    <span class="newsublanguage">(Pahayag)</span>
                                  </div>
                                  <div id="bkerevelationchaptersResult" class="chapterResult"></div>
                                  <div id="bkerevelationverseResult" class="verseResult"></div>

                                                                  <div id="GodYouReign" class="NewTestamentbke"><br/>
                                GOD YOU REIGN FOREVER MORE! <br/>ADONAI REIGN! YESHUA REIGN!<br/>
                                <img alt="Book Image" class="horizontalimageindexNOTE nothinglasts" id="himageHoriz" src="BiblePages/Assets/images/PersonalBlog/800/LoveOfGod200.webp" /><br/><br/><br/><br/>JESUS, SAVE ALL OF US.
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>



                       <div id="biblemenuanimationright">

                        <div class="topspacer">
                            </div>
                            <div class="menuheader">
                              CONTROL PANEL
                            </div>


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
    
         <div class="controldiglot diglot2" onclick="copyBoth()">COPY DIGLOT</div>
      </div>

   </div>
   <div class="controlheader marginhere">TEXT SIZE</div>
   <div class="copybuttons marginhere">
      <div class="dualplacement">
         <div class="textresizerButton resizebutton" onclick="decreaseFont()"> SMALLER TEXT </div>
         <div class="textresizerButton resizebutton" onclick="increaseFont()"> BIGGER TEXT </div>
         <div class="textresizerButton resizebutton2" onclick="resetFont()"> RESET SIZE</div>
      </div>
   </div>


<div class="bcbpages">
   <div class="FontChanger ariF">
<div class="FontWeightChanger FW500">
<table class="nondiglotresizer nondiglotLabel CustomizedTableBG chaptertable">
<tr class="TITLETR">
<td class="tdenglishbible TITLETD">BEGOTTEN SON</td>
<td class="tdtagalogbible TITLETDT">BUGTONG NA ANAK</td>
</tr>
<tr class="verse" id="verse-16">
<td class="tdenglishbible">
<span class="verse spanenglishbible">
<span class="verseNo verseNoEnglishBible"> 16 </span> For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.
</span>
</td>
<td class="tdtagalogbible">
<div class="bgseparatortagalog">
<span class="verse spantagalogbible" lang="tl">
<span class="verseNo verseNoTagalog"> 16 </span> Sapagka't gayon na lamang ang pagsinta ng Dios sa sanglibutan, na ibinigay niya ang kaniyang bugtong na Anak, upang ang sinomang sa kaniya'y sumampalataya ay huwag mapahamak, kundi magkaroon ng buhay na walang hanggan.
</span>
</div>
</td>
</tr>

</table>
</div>
</div>
  </div>


   <div class="controlheader marginhere">SHOW / HIDE BIBLE</div>
   <div class="copybuttons marginhere">
      <div class="dualplacement">
         <div class="controldiglot" onclick="showEnglishOnly()"> ENGLISH </div>
         <div class="controldiglot" onclick="showTagalogOnly()"> TAGALOG </div>
         <div class="controldiglot" onclick="showAll()"> DIGLOT </div>
      </div>
   </div>


<div class="bcbpages">
   <div class="FontChanger ariF">
<div class="FontWeightChanger FW500">
<table class="nondiglotresizer nondiglotLabel CustomizedTableBG chaptertable">
<tr class="TITLETR">
<td class="tdenglishbible TITLETD">BEGOTTEN SON</td>
<td class="tdtagalogbible TITLETDT">BUGTONG NA ANAK</td>
</tr>
<tr class="verse" id="verse-16">
<td class="tdenglishbible">
<span class="verse spanenglishbible">
<span class="verseNo verseNoEnglishBible"> 16 </span> For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.
</span>
</td>
<td class="tdtagalogbible">
<div class="bgseparatortagalog">
<span class="verse spantagalogbible" lang="tl">
<span class="verseNo verseNoTagalog"> 16 </span> Sapagka't gayon na lamang ang pagsinta ng Dios sa sanglibutan, na ibinigay niya ang kaniyang bugtong na Anak, upang ang sinomang sa kaniya'y sumampalataya ay huwag mapahamak, kundi magkaroon ng buhay na walang hanggan.
</span>
</div>
</td>
</tr>

</table>
</div>
</div>
  </div>

   <div class="controlheader marginhere">CHOOSE FONT</div>
   <div class="dualplacement">
      <div class="fontchoiceButton litF changedcolor" onclick="LiterataSF()">LITERATA<br />Serif</div>
      <div class="fontchoiceButton lorF changedcolor" onclick="LoraSF()">LORA <br />Serif </div>

      <div class="fontchoiceButton  elaF changedcolor" onclick="GelasioSF()"> GELASIO <br /> Serif </div>

         </div>
   <div class="dualplacement">
      <div class="fontchoiceButton  opsF changedcolor" onclick="OpenSS()"> OPEN <br /> Sans-Serif </div>

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

   

<div class="bcbpages">
   <div class="FontChanger ariF">
<div class="FontWeightChanger FW500">
<table class="nondiglotresizer nondiglotLabel CustomizedTableBG chaptertable">
<tr class="TITLETR">
<td class="tdenglishbible TITLETD">BEGOTTEN SON</td>
<td class="tdtagalogbible TITLETDT">BUGTONG NA ANAK</td>
</tr>
<tr class="verse" id="verse-16">
<td class="tdenglishbible">
<span class="verse spanenglishbible">
<span class="verseNo verseNoEnglishBible"> 16 </span> For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.
</span>
</td>
<td class="tdtagalogbible">
<div class="bgseparatortagalog">
<span class="verse spantagalogbible" lang="tl">
<span class="verseNo verseNoTagalog"> 16 </span> Sapagka't gayon na lamang ang pagsinta ng Dios sa sanglibutan, na ibinigay niya ang kaniyang bugtong na Anak, upang ang sinomang sa kaniya'y sumampalataya ay huwag mapahamak, kundi magkaroon ng buhay na walang hanggan.
</span>
</div>
</td>
</tr>

</table>
</div>
</div>
  </div>

    <div class="controlheader marginhere">BIBLE PAGE COLOR</div>

   <div class="dualplacement"  style="margin-bottom:5%;">
      <div class="bcbggray colorpage" onclick="bcbggrayB()">Gray</div>
      

      <div class="bcbgblue colorpage" onclick="bcbgblueB()">Blue</div>
      

      <div class="bcbgbrown colorpage" onclick="bcbgbrownB()">Brown</div>
      
   </div>
     <div class="dualplacement">
      <div class="bcbgsepia colorpage" onclick="bcbgsepiaB()">Sepia</div>
      

      <div class="bcbgbrownish colorpage" onclick="bcbgbrownishB()">Brownish</div>
      

      <div class="bcbgvisionimpaired colorpage" onclick="bcbgvisionimpairedB()">Dark Mode</div>
      
   </div>   <div class="soloplacement">
      <div class="bcbgreset colorpage" onclick="bcbgresetB()">Default</div>

   </div>  

       <div class="controlheader marginhere"> </div>


      <div id="GodYouReign" class="NewTestamentbke"><br/>
                                GOD YOU REIGN FOREVER MORE! <br/>ADONAI REIGN! YESHUA REIGN!<br/>
                                <img alt="Book Image" class="horizontalimageindexNOTE nothinglasts" id="himageHoriz" src="BiblePages/Assets/images/PersonalBlog/800/LoveOfGod200.webp" /><br/><br/><br/><br/>JESUS, SAVE ALL OF US.
                                </div>

  </div>

                      <div id="thumbmenuholder">
                        <div class="bibleversesthumb" id="menuanimation">
                            <span id="openbiblemenu">BIBLE MENU ☰</span>
                            <span id="closebiblemenu">BIBLE MENU ✖</span>
                        </div>
                        <div class="goupthumb" id="goUpScroll">
                            <div>GO            </div>
                            <div>&nbsp;▲&nbsp;</div>
                            <div>UP</div>
                        </div>
                        <div class="biblecontrollthumb" id="menuanimationright">
                            <span id="openmenu">☰ OTHER MENU</span>
                            <span id="closemenu">✖ OTHER MENU</span>
                        </div>
                      </div>

                      <ul id="upnimation" class="animate">
                        <li>▲</li>
                        <li>▲</li>
                        <li>▲</li>
                        <li>▲</li>
                        <li>▲</li>
                        <li>▲</li>
                        <li>▲</li>
                      </ul>
		`;

		// GO UP

		// GO UP



		// MENU TOGGLE
// --- BIBLE MENU ---
const menuButton = this.querySelector('#menuanimation');
const menuDiv = this.querySelector('#biblemenuanimation');
const spanOpenBibleMenu = this.querySelector('#openbiblemenu');
const spanCloseBibleMenu = this.querySelector('#closebiblemenu');

menuButton.onclick = function() {
    const isHidden = window.getComputedStyle(menuDiv).display === "none";

    // Toggle visibility
    menuDiv.style.display = isHidden ? "block" : "none";
    // Ensure the OTHER menu is closed to prevent overlap
    othermenupage.style.display = "none"; 

    // Toggle spans
    spanOpenBibleMenu.style.display = isHidden ? "none" : "inline";
    spanCloseBibleMenu.style.display = isHidden ? "inline" : "none";

    if (isHidden) {
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
        menuDiv.style.overflowY = "auto";
    } else {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
    }
};

// --- OTHER MENU ---
const othermenu = this.querySelector('#menuanimationright');
const othermenupage = this.querySelector('#biblemenuanimationright');
const openmenuright = this.querySelector('#openmenu');
const closemenuright = this.querySelector('#closemenu');

othermenu.onclick = function() {
    // FIX: Use hiderightmenu consistently
    const hiderightmenu = window.getComputedStyle(othermenupage).display === "none";

    // Toggle visibility
    othermenupage.style.display = hiderightmenu ? "block" : "none";
    // Ensure the BIBLE menu is closed
    menuDiv.style.display = "none"; 

    // Toggle spans
    openmenuright.style.display = hiderightmenu ? "none" : "inline";
    closemenuright.style.display = hiderightmenu ? "inline" : "none";

    if (hiderightmenu) {
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
        othermenupage.style.overflowY = "auto";
    } else {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
    }
};



		const goUpBtn = this.querySelector("#goUpScroll");

		goUpBtn.addEventListener("click", goUpAnimation);

		function goUpAnimation() {
			const arrows = document.querySelectorAll('#upnimation li');
			arrows.forEach((li, index) => {
				li.style.animation = "none"; // reset
				li.offsetHeight; // force reflow    // calculate stagger delay based on index
				const delay = 0.2 * index; // 0.2s apart
				const opacity = 1 - (index * 0.15); // fade each arrow more    li.style.opacity = opacity > 0 ? opacity : 0.1;
				li.style.animation = `upanimations 1.5s ease-in-out forwards ${delay}s`;
			});
		}



		async function loadBibleData() {
			const response = await fetch("../Assets/js/fuse/testamentsindex.json");
			const data = await response.json();
			return data;
		}



		const bibleBooks = {
	
Genesis: {
book: document.getElementById("bkegenesis"),
chapters: document.getElementById("bkegenesischaptersResult"),
verses: document.getElementById("bkegenesisverseResult")
},


Exodus: {
book: document.getElementById("bkeexodus"),
chapters: document.getElementById("bkeexoduschaptersResult"),
verses: document.getElementById("bkeexodusverseResult")
},

Leviticus: {
book: document.getElementById("bkeleviticus"),
chapters: document.getElementById("bkeleviticuschaptersResult"),
verses: document.getElementById("bkeleviticusverseResult")
},

Numbers: {
book: document.getElementById("bkenumbers"),
chapters: document.getElementById("bkenumberschaptersResult"),
verses: document.getElementById("bkenumbersverseResult")
},

Deuteronomy: {
book: document.getElementById("bkedeuteronomy"),
chapters: document.getElementById("bkedeuteronomychaptersResult"),
verses: document.getElementById("bkedeuteronomyverseResult")
},

Josue: {
book: document.getElementById("bkejoshua"),
chapters: document.getElementById("bkejoshuachaptersResult"),
verses: document.getElementById("bkejoshuaverseResult")
},

Judges: {
book: document.getElementById("bkejudges"),
chapters: document.getElementById("bkejudgeschaptersResult"),
verses: document.getElementById("bkejudgesverseResult")
},

Ruth: {
book: document.getElementById("bkeruth"),
chapters: document.getElementById("bkeruthchaptersResult"),
verses: document.getElementById("bkeruthverseResult")
},

FirstSamuel: {
book: document.getElementById("bke1st-samuel"),
chapters: document.getElementById("bke1st-samuelchaptersResult"),
verses: document.getElementById("bke1st-samuelverseResult")
},

SecondSamuel: {
book: document.getElementById("bke2nd-samuel"),
chapters: document.getElementById("bke2nd-samuelchaptersResult"),
verses: document.getElementById("bke2nd-samuelverseResult")
},

FirstKings: {
book: document.getElementById("bke1st-kings"),
chapters: document.getElementById("bke1st-kingschaptersResult"),
verses: document.getElementById("bke1st-kingsverseResult")
},

SecondKings: {
book: document.getElementById("bke2nd-kings"),
chapters: document.getElementById("bke2nd-kingschaptersResult"),
verses: document.getElementById("bke2nd-kingsverseResult")
},

FirstChronicles: {
book: document.getElementById("bke1st-chronicles"),
chapters: document.getElementById("bke1st-chronicleschaptersResult"),
verses: document.getElementById("bke1st-chroniclesverseResult")
},

SecondChronicles: {
book: document.getElementById("bke2nd-chronicles"),
chapters: document.getElementById("bke2nd-chronicleschaptersResult"),
verses: document.getElementById("bke2nd-chroniclesverseResult")
},

Ezra: {
book: document.getElementById("bkeezra"),
chapters: document.getElementById("bkeezrachaptersResult"),
verses: document.getElementById("bkeezraverseResult")
},

Nehemiah: {
book: document.getElementById("bkenehemiah"),
chapters: document.getElementById("bkenehemiahchaptersResult"),
verses: document.getElementById("bkenehemiahverseResult")
},

Esther: {
book: document.getElementById("bkeesther"),
chapters: document.getElementById("bkeestherchaptersResult"),
verses: document.getElementById("bkeestherverseResult")
},

Job: {
book: document.getElementById("bkejob"),
chapters: document.getElementById("bkejobchaptersResult"),
verses: document.getElementById("bkejobverseResult")
},

Psalms: {
book: document.getElementById("bkepsalms"),
chapters: document.getElementById("bkepsalmschaptersResult"),
verses: document.getElementById("bkepsalmsverseResult")
},

Proverbs: {
book: document.getElementById("bkeproverbs"),
chapters: document.getElementById("bkeproverbschaptersResult"),
verses: document.getElementById("bkeproverbsverseResult")
},

Ecclesiastes: {
book: document.getElementById("bkeecclesiastes"),
chapters: document.getElementById("bkeecclesiasteschaptersResult"),
verses: document.getElementById("bkeecclesiastesverseResult")
},

SongofSolomon: {
book: document.getElementById("bkesong-of-solomon"),
chapters: document.getElementById("bkesong-of-solomonchaptersResult"),
verses: document.getElementById("bkesong-of-solomonverseResult")
},

Isaiah: {
book: document.getElementById("bkeisaiah"),
chapters: document.getElementById("bkeisaiahchaptersResult"),
verses: document.getElementById("bkeisaiahverseResult")
},


Jeremiah: {
book: document.getElementById("bkejeremiah"),
chapters: document.getElementById("bkejeremiahchaptersResult"),
verses: document.getElementById("bkejeremiahverseResult")
},


Lamentations: {
book: document.getElementById("bkelamentations"),
chapters: document.getElementById("bkelamentationschaptersResult"),
verses: document.getElementById("bkelamentationsverseResult")
},


Ezekiel: {
book: document.getElementById("bkeezekiel"),
chapters: document.getElementById("bkeezekielchaptersResult"),
verses: document.getElementById("bkeezekielverseResult")
},


Daniel: {
book: document.getElementById("bkedaniel"),
chapters: document.getElementById("bkedanielchaptersResult"),
verses: document.getElementById("bkedanielverseResult")
},


Hosea: {
book: document.getElementById("bkehosea"),
chapters: document.getElementById("bkehoseachaptersResult"),
verses: document.getElementById("bkehoseaverseResult")
},


Joel: {
book: document.getElementById("bkejoel"),
chapters: document.getElementById("bkejoelchaptersResult"),
verses: document.getElementById("bkejoelverseResult")
},


Amos: {
book: document.getElementById("bkeamos"),
chapters: document.getElementById("bkeamoschaptersResult"),
verses: document.getElementById("bkeamosverseResult")
},


Obadiah: {
book: document.getElementById("bkeobadiah"),
chapters: document.getElementById("bkeobadiahchaptersResult"),
verses: document.getElementById("bkeobadiahverseResult")
},


Jonah: {
book: document.getElementById("bkejonah"),
chapters: document.getElementById("bkejonahchaptersResult"),
verses: document.getElementById("bkejonahverseResult")
},


Micah: {
book: document.getElementById("bkemicah"),
chapters: document.getElementById("bkemicahchaptersResult"),
verses: document.getElementById("bkemicahverseResult")
},


Nahum: {
book: document.getElementById("bkenahum"),
chapters: document.getElementById("bkenahumchaptersResult"),
verses: document.getElementById("bkenahumverseResult")
},


Habakkuk: {
book: document.getElementById("bkehabakkuk"),
chapters: document.getElementById("bkehabakkukchaptersResult"),
verses: document.getElementById("bkehabakkukverseResult")
},


Zephaniah: {
book: document.getElementById("bkezephaniah"),
chapters: document.getElementById("bkezephaniahchaptersResult"),
verses: document.getElementById("bkezephaniahverseResult")
},


Haggai: {
book: document.getElementById("bkeHaggai"),
chapters: document.getElementById("bkeHaggaichaptersResult"),
verses: document.getElementById("bkeHaggaiverseResult")
},

Zechariah: {
book: document.getElementById("bkezechariah"),
chapters: document.getElementById("bkezechariahchaptersResult"),
verses: document.getElementById("bkezechariahverseResult")
},

Malachi: {
book: document.getElementById("bkemalachi"),
chapters: document.getElementById("bkemalachichaptersResult"),
verses: document.getElementById("bkemalachiverseResult")
      },

      Matthew: {
book: document.getElementById("bkematthew"),
chapters: document.getElementById("bkematthewchaptersResult"),
verses: document.getElementById("bkematthewverseResult")
},



Mark: {
book: document.getElementById("bkemark"),
chapters: document.getElementById("bkemarkchaptersResult"),
verses: document.getElementById("bkemarkverseResult")
},



Luke: {
book: document.getElementById("bkeluke"),
chapters: document.getElementById("bkelukechaptersResult"),
verses: document.getElementById("bkelukeverseResult")
},



John: {
book: document.getElementById("bkejohn"),
chapters: document.getElementById("bkejohnchaptersResult"),
verses: document.getElementById("bkejohnverseResult")
},



Acts: {
book: document.getElementById("bkeacts"),
chapters: document.getElementById("bkeactschaptersResult"),
verses: document.getElementById("bkeactsverseResult")
},

  


Romans: {
book: document.getElementById("bkeromans"),
chapters: document.getElementById("bkeromanschaptersResult"),
verses: document.getElementById("bkeromansverseResult")
},



FirstCorinthians: {
book: document.getElementById("bke1st-corinthians"),
chapters: document.getElementById("bke1st-corinthianschaptersResult"),
verses: document.getElementById("bke1st-corinthiansverseResult")
},



SecondCorinthians: {
book: document.getElementById("bke2nd-corinthians"),
chapters: document.getElementById("bke2nd-corinthianschaptersResult"),
verses: document.getElementById("bke2nd-corinthiansverseResult")
},



Galatians: {
book: document.getElementById("bkegalatians"),
chapters: document.getElementById("bkegalatianschaptersResult"),
verses: document.getElementById("bkegalatiansverseResult")
},



Ephesians: {
book: document.getElementById("bkeephesians"),
chapters: document.getElementById("bkeephesianschaptersResult"),
verses: document.getElementById("bkeephesiansverseResult")
},



Philippians: {
book: document.getElementById("bkephilippians"),
chapters: document.getElementById("bkephilippianschaptersResult"),
verses: document.getElementById("bkephilippiansverseResult")
},



Colossians: {
book: document.getElementById("bkecolossians"),
chapters: document.getElementById("bkecolossianschaptersResult"),
verses: document.getElementById("bkecolossiansverseResult")
},



FirstThessalonians: {
book: document.getElementById("bke1st-thessalonians"),
chapters: document.getElementById("bke1st-thessalonianschaptersResult"),
verses: document.getElementById("bke1st-thessaloniansverseResult")
},



SecondThessalonians: {
book: document.getElementById("bke2nd-thessalonians"),
chapters: document.getElementById("bke2nd-thessalonianschaptersResult"),
verses: document.getElementById("bke2nd-thessaloniansverseResult")
},



FirstTimothy: {
book: document.getElementById("bke1st-timothy"),
chapters: document.getElementById("bke1st-timothychaptersResult"),
verses: document.getElementById("bke1st-timothyverseResult")
},



SecondTimothy: {
book: document.getElementById("bke2nd-timothy"),
chapters: document.getElementById("bke2nd-timothychaptersResult"),
verses: document.getElementById("bke2nd-timothyverseResult")
},



Titus: {
book: document.getElementById("bketitus"),
chapters: document.getElementById("bketituschaptersResult"),
verses: document.getElementById("bketitusverseResult")
},



Philemon: {
book: document.getElementById("bkephilemon"),
chapters: document.getElementById("bkephilemonchaptersResult"),
verses: document.getElementById("bkephilemonverseResult")
},



Hebrews: {
book: document.getElementById("bkehebrews"),
chapters: document.getElementById("bkehebrewschaptersResult"),
verses: document.getElementById("bkehebrewsverseResult")
},



James: {
book: document.getElementById("bkejames"),
chapters: document.getElementById("bkejameschaptersResult"),
verses: document.getElementById("bkejamesverseResult")
},



FirstPeter: {
book: document.getElementById("bke1st-peter"),
chapters: document.getElementById("bke1st-peterchaptersResult"),
verses: document.getElementById("bke1st-peterverseResult")
},



SecondPeter: {
book: document.getElementById("bke2nd-peter"),
chapters: document.getElementById("bke2nd-peterchaptersResult"),
verses: document.getElementById("bke2nd-peterverseResult")
},



FirstJohn: {
book: document.getElementById("bke1st-john"),
chapters: document.getElementById("bke1st-johnchaptersResult"),
verses: document.getElementById("bke1st-johnverseResult")
},



SecondJohn: {
book: document.getElementById("bke2nd-john"),
chapters: document.getElementById("bke2nd-johnchaptersResult"),
verses: document.getElementById("bke2nd-johnverseResult")
},



ThirdJohn: {
book: document.getElementById("bke3rd-john"),
chapters: document.getElementById("bke3rd-johnchaptersResult"),
verses: document.getElementById("bke3rd-johnverseResult")
},



Jude: {
book: document.getElementById("bkejude"),
chapters: document.getElementById("bkejudechaptersResult"),
verses: document.getElementById("bkejudeverseResult")
},



Revelation: {
book: document.getElementById("bkerevelation"),
chapters: document.getElementById("bkerevelationchaptersResult"),
verses: document.getElementById("bkerevelationverseResult")
}


		};





    async function loadBibleData() {


  const response = await fetch("BiblePages/Assets/js/fuse/testamentsindex.json");
  const data = await response.json();
  return data;
}

async function initBible() {
  const bibleData = await loadBibleData();

  const bibleBooksDynamic = {};

  for (const [bookNum, book] of Object.entries(bibleData)) {
    const name = book.bkl; // lowercase-hyphen form
    bibleBooksDynamic[name] = {
      book: document.getElementById(`bke${book.bkl}`),
      chapters: document.getElementById(`bke${book.bkl}chaptersResult`),
      verses: document.getElementById(`bke${book.bkl}verseResult`)
    };

    const refs = bibleBooksDynamic[name];
    if (refs.book) {
      refs.book.addEventListener("click", () => {
        showChapters(bookNum, book, refs.chapters, refs.verses);
      });
    }
  }
}

    
    
    
    



function showChapters(bookNum, book, chaptersDiv, versesDiv) {
  chaptersDiv.innerHTML = "";

  // Add a single "Chapter" heading
  const chapterHeading = document.createElement("div");
  chapterHeading.className = "chapter-heading";
  chapterHeading.textContent = `${book.bkl} Chapters`;
  chaptersDiv.appendChild(chapterHeading);

  for (const [chapter, verseCount] of Object.entries(book.chapters)) {
    const chapterLink = document.createElement("a");

    // Build the actual file path
    chapterLink.href = `BiblePages/${book.tesl}/${bookNum}-${book.bkl}-chapter-${chapter}.html`;

    // Inner HTML is just the number, wrapped in a span for styling
    chapterLink.innerHTML = `<span class="chapter-number">${chapter}</span>`;

    chapterLink.addEventListener("click", (e) => {
      e.preventDefault();
      showVerses(bookNum, chapter, verseCount, versesDiv, book);

      // 👇 Scroll versesDiv into view after rendering - OKAY COPILOT, GOT IT, THANK YOU THANK YOU.
      versesDiv.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });

    chaptersDiv.appendChild(chapterLink);
  }
    }
    




    
function showVerses(bookNum, chapter, verseCount, versesDiv, book) {
  versesDiv.innerHTML = "";

  // Add a single "Verse" heading
  const verseHeading = document.createElement("div");
  verseHeading.className = "verse-heading";
  verseHeading.textContent = `Chapter ${chapter} Verses`;
  versesDiv.appendChild(verseHeading);

  for (let v = 1; v <= verseCount; v++) {
    const verseLink = document.createElement("a");

    // Build the file path + verse anchor
    verseLink.href = `../${book.tesl}/${bookNum}-${book.bkl}-chapter-${chapter}.html#verse-${v}`;

    // Inner HTML is just the number, wrapped in a span for styling
    verseLink.innerHTML = `<span class="verse-number">${v}</span>`;

    versesDiv.appendChild(verseLink);
  }

  // 👇 Ensure versesDiv is visible even if called directly
  versesDiv.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}


    
    const backUp = this.querySelector('.goupthumb');
const backUpMenu= this.querySelector('.newoldholder'); // your scrollable div

          backUp.onclick = function() {
            // Scroll the whole page
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });

            // Scroll the menu div
            backUpMenu.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          };

    
    

      // Run once DOM is ready
      document.addEventListener("DOMContentLoaded", initBible);





	}


}

customElements.define('diglot-thumb-menu', DiglotThumbMenu);


