<script>
  window.addEventListener('DOMContentLoaded', (event) => {
    // 1. Get the current fragment (e.g., #verse-3#verse-10)
    const hash = window.location.hash;

    if (hash) {
      // 2. Extract the numbers using a Regular Expression
      const verses = hash.match(/\d+/g);

      if (verses && verses.length >= 2) {
        const startVerse = verses[0];
        const endVerse = verses[verses.length - 1];

        // 3. Update the document title
        // Current title: (Kapitulo) Chapter 27 - Matthew
        // New title: (Kapitulo) Chapter 27 : 3 - 10 - Matthew
        document.title = // A more flexible replacement
document.title = document.title.replace(" -", ` : ${startVerse} - ${endVerse} -`);
      }
    }
  });
</script>