let warenkorb = [];

function ladeWarenkorb() {
    const gespeichert = localStorage.getItem('warenkorb');
    if (gespeichert) {
        try {
            warenkorb = JSON.parse(gespeichert);
        } catch {
            warenkorb = [];
        }
    } else {
        warenkorb = [];
    }
}

function speichereWarenkorb() {
    localStorage.setItem('warenkorb', JSON.stringify(warenkorb));
}

function zumWarenkorb(btn) {
    ladeWarenkorb(); // immer aktuell laden
    const artikel = btn.closest('.artikel');
    const name = artikel.getAttribute('data-name');
    const preis = parseFloat(artikel.getAttribute('data-preis'));
    const vorhandener = warenkorb.find(a => a.name === name);
    if (vorhandener) {
        vorhandener.menge += 1;
    } else {
        warenkorb.push({ name, preis, menge: 1 });
    }
    speichereWarenkorb();
    warenkorbAnzeigen();
}

function updateWarenkorbFab() {
    let warenkorb = [];
    try {
        warenkorb = JSON.parse(localStorage.getItem('warenkorb')) || [];
    } catch {}
    const count = warenkorb.reduce((sum, item) => sum + (item.menge || 0), 0);
    const fab = document.getElementById('warenkorb-fab');
    const fabCount = document.getElementById('warenkorb-fab-count');
    const wk = document.getElementById('warenkorb');
    if (fab && fabCount && wk) {
        if (count > 0) {
            fab.style.display = 'flex';
            fabCount.style.display = 'flex';
            fabCount.textContent = count;
        } else {
            fab.style.display = 'flex';
            fabCount.style.display = 'none';
            wk.classList.remove('anzeigen');
        }
        // Warenkorb nicht dauerhaft anzeigen, sondern nur bei Klick
        // wk.classList.remove('anzeigen'); // entfernt!
    }
}

function toggleWarenkorb() {
    const wk = document.getElementById('warenkorb');
    if (wk) {
        wk.classList.toggle('anzeigen');
        if (wk.classList.contains('anzeigen')) {
            // Automatische Größe: zurücksetzen, damit CSS height:auto greift
            wk.style.maxHeight = '';
            wk.style.height = 'auto';
            wk.style.display = 'block';
        } else {
            wk.style.display = 'none';
        }
    }
}

function warenkorbAnzeigen() {
    ladeWarenkorb();
    const list = document.getElementById('warenkorb-list');
    const wk = document.getElementById('warenkorb');
    if (!list) return;
    list.innerHTML = '';
    let gesamt = 0;
    warenkorb.forEach((artikel, idx) => {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        li.style.justifyContent = 'space-between';

        // Artikelinfo
        const info = document.createElement('span');
        info.textContent = `${artikel.name} x${artikel.menge} - ${(artikel.preis * artikel.menge).toFixed(2)} €`;

        // Auswahlfeld für Anzahl zu löschen
        const select = document.createElement('select');
        for (let i = 1; i <= artikel.menge; i++) {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = i;
            select.appendChild(opt);
        }
        select.style.margin = '0 6px';

        // Löschen-Button
        const btn = document.createElement('button');
        btn.textContent = '🗑️';
        btn.title = 'Entfernen';
        btn.style.marginLeft = '4px';
        btn.style.background = 'none';
        btn.style.border = 'none';
        btn.style.cursor = 'pointer';
        btn.style.fontSize = '1em';
        btn.onclick = () => {
            const anzahl = parseInt(select.value, 10) || 1;
            artikel.menge -= anzahl;
            if (artikel.menge <= 0) {
                warenkorb.splice(idx, 1);
            }
            speichereWarenkorb();
            warenkorbAnzeigen();
        };

        const controls = document.createElement('span');
        controls.style.display = 'flex';
        controls.style.alignItems = 'center';
        controls.appendChild(select);
        controls.appendChild(btn);

        li.appendChild(info);
        li.appendChild(controls);

        list.appendChild(li);
        gesamt += artikel.preis * artikel.menge;
    });
    const gesamtElem = document.getElementById('warenkorb-gesamt');
    if (gesamtElem) {
        gesamtElem.textContent = gesamt.toFixed(2) + ' €';
    }
    // Fensterhöhe dynamisch anpassen (maximal 50vh, sonst auto)
    if (wk) {
        wk.style.height = 'auto';
        wk.style.maxHeight = '50vh';
    }
    updateWarenkorbFab();
}

function warenkorbLeeren() {
    warenkorb = [];
    speichereWarenkorb();
    warenkorbAnzeigen();
}

document.addEventListener('DOMContentLoaded', () => {
    warenkorbAnzeigen();
    // Falls das Icon noch nicht existiert, dynamisch einfügen
    if (!document.getElementById('warenkorb-fab')) {
        const fab = document.createElement('button');
        fab.className = 'warenkorb-fab';
        fab.id = 'warenkorb-fab';
        fab.type = 'button';
        fab.onclick = toggleWarenkorb;
        fab.innerHTML = `
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span class="warenkorb-fab-count" id="warenkorb-fab-count" style="display:none;">0</span>
        `;
        document.body.appendChild(fab);
    }
    updateWarenkorbFab();
});

window.addEventListener('storage', (event) => {
    if (event.key === 'warenkorb') {
        warenkorbAnzeigen();
    }
});
