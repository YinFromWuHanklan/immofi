let kaufpreisrechner = document.querySelector('#preisrechner');

kaufpreisrechner.addEventListener('submit', (e) => {
    e.preventDefault();

    let kp = document.querySelector('#kaufpreis').value;
    let ek = document.querySelector('#eigenkapital').value;
    let sz = document.querySelector('#sollzins').value;
    let bl = document.querySelector('#bundesland').value;
    let mk = document.querySelector('input[name="maklerprovision"]:checked').value;
    let tg = document.querySelector('#tilgung').value;

    sz = sz.replace(/,/g, '.');

    kp = parseFloat(kp);
    ek = parseFloat(ek);
    sz = parseFloat(sz);
    bl = parseFloat(bl);
    mk = parseFloat(mk);
    tg = parseFloat(tg);

    let nk = kp*0.015+kp*0.005+kp*mk+kp*bl;

    let dl = kp+nk-ek;

    let mb = (tg+sz/100)*dl/12;

    let nk100 = nk/kp*100;
    let ek100 = ek/kp*100;

    mb = mb.toFixed(2).replace('.', ',');
    nk = nk.toFixed(2).replace('.', ',');
    dl = dl.toFixed(2).replace('.', ',');
    nk100 = nk100.toFixed(2).replace('.', ',');
    ek100 = ek100.toFixed(2).replace('.', ',');

    const p = document.createElement('p');
    const summary = `
        <p class="main-sum">Monatliche Belastung: ${mb}€</p>
        <p>Kaufpreis: ${kp}€</p>
        <p>Kaufnebenkosten: ${nk}€ <span>${nk100}%</span></p>
        <p>Eigenkapital: ${ek}€ <span>${ek100}%</span></p>
        <p>Nettodarlehen: ${dl}€</p>
    `;

    const displaySum = document.querySelector('.result');

    displaySum.innerHTML = summary;
});



// Berechnungen:

// Kaufnebenkosten: Summe aus 
// Fix:
// - Notarkosten = KP * 0.015
// - Grundbucheintrag = KP * 0.005
// Variabel:
// - Grunderwerbssteuer = KP * region 
// - Makler = KP * 0.0357

// Nettodarlehen = KP + Kaufnebenkosten - Eigenkapital

// Monatliche Belastung:
// (Tilgung * Nettodarlehen + Sollzins * Nettodarlehen) / 12

// Zusatz: Kann ich mir das leisten? monatl. Belastung darf nicht höher als 30-40% des Nettoeinkommens sein. Kreditbelastung in % zum Nettoeinkommen monatl. output ja oder nein
// - Formular mit Nettoeinkommen als input
// - if-function mit drei Optionen: Nettoeinkommen > 40% von monatl. Belastung -> ok; 40% > Nettoeinkommen > 30% -> abhängig von der Bank; Nettoeinkommen < 30% -> sieht schlecht aus
