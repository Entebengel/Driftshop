let warenkorb = [];

function ladeWarenkorb() {
    const gespeichert = localStorage.getItem('warenkorb');
    if (gespeichert) {
        try {
            warenkorb = JSON.parse(gespeichert);
        } catch {
            warenkorb = [];
        }
    }
}

function speichereWarenkorb() {
    localStorage.setItem('warenkorb', JSON.stringify(warenkorb));
}

function zumWarenkorb(btn) {
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
    document.getElementById('warenkorb-gesamt').textContent = gesamt.toFixed(2) + ' €';
}

function warenkorbLeeren() {
    warenkorb = [];
    speichereWarenkorb();
    warenkorbAnzeigen();
}

document.addEventListener('DOMContentLoaded', () => {
    ladeWarenkorb();
    warenkorbAnzeigen();
});

// Synchronisiere den Warenkorb bei Änderungen in anderen Tabs/Fenstern
window.addEventListener('storage', (event) => {
    if (event.key === 'warenkorb') {
        ladeWarenkorb();
        warenkorbAnzeigen();
    }
});
