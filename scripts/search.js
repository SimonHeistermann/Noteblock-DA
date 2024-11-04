function filterNotes(event) {
    event.preventDefault();
    let searchTerm = document.getElementById('search_input').value.toLowerCase();
    let titles = archiveMode === 'on' ? archiveNoteTitles : noteTitles;
    let categories = archiveMode === 'on' ? archiveNoteCategories : noteCategories;

    let filteredNotes = getFilteredIndexes(titles, categories, searchTerm, noteTopic);

    if (searchTerm === "") {
        archiveMode === 'on' ? renderArchive() : renderNotes();
        return;
    }

    renderFilteredNotes(filteredNotes);
};

function getFilteredIndexes(titles, categories, searchTerm, topic) {
    let filteredIndexes = [];
    for (let i = 0; i < titles.length; i++) {
        let titleMatch = titles[i].toLowerCase().includes(searchTerm);
        let categoryMatch = (topic === 'all') || (categories[i] === topic);
        if (titleMatch && categoryMatch) {
            filteredIndexes.push(i);
        }
    }
    return filteredIndexes;
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
