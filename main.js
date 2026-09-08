document.addEventListener('DOMContentLoaded', () => {

    // 1. Menu Mobile Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Filtrage des produits
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Changer l'état actif des boutons
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-industry-600', 'text-white', 'active');
                btn.classList.add('bg-white', 'text-gray-700');
            });
            button.classList.add('bg-industry-600', 'text-white', 'active');
            button.classList.remove('bg-white', 'text-gray-700');

            const filter = button.getAttribute('data-filter');

            productCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // 3. Calculateur simplifié de section de câble (Simulateur)
    const calcForm = document.getElementById('cableCalcForm');
    const calcResult = document.getElementById('calcResult');

    if (calcForm) {
        calcForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const power = parseFloat(document.getElementById('calcPower').value);
            const length = parseFloat(document.getElementById('calcLength').value);

            // Simulation simplifiée pour démo
            let recommendedSection = "2.5 mm²";
            if (power > 3500 || length > 40) recommendedSection = "4 mm² ou 6 mm²";
            if (power > 8000 || length > 80) recommendedSection = "10 mm² ou 16 mm²";

            calcResult.innerHTML = `<strong>Résultat estimatif :</strong> Pour ${power}W sur ${length}m, nous recommandons une section minimale de <strong>${recommendedSection}</strong> en cuivre. Contactez notre équipe technique pour l'étude exacte.`;
            calcResult.classList.remove('hidden');
        });
    }

    // 4. Formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Merci ! Votre demande de devis a été envoyée au service commercial.');
            contactForm.reset();
        });
    }
});