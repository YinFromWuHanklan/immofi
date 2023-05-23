let kaufpreisrechner = document.querySelector('#preisrechner');

kaufpreisrechner.addEventListener('submit', (e) => {
    e.preventDefault();

    const kp = document.querySelector('#kaufpreis').value;
    const ek = document.querySelector('#eigenkapital').value;
    const sz = document.querySelector('#sollzins').value;
    const bl = document.querySelector('#bundesland').value;
    const mk = document.querySelector('input[name="maklerprovision"]:checked').value;
    const tg = document.querySelector('#tilgung').value;

    const nk = (+kp)*0.015+(+kp)*0.005+(+kp)*(+mk)+(+kp)*(+bl);

    const dl = (+kp)+nk-(+ek);

    const mb = ((+tg)+(+sz/100))*dl/12;

    const p = document.createElement('p');
    const summary = `
        <p class="main-sum">Monatliche Belastung: ${mb}€</p>
        <p>Kaufpreis: ${kp}€</p>
        <p>Kaufnebenkosten: ${nk}€ <span>${nk/kp*100}%</span></p>
        <p>Eigenkapital: ${ek}€ <span>${ek/kp*100}%</span></p>
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
