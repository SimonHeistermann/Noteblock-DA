function renderHTMLAllNotes(indexNote){
    let personal = noteCategories[indexNote] === 'personal';
    let home = noteCategories[indexNote] === 'home';
    let buisness = noteCategories[indexNote] === 'buisness';
    return  `
            <div class="note__card">
                <div class="notecard__header">
                    <span class="personal ${personal ? '' : 'd__none'}"> 
                        PERSONAL
                    </span>
                    <span class="home ${home ? '' : 'd__none'}"> 
                        HOME
                    </span>
                    <span class="buisness ${buisness ? '' : 'd__none'}"> 
                        BUISNESS
                    </span>
                    <div class="notecard__icon__container">
                        <button class="edit__button" onclick="openEditNoteOverlay(${indexNote})">
                            <span class="tooltip">Bearbeiten</span>
                        </button>
                        <button class="save__button" onclick="noteToArchive(${indexNote})">
                            <span class="tooltip">Archivieren</span>
                        </button>
                        <button class="delete__button" onclick="noteToTrash(${indexNote})">
                            <span class="tooltip">Papierkorb</span>
                        </button>
                    </div>
                </div>
                <h2>${noteTitles[indexNote]}</h2>
                <p class="note__description">${noteDescriptions[indexNote]}</p>
                <span class="note__date">${noteDates[indexNote]}</span>
            </div>
            `
};

function renderHTMLNewNote() {
    return  `
            <button class="new__note" onclick="openNewNoteOverlay()">
                <img src="./assets/icons/plus_icon_black.png" alt="Plus">
                <span class="newnote__text">Neue Notiz</span>
            </button>
            `
};

function renderHTMLNewNoteDialog() {
    return  `
            <div id="overlay_section" class="section__overlay" onclick="event.stopPropagation()">
            <form onsubmit="addNewNote(event)" class="overlay__container">
                <div class="overlay__header">
                    <h2>Notiz hinzufügen</h2>
                </div>
                <div class="seperator"></div>
                <div class="overlay__content">
                    <div class="overlayinputs__container">
                        <input id="title" class="input__left" type="text" maxlength="50" placeholder="Titel hinzufügen..." required>
                        <select id="categories" name="categories" required class="categories">
                            <option value="" selected disabled>Bitte auswählen...</option>
                            <option value="personal">Personal</option>
                            <option value="home">Home</option>
                            <option value="buisness">Buisness</option>
                        </select>
                    </div>
                    <textarea name="description" id="description" placeholder="Beschreibung hinzufügen..." required></textarea>
                </div>
                <div class="overlay__footer">
                    <button type="reset" onclick="closeNewNoteOverlay()">Abbrechen</button>
                    <input type="submit" id="submit" value="Hinzufügen"></input>
                </div>
            </form>
        </div>
            `
};

function renderHTMLTrashDialog() {
    return  `
             <div id="overlay_section" class="section__overlay" onclick="event.stopPropagation()">
            <div class="overlay__container">
                <div class="overlay__header">
                    <h2>Papierkorb</h2>
                    <button class="delete__all" onclick="deleteAllNotes()">
                        <span class="tooltip">Alles Löschen</span>
                    </button>
                </div>
                <div class="seperator"></div>
                <div class="overlay__content" id="overlay_content">
                        <table class="trash__table">
                            <tbody class="table__header">
                            <tr>
                                <th class="left__tableline">Titel</th>
                                <th>Beschreibung</th>
                                <th class="dnone__600px">Kategorie</th>
                                <th class="dnone__500px">Datum</th>
                                <th></th>
                                <th class="right__th"></th>
                            </tr>
                            </tbody>
                            <tbody id="trash_section" class="trash__section">
                            </tbody>
                        </table>
                </div>
                <div class="overlay__footer">
                    <button type="reset" onclick="closeTrashOverlay()">schließen</button>
                </div>
            </div>
        </div>
            `
};

function renderHTMLTrashNotes(indexTrashNote) {
    return  `
            <tr>
                <td class="left__tableline">${getShortText(trashNoteTitles[indexTrashNote], 3, 10)}</td>
                <td>${getShortText(trashNoteDescriptions[indexTrashNote], 3, 10)}</td>
                <td class="dnone__600px">${firstLetterToUpperCase(trashNoteCategories[indexTrashNote])}</td>
                <td class="dnone__500px">${trashNoteDates[indexTrashNote]}</td>
                <td>
                    <button class="restore__button" onclick="restoreNote(${indexTrashNote})">
                        <span class="tooltip">Wiederherstellen</span>
                    </button>
                </td>
                <td>
                    <button class="compltedelete__button" onclick="deleteNote(${indexTrashNote})">
                        <span class="tooltip">Löschen</span>
                    </button>
                <td>
            </tr>
            `
};

function renderHTMLEditNote(indexNote) {
    return  `
            <div id="overlay_section" class="section__overlay" onclick="event.stopPropagation()">
            <form onsubmit="editNote(event, ${indexNote})" class="overlay__container">
                <div class="overlay__header">
                    <h2>Notiz bearbeiten</h2>
                </div>
                <div class="seperator"></div>
                <div class="overlay__content">
                    <div class="overlayinputs__container">
                        <input id="title" class="input__left" type="text" maxlength="50" value="${noteTitles[indexNote]}" required>
                        <select id="categories" name="categories" required class="categories">
                            <option value="personal" ${noteCategories[indexNote] === 'personal' ? 'selected' : ''}>Personal</option>
                            <option value="home" ${noteCategories[indexNote] === 'home' ? 'selected' : ''}>Home</option>
                            <option value="buisness" ${noteCategories[indexNote] === 'buisness' ? 'selected' : ''}>Buisness</option>
                        </select>
                    </div>
                    <textarea name="description" id="description" required>${noteDescriptions[indexNote]}</textarea>
                </div>
                <div class="overlay__footer">
                    <button type="reset" onclick="closeEditNoteOverlay()">Abbrechen</button>
                    <input type="submit" id="submit" value="Fertig"></input>
                </div>
            </form>
        </div>
            `
};

function renderHTMLArchiveContent(indexArchiveNote) {
    let personal = archiveNoteCategories[indexArchiveNote] === 'personal';
    let home = archiveNoteCategories[indexArchiveNote] === 'home';
    let buisness = archiveNoteCategories[indexArchiveNote] === 'buisness';
    return  `
            <div class="note__card">
                <div class="notecard__header">
                    <span class="personal ${personal ? '' : 'd__none'}"> 
                        PERSONAL
                    </span>
                    <span class="home ${home ? '' : 'd__none'}"> 
                        HOME
                    </span>
                    <span class="buisness ${buisness ? '' : 'd__none'}"> 
                        BUISNESS
                    </span>
                    <div class="notecard__icon__container">
                        <button class="upload__button" onclick="noteBackToHome(${indexArchiveNote})">
                            <span class="tooltip">In Notizen</span>
                        </button>
                        <button class="delete__button" onclick="noteToTrash(${indexArchiveNote})">
                            <span class="tooltip">In den Papierkorb</span>
                        </button>
                    </div>
                </div>
                <h2>${archiveNoteTitles[indexArchiveNote]}</h2>
                <p class="note__description">${archiveNoteDescriptions[indexArchiveNote]}</p>
                <span class="note__date">${archiveNoteDates[indexArchiveNote]}</span>
            </div>
            `
};

function renderHTMLArchiveNoNotes() {
    return  `
            <div class="new__note nonotes__archive">
                <span class="nonotesin__archive">Keine Notizen im Archiv</span>
            </div>
            `
};

function renderHTMLDataSecurityContent() {
    return  `
        <button onclick="backtoTop()" class="gototop__button" id="gototop_button" title="Go to top"></button>
        <div class="content__datasecurity">
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <span>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </span>
            <h3>Datenerfassung auf dieser Website</h3>
            <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
            <span>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
            </span>
            <h4>Wie erfassen wir Ihre Daten?</h4>
            <span> Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT- Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            Wofür nutzen wir Ihre Daten?
           </span>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
            <span>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            <br> <br> Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</span>
            <h2>2. Hosting</h2>
            <span>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</span>
            <h3>Developer Akademie</h3>
            <span>Anbieter ist die Developer Akademie GmbH, Tassiloplatz 25, 81541 München. Wenn Sie unsere Website besuchen, erfasst Host Europe verschiedene Logfiles inklusive Ihrer IP-Adressen.<br> <br>
            Details entnehmen Sie der Datenschutzerklärung von<a class="datasecurity__link dnone__550px" href="https://developerakademie.com/datenschutzerklarung/" target="_blank" rel="noopener noreferrer"> Developer Akademie: https://developerakademie.com/datenschutzerklarung/</a><a class="datasecurity__link d__550px" href="https://developerakademie.com/datenschutzerklarung/" target="_blank" rel="noopener noreferrer"> Developer Akademie.</a> <br> <br>
            Die Verwendung von Developer Akademie erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. für Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </span>
            <h4>Auftragsverarbeitung</h4>
            <span>Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
            </span>
            <h2>3. Allgemeine Hinweise und Pflichtinformationen Datenschutz</h2>
            <span>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </span>
            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <span>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist: <br> <br>
            Simon Heistermann<br> Mutter-Teresa-Weg<br> 46325 Borken<br> Deutschland<br> <a class="datasecurity__link" href="tel:0176/524252">Telefon: 0176/524252</a><br><a class="datasecurity__link dnone__550px" href="mailto:geschaeftliche.anfragen.sssw@gmail.com">E-Mail: geschaeftliche.anfragen.sssw@gmail.com</a><a class="d__550px datasecurity__link" href="mailto:geschaeftliche.anfragen.sssw@gmail.com">E-Mail</a><br> <br>
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
           </span>
           <h3>Speicherdauer</h3>
           <span>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.        
           </span>
           <h4>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h4>
           <span>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.
           </span>
           <h4>Empfänger von personenbezogenen Daten</h4>
           <span>Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.
           </span>
           <h4>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
           <span>Viele Datenverarbeitungs-vorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
           </span>
           <h4>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h4>
           <span>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
           WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
           </span>
           <h4>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
           <span>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
           </span>
           <h4>Recht auf Datenübertragbarkeit</h4>
           <span>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
           </span>
           <h4>Auskunft, Berichtigung und Löschung</h4>
           <span>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
          </span>
          <h4>Recht auf Einschränkung der Verarbeitung</h4>
          <span>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
          <ul>
                <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                </ul>
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
        </span> 
        <h3>SSL- bzw. TLS-Verschlüsselung</h3>
        <span>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS- Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.<br> <br>
        Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
        </span>
        <h4>Widerspruch gegen Werbe-E-Mails</h4>
        <span>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
        </span>
        <h2>4. Datenerfassung auf dieser Website </h2>
        <h3>Kontaktformular</h3>
        <span>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </span>
        <span>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.</span>
        <span>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
        </span>
        <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
        <span>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
        bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        <br> <br> Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
        Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
        <br> <br> Quelle: <br>
        <a class="datasecurity__link" href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">https://www.e-recht24.de</a></span>
        </div>
        </section>
            `
};

function renderHTMLImpressumContent() {
    return  `
            <div class="impressum__container">
            <p>
            Simon Maximilian Heistermann<br/>Mutter-Teresa-Weg, 6<br/>46325 Borken
            </p>
            <h3 style="margin: 0">Kontakt</h3>
            <p>
              <a href="tel:0176/524252">Telefon: 0176/524252</a><br/>
              <a class="dnone__400px" href="mailto:geschaeftliche.anfragen.sssw@gmail.com">
                E-Mail: geschaeftliche.anfragen.sssw@gmail.com</a>
              <a class="d__400px" href="mailto:geschaeftliche.anfragen.sssw@gmail.com">E-Mail</a>
            </p>
            <div class="credit__container">
              <p>
                <a href="icons8.com" target="_blank" rel="noopener noreferrer">Icons by: icons8.com</a>
              </p>
              <p>
                <a href="https://www.flaticon.com/free-icons/long-arrow" title="long arrow icons">Long arrow icons created by WR Graphic Garage - Flaticon.</a>
              </p>
              <p>
                Quelle:
                <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">https://www.e-recht24.de</a 
              </p>
              </div>
            `
};




