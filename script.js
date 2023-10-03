const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


// Fonction pour activer le mode sombre
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled');
}

// Fonction pour désactiver le mode sombre
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', 'disabled');
}

// Fonction pour basculer entre le mode sombre et le mode clair
function toggleDarkMode() {
    if (localStorage.getItem('dark-mode') === 'enabled') {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// Écouteur d'événement pour le bouton de commutation du mode sombre
const darkModeToggle = document.getElementById('dark-mode-switch');
darkModeToggle.addEventListener('change', toggleDarkMode);

// Vérifie le mode sombre actuel au chargement de la page
if (localStorage.getItem('dark-mode') === 'enabled') {
    enableDarkMode();
    darkModeToggle.checked = true; // Coche le bouton du mode sombre si le mode sombre est activé
} else {
    disableDarkMode();
}