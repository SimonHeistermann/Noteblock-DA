function saveToLocalStorage() {
    saveNotesToLocalStorage();
    saveTrashNotesToLocalStorage();
    saveArchiveNotesToLocalStorage();
};

function saveNotesToLocalStorage() {
    let notesData = noteTitles.map(function(title, i) {
        return {
            title: title,
            description: noteDescriptions[i],
            date: noteDates[i],
            category: noteCategories[i]
        };
    });
    localStorage.setItem("notes", JSON.stringify(notesData));
};

function saveTrashNotesToLocalStorage() {
    let trashData = trashNoteTitles.map(function(title, i) {
        return {
            title: title,
            description: trashNoteDescriptions[i],
            date: trashNoteDates[i],
            category: trashNoteCategories[i]
        };
    });
    localStorage.setItem("trash", JSON.stringify(trashData));
};

function saveArchiveNotesToLocalStorage() {
    let archiveData = archiveNoteTitles.map(function(title, i) {
        return {
            title: title,
            description: archiveNoteDescriptions[i],
            date: archiveNoteDates[i],
            category: archiveNoteCategories[i]
        };
    });
    localStorage.setItem("archive", JSON.stringify(archiveData));
};


function getFromLocalStorage() {
    getNotesFromLocalStorage();
    getTrashNotesFromLocalStorage();
    getArchiveNotesFromLocalStorage();
};

function getNotesFromLocalStorage() {
    let notesData = JSON.parse(localStorage.getItem("notes"));
    if (notesData) {
        noteTitles = notesData.map(function(note) { return note.title; });
        noteDescriptions = notesData.map(function(note) { return note.description; });
        noteDates = notesData.map(function(note) { return note.date; });
        noteCategories = notesData.map(function(note) { return note.category; });
    }
};

function getTrashNotesFromLocalStorage() {
    let trashData = JSON.parse(localStorage.getItem("trash"));
    if (trashData) {
        trashNoteTitles = trashData.map(function(note) { return note.title; });
        trashNoteDescriptions = trashData.map(function(note) { return note.description; });
        trashNoteDates = trashData.map(function(note) { return note.date; });
        trashNoteCategories = trashData.map(function(note) { return note.category; });
    }
};

function getArchiveNotesFromLocalStorage() {
    let archiveData = JSON.parse(localStorage.getItem("archive"));
    if (archiveData) {
        archiveNoteTitles = archiveData.map(function(note) { return note.title; });
        archiveNoteDescriptions = archiveData.map(function(note) { return note.description; });
        archiveNoteDates = archiveData.map(function(note) { return note.date; });
        archiveNoteCategories = archiveData.map(function(note) { return note.category; });
    }
};