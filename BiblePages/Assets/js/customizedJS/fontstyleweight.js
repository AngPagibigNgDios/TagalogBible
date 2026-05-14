// ===============================
// HIDE SHOW BIBLE, DIGLOT TAGALOG ENGLISH DITO.
// ===============================function applyFont (mode) {
  // SAVE MODE FOR ALL PAGES
  localStorage.setItem ('fantfamilyS', mode);  // TEXT VISIBILITY CONTROL
  document.querySelectorAll ('#FontChanger').forEach (div => {
    div.style.display = mode === 'ArimoFont' ? 'none' : '';
  });  const LITF = document.querySelectorAll('.litF');
  const LORF = document.querySelectorAll('.lorF');
  const ELAF = document.querySelectorAll('.elaF');
  const OPSF = document.querySelectorAll('.opsF');
  const INDF = document.querySelectorAll('.indF');
  const LEXF = document.querySelectorAll('.lexF');
  const PBSF = document.querySelectorAll('.pbsF');
  const ARIF = document.querySelectorAll('.ariF');    if (mode === 'LiterataFont') {
    // REVERSE
    LITF.forEach (el => {
el.classList.add('litF');
el.classList.remove('lorF');
el.classList.remove('elaF');
el.classList.remove('opsF');
el.classList.remove('indF');
el.classList.remove('lexF');
el.classList.remove('pbsF');
el.classList.remove('ariF');
    });
        LORF.forEach (el => {
el.classList.remove('litF');
el.classList.add('lorF');
el.classList.remove('elaF');
el.classList.remove('opsF');
el.classList.remove('indF');
el.classList.remove('lexF');
el.classList.remove('pbsF');
el.classList.remove('ariF');
      });
    
    
      ELAF.forEach (el => {
el.classList.remove('litF');
el.classList.remove('lorF');
el.classList.add('elaF');
el.classList.remove('opsF');
el.classList.remove('indF');
el.classList.remove('lexF');
el.classList.remove('pbsF');
el.classList.remove('ariF');
      });
    
        
      OPSF.forEach (el => {
el.classList.remove('litF');
el.classList.remove('lorF');
el.classList.remove('elaF');
el.classList.add('opsF');
el.classList.remove('indF');
el.classList.remove('lexF');
el.classList.remove('pbsF');
el.classList.remove('ariF');
      });
    
          INDF.forEach (el => {
el.classList.remove('litF');
el.classList.remove('lorF');
el.classList.remove('elaF');
el.classList.remove('opsF');
el.classList.add('indF');
el.classList.remove('lexF');
el.classList.remove('pbsF');
el.classList.remove('ariF');
          });
    
        
          LEXF.forEach (el => {
el.classList.remove('litF');
el.classList.remove('lorF');
el.classList.remove('elaF');
el.classList.remove('opsF');
el.classList.remove('indF');
el.classList.add('lexF');
el.classList.remove('pbsF');
el.classList.remove('ariF');
          });
    
    
             PBSF.forEach (el => {
el.classList.remove('litF');
el.classList.remove('lorF');
el.classList.remove('elaF');
el.classList.remove('opsF');
el.classList.remove('indF');
el.classList.remove('lexF');
el.classList.add('pbsF');
el.classList.remove('ariF');
          }); 
    
       
             ARIF.forEach (el => {
el.classList.remove('litF');
el.classList.remove('lorF');
el.classList.remove('elaF');
el.classList.remove('opsF');
el.classList.remove('indF');
el.classList.remove('lexF');
el.classList.remove('pbsF');
el.classList.add('ariF');
          }); 
    
    
  }
  // SIDEBAR UPDATE
 applyFont (mode); 
}// BUTTON FUNCTIONS
function LiterataSF () {
  applyFont ('LiterataFont');
}function LoraSF () {
  applyFont ('LoraFont');
}function GelasioSF () {
  applyFont ('GelasioFont');
}
function GelasioSF () {
  applyFont ('GelasioFont');
}function OpenSS () {
  applyFont ('OpenFont');
}function InterSS () {
  applyFont ('InterFont');
}function LexendSS () {
  applyFont ('LexendFont');
}
function PublicSS () {
  applyFont ('PublicFont');
}function ArimoSS () {
  applyFont ('ArimoFont');
}// ===============================
// AUTO RESTORE ON EVERY PAGE
// ===============================
document.addEventListener ('DOMContentLoaded', function () {
  let savedMode = localStorage.getItem ('fantfamilyS') || 'ArimoFont';
  applyFont (savedMode);
});// ===============================
// FONT SWITCHER
// ===============================function applyFont(fontClass) {  // SAVE
  localStorage.setItem('fontFamilyS', fontClass);  // MAIN CONTAINER
  const container = document.getElementById('FontChanger');  // REMOVE ALL FONT CLASSES
  container.classList.remove(
    'litF',
    'lorF',
    'elaF',
    'opsF',
    'indF',
    'lexF',
    'pbsF',
    'ariF'
  );  // ADD SELECTED FONT
  container.classList.add(fontClass);
}
// ===============================
// BUTTON FUNCTIONS
// ===============================function LiterataSF() {
  applyFont('litF');
}function LoraSF() {
  applyFont('lorF');
}function GelasioSF() {
  applyFont('elaF');
}function OpenSS() {
  applyFont('opsF');
}function InterSS() {
  applyFont('indF');
}function LexendSS() {
  applyFont('lexF');
}function PublicSS() {
  applyFont('pbsF');
}function ArimoSS() {
  applyFont('ariF');
}
// ===============================
// AUTO RESTORE
// ===============================document.addEventListener('DOMContentLoaded', function () {  const saved =
    localStorage.getItem('fontFamilyS') || 'ariF';  applyFont(saved);});function applyFontWeight(fontWeight) {  // SAVE
  localStorage.setItem('fontFamilyWeight', fontWeight);  // MAIN CONTAINER
  const container = document.getElementById('FontWeightChanger');  // REMOVE ALL FONT CLASSES
  container.classList.remove(
    'FW350',
    'FW400',
    'FW450',
    'FW500',
    'FW550',
    'FW600'
  );  // ADD SELECTED FONT
  container.classList.add(fontClass);
}
// ===============================
// BUTTON FUNCTIONS
// ===============================
function FW600FF() {
  applyFont('FW600');
}function FW550FF() {
  applyFont('FW550');
}function FW500FF() {
  applyFont('FW500');
}function FW450FF() {
  applyFont('FW450');
}function FW400FF() {
  applyFont('FW400');
}function FW350FF() {
  applyFont('FW350');
}
// ===============================
// AUTO RESTORE
// ===============================document.addEventListener('DOMContentLoaded', function () {  const saved =
    localStorage.getItem('fontFamilyWeight') || 'FW300';  applyFontWeight(saved);});