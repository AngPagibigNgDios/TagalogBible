// --- Multiple random posts ---
const jsonUrlMulti = '../BibleJournal/binderposts.json'; 
const containerMulti = document.getElementById('journalholder');

async function loadPostsMulti() {
  try {
    const response = await fetch(jsonUrlMulti);
    const posts = await response.json();

    containerMulti.innerHTML = '';

    const shuffled = posts.sort(() => 0.5 - Math.random());
    const count = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    const selected = shuffled.slice(0, count);

    selected.forEach(post => {
      const htmlTemplate = `
        <a href="../BibleJournal/${post.bibjl}.html">
          <div class="biblejournalposts">
            <span class="journalnumber">Bible Journal - ${post.bibjn}</span>
            <span class="journaltitle">${post.bibjt}</span>
          </div>
        </a>
      `;
      containerMulti.insertAdjacentHTML('beforeend', htmlTemplate);
    });

  } catch (error) {
    containerMulti.innerHTML = '<p>Error loading posts.</p>';
    console.error('Fetch error:', error);
  }
}

loadPostsMulti();


// --- Single random post ---
const jsonUrlSingle = '../BibleJournal/binderposts.json'; 
const containerSingle = document.getElementById('journalholder1');

async function loadPostsSingle() {
  try {
    const response = await fetch(jsonUrlSingle);
    const posts = await response.json();

    containerSingle.innerHTML = '';

    const randomIndex = Math.floor(Math.random() * posts.length);
    const post = posts[randomIndex];

    const htmlTemplate = `
      <a href="../BibleJournal/${post.bibjl}.html">
        <div class="biblejournalposts">
          <span class="journalnumber">Bible Journal - ${post.bibjn}</span>
          <span class="journaltitle">${post.bibjt}</span>
        </div>
      </a>
    `;

    containerSingle.insertAdjacentHTML('beforeend', htmlTemplate);

  } catch (error) {
    containerSingle.innerHTML = '<p>Error loading posts.</p>';
    console.error('Fetch error:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadPostsSingle);
