(function() {

	const html = document.documentElement;

	const bgType =
		localStorage.getItem('bgType');

	const bgStyle =
		localStorage.getItem('bgStylePreference');

	const bgColor =
		localStorage.getItem('bgColor');

	const customBG =
		localStorage.getItem('customBG');

	// USER CHOSE COLOR
	if (bgType === 'color' && bgColor) {

		html.style.backgroundImage = 'none';
		html.style.backgroundColor = bgColor;

	}

	// USER CHOSE CUSTOM IMAGE
	else if (customBG) {

		const img = new Image();

		img.onload = () => {

			html.style.backgroundImage =
				`url(${customBG})`;

			if (bgStyle === 'cover') {

				html.style.backgroundRepeat =
					'no-repeat';

				html.style.backgroundSize =
					'cover';

			} else if (bgStyle === 'contain') {

				html.style.backgroundRepeat =
					'no-repeat';

				html.style.backgroundSize =
					'contain';

				html.style.backgroundPosition =
					'center';

			}

		};

		img.src = customBG;

	}

	// =========================
	// UI SYNCHRONIZATION
	// =========================

	document.addEventListener("DOMContentLoaded", () => {
		const mode = localStorage.getItem('bgMode') || 'image';
		const style = localStorage.getItem('bgStylePreference') || 'repeat';
		const color = localStorage.getItem('bgColor') || '#3b2a1a';

		const modeEl = document.getElementById('bgMode');
		const styleEl = document.getElementById('bgStyle');
		const colorEl = document.getElementById('bgColor');

		if (modeEl) modeEl.value = mode;
		if (styleEl) styleEl.value = style;
		if (colorEl) colorEl.value = color;

	});

})();








/////////////////////////
//                     //
//  BIBLE LANGUAGE     //
//                     //
/////////////////////////














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
};

// 1. Function to clean the title and update the header div instantly
const originalTitle = document.title;

function refreshHeaderDisplay() {
	const inputField = document.getElementById('verseInput');
	const displayDiv = document.getElementById('display-title2');

	if (!inputField || !displayDiv) return;

	let rawInput = inputField.value.trim();

	// Update URL hash
	if (rawInput) {
		window.location.hash = 'verse-' + rawInput;
	} else {
		history.replaceState(null, null, ' ');
	}

	// Format verse text
	let cleanInput = decodeURIComponent(rawInput)
		.replace(/[,\s]+/g, ',\u00A0')
		.replace(/-/g, '\u00A0\u2014\u00A0');

	let verseDisplay = rawInput
		? `\u00A0\u00A0:\u00A0\u00A0${cleanInput}`
		: '';

	// Browser tab title
	document.title = rawInput
		? `${originalTitle} : ${rawInput}`
		: originalTitle;

	// Visible header
	displayDiv.innerHTML = `${originalTitle}${verseDisplay}`;
}

// 2. Click Listener for verse links (vlink) AND clicking the rows
document.addEventListener('click', function(e) {
	const vlink = e.target.closest('.vlink');
	const row = e.target.closest("tr[id^='verse-']");
	const inputField = document.getElementById('verseInput');

	if (vlink && inputField) {
		const verseNum = vlink.getAttribute('href').split('#verse-')[1];
		inputField.value = decodeURIComponent(verseNum);
		applyVerseHighlight();
		refreshHeaderDisplay();
	} else if (row && inputField) {
		const verseNum = row.id.replace('verse-', '');
		inputField.value = verseNum;
		applyVerseHighlight();
		refreshHeaderDisplay();
	}
});

// 3. Combined Load logic
window.onload = function() {
	const input = document.getElementById('verseInput');
	const hash = window.location.hash;

	if (input && hash.includes('#verse-')) {
		input.value = decodeURIComponent(hash.replace('#verse-', ''));
		applyVerseHighlight();
	}

	if (input) {
		input.addEventListener('keydown', function(e) {
			if (e.key === 'Enter') {
				e.preventDefault();
				applyVerseHighlight();
				refreshHeaderDisplay();
			}
		});
	}

	refreshHeaderDisplay(); // Initial draw


};






///////////////////////////
//                       //
//HIGHLIGHT JS AND VERSE //
//                       //
///////////////////////////








let verseLanguageMode = 'both'; // display mode
let copyMode = 'both'; // copy mode

// ---------------------------
// HELPER: Get Title
// ---------------------------
function getCleanCitation() {
	var fullTitle = document.title || '';
	var cleanTitle = fullTitle
		.replace(/EnglishTagalogBible\.Com\s*—\s*/gi, '')
		.trim();
	return cleanTitle;
}

// ---------------------------
// HELPER: Sort & Format Range (e.g., 1, 5, 9-11)
// ---------------------------
function getSortedRangeString(highlightedRows) {
	const nums = highlightedRows.map(row =>
		parseInt(row.id.replace('verse-', ''), 10)
	);
	if (nums.length === 0) return '';

	let result = [];
	let start = nums[0];
	let end = nums[0];

	for (let i = 1; i <= nums.length; i++) {
		if (i < nums.length && nums[i] === end + 1) {
			end = nums[i];
		} else {
			result.push(start === end ? start : `${start}-${end}`);
			if (i < nums.length) {
				start = nums[i];
				end = nums[i];
			}
		}
	}
	return result.join(', ');
}

// ---------------------------
// HELPER: Parse Title into components
// ---------------------------
function getParsedTitle() {
	let fullTitle = getCleanCitation().trim();

	let data = {
		engBook: '',
		tlBook: '',
		chapter: ''
	};

	// Matches:
	// (Mateo) Matthew 1
	// (Exodo) Exodus 4
	const match = fullTitle.match(/^\((.*?)\)\s*(.*?)\s+(\d+)$/);

	if (match) {
		data.tlBook = match[1].trim();
		data.engBook = match[2].trim();
		data.chapter = match[3].trim();
	}

	return data;
}
// ---------------------------
// CORE FUNCTIONS: Highlight & Clear
// ---------------------------
function clearHighlights() {
	document.querySelectorAll('tr').forEach(tr => {
		tr.classList.remove('highlight-verse');
		const eng = tr.querySelector('.tdenglishbible');
		const tl = tr.querySelector('.tdtagalogbible');
		if (eng) eng.style.display = '';
		if (tl) tl.style.display = '';
	});
}

function applyVerseHighlight() {
	clearHighlights();
	const inputField = document.getElementById('verseInput');
	if (!inputField) return;
	const input = inputField.value.trim();
	if (!input) return;

	let targets = [];
	let parts = input.split(/[,\s]+/);

	parts.forEach(part => {
		part = part.trim();
		if (!part) return;
		if (part.includes('-')) {
			let [start, end] = part.split('-').map(n => parseInt(n.trim(), 10));
			if (!isNaN(start) && !isNaN(end)) {
				let actualStart = Math.min(start, end);
				let actualEnd = Math.max(start, end);
				for (let i = actualStart; i <= actualEnd; i++)
					targets.push(i);
			}
		} else {
			let num = parseInt(part, 10);
			if (!isNaN(num)) targets.push(num);
		}
	});

	targets = [...new Set(targets)];
	let firstMatch = null;

	targets.forEach(num => {
		const row = document.getElementById('verse-' + num);
		if (row) {
			row.classList.add('highlight-verse');
			const eng = row.querySelector('.tdenglishbible');
			const tl = row.querySelector('.tdtagalogbible');
			if (verseLanguageMode === 'english' && tl) tl.style.display = 'none';
			if (verseLanguageMode === 'tagalog' && eng) eng.style.display = 'none';
			if (!firstMatch) firstMatch = row;
		}
	});

	if (firstMatch)
		firstMatch.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
}

// ---------------------------
// COPY FUNCTIONS
// ---------------------------
async function performCopy(text, label) {
	try {
		await navigator.clipboard.writeText(text);
		alert(label + ' COPIED!');
	} catch (err) {
		console.error('Copy failed', err);
	}
}

function copyEnglish() {
	const highlightedRows = Array.from(
		document.querySelectorAll('tr.highlight-verse')
	);
	if (highlightedRows.length === 0) return alert('No verses highlighted!');

	highlightedRows.sort(
		(a, b) =>
		parseInt(a.id.replace('verse-', ''), 10) -
		parseInt(b.id.replace('verse-', ''), 10)
	);

	const info = getParsedTitle();
	const sortedRanges = getSortedRangeString(highlightedRows);
	const cleanTitle = `${info.engBook} ${info.chapter} : ${sortedRanges}`;

	let output = [cleanTitle];
	highlightedRows.forEach(row => {
		const verseNo = row.id.replace('verse-', '');
		let text = row
			.querySelector('.tdenglishbible')
			.innerText.trim()
			.replace(/^\d+\s*/, '');
		output.push(`${verseNo} ${text}`);
	});

	performCopy(output.join('\n\n'), 'ENGLISH');
}

function copyTagalog() {
	const highlightedRows = Array.from(
		document.querySelectorAll('tr.highlight-verse')
	);
	if (highlightedRows.length === 0) return alert('No verses highlighted!');

	highlightedRows.sort(
		(a, b) =>
		parseInt(a.id.replace('verse-', ''), 10) -
		parseInt(b.id.replace('verse-', ''), 10)
	);

	const info = getParsedTitle();
	const sortedRanges = getSortedRangeString(highlightedRows);
	const cleanTitle = `${info.tlBook} ${info.chapter} : ${sortedRanges}`;

	let output = [cleanTitle];
	highlightedRows.forEach(row => {
		const verseNo = row.id.replace('verse-', '');
		let text = row
			.querySelector('.tdtagalogbible')
			.innerText.trim()
			.replace(/^\d+\s*/, '');
		output.push(`${verseNo} ${text}`);
	});

	performCopy(output.join('\n\n'), 'TAGALOG');
}

function copyBoth() {
	const highlightedRows = Array.from(
		document.querySelectorAll('tr.highlight-verse')
	);
	if (highlightedRows.length === 0) return alert('No verses highlighted!');

	highlightedRows.sort(
		(a, b) =>
		parseInt(a.id.replace('verse-', ''), 10) -
		parseInt(b.id.replace('verse-', ''), 10)
	);

	const info = getParsedTitle();
	const sortedRanges = getSortedRangeString(highlightedRows);

	let tagalogLines = [`${info.tlBook} ${info.chapter} : ${sortedRanges}`];
	let englishLines = [`${info.engBook} ${info.chapter} : ${sortedRanges}`];

	highlightedRows.forEach(row => {
		const verseNo = row.id.replace('verse-', '');
		let engText = row
			.querySelector('.tdenglishbible')
			.innerText.trim()
			.replace(/^\d+\s*/, '');
		let tlText = row
			.querySelector('.tdtagalogbible')
			.innerText.trim()
			.replace(/^\d+\s*/, '');
		englishLines.push(`${verseNo} ${engText}`);
		tagalogLines.push(`${verseNo} ${tlText}`);
	});

	const finalOutput = [
		tagalogLines.join('\n'),
		'',
		englishLines.join('\n'),
	].join('\n');
	performCopy(finalOutput, 'TAGALOG & ENGLISH');
}

// ---------------------------
// LISTENERS & INITIALIZE
// ---------------------------
document.addEventListener('click', function(e) {
	const vlink = e.target.closest('.vlink');
	const row = e.target.closest("tr[id^='verse-']");
	const inputField = document.getElementById('verseInput');

	if ((vlink || row) && inputField) {
		if (vlink) e.preventDefault();
		const verseNum = vlink ?
			vlink.getAttribute('href').split('#verse-')[1] :
			row.id.replace('verse-', '');

		inputField.value = decodeURIComponent(verseNum);
		history.replaceState(null, null, '#verse-' + verseNum);

		// ADD THIS LINE to ensure the highlights trigger correctly
		applyVerseHighlight();
	}
});

function syncFromHash() {
	const input = document.getElementById('verseInput');
	if (!input) return;

	const hash = decodeURIComponent(window.location.hash);

	if (hash.startsWith('#verse-')) {
		const value = hash.replace('#verse-', '');

		// avoid unnecessary re-run
		if (input.value !== value) {
			input.value = value;
			applyVerseHighlight();
		}
	}
}

window.addEventListener('DOMContentLoaded', function() {
	const input = document.getElementById('verseInput');

	if (input) {
		input.addEventListener('keydown', function(e) {
			if (e.key === 'Enter') {
				e.preventDefault();

				// keep URL in sync
				history.replaceState(null, null, '#verse-' + input.value.trim());

				applyVerseHighlight();
			}
		});
	}

	// ✅ use shared function
	syncFromHash();
});










/////////////////////////
//                     //
//  HIDE SHOW JS      //
//                     //
/////////////////////////



// ===============================
// HIDE SHOW BIBLE, DIGLOT TAGALOG ENGLISH DITO.
// ===============================


function applyMode(mode) {
	// SAVE MODE FOR ALL PAGES
	localStorage.setItem('bibleMode', mode);

	// TEXT VISIBILITY CONTROL
	document.querySelectorAll('.tdenglishbible').forEach(td => {
		td.style.display = mode === 'tagalog' ? 'none' : '';
	});

	document.querySelectorAll('.tdtagalogbible').forEach(td => {
		td.style.display = mode === 'english' ? 'none' : '';
	});

	const engList = document.querySelectorAll('.englishLabel');
	const tagList = document.querySelectorAll('.tagalogLabel');
	const nonDiglot = document.querySelectorAll('.nondiglotLabel');

	if (mode === 'both') {
		// REVERSE
		engList.forEach(el => {
			el.classList.add('diglotboth');
			el.classList.remove('tagalogleft');
		});

		tagList.forEach(el => {
			el.classList.remove('english');
			el.classList.add('tagalogleft');
		});

		nonDiglot.forEach(el => {
			el.classList.remove('diglotcutwidth');
			el.classList.add('diglotfullwidth');
		});
	}

	if (mode === 'english') {
		// REVERSE
		engList.forEach(el => {
			el.classList.remove('english');
			el.classList.remove('diglotboth');
			el.classList.add('tagalogleft');
		});

		tagList.forEach(el => {
			el.classList.remove('tagalogleft');
			el.classList.add('english');
		});

		nonDiglot.forEach(el => {
			el.classList.remove('diglotfullwidth');
			el.classList.add('diglotcutwidth');
		});
	}

	if (mode === 'tagalog') {
		// NORMAL (DIGLOT + TAGALOG ONLY)
		engList.forEach(el => {
			el.classList.remove('tagalogleft');
			el.classList.remove('diglotboth');
			el.classList.add('english');
		});

		tagList.forEach(el => {
			el.classList.remove('english');
			el.classList.add('tagalogleft');
		});
		nonDiglot.forEach(el => {
			el.classList.remove('diglotfullwidth');
			el.classList.add('diglotcutwidth');
		});
	}

}

// BUTTON FUNCTIONS
function showAll() {
	applyMode('both');
}

function showEnglishOnly() {
	applyMode('english');
}

function showTagalogOnly() {
	applyMode('tagalog');
}

// ===============================
// AUTO RESTORE ON EVERY PAGE
// ===============================
document.addEventListener('DOMContentLoaded', function() {
	let savedMode = localStorage.getItem('bibleMode') || 'both';
	applyMode(savedMode);
});





// ===============================
// FONT SIZE CHANGE DITO
// ===============================

document.addEventListener('DOMContentLoaded', function() {

	let savedFontSize = localStorage.getItem('bibleFontSize');
	let fontSize = savedFontSize ? parseFloat(savedFontSize) : null;

	function applyFontSize() {

		document.querySelectorAll('.spanenglishbible').forEach(el => {
			el.style.fontSize = fontSize + 'em';
		});

		document.querySelectorAll('.spantagalogbible').forEach(el => {
			el.style.fontSize = fontSize + 'em';
		});

	}

	window.increaseFont = function() {

		if (fontSize === null) fontSize = 1;

		fontSize += 0.1;

		localStorage.setItem('bibleFontSize', fontSize);

		applyFontSize();

	};

	window.decreaseFont = function() {

		if (fontSize === null) fontSize = 1;

		fontSize -= 0.05;

		if (fontSize < 0.6) fontSize = 0.6;

		localStorage.setItem('bibleFontSize', fontSize);

		applyFontSize();

	};

	window.resetFont = function() {

		fontSize = null;

		localStorage.removeItem('bibleFontSize');

		document.querySelectorAll('.spanenglishbible').forEach(el => {
			el.style.fontSize = '';
		});

		document.querySelectorAll('.spantagalogbible').forEach(el => {
			el.style.fontSize = '';
		});

	};

	if (fontSize !== null) {
		applyFontSize();
	}

});






/////////////////////////
//                     //
//  FONT FAMILY ITO     //
//                     //
/////////////////////////



// ===============================
// FONT STYLE DITO
//

// ===============================
// FONT FAMILY
// ===============================

function applyFont(fontClass) {

	// SAVE
	localStorage.setItem('fontFamilyS', fontClass);

	// GET ALL CONTAINERS
	const containers =
		document.querySelectorAll('.FontChanger');

	// LOOP THROUGH ALL
	containers.forEach(container => {

		// REMOVE ALL FONT CLASSES
		container.classList.remove(
			'litF',
			'lorF',
			'elaF',
			'opsF',
			'indF',
			'lexF',
			'pbsF',
			'ariF'
		);

		// ADD SELECTED FONT
		container.classList.add(fontClass);

	});

}


// ===============================
// BUTTON FUNCTIONS
// ===============================

function LiterataSF() {
	applyFont('litF');
}

function LoraSF() {
	applyFont('lorF');
}

function GelasioSF() {
	applyFont('elaF');
}

function OpenSS() {
	applyFont('opsF');
}

function InterSS() {
	applyFont('indF');
}

function LexendSS() {
	applyFont('lexF');
}

function PublicSS() {
	applyFont('pbsF');
}

function ArimoSS() {
	applyFont('ariF');
}


// ===============================
// AUTO RESTORE
// ===============================

document.addEventListener('DOMContentLoaded', function() {

	const saved =
		localStorage.getItem('fontFamilyS') || 'ariF';

	applyFont(saved);

});




// ===============================
// FONT WEIGHT
// ===============================

function applyFontWeight(fontWeight) {

	// SAVE
	localStorage.setItem('fontFamilyWeight', fontWeight);

	// GET ALL CONTAINERS
	const containers =
		document.querySelectorAll('.FontWeightChanger');

	// LOOP THROUGH ALL
	containers.forEach(container => {

		// REMOVE OLD
		container.classList.remove(
			'FW200',
			'FW300',
			'FW350',
			'FW400',
			'FW500',
			'FW600',
			'FW650',
			'FW700',
			'FW800',
		);

		// ADD NEW
		container.classList.add(fontWeight);

	});

}


// ===============================
// BUTTONS
// ===============================


function FW800FF() {
	applyFontWeight('FW800');
}

function FW700FF() {
	applyFontWeight('FW700');
}

function FW600FF() {
	applyFontWeight('FW600');
}


function FW500FF() {
	applyFontWeight('FW500');
}


function FW400FF() {
	applyFontWeight('FW400');
}

function FW350FF() {
	applyFontWeight('FW350');
}


// ===============================
// AUTO RESTORE
// ===============================

document.addEventListener('DOMContentLoaded', function() {

	const saved =
		localStorage.getItem('fontFamilyWeight') ||
		'FW500';

	applyFontWeight(saved);

});



// APPLY IMAGE// APPLY IMAGE
function applyImageTheme() {
	const file = document.getElementById('bgUpload').files[0];
	const style = document.getElementById('bgStyle').value;
	const html = document.documentElement;

	localStorage.setItem('bgStylePreference', style);

	if (file) {
		const reader = new FileReader();
		reader.onloadend = function() {
			localStorage.setItem('customBG', reader.result);
			localStorage.setItem('bgType', 'image');

			// APPLY DIRECTLY
			html.style.backgroundImage = `url(${reader.result})`;

			if (style === 'cover') {
				html.style.backgroundRepeat = 'no-repeat';
				html.style.backgroundSize = 'cover';
			} else if (style === 'contain') {
				html.style.backgroundRepeat = 'no-repeat';
				html.style.backgroundSize = 'contain';
				html.style.backgroundPosition = 'center';
			}
		};
		reader.readAsDataURL(file);
	} else {
		const existingBG = localStorage.getItem('customBG');
		if (existingBG) {
			html.style.backgroundImage = `url(${existingBG})`;
		} else {
			alert("Upload an image first.");
		}
	} // <--- Added this to close the ELSE
} // <--- Added this to close the FUNCTION

// APPLY COLOR
function applyColorTheme() {
	const color = document.getElementById('bgColor').value;
	const html = document.documentElement;

	localStorage.setItem('bgColor', color);
	localStorage.setItem('bgType', 'color');

	// APPLY DIRECTLY
	html.style.backgroundImage = 'none';
	html.style.backgroundColor = color;
}