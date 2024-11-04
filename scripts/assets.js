function formatTwoDigits(num) {
    return num.toString().padStart(2, '0');
};

function getShortText(element, wordLimit, charLimit) {
    const words = element.split(" ");

    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + "...";
    } 

    if (element.length > charLimit) {
        return element.substring(0, charLimit) + "...";
    }
        return element;
};

function firstLetterToUpperCase(element){
    let result = element.charAt(0).toUpperCase() + element.slice(1);
    return result;
};

function backtoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

function moveNoteTo(from, target, index) {
    let noteTitle = from.titles.splice(index, 1)[0];
    let noteDescription = from.descriptions.splice(index, 1)[0];
    let noteDate = from.dates.splice(index, 1)[0];
    let noteCategory = from.categories.splice(index, 1)[0];

    target.titles.push(noteTitle);
    target.descriptions.push(noteDescription);
    target.dates.push(noteDate);
    target.categories.push(noteCategory);

    saveToLocalStorage();
};


function removeTrashAndArchiveButton() {
    let homeButtonRef = document.getElementById('home_button');
    homeButtonRef.classList.remove('d__none');
    let archiveButtonref = document.getElementById('archive_button');
    archiveButtonref.classList.add('d__none');
    let trashButtonRef = document.getElementById('trash_button');
    trashButtonRef.classList.add('d__none');
};