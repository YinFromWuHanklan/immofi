let kaufpreisrechner = document.querySelector('#preisrechner');

kaufpreisrechner.addEventListener('submit', (e) => {
    e.preventDefault();

    const neukaufpreis = document.querySelector('#kaufpreis').value;
    
    const kaufpreisText = `Kaufpreis: ${neukaufpreis}€`;

    document.querySelector('.result').append(kaufpreisText);


    // Notarkosten
    function notarKosten(neukaufpreis) {
        let notarResult = neukaufpreis * 0.015;
        return notarResult;
    }
});


// Berechnungen:

// Kaufnebenkosten: Summe aus 
// - Notarkosten = KP * 0.015
// - Grunderwerbssteuer = KP * region 
// - Grundbucheintrag = KP * 0.005
// - Makler = KP * 0.0357

// Nettodarlehen = KP + Kaufnebenkosten - Eigenkapital

// Monatliche Belastung:
// (Tilgung * Nettodarlehen + Sollzins * Nettodarlehen) / 12

// Zusatz: Kann ich mir das leisten? monatl. Belastung darf nicht höher als 30-40% des Nettoeinkommens sein. Kreditbelastung in % zum Nettoeinkommen monatl. output ja oder nein
// - Formular mit Nettoeinkommen als input
// - if-function mit drei Optionen: Nettoeinkommen > 40% von monatl. Belastung -> ok; 40% > Nettoeinkommen > 30% -> abhängig von der Bank; Nettoeinkommen < 30% -> sieht schlecht aus
