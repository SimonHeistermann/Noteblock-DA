function openNotes(noteType) {
    removeUnderlineNavButton();
    noteTopic = noteType;
    let buttonRef = document.getElementById(`nav_${noteType}`);
    if (buttonRef) {
        buttonRef.classList.add('navbutton__open');
    }
    if (archiveMode === 'on') {
        renderArchive();
    } else {
        renderNotes();
    }
};

function removeUnderlineNavButton() {
    let buttonRefAll = document.getElementById('nav_all');
    buttonRefAll.classList.remove('navbutton__open');
    
    let buttonRefPersonal = document.getElementById('nav_personal');
    buttonRefPersonal.classList.remove('navbutton__open');
    
    let buttonRefHome = document.getElementById('nav_home');
    buttonRefHome.classList.remove('navbutton__open');
    
    let buttonRefBuisness = document.getElementById('nav_buisness');
    buttonRefBuisness.classList.remove('navbutton__open');
};