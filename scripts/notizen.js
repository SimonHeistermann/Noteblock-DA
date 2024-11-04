

function noteToArchive(indexNote) {
    let archiveNoteTitle = noteTitles.splice(indexNote, 1);
    archiveNoteTitles.push(archiveNoteTitle[0]);
    let archiveNoteDescription = noteDescriptions.splice(indexNote, 1);
    archiveNoteDescriptions.push(archiveNoteDescription[0]);
    let archiveNoteDate = noteDates.splice(indexNote, 1);
    archiveNoteDates.push(archiveNoteDate[0]);
    let archiveNoteCategory = noteCategories.splice(indexNote, 1);
    archiveNoteCategories.push(archiveNoteCategory[0]);

    saveToLocalStorage();
    renderNotes();
};

function noteToTrash(indexNote) {

    if (archiveMode === 'on') {
        let trashNoteTitle = archiveNoteTitles.splice(indexNote, 1);
        trashNoteTitles.push(trashNoteTitle[0]);
        let trashNoteDescription = archiveNoteDescriptions.splice(indexNote, 1);
        trashNoteDescriptions.push(trashNoteDescription[0]);
        let trashNoteDate = archiveNoteDates.splice(indexNote, 1);
        trashNoteDates.push(trashNoteDate[0]);
        let trashNoteCategory = archiveNoteCategories.splice(indexNote, 1);
        trashNoteCategories.push(trashNoteCategory[0]);

        saveToLocalStorage();
        renderArchive();
    } else {
        let trashNoteTitle = noteTitles.splice(indexNote, 1);
        trashNoteTitles.push(trashNoteTitle[0]);
        let trashNoteDescription = noteDescriptions.splice(indexNote, 1);
        trashNoteDescriptions.push(trashNoteDescription[0]);
        let trashNoteDate = noteDates.splice(indexNote, 1);
        trashNoteDates.push(trashNoteDate[0]);
        let trashNoteCategory = noteCategories.splice(indexNote, 1);
        trashNoteCategories.push(trashNoteCategory[0]);
        
        saveToLocalStorage();
        renderNotes();
    }
};

function noteBackToHome(indexArchiveNote) {
    let noteTitle = archiveNoteTitles.splice(indexArchiveNote, 1);
    noteTitles.push(noteTitle[0]);
    let noteDescription = archiveNoteDescriptions.splice(indexArchiveNote, 1);
    noteDescriptions.push(noteDescription[0]);
    let noteDate = archiveNoteDates.splice(indexArchiveNote, 1);
    noteDates.push(noteDate[0]);
    let noteCategory = archiveNoteCategories.splice(indexArchiveNote, 1);
    noteCategories.push(noteCategory[0]);

    saveToLocalStorage();
    renderArchive();
};


function saveToLocalStorage() {
    localStorage.setItem("noteTitles", JSON.stringify(noteTitles));
    localStorage.setItem("noteDescriptions", JSON.stringify(noteDescriptions));
    localStorage.setItem("noteDates", JSON.stringify(noteDates));
    localStorage.setItem("noteCategories", JSON.stringify(noteCategories));

    localStorage.setItem("trashNoteTitles", JSON.stringify(trashNoteTitles));
    localStorage.setItem("trashNoteDescriptions", JSON.stringify(trashNoteDescriptions));
    localStorage.setItem("trashNoteDates", JSON.stringify(trashNoteDates));
    localStorage.setItem("trashNoteCategories", JSON.stringify(trashNoteCategories));

    localStorage.setItem("archiveNoteTitles", JSON.stringify(archiveNoteTitles));
    localStorage.setItem("archiveNoteDescriptions", JSON.stringify(archiveNoteDescriptions));
    localStorage.setItem("archiveNoteDates", JSON.stringify(archiveNoteDates));
    localStorage.setItem("archiveNoteCategories", JSON.stringify(archiveNoteCategories));

};

function getFromLocalStorage() {
    let myNoteTitles = JSON.parse(localStorage.getItem('noteTitles'));
    if (myNoteTitles !== null) {
        noteTitles = myNoteTitles;
        noteDescriptions= JSON.parse(localStorage.getItem('noteDescriptions'));
        noteDates = JSON.parse(localStorage.getItem('noteDates'));
        noteCategories = JSON.parse(localStorage.getItem('noteCategories'));
    }

    let myTrashNoteTitles = JSON.parse(localStorage.getItem('trashNoteTitles'));
    if (myTrashNoteTitles !== null) {
        trashNoteTitles = myTrashNoteTitles;
        trashNoteDescriptions= JSON.parse(localStorage.getItem('trashNoteDescriptions'));
        trashNoteDates = JSON.parse(localStorage.getItem('trashNoteDates'));
        trashNoteCategories = JSON.parse(localStorage.getItem('trashNoteCategories'));
    }

    let myArchiveNoteTitles = JSON.parse(localStorage.getItem('archiveNoteTitles'));
    if (myArchiveNoteTitles !== null) {
        archiveNoteTitles = myArchiveNoteTitles;
        archiveNoteDescriptions= JSON.parse(localStorage.getItem('archiveNoteDescriptions'));
        archiveNoteDates = JSON.parse(localStorage.getItem('archiveNoteDates'));
        archiveNoteCategories = JSON.parse(localStorage.getItem('archiveNoteCategories'));
    }

};

function filterNotes() {
    let searchTerm = document.getElementById('search_input');
    searchTerm = searchTerm.value.toLowerCase();

    let filteredNotes = [];
    if(archiveMode === 'on') {
        if(noteTopic === 'all') {
            for (let i = 0; i < archiveNoteTitles.length; i++) {
                if(archiveNoteTitles[i].toLowerCase().includes(searchTerm)) {
                    filteredNotes.push(i);
                }
            }
        } else if(noteTopic === 'personal') {
            for (let i = 0; i < archiveNoteTitles.length; i++) {
                if(archiveNoteTitles[i].toLowerCase().includes(searchTerm) && noteCategories[i] === 'personal') {
                    filteredNotes.push(i);
                }
            }
        } else if(noteTopic === 'home') {
            for (let i = 0; i < archiveNoteTitles.length; i++) {
                if(archiveNoteTitles[i].toLowerCase().includes(searchTerm) && noteCategories[i] === 'home') {
                    filteredNotes.push(i);
                }
            }
        } else if(noteTopic === 'buisness') {
            for (let i = 0; i < archiveNoteTitles.length; i++) {
                if(archiveNoteTitles[i].toLowerCase().includes(searchTerm) && noteCategories[i] === 'buisness') {
                    filteredNotes.push(i);
                }
            }
        } 
    } else {
        if(noteTopic === 'all') {
            for (let i = 0; i < noteTitles.length; i++) {
                if(noteTitles[i].toLowerCase().includes(searchTerm)) {
                    filteredNotes.push(i);
                }
            }
        } else if(noteTopic === 'personal') {
            for (let i = 0; i < noteTitles.length; i++) {
                if(noteTitles[i].toLowerCase().includes(searchTerm) && noteCategories[i] === 'personal') {
                    filteredNotes.push(i);
                }
            }
        } else if(noteTopic === 'home') {
            for (let i = 0; i < noteTitles.length; i++) {
                if(noteTitles[i].toLowerCase().includes(searchTerm) && noteCategories[i] === 'home') {
                    filteredNotes.push(i);
                }
            }
        } else if(noteTopic === 'buisness') {
            for (let i = 0; i < noteTitles.length; i++) {
                if(noteTitles[i].toLowerCase().includes(searchTerm) && noteCategories[i] === 'buisness') {
                    filteredNotes.push(i);
                }
            }
        }
    }

    if (searchTerm === "") {
        archiveMode === 'on' ? renderArchive() : renderNotes();
        return;
    }

    renderFilteredNotes(filteredNotes);
};

function renderFilteredNotes(filteredNotes) {
    let contentRef = archiveMode === 'on' ? document.getElementById('archive_section') : document.getElementById('notes_section');
    contentRef.innerHTML = "";

    if (filteredNotes.length > 0) {
        for (let i = 0; i < filteredNotes.length; i++) {
            let index = filteredNotes[i];
            contentRef.innerHTML += archiveMode === 'on' ? renderHTMLArchiveContent(index) : renderHTMLAllNotes(index);
        }
    } else {
        contentRef.innerHTML += archiveMode === 'on' ? renderHTMLArchiveNoNotes() : renderHTMLNewNote();
    }
};

function renderNotes(){
    let contentRef = document.getElementById('notes_section');
    contentRef.innerHTML = "";

    if(noteTopic === 'all') {
        for (let indexNote = 0; indexNote < noteTitles.length; indexNote++) {
            contentRef.innerHTML += renderHTMLAllNotes(indexNote);
        }
        contentRef.innerHTML += renderHTMLNewNote();
    } else if (noteTopic === 'personal') {
        for (let indexNote = 0; indexNote < noteTitles.length; indexNote++) {
            if (noteCategories[indexNote] === 'personal') {
                contentRef.innerHTML += renderHTMLAllNotes(indexNote);
            } 
        }
        contentRef.innerHTML += renderHTMLNewNote();
    } else if (noteTopic === 'home') {
        for (let indexNote = 0; indexNote < noteTitles.length; indexNote++) {
            if (noteCategories[indexNote] === 'home') {
                contentRef.innerHTML += renderHTMLAllNotes(indexNote);
            } 
        }
        contentRef.innerHTML += renderHTMLNewNote();
    } else if (noteTopic === 'buisness') {
        for (let indexNote = 0; indexNote < noteTitles.length; indexNote++) {
            if (noteCategories[indexNote] === 'buisness') {
                contentRef.innerHTML += renderHTMLAllNotes(indexNote);
            } 
        }
        contentRef.innerHTML += renderHTMLNewNote();
    }
};

function saveToLocalStorage() {
    let data = {
        noteTitles: noteTitles,
        noteDescriptions: noteDescriptions,
        noteDates: noteDates,
        noteCategories: noteCategories,
        trashNoteTitles: trashNoteTitles,
        trashNoteDescriptions: trashNoteDescriptions,
        trashNoteDates: trashNoteDates,
        trashNoteCategories: trashNoteCategories,
        archiveNoteTitles: archiveNoteTitles,
        archiveNoteDescriptions: archiveNoteDescriptions,
        archiveNoteDates: archiveNoteDates,
        archiveNoteCategories: archiveNoteCategories
    };
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            localStorage.setItem(key, JSON.stringify(data[key]));
        }
    }
};

function getFromLocalStorage() {
    let myNoteTitles = JSON.parse(localStorage.getItem('noteTitles'));
    if (myNoteTitles !== null) {
        noteTitles = myNoteTitles;
        noteDescriptions= JSON.parse(localStorage.getItem('noteDescriptions'));
        noteDates = JSON.parse(localStorage.getItem('noteDates'));
        noteCategories = JSON.parse(localStorage.getItem('noteCategories'));
    }

    let myTrashNoteTitles = JSON.parse(localStorage.getItem('trashNoteTitles'));
    if (myTrashNoteTitles !== null) {
        trashNoteTitles = myTrashNoteTitles;
        trashNoteDescriptions= JSON.parse(localStorage.getItem('trashNoteDescriptions'));
        trashNoteDates = JSON.parse(localStorage.getItem('trashNoteDates'));
        trashNoteCategories = JSON.parse(localStorage.getItem('trashNoteCategories'));
    }

    let myArchiveNoteTitles = JSON.parse(localStorage.getItem('archiveNoteTitles'));
    if (myArchiveNoteTitles !== null) {
        archiveNoteTitles = myArchiveNoteTitles;
        archiveNoteDescriptions= JSON.parse(localStorage.getItem('archiveNoteDescriptions'));
        archiveNoteDates = JSON.parse(localStorage.getItem('archiveNoteDates'));
        archiveNoteCategories = JSON.parse(localStorage.getItem('archiveNoteCategories'));
    }

};