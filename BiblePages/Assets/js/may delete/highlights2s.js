let verseLanguageMode = "both";   // display mode

let copyMode = "both";            // copy mode



// ---------------------------

// CLEAR HIGHLIGHTS

// ---------------------------

function clearHighlights() {

    document.querySelectorAll("tr").forEach(tr => {

        tr.classList.remove("highlight-verse");



        const eng = tr.querySelector(".tdenglishbible");

        const tl = tr.querySelector(".tdtagalogbible");



        if (eng) eng.style.display = "";

        if (tl) tl.style.display = "";

    });

}



// ---------------------------

// APPLY HIGHLIGHT

// ---------------------------

function applyVerseHighlight() {

    clearHighlights();



    const input = document.getElementById("verseInput").value.trim();

    if (!input) return;



    let targets = [];



    input.split(",").forEach(part => {

        part = part.trim();



        if (part.includes("-")) {

            let [start, end] = part.split("-").map(n => parseInt(n.trim(), 10));



            if (!isNaN(start) && !isNaN(end)) {

                for (let i = start; i <= end; i++) {

                    targets.push(i);

                }

            }

        } else {

            let num = parseInt(part, 10);

            if (!isNaN(num)) {

                targets.push(num);

            }

        }

    });



    let firstMatch = null;



    targets.forEach(num => {

        const row = document.getElementById("verse-" + num);



        if (row) {

            row.classList.add("highlight-verse");



            const eng = row.querySelector(".tdenglishbible");

            const tl = row.querySelector(".tdtagalogbible");



            // DISPLAY MODE

            if (verseLanguageMode === "english") {

                if (tl) tl.style.display = "none";

            }



            if (verseLanguageMode === "tagalog") {

                if (eng) eng.style.display = "none";

            }



            if (!firstMatch) firstMatch = row;

        }

    });



    if (firstMatch) {

        firstMatch.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }



    copyHighlightedVerses();

}



// ---------------------------

// LANGUAGE DISPLAY MODES

// ---------------------------

function showEnglishOnly() {

    verseLanguageMode = "english";

    applyVerseHighlight();

}



function showTagalogOnly() {

    verseLanguageMode = "tagalog";

    applyVerseHighlight();

}



function showAll() {

    verseLanguageMode = "both";

    applyVerseHighlight();

}



// ---------------------------

// COPY MODE SETTER (NEW BOX)

// ---------------------------

function setCopyMode(mode) {

    copyMode = mode;

    copyHighlightedVerses();

}



// ---------------------------

// COPY FUNCTION

// ---------------------------

function copyHighlightedVerses() {

    const highlighted = document.querySelectorAll("tr.highlight-verse");



    let output = [];



    highlighted.forEach(row => {

        const verseNo = row.id.replace("verse-", "");



        const english = row.querySelector(".tdenglishbible")?.innerText.trim() || "";

        const tagalog = row.querySelector(".tdtagalogbible")?.innerText.trim() || "";



        if (copyMode === "english") {

            output.push(`${verseNo}. ${english}`);

        }

        else if (copyMode === "tagalog") {

            output.push(`${verseNo}. ${tagalog}`);

        }

        else {

            output.push(`${verseNo}. ${english}\n${verseNo}. ${tagalog}`);

        }

    });



    const textToCopy = output.join("\n\n");



    if (textToCopy) {

        navigator.clipboard.writeText(textToCopy);

    }

}



// ---------------------------

// ENTER KEY HANDLER

// ---------------------------

window.addEventListener("DOMContentLoaded", function () {



    const input = document.getElementById("verseInput");



    input.addEventListener("keydown", function (e) {

        if (e.key === "Enter") {

            e.preventDefault();

            applyVerseHighlight();

        }

    });



});