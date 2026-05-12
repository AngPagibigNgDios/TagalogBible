
document.addEventListener('copy', function (e) {
const selection = window.getSelection();
if (!selection.rangeCount) return;
const range = selection.getRangeAt(0);
const startNode = range.startContainer;
const engCell = startNode.parentElement?.closest('.tdenglishbible');
const tlCell  = startNode.parentElement?.closest('.tdtagalogbible');
let mode = null;
if (engCell) mode = 'english';
else if (tlCell) mode = 'tagalog';
else return; // not inside your table
const selectedRows = Array.from(
document.querySelectorAll('tr.verse')
).filter(row => {
return selection.containsNode(row, true);
});
if (selectedRows.length === 0) return;
let output = [];
selectedRows.forEach(row => {
const verseNo = row.id.replace('verse-', '');
if (mode === 'english') {
const text = row.querySelector('.tdenglishbible')
.innerText.trim().replace(/^\d+\s*/, '');
output.push(`${verseNo} ${text}`);
}
if (mode === 'tagalog') {
const text = row.querySelector('.tdtagalogbible')
.innerText.trim().replace(/^\d+\s*/, '');
output.push(`${verseNo} ${text}`);
}
});
e.preventDefault();
e.clipboardData.setData('text/plain', output.join('\n\n'));
});
