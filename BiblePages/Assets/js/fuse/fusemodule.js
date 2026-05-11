import Fuse from '/BiblePages/Assets/js/fuse/fuse.min.mjs';

let fuse;

fetch('/BiblePages/Assets/js/fuse/diglotkjvbiblia.json')
  .then(response => response.json())
  .then(data => {

    fuse = new Fuse(data, {
      keys: ['book', 'chapter', 'v', 'eng', 'tag', 'url'],
      threshold: 0.3,
      ignoreLocation: true
    });

  });

document
  .getElementById('searchBox')
  .addEventListener('input', function () {

    if (!fuse) return;

    const results = fuse.search(this.value);

    let html = '';

    results.forEach(result => {

      html += `
        <div class="resultbox">
          <a href="${result.item.url}">
            ${result.item.book}
            ${result.item.chapter}:${result.item.v}
          </a>
          <br>
          ${result.item.eng}
           ${result.item.tag}
          <hr>
        </div>
      `;

    });

    document.getElementById('searchResults').innerHTML = html;

  });




  