const bibleBooksTL = {
  Genesis: 'Genesis',
  Exodus: 'Exodo',
  Leviticus: 'Levitico',
  Numbers: 'Mga Bilang',
  Deuteronomy: 'Deuteronomio',
  Joshua: 'Josue',
  Judges: 'Mga Hukom',
  Ruth: 'Ruth',
  '1 Samuel': '1 Samuel',
  '2 Samuel': '2 Samuel',
  '1 Kings': '1 Mga Hari',
  '2 Kings': '2 Mga Hari',
  '1 Chronicles': '1 Mga Cronica',
  '2 Chronicles': '2 Mga Cronica',
  Ezra: 'Ezra',
  Nehemiah: 'Nehemias',
  Esther: 'Ester',
  Job: 'Job',
  Psalms: 'Mga Awit',
  Proverbs: 'Kawikaan',
  Ecclesiastes: 'Eclesiastes',
  'Song of Solomon': 'Awit ng Mga Awit',
  Isaiah: 'Isaias',
  Jeremiah: 'Jeremias',
  Lamentations: 'Mga Panaghoy',
  Ezekiel: 'Ezekiel',
  Daniel: 'Daniel',
  Hosea: 'Oseas',
  Joel: 'Joel',
  Amos: 'Amos',
  Obadiah: 'Obadias',
  Jonah: 'Jonas',
  Micah: 'Mikas',
  Nahum: 'Naum',
  Habakkuk: 'Habacuc',
  Zephaniah: 'Sofonias',
  Haggai: 'Ageo',
  Zechariah: 'Zacarias',
  Malachi: 'Malakias',
  Matthew: 'Mateo',
  Mark: 'Marcos',
  Luke: 'Lucas',
  John: 'Juan',
  Acts: 'Mga Gawa',
  Romans: 'Mga Taga Roma',
  '1 Corinthians': '1 Mga Taga Corinto',
  '2 Corinthians': '2 Mga Taga Corinto',
  Galatians: 'Mga Taga Galacia',
  Ephesians: 'Mga Taga Efeso',
  Philippians: 'Mga Taga Filipos',
  Colossians: 'Mga Taga Colosas',
  '1 Thessalonians': '1 Mga Taga Tesalonica',
  '2 Thessalonians': '2 Mga Taga Tesalonica',
  '1 Timothy': '1 Timoteo',
  '2 Timothy': '2 Timoteo',
  Titus: 'Tito',
  Philemon: 'Filemon',
  Hebrews: 'Mga Hebreo',
  James: 'Santiago',
  '1 Peter': '1 Pedro',
  '2 Peter': '2 Pedro',
  '1 John': '1 Juan',
  '2 John': '2 Juan',
  '3 John': '3 Juan',
  Jude: 'Judas',
  Revelation: 'Pahayag',
};// 1. Function to clean the title and update the header div instantly
function refreshHeaderDisplay () {
  const inputField = document.getElementById ('verseInput');
  const displayDiv = document.getElementById ('display-title2');
  if (!inputField || !displayDiv) return;  let rawInput = inputField.value.trim ();  // Update the URL hash
  if (rawInput) {
    window.location.hash = 'verse-' + rawInput;
  } else {
    history.replaceState (null, null, ' ');
  }  // Get the base title from the document (removing any old verse string)
  let baseTitle = document.title.split (' :')[0].trim ();  // Format the verse string for display
  let cleanInput = decodeURIComponent (rawInput)
    .replace (/[,\s]+/g, ',\u00A0')
    .replace (/-/g, '\u00A0\u2014\u00A0');  let verseDisplay = rawInput ? `\u00A0\u00A0:\u00A0\u00A0${cleanInput}` : '';  // Update Browser Tab
  document.title = baseTitle + (rawInput ? ' : ' + rawInput : '');  // Update the Div
  displayDiv.innerHTML = `${baseTitle}${verseDisplay}`;
}// 2. Click Listener for verse links (vlink) AND clicking the rows
document.addEventListener ('click', function (e) {
  const vlink = e.target.closest ('.vlink');
  const row = e.target.closest ("tr[id^='verse-']");
  const inputField = document.getElementById ('verseInput');  if (vlink && inputField) {
    const verseNum = vlink.getAttribute ('href').split ('#verse-')[1];
    inputField.value = decodeURIComponent (verseNum);
    applyVerseHighlight ();
    refreshHeaderDisplay ();
  } else if (row && inputField) {
    const verseNum = row.id.replace ('verse-', '');
    inputField.value = verseNum;
    applyVerseHighlight ();
    refreshHeaderDisplay ();
  }
});// 3. Combined Load logic
window.onload = function () {
  const input = document.getElementById ('verseInput');
  const hash = window.location.hash;  if (input && hash.includes ('#verse-')) {
    input.value = decodeURIComponent (hash.replace ('#verse-', ''));
    applyVerseHighlight ();
  }  if (input) {
    input.addEventListener ('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault ();
        applyVerseHighlight ();
        refreshHeaderDisplay ();
      }
    });
  }  refreshHeaderDisplay (); // Initial draw  if (typeof updateSidebarLanguage === 'function') {
    updateSidebarLanguage ('both');
  }
};
