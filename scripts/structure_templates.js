function renderHTMLNoteStructure() {
    return  `
            <h1>Deine Notizen</h1>
            <nav>
                <button class="navbutton__open" id="nav_all" onclick="openNotes('all')">ALL</button>
                <button id="nav_personal" onclick="openNotes('personal')">PERSONAL</button>
                <button id="nav_home" onclick="openNotes('home')">HOME</button>
                <button id="nav_buisness" onclick="openNotes('buisness')">BUISNESS</button>
            </nav>
            <section class="notes__section" id="notes_section">
            
            </section>
            `
};

function renderHTMLArchiveSturcture() {
    return  `
            <h1>Archiv</h1>
            <nav>
                <button class="navbutton__open" id="nav_all" onclick="openNotes('all')">ALL</button>
                <button id="nav_personal" onclick=openNotes('personal')>PERSONAL</button>
                <button id="nav_home" onclick="openNotes('home')">HOME</button>
                <button id="nav_buisness" onclick="openNotes('buisness')">BUISNESS</button>
            </nav>
            <section class="archive__section" id="archive_section">
            
            </section>
            `
};

function renderHTMLDataSecurityStructure() {
    return  `
            <div class="datasecurity__header">
                <h1 class="datasecurity__headline">Datenschutz</h1>
                <button onclick="openHome()" class="home__button"></button>
            </div>
            <section class="datasecurity__section" id="datasecurity_section">
            
            </section>
            `
};

function renderHTMLImpressumStructure() {
    return  `
            <h1 class="datasecurity__headline">Impressum</h1>
            <section class="impressum__section" id="impressum_section">
            
            </section>
            `
};