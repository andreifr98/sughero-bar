// FORM SUBMISSION
document.getElementById('formPrenota').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefono = document.getElementById('telefono').value;
    const data = document.getElementById('data').value;
    const ora = document.getElementById('ora').value;
    const giocatori = document.getElementById('giocatori').value;

    // Crea messaggio WhatsApp
    const messaggio = `Ciao! Vorrei prenotare il campo padel:\n\nNome: ${nome}\nTelefono: ${telefono}\nData: ${data}\nOra: ${ora}\nGiocatori: ${giocatori}`;

    // URL WhatsApp (sostituisci con numero vero)
    const numeroWhatsApp = '3282443953';
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(messaggio)}`;

    // Apri WhatsApp
    window.open(urlWhatsApp, '_blank');

    // Reset form
    this.reset();
    alert('Reindirizzamento a WhatsApp in corso...');
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
