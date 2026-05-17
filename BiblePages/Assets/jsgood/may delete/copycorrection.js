document.addEventListener ('copy', function (e) {
  const selection = window.getSelection ();
  if (!selection.rangeCount) return;

  let container = document.createElement ('div');

  // Clone selected content
  for (let i = 0; i < selection.rangeCount; i++) {
    container.appendChild (selection.getRangeAt (i).cloneContents ());
  }

  // Remove unwanted td (example: remove English side)
  let unwanted = container.querySelectorAll ('.tdenglishbible');
  unwanted.forEach (el => el.remove ());

  // OR if you want only Tagalog, keep .tdtagalogbible
  // You could also reverse this logic if needed

  // Set modified text to clipboard
  e.clipboardData.setData ('text/plain', container.innerText);
  e.preventDefault ();
});
