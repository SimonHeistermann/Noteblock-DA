let archiveNoteTitles = [];
let archiveNoteDescriptions = [];
let archiveNoteDates = [];
let archiveNoteCategories = [];



function openArchive() {
    archiveMode = 'on';
    noteTopic = 'all';
    getFromLocalStorage();

    let scaffoldRef = document.getElementById('main_section');
    scaffoldRef.innerHTML = "";
    scaffoldRef.innerHTML += renderHTMLArchiveSturcture();

    let homeButtonRef = document.getElementById('home_button');
    homeButtonRef.classList.remove('d__none');
    let archiveButtonref = document.getElementById('archive_button');
    archiveButtonref.classList.add('d__none');

    renderArchive();
};

function renderArchive() {
    let contentRef = document.getElementById('archive_section');
    contentRef.innerHTML = "";

    let hasNotes = {
        all: archiveNoteTitles.length > 0,
        personal: archiveNoteCategories.includes('personal'),
        home: archiveNoteCategories.includes('home'),
        buisness: archiveNoteCategories.includes('buisness')
    };

    if (hasNotes[noteTopic]) {
        for (let indexArchiveNote = 0; indexArchiveNote < archiveNoteTitles.length; indexArchiveNote++) {
            if (noteTopic === 'all' || archiveNoteCategories[indexArchiveNote] === noteTopic) {
                contentRef.innerHTML += renderHTMLArchiveContent(indexArchiveNote);
            }
        }
    } else {
        contentRef.innerHTML += renderHTMLArchiveNoNotes();
    }
};

function noteToArchive(indexNote) {
    moveNoteTo({
        titles: noteTitles,
        descriptions: noteDescriptions,
        dates: noteDates,
        categories: noteCategories
    }, {
        titles: archiveNoteTitles,
        descriptions: archiveNoteDescriptions,
        dates: archiveNoteDates,
        categories: archiveNoteCategories
    }, indexNote);
    renderNotes();
};

function noteBackToHome(indexArchiveNote) {
    moveNoteTo({
        titles: archiveNoteTitles,
        descriptions: archiveNoteDescriptions,
        dates: archiveNoteDates,
        categories: archiveNoteCategories
    }, {
        titles: noteTitles,
        descriptions: noteDescriptions,
        dates: noteDates,
        categories: noteCategories
    }, indexArchiveNote);
    renderArchive();
};
