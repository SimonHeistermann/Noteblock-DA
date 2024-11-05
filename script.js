
let noteTitles = [];
let noteDescriptions = [];
let noteDates = [];
let noteCategories = [];


let noteTopic = 'all';
let editMode = 'off';
let archiveMode = 'off';


function init() {
    getFromLocalStorage();
    openHome();
};

function openHome() {
    archiveMode = 'off';
    noteTopic = 'all';
    let scaffoldRef = document.getElementById('main_section');
    scaffoldRef.innerHTML = "";
    scaffoldRef.innerHTML += renderHTMLNoteStructure();

    let homeButtonRef = document.getElementById('home_button');
    homeButtonRef.classList.add('d__none');
    let archiveButtonref = document.getElementById('archive_button');
    archiveButtonref.classList.remove('d__none');
    let trashButtonRef = document.getElementById('trash_button');
    trashButtonRef.classList.remove('d__none');
    renderNotes();
};

function renderNotes() {
    let contentRef = document.getElementById('notes_section');
    contentRef.innerHTML = "";
    let hasNotes = {
        all: true,
        personal: noteCategories.includes('personal'),
        home: noteCategories.includes('home'),
        buisness: noteCategories.includes('buisness')
    };
    if (hasNotes[noteTopic]) {
        for (let indexNote = 0; indexNote < noteTitles.length; indexNote++) {
            if (noteTopic === 'all' || noteCategories[indexNote] === noteTopic) {
                contentRef.innerHTML += renderHTMLAllNotes(indexNote);
            }
        }
    }
    contentRef.innerHTML += renderHTMLNewNote();
};

function openNewNoteOverlay() {
    let newnoteoverlayRef = document.getElementById('overlay_newnote');
    newnoteoverlayRef.classList.remove('d__none');
    newnoteoverlayRef.innerHTML = "";
    newnoteoverlayRef.innerHTML += renderHTMLNewNoteDialog();
    addOverlayStyles();
};

function addOverlayStyles() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    let scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    if(scrollY > 0){
        document.documentElement.style.scrollBehavior = 'unset';
        document.body.style.top = `-${scrollY}px`;
    }
    document.body.style.width = '100%';
};

function closeNewNoteOverlay() {
    let newnoteoverlayRef = document.getElementById('overlay_newnote');
    newnoteoverlayRef.classList.add('d__none');
    newnoteoverlayRef.innerHTML = "";
    removeOverlayStyles();
};

function removeOverlayStyles() {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";

    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
};

function addNewNote(event) {
    event.preventDefault();

    let titleRef = document.getElementById('title');
    let title = titleRef.value;
    noteTitles.push(title);

    let descriptionRef = document.getElementById('description');
    let description = descriptionRef.value;
    noteDescriptions.push(description);

    addCurrentDate();
    addCurrentCategory();
    noteTopic = 'all';
    saveToLocalStorage();
    renderNotes();
    closeNewNoteOverlay();
};

function addCurrentDate(indexNote) {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const hour = formatTwoDigits(currentDate.getHours());
    const minute = formatTwoDigits(currentDate.getMinutes());

    let date = `${day}.${month}.${year}, ${hour}:${minute}`;
    if (editMode === "on") {
        noteDates[indexNote] = date;
    } else {
        noteDates.push(date);
    }
};

function addCurrentCategory(indexNote) {
    let categoryRef = document.getElementById('categories');
    let category = categoryRef.value;

    if(editMode === "on") {
        noteCategories[indexNote] = category;
    } else {
        noteCategories.push(category)
    }
};

function openEditNoteOverlay(indexNote) {
    editMode = "on"
    let editnoteoverlayRef = document.getElementById('overlay_editnote');
    editnoteoverlayRef.classList.remove('d__none');
    editnoteoverlayRef.innerHTML = "";
    editnoteoverlayRef.innerHTML += renderHTMLEditNote(indexNote);
    addOverlayStyles();
};

function closeEditNoteOverlay() {
    editMode = "off"
    let editnoteoverlayRef = document.getElementById('overlay_editnote');
    editnoteoverlayRef.classList.add('d__none');
    editnoteoverlayRef.innerHTML = "";
    removeOverlayStyles();
};

function editNote(event, indexNote) {
    event.preventDefault();
    let titleRef = document.getElementById('title');
    let newTitle = titleRef.value;
    noteTitles[indexNote] = newTitle;
    let descriptionRef = document.getElementById('description');
    let newDescription = descriptionRef.value;
    noteDescriptions[indexNote] = newDescription;
    addCurrentDate(indexNote);
    addCurrentCategory(indexNote);
    saveToLocalStorage();
    renderNotes();
    closeEditNoteOverlay();
};

function openDatasecurity() {
    let scaffoldRef = document.getElementById('main_section');
    scaffoldRef.innerHTML = "";
    scaffoldRef.innerHTML += renderHTMLDataSecurityStructure();
    removeTrashAndArchiveButton();
    renderDataSecurity();

    let goToTopButton = document.getElementById("gototop_button");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goToTopButton.style.display = "block";
        } else {
            goToTopButton.style.display = "none";
        }
    };
};

function renderDataSecurity() {
    let contentRef = document.getElementById('datasecurity_section');
    contentRef.innerHTML = "";
    contentRef.innerHTML += renderHTMLDataSecurityContent();
};

function openImpressum() {
    let scaffoldRef = document.getElementById('main_section');
    scaffoldRef.innerHTML = "";
    scaffoldRef.innerHTML += renderHTMLImpressumStructure();

    removeTrashAndArchiveButton();
    renderImpressum();
};

function renderImpressum() {
    let contentRef = document.getElementById('impressum_section');
    contentRef.innerHTML = "";
    contentRef.innerHTML += renderHTMLImpressumContent();
};
  





