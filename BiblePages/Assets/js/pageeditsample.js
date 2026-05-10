class SampleBible extends HTMLElement {
  connectedCallback() {
     this.innerHTML = `
    

                  <div class="FontChanger ariF">
                     <div class="FontWeightChanger FW500">
                        <table class="nondiglotresizer nondiglotLabel CustomizedTableBG" id="chapter">
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
                                    <span class="verse spantagalogbible">
                                       <span class="verseNo verseNoTagalog"> 16 </span> Sapagka't gayon na lamang ang pagsinta ng Dios sa sanglibutan, na ibinigay niya ang kaniyang bugtong na Anak, upang ang sinomang sa kaniya'y sumampalataya ay huwag mapahamak, kundi magkaroon ng buhay na walang hanggan.
                                    </span>
                                 </div>
                              </td>
                           </tr>
                           <tr class="verse" id="verse-17">
                              <td class="tdenglishbible">
                                 <span class="verse spanenglishbible">
                                    <span class="verseNo verseNoEnglishBible"> 17 </span> For God sent not his Son into the world to condemn the world; but that the world through him might be saved.
                                 </span>
                              </td>
                              <td class="tdtagalogbible">
                                 <div class="bgseparatortagalog">
                                    <span class="verse spantagalogbible">
                                       <span class="verseNo verseNoTagalog"> 17 </span> Sapagka't hindi sinugo ng Dios ang Anak sa sanglibutan upang hatulan ang sanglibutan; kundi upang ang sanglibutan ay maligtas sa pamamagitan niya.
                                    </span>
                                 </div>
                              </td>
                           </tr>
                           <tr class="verse" id="verse-18">
                              <td class="tdenglishbible">
                                 <span class="verse spanenglishbible">
                                    <span class="verseNo verseNoEnglishBible"> 18 </span> He that believeth on him is not condemned: but he that believeth not is condemned already, because he hath not believed in the name of the only begotten Son of God.
                                 </span>
                              </td>
                              <td class="tdtagalogbible">
                                 <div class="bgseparatortagalog">
                                    <span class="verse spantagalogbible">
                                       <span class="verseNo verseNoTagalog"> 18 </span> Ang sumasampalataya sa kaniya ay hindi hinahatulan; ang hindi sumasampalataya ay hinatulan na, sapagka't hindi siya sumampalataya sa pangalan ng bugtong na Anak ng Dios.
                                    </span>
                                 </div>
                              </td>
                           </tr>
                        </table>
                     </div>
                  </div>




    `;
  }
}

customElements.define('sample-bible', SampleBible);


