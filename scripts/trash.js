let trashNoteTitles = [];
let trashNoteDescriptions = [];
let trashNoteDates = [];
let trashNoteCategories = [];



function renderTrash() {
    let contentRef = document.getElementById('trash_section');
    contentRef.innerHTML = "";
    if(trashNoteTitles.length > 0) {
        for (let indexTrashNote = 0; indexTrashNote < trashNoteTitles.length; indexTrashNote++) {
            contentRef.innerHTML += renderHTMLTrashNotes(indexTrashNote);
        }
    } else {
        contentRef = document.getElementById('overlay_content');
        contentRef.innerHTML = "";
        contentRef.innerHTML += "<p>Nichts im Papierkorb...</p>"
    }
};

function noteToTrash(indexNote) {
    moveNoteTo({
        titles: archiveMode === 'on' ? archiveNoteTitles : noteTitles,
        descriptions: archiveMode === 'on' ? archiveNoteDescriptions : noteDescriptions,
        dates: archiveMode === 'on' ? archiveNoteDates : noteDates,
        categories: archiveMode === 'on' ? archiveNoteCategories : noteCategories
    }, {
        titles: trashNoteTitles,
        descriptions: trashNoteDescriptions,
        dates: trashNoteDates,
        categories: trashNoteCategories
    }, indexNote);
    archiveMode === 'on' ? renderArchive() : renderNotes();
};

function openTrashOverlay() {
    let trashoverlayRef = document.getElementById('overlay_trash');
    trashoverlayRef.classList.remove('d__none');
    trashoverlayRef.innerHTML = "";
    trashoverlayRef.innerHTML += renderHTMLTrashDialog();
    addOverlayStyles();
    renderTrash();
};

function closeTrashOverlay() {
    let trashoverlayRef = document.getElementById('overlay_trash');
    trashoverlayRef.classList.add('d__none');
    trashoverlayRef.innerHTML = "";
    removeOverlayStyles();
};

function deleteNote(indexTrashNote) {
    trashNoteTitles.splice(indexTrashNote, 1);
    trashNoteDescriptions.splice(indexTrashNote, 1);
    trashNoteDates.splice(indexTrashNote, 1);
    trashNoteCategories.splice(indexTrashNote, 1);

    saveToLocalStorage();
    renderTrash();
};

function deleteAllNotes() {
    if(trashNoteTitles.length > 0) {
        trashNoteTitles.splice(0, trashNoteTitles.length);
        trashNoteDescriptions.splice(0, trashNoteDescriptions.length);
        trashNoteDates.splice(0, trashNoteDates.length);
        trashNoteCategories.splice(0, trashNoteCategories.length);

        saveToLocalStorage();
        renderTrash();
    }
};

function restoreNote(indexTrashNote) {
    let noteTitle = trashNoteTitles.splice(indexTrashNote, 1);
    noteTitles.push(noteTitle[0]);
    let noteDescription = trashNoteDescriptions.splice(indexTrashNote, 1);
    noteDescriptions.push(noteDescription[0]);
    let noteDate = trashNoteDates.splice(indexTrashNote, 1);
    noteDates.push(noteDate[0]);
    let noteCategory = trashNoteCategories.splice(indexTrashNote, 1);
    noteCategories.push(noteCategory[0]);

    saveToLocalStorage();
    renderTrash();
    archiveMode === 'on' ? renderArchive() : renderNotes();
};
