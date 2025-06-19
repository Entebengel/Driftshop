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

function warenkorbAnzeigen() {
    ladeWarenkorb(); // immer aktuell laden
    const list = document.getElementById('warenkorb-list');
    if (!list) return;
    list.innerHTML = '';
    let gesamt = 0;
    warenkorb.forEach(artikel => {
        const li = document.createElement('li');
        li.textContent = `${artikel.name} x${artikel.menge} - ${(artikel.preis * artikel.menge).toFixed(2)} €`;
        list.appendChild(li);
        gesamt += artikel.preis * artikel.menge;
    });
    const gesamtElem = document.getElementById('warenkorb-gesamt');
    if (gesamtElem) {
        gesamtElem.textContent = gesamt.toFixed(2) + ' €';
    }
}

function warenkorbLeeren() {
    warenkorb = [];
    speichereWarenkorb();
    warenkorbAnzeigen();
}

document.addEventListener('DOMContentLoaded', () => {
    warenkorbAnzeigen();
});

window.addEventListener('storage', (event) => {
    if (event.key === 'warenkorb') {
        warenkorbAnzeigen();
    }
});
